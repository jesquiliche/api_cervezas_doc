---
sidebar_position: 1
---

# JSON Web Token

## ¿Qué es JWT?

**JSON Web Token (JWT)** es un estándar de internet que define una forma de transferir información segura entre partes como un token. La información puede ser verificada y confiable debido a que es firmada digitalmente.

JWT se compone de tres partes: header, payload y signature. El header describe el tipo de token y la forma en que se firma, el payload contiene la información a transferir, y la signature se utiliza para verificar que la información no ha sido alterada en tránsito.

JWT se utiliza a menudo en aplicaciones de autenticación y autorización, en las que el cliente envía una solicitud a un servidor con un token JWT y el servidor valida la autenticidad del token antes de proporcionar acceso a los recursos protegidos.

En resumen, JWT es una forma eficiente y segura de transmitir información entre partes a través de un token que puede ser verificado y confiable.

## Instalación y configuración de JWT

### Instalar y configurar JWT
 instalaremos y configuraremos el paquete de autenticación JWT de Laravel Usaremos **php-open-source-saver/jwt-auth**, un fork de **tymondesign/jwt-auth**, ya que **tymondesign/jwt-auth** parece haber sido abandonado y no es compatible con Laravel 9.

Instale la versión más nueva del paquete usando este comando:

```bash
composer require php-open-source-saver/jwt-auth
```

A continuación, necesitamos hacer públicas las configuraciones del paquete. Copie el archivo de configuración de JWT desde el proveedor a confi/jwt.php con este comando:

```bash
php artisan vendor:publish --provider="PHPOpenSourceSaver\JWTAuth\Providers\LaravelServiceProvider"
```

Ahora, necesitamos generar una clave secreta para manejar el cifrado del token. Para hacerlo, ejecute este comando:

```bah
php artisan jwt:secret
```

Esto actualizará nuestro archivo .env con algo como esto:

**JWT_SECRET=xxxxxxxx**
Esta es la clave que se utilizará para firmar nuestros tokens.

### Configuración de AuthGuard
Dentro del archivo **config/auth.php**, tendremos que hacer algunos cambios para configurar Laravel para usar el JWT AuthGuard para alimentar la autenticación de la aplicación.

Primero, haremos los siguientes cambios en el archivo:

```js
'defaults' => [
    'guard' => 'api',
        'passwords' => 'users',
],


'guards' => [
    'web' => [
        'driver' => 'session',
        'provider' => 'users',
    ],

    'api' => [
            'driver' => 'jwt',
            'provider' => 'users',
    ],

],
```
En este código, estamos diciendo al guardián API que use el controlador JWT y que haga del guardián API el predeterminado.

¡Ahora, podemos usar el mecanismo de autenticación integrado de Laravel, con jwt-auth manejando el trabajo pesado!

### Modificar el modelo User
Para implementar el contrato PHPOpenSourceSaverJWTAuthContractsJWTSubject en nuestro modelo de Usuario, usaremos dos métodos: getJWTCustomClaims() y getJWTIdentifier().

Reemplaza el código en el archivo app/Models/User.php con lo siguiente:

```js
<?php
namespace App\Models;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use PHPOpenSourceSaver\JWTAuth\Contracts\JWTSubject;

class User extends Authenticatable implements JWTSubject
{
use HasFactory, Notifiable;

/**
 * Los atributos que son asignables en masa.
 *
 * @var array<int, string>
 */
protected $fillable = [
    'name',
    'email',
    'password',
];

/**
 * Los atributos que deben estar ocultos para la serialización.
 *
 * @var array<int, string>
 */
protected $hidden = [
    'password',
    'remember_token',
];

/**
 * Los atributos que deben ser convertidos.
 *
 * @var array<string, string>
 */
protected $casts = [
    'email_verified_at' => 'datetime',
];

 /**
 * Obtiene el identificador que se almacenará en la afirmación de sujeto del JWT.
 *
 * @return mixed
 */
public function getJWTIdentifier()
{
    return $this->getKey();
}

/**
 * Devuelve un array de valores clave, que contiene cualquier afirmación personalizada que deba agregarse al JWT.
 *
 * @return array
 */
public function getJWTCustomClaims()
{
    return [];
}
}
```
¡Eso es todo para nuestra configuración de modelos!

### Crear la ruta

A continuación crearemos las rutas.

```js title=routes\api.php
<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AuthController;

Route::controller(AuthController::class)->group(function () {
    Route::post('login', 'login');
    Route::post('register', 'register');
    Route::post('logout', 'logout');
    Route::post('refresh', 'refresh');
});
```


### Crear el controlador Auth
Ahora, crearemos un controlador para manejar la lógica central del proceso de autenticación.

Primero, ejecutaremos este comando para generar el controlador:

```js
php artisan make:controller AuthController
```
Luego, reemplazaremos el contenido del controlador con el siguiente fragmento de código:

```js
<?php

namespace App\Http\Controllers\API;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login', 'register']]);
    }

    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string',
        ]);
        $credentials = $request->only('email', 'password');
        $token = Auth::attempt($credentials);
        
        if (!$token) {
            return response()->json([
                'message' => 'Unauthorized',
            ], 401);
        }

        $user = Auth::user();
        return response()->json([
            'user' => $user,
            'authorization' => [
                'token' => $token,
                'type' => 'bearer',
            ]
        ]);
    }

    public function register(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6',
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        return response()->json([
            'message' => 'User created successfully',
            'user' => $user
        ]);
    }

    public function logout()
    {
        Auth::logout();
        return response()->json([
            'message' => 'Successfully logged out',
        ]);
    }

    public function refresh()
    {
        return response()->json([
            'user' => Auth::user(),
            'authorisation' => [
                'token' => Auth::refresh(),
                'type' => 'bearer',
            ]
        ]);
    }
}
```
Este es un rápido resumen de las funciones públicas en el AuthController:

- **constructor:** Establecemos esta función en nuestra clase controladora para que podamos usar el middleware auth:api dentro de ella para bloquear el acceso no autenticado a ciertos métodos dentro del controlador.
- **login:** Este método autentica a un usuario con su correo electrónico y contraseña. Cuando un usuario es autenticado con éxito, el método attempt() de la fachada Auth devuelve el token JWT. El token generado se recupera y se devuelve como JSON con el objeto usuario.
register: Este método crea el registro de usuario y inicia sesión en el usuario con la generación de tokens.
- **logout:** Este método invalida el token de Auth de usuario.
- **refresh:** Este método invalida el token de Auth de usuario y genera un nuevo token.

Quedara por incluir el siguiente constructor a todos nuestros controladores:

```js
public function __construct()
    {
        $this->middleware('auth:api');
    }
```

¡Hemos terminado de configurar nuestra autenticación JWT!
