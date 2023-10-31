---
sidebar_position: 3
---
# 📖Migraciones

## ¿Qué es una migración?

En términos simples, una migración en Laravel es un conjunto de instrucciones que permiten a los desarrolladores crear o modificar la estructura de una base de datos en su aplicación web. En lugar de modificar manualmente la base de datos, los desarrolladores pueden crear archivos de migración que describen los cambios que deben hacerse. Estos archivos de migración se ejecutan automáticamente utilizando comandos de Artisan, lo que permite a los desarrolladores actualizar la estructura de la base de datos de manera controlada y coherente con la evolución de la aplicación. En resumen, las migraciones son una herramienta útil que permite a los desarrolladores administrar la estructura de la base de datos de manera programática y coherente, lo que puede ahorrar tiempo y reducir errores en la gestión de la base de datos.

Uno de los beneficios clave de utilizar migraciones es el control de versiones. Al utilizar archivos de migración, los desarrolladores pueden mantener un registro de los cambios en la estructura de la base de datos a medida que evoluciona la aplicación. Esto es especialmente útil cuando hay varios desarrolladores trabajando en el mismo proyecto o cuando se realiza un seguimiento de diferentes versiones de la aplicación. Cada archivo de migración se puede etiquetar con un número de versión, lo que ayuda a los desarrolladores a realizar un seguimiento de los cambios y a asegurarse de que todos los miembros del equipo estén trabajando con la misma versión de la base de datos.

Otro beneficio importante de las migraciones es que pueden ahorrar tiempo y reducir errores en la gestión de la base de datos. En lugar de tener que modificar manualmente la base de datos cada vez que se realizan cambios en la estructura de la base de datos, los desarrolladores pueden crear archivos de migración que describen los cambios que deben hacerse. Estos archivos de migración se pueden ejecutar automáticamente utilizando comandos de Artisan, lo que ahorra tiempo y reduce la posibilidad de errores humanos.

Además, las migraciones en Laravel también son muy flexibles. Los desarrolladores pueden crear migraciones para agregar nuevas tablas, modificar columnas existentes, agregar restricciones de clave foránea, crear índices, eliminar tablas y mucho más. Cada migración se compone de dos métodos principales: el método "up" que describe los cambios que deben realizarse en la base de datos y el método "down" que describe cómo deshacer esos cambios.

En resumen, las migraciones en Laravel son una herramienta esencial para administrar la estructura de la base de datos de manera programática y coherente con la evolución de la aplicación. Al utilizar migraciones, los desarrolladores pueden mantener un registro de los cambios de la base de datos, ahorrar tiempo y reducir errores en la gestión de la base de datos, y tener una gran flexibilidad para realizar cambios en la estructura de la base de datos.
### 📇Modelo ER
Este es el modelo entidad/relación de nuestra BB.DD.

![Modelo E/R](/images/er.png)

## ¿Qué es una migración?

Una **migración** en Laravel es un archivo de PHP que describe una operación de base de datos, como la creación de una tabla o la modificación de una columna existente. Las migraciones permiten que los desarrolladores gestionen los cambios en la estructura de la base de datos de manera sencilla y segura, ya que todos los cambios se realizan a través de archivos que se pueden controlar con un sistema de control de versiones como Git.

Cuando se ejecutan las migraciones, Laravel las aplica automáticamente a la base de datos mediante una serie de comandos SQL. Esto garantiza que la estructura de la base de datos sea la misma en todas las instancias del proyecto, ya sea en un entorno de desarrollo local, en un servidor de pruebas o en producción.

Además, las migraciones también proporcionan un mecanismo para revertir los cambios en la base de datos, lo que es útil en caso de que se deban hacer cambios en la estructura de la base de datos y luego se deba revertir a una versión anterior.

