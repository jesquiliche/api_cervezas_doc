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

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::apiResource('v1/colores', App\Http\Controllers\Api\V1\ColorController::class);
Route::apiResource('v1/paises', App\Http\Controllers\Api\V1\PaisController::class);
Route::apiResource('v1/tipos', App\Http\Controllers\Api\V1\TipoController::class);
Route::apiResource('v1/graduaciones', App\Http\Controllers\Api\V1\GraduacionController::class);
//Route::apiResource('v1/cervezas', App\Http\Controllers\Api\V1\CervezaController::class);

Route::get('v1/cervezas',[App\Http\Controllers\Api\V1\CervezaController::class,'index']);
Route::get('v1/cervezas/{id}',[App\Http\Controllers\Api\V1\CervezaController::class,'index']);
Route::put('v1/cervezas/{id}',[App\Http\Controllers\Api\V1\CervezaController::class,'update']);
Route::patch('v1/cervezas/{id}',[App\Http\Controllers\Api\V1\CervezaController::class,'patch']);
Route::post('v1/cervezas/{id}',[App\Http\Controllers\Api\V1\CervezaController::class,'store']);
Route::delete('v1/cervezas/{id}',[App\Http\Controllers\Api\V1\CervezaController::class,'destroy']);
```
Este código define rutas para una aplicación Laravel 10. Utiliza el método Route::controller() para crear un grupo de rutas que son manejadas por un controlador específico (AuthController en este caso). Este controlador contiene métodos para iniciar sesión, registrarse, cerrar sesión y actualizar el token de autenticación.

El método **Route::apiResource()** se utiliza para definir rutas para los siguientes controladores: CategoriaController, IvaController, ProductoController, OfertaController, PoblacionController, ProveedorController, ProvinciaController, SubcategoriaController y MarcaController. Estas rutas se asignan a los siguientes recursos: categorías, ivas, productos, ofertas, poblaciones, proveedores, provincias, subcategorías y marcas. Todas estas rutas se aplican el middleware 'api', que es un grupo de middleware predefinido en Laravel que incluye la autenticación y la protección contra ataques CSRF.

En resumen, este código define un conjunto de rutas para una aplicación Laravel 10, que permiten a los usuarios interactuar con diferentes recursos a través de una API REST.

```
@accessToken = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImdhcmNpYUBnbWFpbC5jb20iLCJpZCI6MTEsImlhdCI6MTY5MjQ3ODEzMCwiZXhwIjoxNjkyNTY0NTMwfQ.3VQEqm6AdcKeeXgUvh0P9OKeWD2X1uSqZLhpucSHxKM
#### Obtener todos los colores
GET http://localhost:8000/api/v1/colores
# Authorization: Bearer {{accessToken}}

### Crear color
POST   http://localhost:8000/api/v1/colores
Content-Type: application/json

{
    "nombre":""
}

### Obtener color por Id
GET   http://localhost:8000/api/v1/colores/1


### Modificicar color
DELETE   http://localhost:8000/api/v1/colores/1
Content-Type: application/json

{
    "nombre":"Prueba 2"
}

#### Obtener todos los paises
GET http://localhost:8000/api/v1/paises
# Authorization: Bearer {{accessToken}}

#### Obtener pais por su id
GET http://localhost:8000/api/v1/paises/5
# Authorization: Bearer {{accessToken}}

### Crear país
POST   http://localhost:8000/api/v1/paises
Content-Type: application/json

{
    "nombre":"Peru"
}

### Modificar  país
PUT   http://localhost:8000/api/v1/paises/1
Content-Type: application/json

{
    "nombre":"Pais modificado"
}

### Borrando pais
DELETE   http://localhost:8000/api/v1/paises/9


#### Obtener todos los tipos
GET http://localhost:8000/api/v1/tipos
# Authorization: Bearer {{accessToken}}

#### Obtener tipo por su id
GET http://localhost:8000/api/v1/tipos/5
# Authorization: Bearer {{accessToken}}

### Crear tipo
POST   http://localhost:8000/api/v1/tipos
Content-Type: application/json

{
    "nombre":"Sin alcohol"
}

### Modificar tipo
PUT   http://localhost:8000/api/v1/tipos/1
Content-Type: application/json

{
    "nombre":"Doble malta"
}

### Borrar tipo
DELETE   http://localhost:8000/api/v1/tipos/2


#### Obtener todas las graduaciones
GET http://localhost:8000/api/v1/graduaciones
# Authorization: Bearer {{accessToken}}



#### Obtener graduación por su id
GET http://localhost:8000/api/v1/graduaciones/5
# Authorization: Bearer {{accessToken}}

### Crear graduación
POST   http://localhost:8000/api/v1/tipos
Content-Type: application/json

{
    "nombre":"Super toxica"
}

### Modificar tipo
PUT   http://localhost:8000/api/v1/graduaciones/3
Content-Type: application/json

{
    "nombre":"Puro alcohol"
}

### Bor6543rar tipo
DELETE   http://localhost:8000/api/v1/graduaciones/1


#### Obtener las cervezas
GET http://localhost:8000/api/v1/cervezas
# Authorization: Bearer {{accessToken}}


#### Obtener las cervezas
GET http://localhost:8000/api/v1/cervezas?per_page=1&novedad=0&marca=a
# Authorization: Bearer {{accessToken}}

#### Crear cerveza
POST   http://localhost:8000/api/v1/cervezas
Content-Type: application/json

{
    "nombre":"Cerveza Voldamm14",
    "descripcion":"La mejor cerveza de españa",
    "color_id":4,
    "graduacion_id":2,
    "tipo_id":1,
    "pais_id":1,
    "novedad":1,
    "oferta":1,
    "precio":0,
    "foto":"imagen",
    "marca":"damm"
}

#### Modificar cerveza
PUT   http://localhost:8000/api/v1/cervezas/15
Content-Type: application/json

{
    "nombre":"Cerveza Voldamm Modificada",
    "descripcion":"La mejor cerveza de españa erer",
    "color_id":4,
    "graduacion_id":2,
    "tipo_id":1,
    "pais_id":1,
    "novedad":1,
    "oferta":1,
    "precio":0,
    "marca":"damm"
}

#### Modificar cerveza
PATCH  http://localhost:8000/api/v1/cervezas/15
Content-Type: application/json

{
    "nombre":"Cerveza Voldamm Modif 2",
    "descripcion":"La mejor cerveza de españa erer",
    "color_id":4,
    "graduacion_id":2,
    "marca":"damm"
}

#### Borrar cerveza
DELETE  http://localhost:8000/api/v1/cervezas/15
```

