---
sidebar_position: 5
---
# 📖Rellenando la BB.DD
## Seeders

### 📇¿Qué es un seeder?
![Seeder](/assets/images/bd.webp)

Un seeder en Laravel es una clase que se utiliza para poblar una base de datos con datos de prueba. Los seeders son útiles para probar aplicaciones, crear datos de prueba para desarrolladores y para personalizar una base de datos con información específica.

Cada seeder en Laravel extiende de la clase **Illuminate\Database\Seeder** y contiene un método run que se ejecuta cuando se llama el comando **php artisan db:seed**. Dentro de este método, puedes escribir cualquier lógica que necesites para insertar datos en tu base de datos.

Puedes crear varios seeders y ejecutarlos todos o solo algunos según tus necesidades. Al ejecutar un seeder, sus datos se insertan en la base de datos de forma automática, lo que te permite rellenar tus tablas de forma rápida y sencilla.

### 📇¿Cómo se crea un seeder?

<p align="center">
  <img src="/assets/images/bd3.jpg" alt="Descripción de la imagen" className="image-center"/>
</p>



Para crear un seeder en Laravel, puedes usar el siguiente comando de Artisan:
```bash
php artisan make:seeder NombreSeeder
```

Donde NombreSeeder es el nombre que le quieres dar a tu seeder. Este comando creará un archivo en la carpeta database/seeds con el nombre que le hayas especificado y con una estructura básica de código para que puedas empezar a escribir tu lógica de seeding.

Aquí tienes un ejemplo básico de código para un seeder:

```js
<?php
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class NombreSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('table_name')->insert([
            'column1' => 'value1',
            'column2' => 'value2',
            // ...
        ]);
    }
}
?>
```

Puedes agregar más datos o lógica para rellenar tus tablas de forma más compleja.

Para ejecutar los seeders, puedes usar el siguiente comando:

```bash
php artisan db:seed
```
También puedes ejecutar un seeder específico utilizando el siguiente comando:

```bash
php artisan db:seed --class=NombreSeeder
```
### 📇ivaSeeder
```js
<?php

namespace Database\Seeders;
namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class IvaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    
    public function run()
    {
        $data=[
            [
                'tanto_porciento'=>4,
                'nombre'=>"Super reducido"
            ],
            [
                'tanto_porciento'=>10,
                'nombre'=>"Reducido"
            ],
            [
                'tanto_porciento'=>21,
                'nombre'=>"General"
            ]
            ];
            DB::table('ivas')->insert($data);
    }
}
```
Este código es un script de semilla (seeder) en PHP utilizando el marco Laravel. La clase **IvaSeeder** extiende la clase base Seeder y define un método run() que inserta datos en una tabla llamada "ivas".

El método run() primero crea una matriz de datos que contiene tres elementos, cada uno de los cuales representa un registro con un tanto por ciento de IVA y un nombre asociado. Luego, se usa la función **DB :: table ('ivas') -> insert ($ data)** para insertar estos datos en la tabla "ivas".

La clase IvaSeeder se puede ejecutar utilizando el comando Artisan de Laravel "php artisan db:seed --class=IvaSeeder" para poblar la tabla "ivas" con los datos definidos en el método run().

### 📇marcaSeeder
```js title="database\seeders\MarcaSeeder.php"
<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;


class MarcaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data=[
       
        [
            
            'nombre'=>"SAMSUNG"
        ],
        [
            
            'nombre'=>"XIAOMI"
        ],
        [
            
            'nombre'=>"SONY"
        ],
        [
            
            'nombre'=>"ACER"
        ],
        [
            
            'nombre'=>"LG"
        ],
        [
            
            'nombre'=>"LENOVO"
        ],
        [
            
            'nombre'=>"CORBERO"
        ],
        [
            
            'nombre'=>"PHILIPS"
        ],
        [
            
            'nombre'=>"APPLE"
        ],
        [
            
            'nombre'=>"AEG"
        ],
       
       
        ];
        DB::table('marcas')->insert($data);
        //
    }
}
```

