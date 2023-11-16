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
<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Authentication Defaults
    |--------------------------------------------------------------------------
    |
    | This option controls the default authentication "guard" and password
    | reset options for your application. You may change these defaults
    | as required, but they're a perfect start for most applications.
    |
    */

    'defaults' => [
        'guard' => 'api',
        'passwords' => 'users',
    ],

    /*
    |--------------------------------------------------------------------------
    | Authentication Guards
    |--------------------------------------------------------------------------
    |
    | Next, you may define every authentication guard for your application.
    | Of course, a great default configuration has been defined for you
    | here which uses session storage and the Eloquent user provider.
    |
    | All authentication drivers have a user provider. This defines how the
    | users are actually retrieved out of your database or other storage
    | mechanisms used by this application to persist your user's data.
    |
    | Supported: "session"
    |
    */

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

    /*
    |--------------------------------------------------------------------------
    | User Providers
    |--------------------------------------------------------------------------
    |
    | All authentication drivers have a user provider. This defines how the
    | users are actually retrieved out of your database or other storage
    | mechanisms used by this application to persist your user's data.
    |
    | If you have multiple user tables or models you may configure multiple
    | sources which represent each model / table. These sources may then
    | be assigned to any extra authentication guards you have defined.
    |
    | Supported: "database", "eloquent"
    |
    */

    'providers' => [
        'users' => [
            'driver' => 'eloquent',
            'model' => App\Models\User::class,
        ],

        // 'users' => [
        //     'driver' => 'database',
        //     'table' => 'users',
        // ],
    ],

    /*
    |--------------------------------------------------------------------------
    | Resetting Passwords
    |--------------------------------------------------------------------------
    |
    | You may specify multiple password reset configurations if you have more
    | than one user table or model in the application and you want to have
    | separate password reset settings based on the specific user types.
    |
    | The expiry time is the number of minutes that each reset token will be
    | considered valid. This security feature keeps tokens short-lived so
    | they have less time to be guessed. You may change this as needed.
    |
    | The throttle setting is the number of seconds a user must wait before
    | generating more password reset tokens. This prevents the user from
    | quickly generating a very large amount of password reset tokens.
    |
    */

    'passwords' => [
        'users' => [
            'provider' => 'users',
            'table' => 'password_reset_tokens',
            'expire' => 60,
            'throttle' => 60,
        ],
    ],

    /*
    |--------------------------------------------------------------------------
    | Password Confirmation Timeout
    |--------------------------------------------------------------------------
    |
    | Here you may define the amount of seconds before a password confirmation
    | times out and the user is prompted to re-enter their password via the
    | confirmation screen. By default, the timeout lasts for three hours.
    |
    */

    'password_timeout' => 10800,

];
```
En este código, estamos diciendo al guardián API que use el controlador JWT y que haga del guardián API el predeterminado.

¡Ahora, podemos usar el mecanismo de autenticación integrado de Laravel, con jwt-auth manejando el trabajo pesado!

### Modificar el modelo User
Para implementar el contrato PHPOpenSourceSaverJWTAuthContractsJWTSubject en nuestro modelo de Usuario, usaremos dos métodos: getJWTCustomClaims() y getJWTIdentifier().

Reemplaza el código en el archivo app/Models/User.php con lo siguiente:

```js
<?php

namespace App\Models;

use Laravel\Sanctum\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use PHPOpenSourceSaver\JWTAuth\Contracts\JWTSubject;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable implements JWTSubject
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    /**
     * Get the identifier that will be stored in the subject claim of the JWT.
     *
     * @return mixed
     */
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    /**
     * Return a key value array, containing any custom claims to be added to the JWT.
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
php artisan make:controller API/AuthController
```
Luego, reemplazaremos el contenido del controlador con el siguiente fragmento de código:

```js
<?php
namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login', 'register']]);
    }

    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|string|email',
            'password' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

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
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        $token = Auth::login($user);
        return response()->json([
            'status' => 'success',
            'message' => 'User created successfully',
            'user' => $user,
            'authorization' => [
                'token' => $token,
                'type' => 'bearer',
            ]
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
            'authorization' => [
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
