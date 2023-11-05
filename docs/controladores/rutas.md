---
sidebar_position: 6
---
# Rutas
![Conceptos](/assets/images/rutas.jpeg)

## ¿Qué es una ruta?

Las rutas en Laravel 10 son la manera de establecer URLs que se corresponden con las funciones específicas en su aplicación. Cada URL se asocia con un controlador y una acción en ese controlador, que determina qué se muestra al usuario cuando accede a la URL. Las rutas en Laravel 9 se definen en el archivo "routes/web.php" o "routes/api.php" y se pueden utilizar para establecer tanto rutas para vistas como para API REST. Además, también es posible asignar rutas a grupos que compartan una serie de características comunes, como middleware, prefijos de URL o namespaces.

## Creación de las rutas de nuestra API REST.

En el archivo api.php deberíamos tener el siguiente código:

```js title="routes\api.php"
<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::controller(AuthController::class)->group(function () {
    Route::post('login', 'login');
    Route::post('register', 'register');
    Route::post('logout', 'logout');
    Route::post('refresh', 'refresh');
});

Route::apiResource('v1/categorias', App\Http\Controllers\Api\V1\CategoriaController::class)->middleware('api');
Route::apiResource('v1/ivas', App\Http\Controllers\Api\V1\IvaController::class);
Route::apiResource('v1/productos', App\Http\Controllers\Api\V1\ProductoController::class);
Route::apiResource('v1/ofertas', App\Http\Controllers\Api\V1\OfertaController::class);
Route::apiResource('v1/poblaciones', App\Http\Controllers\Api\V1\PoblacionController::class);
Route::apiResource('v1/productos', App\Http\Controllers\Api\V1\ProductoController::class);
Route::apiResource('v1/proveedores', App\Http\Controllers\Api\V1\ProveedorController::class);
Route::apiResource('v1/provincias', App\Http\Controllers\Api\V1\ProvinciaController::class);
Route::apiResource('v1/subcategorias',App\Http\Controllers\Api\V1\SubcategoriaController::class);
Route::apiResource('v1/marcas', App\Http\Controllers\Api\V1\MarcaController::class);
```
Este código define rutas para una aplicación Laravel 10. Utiliza el método Route::controller() para crear un grupo de rutas que son manejadas por un controlador específico (AuthController en este caso). Este controlador contiene métodos para iniciar sesión, registrarse, cerrar sesión y actualizar el token de autenticación.

El método **Route::apiResource()** se utiliza para definir rutas para los siguientes controladores: CategoriaController, IvaController, ProductoController, OfertaController, PoblacionController, ProveedorController, ProvinciaController, SubcategoriaController y MarcaController. Estas rutas se asignan a los siguientes recursos: categorías, ivas, productos, ofertas, poblaciones, proveedores, provincias, subcategorías y marcas. Todas estas rutas se aplican el middleware 'api', que es un grupo de middleware predefinido en Laravel que incluye la autenticación y la protección contra ataques CSRF.

En resumen, este código define un conjunto de rutas para una aplicación Laravel 10, que permiten a los usuarios interactuar con diferentes recursos a través de una API REST.



