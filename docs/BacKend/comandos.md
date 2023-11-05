---
sidebar_position: 10
---
# 📖Backup y restauración de la base datos

En este apartado desarrollaremos un sistema de Backups automáticos, programables y restauración. Para ello crearemos nuestros propios comandos **artisan** y aprenderemos a utilizar el **programador de tareas**.

## Introducción a de los Comandos Personalizados en Laravel

Los comandos personalizados en Laravel son una característica fundamental para desarrolladores y proyectos de Laravel. Proporcionan una forma eficiente de automatizar tareas, interactuar con la aplicación y ejecutar scripts personalizados desde la línea de comandos. A continuación, destacamos la importancia de los comandos personalizados en Laravel:

1. **Automatización de Tareas**: Los comandos personalizados permiten automatizar tareas repetitivas. Puedes crear comandos que realicen tareas como la generación de informes, la limpieza de registros antiguos en la base de datos o la ejecución de procesos programados.

2. **Mejora de la Productividad**: Al automatizar tareas comunes, los desarrolladores pueden ahorrar tiempo y esfuerzo. Esto mejora la productividad general al liberar a los equipos de desarrollo de tareas manuales que consumen mucho tiempo.

3. **Flexibilidad y Personalización**: Laravel ofrece una estructura organizada para crear comandos personalizados. Esto brinda a los desarrolladores la flexibilidad para personalizar y extender la funcionalidad de su aplicación de acuerdo con las necesidades específicas del proyecto.

4. **Interacción con la Aplicación**: Los comandos personalizados pueden interactuar con la aplicación de Laravel, acceder a modelos, servicios y otras partes de la aplicación. Esto permite la manipulación de datos y la realización de operaciones avanzadas.

5. **Programación de Tareas**: Los comandos personalizados son esenciales para la programación de tareas en Laravel. Puedes programar comandos para ejecutarse automáticamente en momentos específicos, lo que es útil para la generación de informes diarios, la importación de datos periódica, entre otros.

6. **Consola de Desarrollo**: Los comandos personalizados son particularmente valiosos en entornos de desarrollo y depuración. Los desarrolladores pueden utilizar la consola de comandos para probar funciones, depurar problemas y realizar operaciones específicas sin necesidad de interactuar con la interfaz web.

7. **Integración con Otras Herramientas**: Los comandos personalizados son la base para la integración de Laravel con otras herramientas y servicios. Puedes crear comandos que se conecten a API externas, generen respuestas en formato JSON o realicen copias de seguridad automáticas.

8. **Escalabilidad**: A medida que un proyecto de Laravel crece, la automatización se vuelve aún más importante. Los comandos personalizados permiten que una aplicación siga siendo escalable al manejar tareas adicionales sin aumentar la carga manual de trabajo.

9. **Claridad y Documentación del Código**: Al encapsular tareas en comandos personalizados, el código de la aplicación se vuelve más claro y organizado. Los comandos pueden servir como una forma de documentación viva que muestra cómo se ejecutan tareas específicas.

Como conclusión, los comandos personalizados en Laravel son una herramienta poderosa para mejorar la eficiencia, la productividad y la calidad del código. Su versatilidad los hace esenciales para el desarrollo de aplicaciones web robustas y altamente funcionales. Con el conocimiento de cómo crear y utilizar comandos personalizados en Laravel, los desarrolladores pueden llevar sus proyectos al siguiente nivel.

## Creación del Primer Comando

Una de las primeras y más emocionantes experiencias al trabajar con Laravel es la creación de tu propio comando personalizado. Estos comandos son fundamentales para automatizar tareas específicas de tu aplicación. Aquí te guiaremos a través del proceso de creación de tu primer comando personalizado en Laravel. En este caso crearemos el comando **backup-database** encargado de generar nuestros backups de base de datos.

### Generar el Comando

Laravel facilita la creación de comandos personalizados mediante el generador de comandos. Abre una terminal y navega hasta el directorio raíz de tu proyecto Laravel. Luego, ejecuta el siguiente comando para crear un nuevo comando:

```bash
php artisan make:command BackupDatabase
```


Esto generará un nuevo archivo de comando en el directorio `app/Console/Commands`.

### Definir la Lógica del Comando

Abre el archivo recién creado, `BackupDatabase.php`, en tu editor de código favorito. En este archivo, verás dos métodos importantes: `signature` y `handle`. 

- En el método `signature`, define el nombre y la descripción de tu comando, así como cualquier argumento o opción que pueda aceptar. Introduzca el siguiente código:

```js
  protected $signature = 'app:backup-database';
```

- En el método `handle`, coloca la lógica principal de tu comando. Aquí es donde se ejecutarán las acciones específicas cuando se invoque el comando. Introduzca el siguiente código:

```js title="Código definitivo"
<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Symfony\Component\Process\Process;

class BackupDatabase extends Command
{
    protected $signature = 'app:backup-database';

   
    protected $description = 'Backup the database using mysqldump';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        // Genera un nombre de archivo para el respaldo basado en la fecha y hora
        $filename = 'backup-' . date('d-m-Y-His') . '.sql';

        // Crea un nuevo proceso para ejecutar mysqldump
        $process = new Process([
            'mysqldump',
        //    '--routines',
            '-h' . config('database.connections.mysql.host'),
            '-P' . config('database.connections.mysql.port'),
            '-u' . config('database.connections.mysql.username'),
            '-p' . config('database.connections.mysql.password'),
            config('database.connections.mysql.database'),
        ]);

        // Ejecuta el proceso y redirige la salida al archivo
        $process->run();

        // Verifica si el proceso fue exitoso
        if ($process->isSuccessful()) {
            $this->info('Backup creado correctamente: ' . $filename);
        } else {
            $this->error('El backup fallo: ' . $process->getErrorOutput());
        }

        // Obtiene la salida del proceso
        $output = $process->getOutput();
        echo $output;
        // Obtén la ruta base de tu proyecto
        $basePath = base_path();

        // Define la ruta relativa a la carpeta de respaldo
        $relativePath = 'app/backup/' . $filename;

        // Combina la ruta base con la ruta relativa
        $file_path = $basePath . '/' . $relativePath;
        echo $file_path;

        // Guarda la salida del proceso en el archivo
        file_put_contents($file_path, $output);
    }
}
```

### Veamos punto por punto que hace el código:

1. **Definición del Comando Personalizado**

   ```js
   protected $signature = 'app:backup-database';
   ```

   - Aquí, estamos definiendo el nombre del comando personalizado que se utilizará para invocar este script desde la línea de comandos. En este caso, el nombre del comando es `app:backup-database`.

2. **Descripción del Comando**

   ```js
   protected $description = 'Backup the database using mysqldump';
   ```

   - Esta línea proporciona una breve descripción del propósito del comando, que se mostrará cuando los usuarios consulten la lista de comandos disponibles.

3. **Función `handle` para Ejecutar el Comando**

   ```js
   public function handle()
   {
       // Lógica para realizar el respaldo de la base de datos
   }
   ```

   - La función `handle` es el corazón del comando personalizado y contiene la lógica para realizar el respaldo de la base de datos.

4. **Generación del Nombre del Archivo de Respaldo**

   ```js
   $filename = 'backup-' . date('d-m-Y-His') . '.sql';
   ```

   - Aquí, generamos un nombre de archivo para el respaldo de la base de datos que incluye la fecha y hora actual en el formato `d-m-Y-His`. Esto asegura que cada respaldo tenga un nombre único.

5. **Creación de un Proceso para Ejecutar `mysqldump`**

   ```js
   $process = new Process([
       'mysqldump',
       '-h' . config('database.connections.mysql.host'),
       '-P' . config('database.connections.mysql.port'),
       '-u' . config('database.connections.mysql.username'),
       '-p' . config('database.connections.mysql.password'),
       config('database.connections.mysql.database'),
   ]);
   ```

   - Creamos un nuevo proceso utilizando la biblioteca Symfony Process. Este proceso ejecutará el comando `mysqldump` con los argumentos necesarios para realizar el respaldo de la base de datos. Los valores de host, puerto, nombre de usuario, contraseña y nombre de la base de datos se obtienen de la configuración de Laravel.

6. **Ejecución del Proceso y Redirección de la Salida**

   ```js
   $process->run();
   ```

   - Ejecutamos el proceso que hemos creado y capturamos la salida. En este punto, `mysqldump` se ejecuta y genera el respaldo de la base de datos.

7. **Verificación de Éxito del Proceso**

   ```js
   if ($process->isSuccessful()) {
       // Manejo en caso de éxito
   } else {
       // Manejo en caso de error
   }
   ```

   - Verificamos si el proceso fue exitoso. Si todo salió bien, mostramos un mensaje de éxito. Si hubo un error, mostramos un mensaje de error junto con la salida de error del proceso.

8. **Obtención de la Salida del Proceso**

   ```js
   $output = $process->getOutput();
   ```

   - Capturamos la salida del proceso, que contiene el contenido del respaldo de la base de datos.

9. **Generación de la Ruta del Archivo de Respaldo**

   ```js
   $basePath = base_path();
   $relativePath = 'app/backup/' . $filename;
   $file_path = $basePath . '/' . $relativePath;
   ```

   - Definimos la ruta completa donde se guardará el archivo de respaldo. Esto implica obtener la ruta base del proyecto, especificar la ruta relativa a la carpeta de respaldo y combinar ambas para obtener la ruta completa del archivo.

10. **Guardado del Archivo de Respaldo**

    ```js
    file_put_contents($file_path, $output);
    ```

    - Finalmente, guardamos el contenido del respaldo en el archivo correspondiente en la ruta que hemos definido. Esto crea el archivo de respaldo en el sistema de archivos.

Con este comando personalizado, puedes realizar fácilmente respaldos de tu base de datos desde la línea de comandos de Laravel. Cada paso del proceso se ha explicado detalladamente para que comprendas cómo funciona y puedas adaptarlo a tus necesidades específicas.


### ¡Ejecuta tu Comando!