Este código es un script de semilla (seeder) en PHP utilizando el marco Laravel. La clase MarcaSeeder extiende la clase base Seeder y define un método run() que inserta datos en una tabla llamada "marcas".

El método run() primero crea una matriz de datos que contiene diez elementos, cada uno de los cuales representa un registro con un nombre de marca. Luego, se usa la función **DB :: table ('marcas') -> insert ($ data)** para insertar estos datos en la tabla "marcas".

La clase MarcaSeeder se puede ejecutar utilizando el comando Artisan de Laravel **"php artisan db:seed --class=MarcaSeeder"** para poblar la tabla "marcas" con los datos definidos en el método run().

### 📇poblacionSeeder

```js
<?php

namespace Database\Seeders;

use App\Models\Poblacion;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use \Illuminate\Support\Facades\File;

class PoblacionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('poblaciones')->delete();
        $json = File::get("database/data/poblaciones.json");
        $data = json_decode($json);
        foreach ($data as $obj) {
            Poblacion::create(array(
                
                'codigo' => $obj->codigo,
                'provincia_cod'=>substr($obj->codigo,0,2),
                'nombre' => $obj->nombre,
            ));
            print "Insertando población -> ".$obj->codigo." ".$obj->nombre."\n";
        }

    }
}
```
Este código es un script de semilla (seeder) en PHP utilizando el marco Laravel. La clase PoblacionSeeder extiende la clase base Seeder y define un método run() que inserta datos en una tabla llamada "poblaciones".

El método run() primero elimina todos los datos existentes en la tabla "poblaciones" usando DB :: table ('poblaciones') -> delete (). Luego, se carga un archivo JSON en el servidor llamado "poblaciones.json" usando la función File :: get ("database / data / poblaciones.json"). La función json_decode ($ json) se utiliza para convertir el contenido del archivo JSON en un objeto PHP.

A continuación, se itera sobre cada objeto dentro de $ data y se usa el método create () de la clase Poblacion para insertar los datos en la tabla "poblaciones". Cada registro contiene un código, una provincia_cod (el código de provincia, que se obtiene cortando los primeros 2 caracteres del código), y un nombre.

Cada vez que se inserta un registro, se muestra un mensaje de impresión en la consola indicando el registro que se está insertando.

La clase PoblacionSeeder se puede ejecutar utilizando el comando Artisan de Laravel "php artisan db:seed --class=PoblacionSeeder" para poblar la tabla "poblaciones" con los datos definidos en el archivo "poblaciones.json".

### 📇provinciaSeeder

