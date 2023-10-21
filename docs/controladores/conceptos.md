---
sidebar_position: 1
---
# 📖Conceptos básicos
![Conceptos](/assets/images/rest_api.png)

## Conceptos
**Recursos:** Un recurso es cualquier elemento o entidad sobre la que se realizan operaciones en una API REST. Por ejemplo, un usuario, una tarea, una publicación, etc. Cada recurso se identifica de manera única mediante una dirección URL.

**Representaciones:** Una representación es la forma en que un recurso se presenta al cliente. Por ejemplo, un recurso puede estar representado como un JSON o como un XML. La representación de un recurso es lo que se envía al cliente como respuesta a una petición.

**Verbos HTTP:** Los verbos HTTP son los comandos que se utilizan para interactuar con los recursos. 

Estos son los conceptos básicos de API REST y suelen ser suficientes para crear aplicaciones simples. Sin embargo, existen otros verbos HTTP y conceptos más avanzados que también pueden ser útiles en algunos casos.

## Verbos HTTP

Los **verbos HTTP** son los comandos que se utilizan para interactuar con los recursos en una API REST. Aquí está una explicación detallada de los verbos HTTP más comunes:

- **GET:** Este verbo se utiliza para obtener información de un recurso o de un conjunto de recursos. Por ejemplo, si queremos obtener la información de un usuario específico, realizaríamos una petición GET a la URL que representa ese usuario. La respuesta a esta petición sería la representación del usuario en cuestión.

- **POST**: Este verbo se utiliza para crear un nuevo recurso. Por ejemplo, si queremos crear un nuevo usuario, realizaríamos una petición POST a la URL que representa el conjunto de usuarios. La petición incluiría la información necesaria para crear el nuevo usuario, y la respuesta a la petición sería la representación del usuario recién creado.

- **PUT:** Este verbo se utiliza para actualizar un recurso existente. Por ejemplo, si queremos actualizar la información de un usuario específico, realizaríamos una petición PUT a la URL que representa ese usuario. La petición incluiría la información actualizada, y la respuesta a la petición sería la representación del usuario actualizado.

- **DELETE:** Este verbo se utiliza para eliminar un recurso existente. Por ejemplo, si queremos eliminar un usuario específico, realizaríamos una petición DELETE a la URL que representa ese usuario. La respuesta a esta petición confirmaría que el usuario ha sido eliminado.

Estos son los verbos HTTP más comunes en API REST, y en la mayoría de los casos son suficientes para implementar una API REST. Sin embargo, existen otros verbos HTTP menos utilizados que también pueden ser útiles en algunos casos. Es importante tener en cuenta que los verbos HTTP deben ser utilizados de manera coherente para garantizar la compatibilidad con los clientes y para mantener la consistencia en la API.

## Peticiones Request y Response

Las peticiones **Request** y **Response** son parte integral del funcionamiento de las API REST. Una petición Request es una solicitud hecha por un cliente a un servidor para recibir algún tipo de información o realizar una acción. Por otro lado, una respuesta Response es la respuesta que el servidor le da al cliente a una petición Request.

Una petición **Request** puede incluir información adicional, como los datos que se van a enviar a un servidor, el formato en el que se quiere recibir la información (por ejemplo, JSON o XML), el método HTTP que se está utilizando (GET, POST, PUT, DELETE, entre otros) y la URL a la que se está haciendo la petición.

Por su parte, una respuesta Response puede incluir información como el código de estado HTTP (por ejemplo, 200 OK si la petición fue exitosa o 404 Not Found si la URL especificada no existe), los datos que se están enviando como respuesta, el formato de los datos (por ejemplo, JSON o XML) y cualquier cabecera HTTP adicional.

:::tip JSON
JSON es un formato de intercambio de datos ligeros y de fácil lectura para los humanos. JSON es una sigla que significa "JavaScript Object Notation".

JSON es un formato de texto plano que se utiliza para transmitir información en la Web. La información se almacena como un objeto de JavaScript, que es una colección de pares clave-valor. La clave es una cadena y el valor puede ser una cadena, número, objeto, matriz u otro tipo de valor.

Ejemplo de un objeto JSON:

```js
{
  "nombre": "John Doe",
  "edad": 32,
  "email": "johndoe@ejemplo.com",
  "direccion": {
    "calle": "1ra Calle",
    "ciudad": "Ciudad de Prueba",
    "pais": "País de Prueba"
  }
}
```
JSON es ampliamente compatible con diferentes lenguajes de programación, incluidos JavaScript, PHP, Python, Ruby, Java, C# y muchos otros. Esto hace que sea fácil de leer y escribir, lo que lo hace ideal para su uso en aplicaciones web y móviles.

Además, JSON es muy similar a la sintaxis de objetos y matrices de JavaScript, lo que lo hace fácil de entender y usar para los desarrolladores de JavaScript. Esto hace que JSON sea una de las opciones más populares para la transmisión de datos en la Web.
:::