:::warning Requisitos
Antes de ejecutar el comando comprueba que la variable **path** de de su sistema incluye las rutas para poder ejecutar los ficheros **mysqldump** y **php.exe**. También deberá tener creado el directorio **app/data** para realizar las preubas.
::: 

Ahora que has creado y registrado tu primer comando personalizado, puedes ejecutarlo desde la terminal. Utiliza el nombre y argumentos que definiste en la firma del comando. Por ejemplo:

```bash
php artisan app:backup-database
```

Después de ejecutar el comando, deberías ver el resultado en la consola.

```
C:\xampp\htdocs\cervezas>php artisan app:backup-database
Backup creado correctamente: backup-05-11-2023-005545.sql
```

¡Felicidades! Has creado y ejecutado con éxito tu primer comando personalizado en Laravel. Deberías encontrar el fichero de respaldo dentro de la carpeta **app/backup**.

## Restore Database

A continuación vamos a examinar como crear nuestro comando para restaurar nuestra BB.DD.

```js
<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class RestoreDatabase extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:restore {file : The path to the backup file}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Restore a database from a backup file';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $backupFile = $this->argument('file');
        $database = config('database.connections.mysql.database');
        $username = config('database.connections.mysql.username');
        $password = config('database.connections.mysql.password');
        $host = config('database.connections.mysql.host');
        $port = config('database.connections.mysql.port');
        $backupPath = base_path($backupFile);

        $command = "mysql -u $username -p$password -h $host -P $port $database < $backupPath";

        // Usar exec para ejecutar el comando
        exec($command, $output, $returnVar);

        if ($returnVar === 0) {
            $this->info('Database restored successfully.');
        } else {
            $this->error('Database restore failed.');
        }
    }
}
```
### Explicación del código:

1. **Declaración de la Clase y Propiedades:**
   ```php
   namespace App\Console\Commands;

   use Illuminate\Console\Command;
   ```

   Aquí, estamos declarando un nuevo comando en el espacio de nombres `App\Console\Commands` que extiende la clase `Command` de Laravel. Esto proporciona a la clase `RestoreDatabase` todas las funcionalidades necesarias para definir un comando de consola.

2. **Definición de la Firma del Comando:**
   ```php
   protected $signature = 'app:restore {file : The path to the backup file}';
   ```

   Esta propiedad `$signature` define la firma del comando. En este caso, el comando se llama `app:restore` y espera un argumento llamado `file` que representa la ruta al archivo de respaldo. La descripción entre llaves (`{}`) explica el propósito del argumento.

3. **Definición de la Descripción del Comando:**
   ```php
   protected $description = 'Restore a database from a backup file';
   ```

   La propiedad `$description` proporciona una descripción breve del propósito del comando.

4. **Método `handle`:**
   ```php
   public function handle()
   {
       // ...
   }
   ```

   El método `handle` es el corazón del comando. Aquí se define la lógica que se ejecutará cuando el comando sea llamado desde la línea de comandos.

5. **Obtención de Argumentos y Configuración de Variables:**
   ```php
   $backupFile = $this->argument('file');
   $database = config('database.connections.mysql.database');
   $username = config('database.connections.mysql.username');
   $password = config('database.connections.mysql.password');
   $host = config('database.connections.mysql.host');
   $port = config('database.connections.mysql.port');
   ```

   Estas líneas obtienen el valor del argumento `file` proporcionado al comando y configuran algunas variables con los detalles de la base de datos que se utilizarán para la restauración. Esto incluye el nombre de la base de datos, el nombre de usuario, la contraseña, el host y el puerto del servidor MySQL.

6. **Creación del Comando MySQL para la Restauración:**
   ```php
   $command = "mysql -u $username -p$password -h $host -P $port $database < $backupPath";
   ```

   Se crea una cadena de comandos MySQL que se utilizará para realizar la restauración. Esta cadena utiliza los valores de las variables configuradas anteriormente y la ruta al archivo de respaldo.

7. **Ejecución del Comando con `exec`:**
   ```php
   exec($command, $output, $returnVar);
   ```

   El comando se ejecuta utilizando la función `exec`. El resultado de la ejecución se almacena en el arreglo `$output`, y el valor de retorno se almacena en la variable `$returnVar`.

8. **Verificación del Resultado de la Ejecución:**
   ```php
   if ($returnVar === 0) {
       $this->info('Database restored successfully.');
   } else {
       $this->error('Database restore failed.');
   }
   ```

   Se verifica el valor de retorno (`$returnVar`). Si es igual a 0, se muestra un mensaje de éxito utilizando `$this->info()`. Si es distinto de 0, se muestra un mensaje de error utilizando `$this->error()`.

En definitiva, este comando de Laravel permite restaurar una base de datos utilizando una cadena de comandos de MySQL generada dinámicamente a partir de los argumentos y la configuración de la base de datos. El resultado de la ejecución se muestra en la consola como un mensaje de éxito o de error. Esto puede ser útil para automatizar la restauración de bases de datos desde archivos de respaldo en un entorno de desarrollo o producción.