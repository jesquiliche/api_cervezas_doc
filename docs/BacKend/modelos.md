---
sidebar_position: 4
---

# 📖Creando los modelos

## ¿Qué es Elocuent?
![Descripcion de la imagen"](/assets/images/orm.png

Eloquent es el ORM (Object-Relational Mapping) integrado en Laravel, que permite trabajar con las bases de datos de manera objetual. Es decir, Eloquent permite interactuar con las tablas de la base de datos a través de modelos en lugar de escribir consultas SQL manualmente. Cada modelo de Eloquent representa una tabla de la base de datos y proporciona métodos para interactuar con la información almacenada en la tabla. Con Eloquent, se pueden realizar operaciones comunes de CRUD (Crear, Leer, Actualizar y Borrar) de manera fácil y sencilla.

:::tip CRUD con Eloquent
Aquí hay algunos comandos básicos de Eloquent:

$model = new ModelName: Crea una nueva instancia del modelo.

$model->save(): Guarda un nuevo registro en la base de datos.

ModelName::create([data]): Crea un nuevo registro en la base de datos con los datos especificados.

ModelName::find($id): Obtiene un registro en base a su identificador.
:::

No se preocupe si de momento no entiende estos comandos los iremos viendo a medida que vallamos realizando este proyecto.
Para más información consulte la [documentación oficial](https://laravel.com/docs/9.x/readme)

## ¿Cómo crear un modelo?

Para crear un modelo en Laravel, se puede utilizar el comando de Artisan en la terminal:

```bash
php artisan make:model NombreDelModelo
```

Este comando creará un archivo en la carpeta app con el nombre especificado. A continuación, se puede agregar la lógica y atributos del modelo en este archivo.

Por ejemplo, si queremos crear un modelo para una tabla de productos, podemos ejecutar el siguiente comando:

```bash
php artisan make:model Producto
```

Este comando creará un archivo Producto.php en la carpeta app con la siguiente estructura básica:

```js
<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Producto extends Model
{
    //
}
```

Después de crear el modelo, se pueden agregar los atributos y métodos necesarios para interactuar con la tabla correspondiente en la base de datos.çç

## Relaciones en Elocuent(Conceptos)

:::tip Uno a uno
En Laravel, una relación "uno a uno" significa que un registro de una tabla está asociado con exactamente un registro en otra tabla. Por ejemplo, un usuario puede tener un solo perfil, y un perfil puede ser de un solo usuario.

Para definir una relación "uno a uno" en Laravel, primero debes crear los modelos para las tablas implicadas en la relación. Luego, debes usar el método hasOne en el modelo que representa la tabla con la clave foránea y el método belongsTo en el modelo que representa la tabla principal.

Aquí hay un ejemplo de cómo crear una relación "uno a uno" entre las tablas de usuarios y perfiles:

```js
Copy code
// Archivo User.php
class User extends Model
{
    public function profile()
    {
        return $this->hasOne('App\Profile');
    }
}

// Archivo Profile.php
class Profile extends Model
{
    public function user()
    {
        return $this->belongsTo('App\User');
    }
}
```
Luego, puedes acceder a la información del perfil de un usuario de la siguiente manera:

```js
$user = User::find(1);
$profile = $user->profile;
```
Esto te permitirá acceder a los atributos del perfil asociado con un usuario determinado.
:::

:::tip Uno a muchos
En Laravel Eloquent, una relación de uno a muchos se establece en un modelo mediante el uso del método "hasMany".

Por ejemplo, si tienes un modelo "User" y un modelo "Order", y cada usuario puede tener muchos pedidos, la relación sería:

```js title="Relación uno a muchos"
class User extends Model
{
    public function orders()
    {
        return $this->hasMany(Order::class);
    }
}
```

Entonces, puedes acceder a los pedidos de un usuario de la siguiente manera:

```js
$user = User::find(1);
$orders = $user->orders;
```

También puedes personalizar la clave foránea en la relación, por ejemplo:

```js
class Order extends Model
{
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
```

Esto significa que Eloquent buscará una columna "user_id" en la tabla de "orders" para hacer la relación con la tabla de "users".
:::

:::tip Muchos a muchos
En Laravel Eloquent, una relación de muchos a muchos se establece mediante el uso del método "belongsToMany".

Por ejemplo, si tienes un modelo "User" y un modelo "Role", y cada usuario puede tener varios roles y cada rol puede ser asignado a varios usuarios, la relación sería:

```js
class User extends Model
{
    public function roles()
    {
        return $this->belongsToMany(Role::class);
    }
}
```

```js
class Role extends Model
{
    public function users()
    {
        return $this->belongsToMany(User::class);
    }
}
```

Entonces, puedes acceder a los roles de un usuario de la siguiente manera:

```js
$user = User::find(1);
$roles = $user->roles;
```

Y puedes acceder a los usuarios de un rol de la siguiente manera:

```bash
$role = Role::find(1);
$users = $role->users;
```

Por defecto, Eloquent buscará una tabla intermedia con nombres en plural en orden alfabético de las dos tablas relacionadas, por ejemplo, "role_user". Sin embargo, puedes especificar un nombre personalizado para la tabla intermedia utilizando el segundo argumento en el método "belongsToMany", por ejemplo:

```js
return $this->belongsToMany(Role::class, 'user_roles');
```

:::

## Tinker

Tinker es una herramienta de **REPL (Read-Eval-Print Loop)** de Laravel que te permite interactuar con tu aplicación de Laravel desde la consola. Con Tinker, puedes ejecutar código PHP, consultar y modificar la información en la base de datos, y ejecutar otros comandos relacionados con Laravel.

Para usar **Tinker**, abre la consola en tu proyecto de Laravel y ejecuta el comando php artisan tinker. Una vez que se abra la sesión de Tinker, puedes escribir cualquier código PHP y ver los resultados en tiempo real. Por ejemplo, puedes consultar información de la base de datos, crear nuevos registros y modificar registros existentes.

Aquí hay algunos ejemplos de lo que puedes hacer con Tinker:

Consultar información de una tabla:

```js
>>> App\Models\Producto::all()
```

Crear un nuevo registro:

```js
>>> $producto = new App\Models\Producto;
>>> $producto->nombre = "Producto 1";
>>> $producto->save()
```

Modificar un registro existente:

```js
>>> $producto = App\Models\Producto::find(1);
>>> $producto->nombre = "Producto actualizado";
>>> $producto->save()
```

Tinker es una herramienta muy útil para probar código rápidamente y ver los resultados sin tener que recargar la página o escribir código adicional en tu aplicación de Laravel. ¡Disfruta!

## Modelos
### 📇Categoría

Ejecute el siguiente comando en su terminal:

```bash
php artisan make:model Categoria
```

:::tip Importante
El nombre del modelo debe empezar en mayúscula y estar en singular, pues Eloquent va a buscar la tabla correspondiente al modelo añadiendo una s al final.
En este caso al modelo Categoria le corresponde la tabla categorias. Más adelante cuando llegue el caso estudiaremos como cambiar este comportamiento.
:::

Una vez ejecutado el comando edite el siguiente fichero:
**app\Models\Categoria.php**

Sustituye el contenido por el siguiente código PHP:

```js title="app\Models\Categoria.php"
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Categoria extends Model
{
    use HasFactory;
    protected $fillable = ['nombre','descripcion'];
    public function subcategorias(){
        return $this->hasMany('App\Models\Subcategoria');

    }
}
```

En el ejemplo anterior se crea un modelo en Laravel llamado **"Categoria"** que representa una tabla de categorías en la base de datos. Este modelo es una clase que extiende de la clase "Model" de Eloquent, lo que significa que tiene todas las funcionalidades y propiedades necesarias para interactuar con la tabla **"categorías"** en la base de datos.

La propiedad **"fillable"** especifica los campos que pueden ser rellenados por asignación masiva, es decir, aquellos campos que pueden ser modificados a través de un array o objeto. En este caso, los campos "nombre" y **"descripcion"** son los únicos que pueden ser modificados.

El método \***\*subcategorias"** define una relación de uno a muchos con la tabla "subcategorías". Esta relación significa que una categoría puede tener muchas subcategorías, y que cada subcategoría pertenece a una sola categoría. La relación se define usando el método "hasMany", que indica que la clase "Categoria" tiene muchas subcategorías. El argumento de "hasMany" es una cadena con el nombre de la clase **"Subcategoria"**.

Esta relación permite acceder a las subcategorías de una categoría dada usando el método **"subcategorias"**, por ejemplo:

```js
$categoria = App\Models\Categoria::find(1);

foreach ($categoria->subcategorias as $subcategoria) {
    echo $subcategoria->nombre;
}
```

<p align="center">
  <img src="/assets/images/categoria.png" alt="Descripción de la imagen"/>
</p>
Este código busca una categoría con ID 1 y luego imprime el nombre de todas sus subcategorías.

### 📇Subcategoría

Ejecute el siguiente comando en su terminal:

```bash
php artisan make:model Subcategoria
```

Una vez ejecutado el comando, diríjase a la carpeta **App/Models** y edite el fichero **"Subcategoria"**. Substituya el código generado por el siguiente código:

```js title="app\Models\Subcategoria.php"
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Subcategoria extends Model
{
    use HasFactory;

    protected $fillable = [
        'nombre',
        'descripcion',
        'categoria_id'
    ];

    public function categoria(){
        return $this->belongsTo('App\Models\Categoria');
    }

    public function productos(){
        return $this->hasMany('App\Models\Producto');
    }
}
```

El modelo utiliza la función **"HasFactory"** que permite crear fábricas de objetos para probar y realizar pruebas en el modelo.

La propiedad "$fillable" define los campos que se pueden asignar masivamente en la base de datos y está compuesta por los campos **"nombre"**, **"descripción"** y **"categoria_id"**.

La función "categoria()" es una relación **"belongsTo"** que indica que una subcategoría pertenece a una sola categoria. La relación se establece con el modelo "Categoria" de la aplicación.

La función **"productos()"** es una relación **"hasMany"** que indica que una subcategoría puede tener varios productos asociados a ella. La relación se establece con el modelo _"Producto"_ de la aplicación.

### 📇Producto

Ejecute el siguiente comando en su terminal:

```bash
php artisan make:model Producto
```

Una vez ejecutado el comando, diríjase a la carpeta **App/Models** y edite el fichero **"Producto"**. Substituya el código generado por el siguiente código:

```js title="app\Models\Producto.php"
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Producto extends Model
{
    use HasFactory;
    protected $table="productos";
    

    protected $fillable = [
        'nombre',
        'descripcion',
        'precio',
        'imagen',
        'subcategoria_id',
        'iva_id',
        'marca_id'
    ];

    public function subcategoria(){
        return $this->belongsTo('App\Models\Subcategoria');
    }

    public function iva(){
        return $this->belongsTo('App\Models\Iva');
    }
    public function marca(){
        return $this->belongsTo('App\Models\Marca');
    }
    public function oferta(){
        return $this->belongsTo('App\Models\Oferta');
    }
    //Relacion muchos a muchos
    public function proveedores(){
        return $this->belongsToMany(Producto::class);
    }
}
```
Este este código de un modelo **"Producto"** en Laravel utilizando Eloquent. En este código se establecen relaciones uno a muchos con los modelos **"Subcategoria", "Iva", "Marca"** y **"Oferta"**, así como también una relación muchos a muchos con el modelo **"Proveedor"**.

La propiedad "table" especifica el nombre de la tabla en la base de datos que almacenará los datos de los productos. La propiedad **"fillable"** especifica los campos que pueden ser rellenados y almacenados en la base de datos cuando se crea o actualiza un producto.

Los métodos **"subcategoria"**, **"iva"**, **"marca"** y **"oferta"** definen las relaciones uno a muchos con los modelos correspondientes. Por ejemplo, el método **"subcategoria"** devuelve una instancia del modelo **"Subcategoria"** al que pertenece un producto.

El método **"proveedores"** define la relación muchos a muchos con el modelo **"Proveedor"**, que permite que un producto tenga muchos proveedores y que un proveedor pueda proveer muchos productos.

Estos métodos se utilizan para acceder a los datos relacionados, por ejemplo:

```js
$product = Producto::find(1);
$subcategory = $product->subcategoria;
$iva = $product->iva;
$brand = $product->marca;
$offer = $product->oferta;
$suppliers = $product->proveedores;
```
### 📇Iva

Ejecute el siguiente comando en su terminal:

```bash
php artisan make:model Iva
```

Una vez ejecutado el comando, diríjase a la carpeta **App/Models** y edite el fichero **"Iva"**. Substituya el código generado por el siguiente código:

```js title="app\Models\Iva.php"
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Iva extends Model
{
    use HasFactory;

    protected $fillable = ['tanto_porciento','nombre'];
    
    public function productos(){
        return $this->hasMany('App\Models\Producto');
        
    }
}
```
Este es un ejemplo de código de un modelo **"Iva"** en Laravel utilizando Eloquent. En este código se establece una relación uno a muchos con el modelo **"Producto"**.

La propiedad **"fillable"** especifica los campos que pueden ser rellenados y almacenados en la base de datos cuando se crea o actualiza un registro de iva.

El método **"productos"** define la relación uno a muchos con el modelo **"Producto"**. Este método devuelve una colección de todos los productos que pertenecen a un registro de iva.

Estos métodos se utilizan para acceder a los datos relacionados, por ejemplo:

```js
$iva = Iva::find(1);
$products = $iva->productos;
```
### 📇Marca
Ejecute el siguiente comando en su terminal:

```bash
php artisan make:model Marca
```

Una vez ejecutado el comando, diríjase a la carpeta **App/Models** y edite el fichero **"Marca"**. Substituya el código generado por el siguiente código:

```js title="app\Models\Marca.php"
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Marca extends Model
{
    protected $fillable = ['nombre'];
    use HasFactory;

    function productos(){
        return $this->hasMany('App\Models\Producto');    
    }

}
```
Este es un ejemplo de código de un modelo **"Marca"** en Laravel utilizando Eloquent. En este código se establece una relación uno a muchos con el modelo **"Producto"**.

La propiedad **"fillable"** especifica los campos que pueden ser rellenados y almacenados en la base de datos cuando se crea o actualiza un registro de marca.

El método **"productos"** define la relación uno a muchos con el modelo **"Producto"**. Este método devuelve una colección de todos los productos que pertenecen a un registro de marca.

Estos métodos se utilizan para acceder a los datos relacionados, por ejemplo:

```js
$marca = Marca::find(1);
$products = $marca->productos;
```
### 📇Oferta

Ejecute el siguiente comando en su terminal:

```bash
php artisan make:model Oferta
```

Una vez ejecutado el comando, diríjase a la carpeta **App/Models** y edite el fichero **"Oferta"**. Substituya el código generado por el siguiente código:

```js title="app\Models\Oferta.php"
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Oferta extends Model
{
    use HasFactory;
    protected $fillable = [
        'precio',
        'descripcion',
        'fecha_ini',
        'fecha_fin',
        'producto_id'
    ];

    function productos(){
        return $this->hasMany('App\Models\Producto');    
    }
}
```
Este es un ejemplo de código de un modelo **"Oferta"** en Laravel utilizando Eloquent. En este código se establece una relación uno a muchos con el modelo "Producto".

La propiedad **"fillable"** especifica los campos que pueden ser rellenados y almacenados en la base de datos cuando se crea o actualiza un registro de oferta.

El método **"productos"** define la relación uno a muchos con el modelo **"Producto"**. Este método devuelve una colección de todos los productos que pertenecen a un registro de oferta.

Estos métodos se utilizan para acceder a los datos relacionados, por ejemplo:

```js
$oferta = Oferta::find(1);
$products = $oferta->productos;
```

### 📇Provincia

Ejecute el siguiente comando en su terminal:

```bash
php artisan make:model Provincia
```

Una vez ejecutado el comando, diríjase a la carpeta **App/Models** y edite el fichero **"Provincia"**. Substituya el código generado por el siguiente código:

```js title="app\Models\Provincia.php"
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Provincia extends Model
{
    protected $fillable = [
        'codigo',
        'nombre'
       
    ];
    use HasFactory;
}
```
Este es un modelo de Laravel para una tabla de **"Provincias"**. La clase extiende de **Illuminate\Database\Eloquent\Model**, lo que significa que está siendo utilizada como un modelo Eloquent.

El atributo **$fillable** especifica los campos que pueden ser asignados masivamente (por ejemplo, cuando se crea o se actualiza un registro en la tabla de **"Provincias"**).

El trait HasFactory proporciona una forma conveniente de crear nuevos registros en la tabla utilizando fábricas, lo que puede ser útil en desarrollo y pruebas.

Con este modelo, puedes interactuar con la tabla **"provincias"** en la base de datos usando las capacidades de Laravel. Por ejemplo, puedes consultar registros existentes o crear nuevos registros con una llamada simple al modelo:

```js
$provincia = new Provincia();
$provincia->codigo = '01';
$provincia->nombre = 'Buenos Aires';
$provincia->save();
```
También puedes consultar registros existentes de la tabla de "Provincias" de la siguiente manera:

```js
$provincias = Provincia::all();
Esto te dará una colección de todos los registros en la tabla "provincias".
```
### 📇Poblacion

Ejecute el siguiente comando en su terminal:

```bash
php artisan make:model Poblacion
```

Una vez ejecutado el comando, diríjase a la carpeta **App/Models** y edite el fichero **"Poblacion"**. Substituya el código generado por el siguiente código:

```js title="app\Models\Poblacion.php"
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Poblacion extends Model
{
    use HasFactory;
    protected $table="poblaciones";
    protected $fillable = ['codigo','nombre'];
    
}
```
Este es una definición de clase PHP para un modelo Eloquent en el marco de trabajo Laravel. La clase se llama **"Poblacion"** y extiende la clase **"Model"**
incorporada. La clase representa una tabla de base de datos **"poblaciones"** y especifica qué columnas en esa tabla se pueden llenar con datos (la propiedad **"fillable"**) - en este caso, **"codigo"** y **"nombre"**.

### 📇Proveedor

Ejecute el siguiente comando en su terminal:

```bash
php artisan make:model Proveedor
```

Una vez ejecutado el comando, diríjase a la carpeta **App/Models** y edite el fichero **"Proveedor"**. Substituya el código generado por el siguiente código:

```js title="app\Models\Proveedor.php"
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Proveedor extends Model
{
    protected $table="proveedores";
    use HasFactory;
    protected $fillable = [
        'nif',
        'nombre',
        'cod_postal',
        'cod_provincia',
        'calle',
        'numero',
        'notas'
    ];
    public function productos(){
        return $this->BelongsToMany('App\Models\Producto');
    }
}
```
Este es un modelo de Laravel para una tabla de **"Proveedores"**. La clase extiende de Illuminate\Database\Eloquent\Model, lo que significa que está siendo utilizada como un modelo Eloquent.

El atributo **$table** especifica el nombre de la tabla en la base de datos a la que está asociada este modelo.

El atributo **$fillable** especifica los campos que pueden ser asignados masivamente (por ejemplo, cuando se crea o se actualiza un registro en la tabla de "Proveedores").

El trait HasFactory proporciona una forma conveniente de crear nuevos registros en la tabla utilizando fábricas, lo que puede ser útil en desarrollo y pruebas.

El método productos define una relación **"muchos a muchos"** con la tabla **"Productos"**. Esta relación significa que un proveedor puede proporcionar múltiples productos y un producto puede ser proporcionado por múltiples proveedores.

Con este modelo, puedes interactuar con la tabla **"proveedores"** en la base de datos usando las capacidades de Laravel. Por ejemplo, puedes consultar registros existentes o crear nuevos registros con una llamada simple al modelo:

```js 
$proveedor = new Proveedor();
$proveedor->nif = '12345678A';
$proveedor->nombre = 'Proveedor S.A.';
$proveedor->cod_postal = '1234';
$proveedor->cod_provincia = '01';
$proveedor->calle = 'Calle 1';
$proveedor->numero = '1';
$proveedor->notas = 'Notas adicionales';
$proveedor->save();
```

También puedes consultar registros existentes de la tabla de "Proveedores" de la siguiente manera:

```js
$proveedores = Proveedor::all();
```

Esto te dará una colección de todos los registros en la tabla "proveedores". Además, puedes acceder a los productos asociados con un proveedor determinado de la siguiente manera:

```js
$proveedor = Proveedor::find(1);
$productos = $proveedor->productos;
```

Esto te dará una colección de todos los productos asociados con el proveedor con id 1.