```js
<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProvinciaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return vocodigo
     */
    public function run()
    {
        //
        $provincias = array (
            array ('codigo' => "01", "nombre" => "ALAVA"),
            array ('codigo' => "02", "nombre" => "ALBACETE"),
            array ('codigo' => "03", "nombre" => "ALICANTE"),
            array ('codigo' => "04", "nombre" => "ALMERIA"),
            array ('codigo' => "33", "nombre" => "ASTURIAS"),
            array ('codigo' => "05", "nombre" => "AVILA"),
            array ('codigo' => "06", "nombre" => "BADAJOZ"),
            array ('codigo' => "08", "nombre" => "BARCELONA"),
            array ('codigo' => "09", "nombre" => "BURGOS"),
            array ('codigo' => "10", "nombre" => "CACERES"),
            array ('codigo' => "11", "nombre" => "CADIZ"),
            array ('codigo' => "39", "nombre" => "CANTABRIA"),
            array ('codigo' => "12", "nombre" => "CASTELLON"),
            array ('codigo' => "51", "nombre" => "CEUTA"),
            array ('codigo' => "13", "nombre" => "CIUDAD REAL"),
            array ('codigo' => "14", "nombre" => "CORDOBA"),
            array ('codigo' => "15", "nombre" => "CORUÑA"),
            array ('codigo' => "16", "nombre" => "CUENCA"),
            array ('codigo' => "17", "nombre" => "GIRONA"),
            array ('codigo' => "18", "nombre" => "GRANADA"),
            array ('codigo' => "19", "nombre" => "GUADALAJARA"),
            array ('codigo' => "20", "nombre" => "GUIPUZCOA"),
            array ('codigo' => "21", "nombre" => "HUELVA"),
            array ('codigo' => "22", "nombre" => "HUESCA"),
            array ('codigo' => "07", "nombre" => "ILLES BALEARS"),
            array ('codigo' => "23", "nombre" => "JAEN"),
            array ('codigo' => "24", "nombre" => "LEON"),
            array ('codigo' => "25", "nombre" => "LLEcodigoA"),
            array ('codigo' => "27", "nombre" => "LUGO"),
            array ('codigo' => "28", "nombre" => "MADRID"),
            array ('codigo' => "29", "nombre" => "MALAGA"),
            array ('codigo' => "52", "nombre" => "MELILLA"),
            array ('codigo' => "30", "nombre" => "MURCIA"),
            array ('codigo' => "31", "nombre" => "NAVARRA"),
            array ('codigo' => "32", "nombre" => "OURENSE"),
            array ('codigo' => "34", "nombre" => "PALENCIA"),
            array ('codigo' => "35", "nombre" => "PALMAS, LAS"),
            array ('codigo' => "36", "nombre" => "PONTEVEDRA"),
            array ('codigo' => "26", "nombre" => "RIOJA, LA"),
            array ('codigo' => "37", "nombre" => "SALAMANCA"),
            array ('codigo' => "38", "nombre" => "SANTA CRUZ DE TENERIFE"),
            array ('codigo' => "40", "nombre" => "SEGOVIA"),
            array ('codigo' => "41", "nombre" => "SEVILLA"),
            array ('codigo' => "42", "nombre" => "SORIA"),
            array ('codigo' => "43", "nombre" => "TARRAGONA"),
            array ('codigo' => "44", "nombre" => "TERUEL"),
            array ('codigo' => "45", "nombre" => "TOLEDO"),
            array ('codigo' => "46", "nombre" => "VALENCIA"),
            array ('codigo' => "47", "nombre" => "VALLADOLID"),
            array ('codigo' => "48", "nombre" => "VIZCAYA"),
            array ('codigo' => "49", "nombre" => "ZAMORA"),
            array ('codigo' => "50", "nombre" => "ZARAGOZA")
       );
       print "Insertando provincias\n";
       DB::table('provincias')->insert($provincias);
    }
}
```
Este es un ejemplo de un Seeder en Laravel que inserta datos en una tabla llamada **"provincias"**. El Seeder utiliza un array que contiene información sobre las provincias y luego inserta ese array en la tabla utilizando el método "insert" de la clase "DB". Para ejecutar este Seeder, puedes utilizar el comando **"php artisan db:seed --class=ProvinciaSeeder"**.

### 📇Ejecución masiva de los Seeders

Para ejecutar múltiples seeders en Laravel, puedes utilizar el comando de *Artisan db:seed*. Este comando se utiliza para llenar la base de datos con datos iniciales y se ejecuta en la consola.

Por defecto, el comando **db:seed** ejecutará todos los seeders registrados en el archivo DatabaseSeeder.php en el directorio database/seeds. El archivo **DatabaseSeeder.php** debería contener una clase que extienda de **Illuminate\Database\Seeder** y que llame a los seeders individuales a través del método call.

Aquí esta el fichero **DatabaseSeeder.php** que ejecuta todo los seeders:

```js
<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(IvaSeeder::class);
        $this->call(CategoriaSeeder::class);
        $this->call(MarcaSeeder::class);
        $this->call(SubcategoriaSeeder::class);
        $this->call(ProductoSeeder::class);
        $this->call(ProvinciaSeeder::class);
        $this->call(PoblacionSeeder::class);
        $this->call(ProveedorSeeder::class);
    }
}

```
Una vez que tengas tu archivo DatabaseSeeder.php configurado, puedes ejecutar el comando db:seed en la consola de la siguiente manera:

```bash
php artisan db:seed
```
Esto ejecutará todos los seeders registrados en el archivo DatabaseSeeder.php y llenará la base de datos con los datos iniciales especificados en cada seeder.

También puede ejecutar los sideers después de ejecutar las migraciones con el siguiente comando:

```bash
php artisan migrate --seed
```



