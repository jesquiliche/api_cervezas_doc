---
sidebar_position: 2
---

# 📖Configuración BB.DD del proyecto

Para configurar una base de datos en un proyecto Laravel, necesitas realizar los siguientes pasos:


Crear una nueva base de datos en MySQL y anotar su nombre, usuario y contraseña.
En nuestro caso la BB.DD se llamara comercio, el usuario sera root sin contraseña. 

:::caution A tener en cuenta
En un sistema de producción real sería altamente recomendable cambiar el usuario y la contraseña, para evitar posibles ataques de Hacker
:::


Abrir el archivo .env en el directorio raíz de tu proyecto Laravel y actualizar las siguientes líneas con los detalles de tu base de datos:


```basch title="Configuración del archivo .env"
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=comercio
DB_USERNAME=root
DB_PASSWORD=
```
A continuación diríjase al directorio de la aplicación y ejecute el siguiente comando:

```sh
php artisan migrate
```
Si todo está configurado correctamente, puedes crear tus tablas y comenzar a trabajar con la base de datos en tu aplicación Laravel.

Si desea ahora introduce el siguiente comando en su terminal, podrá ver la pantalla de presentación de Laravel.

```bash
php artisan serve
```
Y ha continuación desde su navegador teclee **http://localhost:8000**.

![Laravel](/images/laravel10.png)
