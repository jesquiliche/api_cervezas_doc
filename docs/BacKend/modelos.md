---
sidebar_position: 4
---

# 📖Creando modelos y relaciones

## ¿Qué es un modelo?
![Descripcion de la imagen"](/images/orm.png)

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
php artisan make:model Color
```

Este comando creará un archivo Producto.php en la carpeta app con la siguiente estructura básica:

```js
<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Color extends Model
{
    //
}
```

Después de crear el modelo, se pueden agregar los atributos y métodos necesarios para interactuar con la tabla correspondiente en la base de datos. Como tenemos más de una tabla relacionada en nuestra base de datos, vamos a ver una breve introducción a las relaciones,

## Relaciones en Elocuent(Conceptos)

:::tip Uno a uno
En Laravel, una relación "uno a uno" significa que un registro de una tabla está asociado con exactamente un registro en otra tabla. Por ejemplo, un usuario puede tener un solo perfil, y un perfil puede ser de un solo usuario.

Para definir una relación "uno a uno" en Laravel, primero debes crear los modelos para las tablas implicadas en la relación. Luego, debes usar el método hasOne en el modelo que representa la tabla con la clave foránea y el método belongsTo en el modelo que representa la tabla principal.

Aquí hay un ejemplo de cómo crear una relación "uno a uno" entre las tablas de usuarios y perfiles:

```js
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

A continuación, vamos a definir el modelo de la clase **Color** para la tabla **colores**. Si recuerdas, cuando estudiamos las migraciones, establecimos una relación entre la tabla **colores** y la tabla **cervezas**. En este caso, una cerveza puede tener un color, como por ejemplo, un tono tostado. Sin embargo, un color puede estar asociado a muchas cervezas de distintas marcas, tipos, etc. Esto constituye una ***relación de uno a muchos***. En la parte del 'uno', tenemos el modelo **Color**, y en la parte de 'muchos', tenemos el modelo **Cerveza**. A continuación, veremos cómo implementar esta relación en los modelos. Desde la terminal ejecute el siguiente comando:

```bash
php artisan make:model Color
```

Sitúese en la carpeta **app\Models** y edite el código del archivo **Color.php**. Deje el código tal como le muestro a continuación.

```js
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Color extends Model
{
    use HasFactory;
    protected $table='colores';
    
    public function cervezas()
    {
        return $this->hasMany(Cerveza::class);
    }
}
```
Hay varios puntos a destacar en este código:

1. Se utiliza el trait "HasFactory", que es una característica de Laravel para generar datos de prueba o sembrar la base de datos con registros falsos. Esto es útil en entornos de desarrollo y pruebas.

2. La propiedad protegida **$table** se establece en 'colores', lo que indica que este modelo está asociado con la tabla de la base de datos llamada "colores". Laravel asume por defecto que el nombre de la tabla es el nombre del modelo en plural **(colors)** en ingles, pero puedes especificar manualmente el nombre de la tabla utilizando esta propiedad.

5. El método **cervezas()** es un método de relación definido en el modelo "Color". Este método establece una relación "uno a muchos" con el modelo "Cerveza". En otras palabras, un "Color" puede tener muchas "Cervezas", pero una "Cerveza" pertenece a un único "Color". Esto se define utilizando el método **hasMany()** de Eloquent.

En resumen, este código define el modelo "Color" en Laravel y configura una relación "uno a muchos" entre los colores y las cervezas, lo que significa que un color puede estar asociado con varias cervezas en la base de datos. Esto es útil para representar relaciones complejas entre tablas en una base de datos relacional dentro de una aplicación Laravel.



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

### Cerveza

Seguidamente procederemos a crear el Modelo **Cerveza**, nuestro Modelo central.

Desde la terminal teclee:

```bash
php artisan make:model Cerveza
```

A continuación diríjase a la carpeta App/Models de su proyecto y edite el fichero **Cerveza**. Copie el siguiente código;

```js

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cerveza extends Model
{
    use HasFactory;
    protected $table = 'cervezas'; // Nombre de la tabla en la base de datos

    protected $primaryKey = 'id';

    protected $fillable = [
        'nombre',
        'descripcion',
        'color_id',
        'graduacion_id',
        'tipo_id',
        'pais_id'
    ];

    public function color()
    {
        return $this->belongsTo(Color::class, 'color_id');
    }

    public function tipo()
    {
        return $this->belongsTo(Tipo::class, 'tipo_id');
    }

    public function graduacion(()
    {
        return $this->belongsTo(Graduacion::class, 'graduacion_id');
    }

    public function pais(()
    {
        return $this->belongsTo(Pais::class, 'pais_id');
    }
}
```
Los siguientes modelos siguen el mismo el mismo mecanismo de edición y creación.

### País

```js
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pais extends Model
{
    use HasFactory;
    protected $table='paises';
    protected $fillable=['nombre'];
   
    public function cervezas()
    {
        return $this->hasMany(Cerveza::class);
    }
}
```

### Tipo

```js
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tipo extends Model
{
    use HasFactory;
    protected $fillable=['nombre'];
   
    public function tipos()
    {
        return $this->hasMany(Tipo::class);
    }
}
```
### Graduación

```js
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Graduacion extends Model
{
    use HasFactory;
    protected $table='graduaciones';
    protected $fillable=['nombre'];
   
    public function graduaciones()
    {
        return $this->hasMany(Cervezas::class);
    }
}
```

