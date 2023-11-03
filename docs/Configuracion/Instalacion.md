---
sidebar_position: 1
---

# 📖Instalación de Laravel 10
![Seeder](/assets/images/install.jpg)

## Instalación
Para instalar **Laravel 10**, necesitará tener **PHP** y un gestor de paquetes como **Composer** instalados en su sistema. Siga estos pasos para instalar Laravel 10:

Existen dos métodos para instalar Laravel

:::tip Instalación local vs global
La diferencia entre una instalación global y una local de Laravel 10 radica en dónde se encuentra disponible el comando Laravel para su uso.

Una instalación global de Laravel significa que el comando Laravel está disponible en cualquier ubicación en tu sistema, lo que te permite crear nuevos proyectos de Laravel y ejecutar comandos de Laravel desde cualquier directorio.

Por otro lado, una instalación local de Laravel significa que el comando laravel sólo está disponible dentro del directorio del proyecto Laravel en el que lo instalaste.

En general, se recomienda realizar una instalación global de Laravel si deseas tener la capacidad de crear y gestionar varios proyectos de Laravel desde diferentes ubicaciones en tu sistema. Por otro lado, si sólo deseas trabajar en un único proyecto de Laravel, una instalación local puede ser más adecuada.
:::

Abra su terminal o línea de comandos.

Ejecute el siguiente comando para descargar la última versión de Laravel:

:::tip Información
Nuestro proyecto se llamara api_comercio, sustituir nombre de proyecto por api_comercio.
:::
```bash title="Instalación local"
composer create-project --prefer-dist laravel/laravel nombre_de_proyecto "10.*"
```
```bash title="Instalación global"
composer global require laravel/installer
laravel new nombre_de_proyecto
```

Una vez que la descarga esté completa, acceda a la carpeta del proyecto con el siguiente comando:

```bash
cd nombre_de_proyecto
```
Finalmente, ejecute el siguiente comando para verificar la instalación:
```bash
php artisan serve
```
Esto debería iniciar un servidor local y abrir Laravel en su navegador en la dirección http://localhost:8000.

Ahora está listo para comenzar a desarrollar su aplicación con Laravel 10.

## Estructura del proyecto

La estructura de un proyecto Laravel se divide en varias carpetas principales, que incluyen:

- **app**: Contiene la lógica de la aplicación, como modelos, controladores y - middleware.

- **config**: Contiene archivos de configuración para la aplicación.

- **database**: Contiene archivos relacionados con la base de datos, como migraciones y seeds.

- **public**: Contiene archivos estáticos como imágenes, CSS y JavaScript, que se pueden acceder directamente desde el navegador.

- **resources**: Contiene archivos de vistas, archivos de lenguaje y archivos de recursos.

- **routes**: Contiene las definiciones de rutas para la aplicación.

- **storage**: Contiene archivos generados dinámicamente por la aplicación, como caché y archivos subidos por el usuario.

- **tests**: Contiene pruebas unitarias para la aplicación.

- **vendor**: Contiene paquetes de terceros que se utilizan en la aplicación.

- **.env**: Contiene las variables de entorno de la aplicación.

- **composer.json**: Contiene las dependencias y la información del proyecto para el administrador de paquetes Composer.

- **.gitignore**: Contiene una lista de archivos que deben ser ignorados por Git.

Esta es una descripción general de la estructura de un proyecto Laravel. Cada proyecto puede tener una estructura ligeramente diferente según las necesidades específicas de cada aplicación.

### Configuración de idioma

Los mensajes de validación de Laravel pueden ser traducidos a varios idiomas entre ellos el Español.  En la versión actual de Laravel 10 por defecto no viene el directorio **“/lang”**, para poder personalizar los idiomas en Laravel como el Español por ejemplo. Vamos a ver como llevar esta tarea a cabo. 

- Desde su terminal teclee y ejecute el siguiente comando:

```bash
php artisan lang:publish
```

- Instalar el paquete de Laravel Lang.
Laravel Lang es un paquete de Laravel para instalar paquetes de idiomas en nuestra aplicación. Para instalar laravel Lang ejecutamos el siguiente comando:

```bash
composer require laravel-lang/common --dev
```

- Una vez instalado el paquete de Laravel Lang añadimos el idioma español con el siguiente comando:

```bash
php artisan lang:add es
```

- Por último, actualizamos el paquete de Laravel Lang.

```bash
php artisan lang:update
```

### Cambiar la configuración del idioma

Lo último, es cambiar la configuración del idioma del nuestro proyecto, abrimos el archivo “app.php” en el directorio “/config” y cambiamos la siguiente linea de código a “es”.

```js
'locale' => 'es',
```

Una vez realizado este proceso ya dispondremos de Laravel traducido al eapañol.