En resumen, las migraciones en Laravel son una herramienta esencial para el desarrollo de aplicaciones que requieren una gestión de base de datos robusta y fácil de usar.
:::tip Para saber más
Para más información consulte [la documentación oficial de Laravel.](httbash://laravel.com/docs/9.x/migrations#generating-migrations)
:::

## Generando migraciones en Laravel

A continuación, generaremos las migraciones necesarias para crear la estructura requerida en nuestra base de datos. Crearemos todas las tablas necesarias para nuestra aplicación de comercio electrónico a través de estas migraciones. Comenzaremos con las tablas más simples y avanzaremos hasta nuestra tabla principal, conocida como **Cervezas**.

Como es ampliamente reconocido, una cerveza suele contar con una serie de características o propiedades que comparte con otras cervezas, al tiempo que la distinguen de las demás. Entre estas características se encuentra el color. Existen varios tipos de colores estandarizados, como tostado, ámbar, negro y amarillo, que definen el color de una cerveza.

Empezaremos creando la tabla **Colores**, la cual almacenará todos los colores de las cervezas y se relacionará con nuestra tabla de **Cervezas**.

Para crear la migración de la tabla de categorías, ingrese el siguiente comando:

```bash
php artisan make:migration create_colores_table
```

Para generar una migración en Laravel 10, se suele utilizar el comando ***php Artisan make:migration: nombreDeLaMigración***. Es el comando que hemos ejecutado anteriormente, donde **NombreDeLaMigracion** es el nombre que le quieres dar a la migración, y **nombre_de_la_tabla** es el nombre de la tabla que se creará en la base de datos.

Esto creará un archivo de migración en la carpeta ***database/migrations*** con un nombre similar a ***yyyy_mm_dd_hhmmss_NombreDeLaMigracion.php***.

Luego, puedes editar ese archivo para definir las columnas que deseas agregar a la tabla. Finalmente, ejecuta el comando ***php artisan migrate*** para aplicar las migraciones a la base de datos.

A continuación, veamos qué nos ha generado el comando anterior.

## Definiendo las tablas de la Base de Datos

### 📇 Tabla de Colores

Veamos qué ha hecho el comando anteriormente ejecutado:

```bash title="Migración de colores"
php artisan make:migration create_colores_table
```
:::caution Importante
Siga la convención en sus creaciones de tabla utilizando **create_nombre_de_tabla_table**, si quiere evitarse problemas en el futuro.

La fecha de la migración es importante, ya que esta determina el orden de ejecución de las mismas. Esto es importante en el caso de que tengamos tablas relacionadas; deberemos crear primero las **entidades fuertes** que las **entidades débiles**.
:::

Diríjase al directorio `database/migrations` y edite el archivo con la migración. Podrá observar el siguiente código.

```php
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('colores', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('colores');
    }
};

```

El código crea una clase anónima que extiende la clase Migration de Illuminate y define dos métodos: up() y down().

El método up() es invocado cuando se ejecuta el comando php artisan migrate y se utiliza para crear la tabla "categorías" en la base de datos con las siguientes columnas:

id: una columna con clave primaria que se genera automáticamente como una secuencia incremental.
nombre: una columna de tipo cadena con un tamaño máximo de 150 caracteres que es única.
descripcion: una columna de tipo texto.
imagen: una columna de tipo texto que puede ser nula.
created_at y updated_at: dos columnas de tipo fecha y hora que se generan automáticamente y se actualizan automáticamente al insertar o actualizar un registro.
El método down() es invocado cuando se ejecuta el comando php artisan migrate:rollback y se utiliza para eliminar la tabla "categorías".

Ahora veremos como añadir campos a nuestra tabla:

:::tip tipos de datos más comunes en Laravel
En Laravel, los tipos de datos en las migraciones se refieren a las especificaciones de los tipos de columnas en las tablas de la base de datos. Algunos de los tipos de datos más comunes incluyen:

- bigIncrements: Incremento automático de ID grande
- bigInteger: Entero grande
- binary: Datos binarios
- boolean: Valor booleano
- char: Cadena fija de longitud
- date: Fecha
- dateTime: Fecha y hora
- decimal: Número decimal con precisión y escala específicas
- double: Número de punto flotante de doble precisión
- enum: Valor de una lista predefinida
- float: Número de punto flotante
- increments: Incremento automático de ID
- integer: Entero
- json: Datos en formato JSON
- longText: Texto largo
- mediumText: Texto de tamaño medio
- smallInteger: Entero pequeño
- string: Cadena
- text: Texto
- time: Tiempo
- timestamp: Marca de tiempo
- unsignedBigInteger: Entero grande sin signo
- unsignedInteger: Entero sin signo.

Estos son algunos de los tipos de datos más comunes que puedes usar en tus migraciones en Laravel.
:::

Vamos a añadir una columna a nuestra tabla, donde guardaremos el nombre del color:

```php
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('colores', function (Blueprint $table) {
            $table->id(); // Campo ID autoincremental
            $table->string('nombre')->unique(); // Ejemplo de otro campo, puedes añadir los necesarios
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('colores');
    }
};
```
### Revisando la tabla migraciones

| id | migration                                     | Batch |
|----|---------------------------------------------------------|-------|
| 1  | 2014_10_12_000000_create_users_table                    | 1     |
| 2  | 2014_10_12_100000_create_password_reset_tokens_table    | 1     |
| 3  | 2019_08_19_000000_create_failed_jobs_table              | 1     |
| 4  | 2019_12_14_000001_create_personal_access_tokens_table    | 1     |
| 5  | 2023_10_21_205846_create_colores_table                  | 2     |


La tabla **migraciones** de Laravel es utilizada por el sistema de migraciones de Laravel para realizar un seguimiento de las migraciones que se han ejecutado en la base de datos. A continuación, te explico el significado de cada columna en la tabla:

1. **ID**: Este es un identificador único para cada migración. Cada vez que ejecutas una migración, se registra en esta tabla con un nuevo ID. Esto ayuda a realizar un seguimiento de todas las migraciones que se han aplicado.

2. **Nombre de migración**: Esta columna almacena el nombre del archivo de migración, que suele seguir un formato de fecha y hora, seguido de un nombre descriptivo de la migración. Este nombre es utilizado por Laravel para determinar qué migraciones se deben ejecutar y en qué orden.

3. **Batch**: El campo "Batch" indica a qué grupo o "lote" de migraciones pertenece esta migración. Esto es útil cuando deseas ejecutar migraciones en lotes separados. Por defecto, todas las migraciones se asignan al lote 1, pero puedes cambiar esto en el código de la migración si deseas agruparlas de manera diferente.

En resumen, la tabla `migraciones` en Laravel lleva un registro de todas las migraciones que se han aplicado a la base de datos, con información sobre su orden, identificación y el lote al que pertenecen. Esto es fundamental para mantener la integridad de la base de datos y realizar un seguimiento de los cambios en el esquema a lo largo del tiempo.

### 📇Tabla Tipos

En esta tabla guardaremos los distintos de cerveza, como el tipo Ale,IPA,negra,etc.

Para crear la migración ejecute el siguiente comando desde su terminal.

```bash title="Migración de categorías"
php artisan make:migration create_tipos_table
```
Diríjase el directorio database/migrations y siga el mismo procedimiento que el ejemplo anterior.

Sustituya el código generado por el siguiente código:
```js
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('tipos', function (Blueprint $table) {
            $table->id();
            $table->string(`nombre`,100)->unique();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tipos');
    }
};

```
### 📇Tabla Paises

Para crear la migración ejecute el siguiente comando desde su terminal.

```bash title="Migración de paises"
php artisan make:migration create_pais_table
```
Diríjase el directorio database/migrations y siga el mismo procedimiento que el ejemplo anterior.

Sustituya el código generado por el siguinte código:
```js
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('paises', function (Blueprint $table) {
            $table->id();
            $table->string("nombre")->unique();
            $table->timestamp();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('paises');
    }
};
```

### 📇Tabla graduaciones

Para crear la migración ejecute el siguiente comando desde su terminal.

```bash title="Migración de categorias"
php artisan make:migration create_graduacion_table
```
Diríjase el directorio database/migrations y siga el mismo procedimiento que el ejemplo anterior.

Sustituya el código generado por el siguinte código:
```js
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('graduaciones', function (Blueprint $table) {
            $table->id();
            $table->string("nombre",50)->unique();
            $table->timestamp();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('graduaciones');
    }
};


```
### 📇Tabla Cervezas

Para crear la migración ejecute el siguiente comando desde su terminal.

```bash title="Migración de cervezas"
php artisan make:migration create_cervezas_table
```
Diríjase el directorio database/migrations y siga el mismo procedimiento que el ejemplo anterior.

Sustituya el código generado por el siguinte código:
```js
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('cervezas', function (Blueprint $table) {
            $table->id();
            $table->string('nombre',150)->unique();
            $table->text('descripcion');
            $table->unsignedBigInteger('color_id');
            $table->foreign('color_id')->references('id')->on('colores');
            $table->unsignedBigInteger('graduacion_id');
            $table->foreign('graduacion_id')->references('id')->on('graduaciones');
            $table->unsignedBigInteger('tipo_id');
            $table->foreign('tipo_id')->references('id')->on('tipos');
            $table->unsignedBigInteger('pais_id');
            $table->foreign('pais_id')->references('id')->on('paises');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('cervezas');
    }
};
```

### 📇Modificando la tabla cervezas

Hasta ahora hemos visto como crear nuestras tablas, pero no como modificarlas. Vamos a estudiar como modificar nuestra tabla cervezas. Nos hemos dado cuenta que nos hemos dejado dos campos en la tabla.
Uno llamado **novedad** de tipo booleano que indicara si el producto es una novedad y otro **oferta** que indicara si nuestro producto esta en oferta.

En la siguiente migración modificaremos la tabla proveedores.

```bash title="Modficación de la tabla cervezas"
php artisan make:migration add_fields_cervezas_table
```
Sustituya el código generador por el siguiente código:

```js
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ModifyCervezasTable extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::table('cervezas', function (Blueprint $table) {
            $table->boolean('novedad')->default(false);
            $table->boolean('oferta')->default(false);
            $table->decimal('precio', 8, 2); // 8 dígitos en total y 2 decimales
            $table->string('foto');
            $table->string('marca', 150);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down()
    {
        Schema::table('cervezas', function (Blueprint $table) {
            $table->dropColumn(['novedad', 'oferta', 'precio', 'marca']);
        });
    }
}
```

A continuación vamos a ejecutar todas las migraciones pendientes:

```bash
php artisan migrate
```