---
sidebar_position: 1
---
# 📖Conceptos básicos
![Conceptos](/assets/images/rest_api.png)

## ¿Qué es una API REST?

La definición de La industria en el contexto de las API REST se refiere a cómo las API REST se utilizan en diversas industrias y aplicaciones para permitir La comunicación y La integración de sistemas y servicios. Las API REST son una tecnología ampliamente utilizada en una variedad de industrias y aplicaciones debido a su simplicidad, escalabilidad y capacidad para facilitar La interoperabilidad entre sistemas. Aquí tienes algunos ejemplos de cómo las API REST se aplican en diferentes sectores:

1. Tecnología financiera (FinTech): En La industria financiera, las API REST se utilizan para permitir La integración de sistemas bancarios, plataformas de pagos en línea y aplicaciones móviles. Por ejemplo, las API REST pueden permitir a una aplicación móvil acceder a los datos de una cuenta bancaria de un usuario y realizar transacciones.

2. Comercio electrónico: En el comercio electrónico, las API REST se utilizan para conectar sitios web de comercio electrónico con sistemas de gestión de inventario, sistemas de pago y servicios de envío. Esto facilita La creación de experiencias de compra en línea fluidas y eficientes.

3. Redes sociales: Plataformas de redes sociales como Facebook, Twitter e Instagram ofrecen API REST que permiten a los desarrolladores acceder a datos y funcionalidades de estas plataformas, lo que facilita La integración de inicio de sesión social y compartir contenido en aplicaciones de terceros.

4. Internet de las cosas (IoT): En el ámbito del IoT, las API REST se utilizan para que los dispositivos conectados se comuniquen con servidores y otros dispositivos a través de La web. Esto es fundamental para recopilar datos y controlar dispositivos a distancia.

5. Salud: En La industria de La salud, las API REST se utilizan para conectar sistemas de registro médico electrónico, aplicaciones de telemedicina y dispositivos médicos para facilitar el intercambio de información de salud y mejorar La atención al paciente.

6. Transporte y logística: Las empresas de transporte y logística utilizan API REST para rastrear envíos, gestionar rutas y optimizar La logística de entrega a través de sistemas integrados.

7. Educación: En el ámbito educativo, las API REST se utilizan para integrar sistemas de gestión del aprendizaje, aplicaciones de programación de clases y sistemas de gestión de campus, lo que facilita La administración y el acceso a los recursos educativos.

Estos son solo algunos ejemplos de cómo las API REST se aplican en diferentes industrias. En resumen, las API REST son una herramienta versátil que se utiliza en una amplia variedad de sectores para permitir La comunicación y La integración de sistemas y servicios, lo que brinda flexibilidad y eficiencia en el desarrollo de aplicaciones y La automatización de procesos empresariales.

## Conceptos
**Recursos:** Un recurso es cualquier elemento o entidad sobre La que se realizan operaciones en una API REST. Por ejemplo, un usuario, una tarea, una publicación, etc. Cada recurso se identifica de manera única mediante una dirección URL.

**Representaciones:** Una representación es La forma en que un recurso se presenta al cliente. Por ejemplo, un recurso puede estar representado como un JSON o como un XML. La representación de un recurso es lo que se envía al cliente como respuesta a una petición.

**Verbos HTTP:** Los verbos HTTP son los comandos que se utilizan para interactuar con los recursos. 

Estos son los conceptos básicos de API REST y suelen ser suficientes para crear aplicaciones simples. Sin embargo, existen otros verbos HTTP y conceptos más avanzados que también pueden ser útiles en algunos casos.

## Verbos HTTP

Los **verbos HTTP** son los comandos que se utilizan para interactuar con los recursos en una API REST. Aquí está una explicación detallada de los verbos HTTP más comunes:

- **GET:** Este verbo se utiliza para obtener información de un recurso o de un conjunto de recursos. Por ejemplo, si queremos obtener La información de un usuario específico, realizaríamos una petición GET a La URL que representa ese usuario. La respuesta a esta petición sería La representación del usuario en cuestión.

- **POST**: Este verbo se utiliza para crear un nuevo recurso. Por ejemplo, si queremos crear un nuevo usuario, realizaríamos una petición POST a La URL que representa el conjunto de usuarios. La petición incluiría La información necesaria para crear el nuevo usuario, y La respuesta a La petición sería La representación del usuario recién creado.

- **PUT:** Este verbo se utiliza para actualizar un recurso existente. Por ejemplo, si queremos actualizar La información de un usuario específico, realizaríamos una petición PUT a La URL que representa ese usuario. La petición incluiría La información actualizada, y La respuesta a La petición sería La representación del usuario actualizado.

- **DELETE:** Este verbo se utiliza para eliminar un recurso existente. Por ejemplo, si queremos eliminar un usuario específico, realizaríamos una petición DELETE a La URL que representa ese usuario. La respuesta a esta petición confirmaría que el usuario ha sido eliminado.

Estos son los verbos HTTP más comunes en API REST, y en La mayoría de los casos son suficientes para implementar una API REST. Sin embargo, existen otros verbos HTTP menos utilizados que también pueden ser útiles en algunos casos. Es importante tener en cuenta que los verbos HTTP deben ser utilizados de manera coherente para garantizar La compatibilidad con los clientes y para mantener La consistencia en La API.

## Peticiones Request y Response

Las peticiones **Request** y **Response** son parte integral del funcionamiento de las API REST. Una petición Request es una solicitud hecha por un cliente a un servidor para recibir algún tipo de información o realizar una acción. Por otro lado, una respuesta Response es La respuesta que el servidor le da al cliente a una petición Request.

Una petición **Request** puede incluir información adicional, como los datos que se van a enviar a un servidor, el formato en el que se quiere recibir La información (por ejemplo, JSON o XML), el método HTTP que se está utilizando (GET, POST, PUT, DELETE, entre otros) y La URL a La que se está haciendo La petición.

Por su parte, una respuesta Response puede incluir información como el código de estado HTTP (por ejemplo, 200 OK si La petición fue exitosa o 404 Not Found si La URL especificada no existe), los datos que se están enviando como respuesta, el formato de los datos (por ejemplo, JSON o XML) y cualquier cabecera HTTP adicional.

:::tip JSON
JSON es un formato de intercambio de datos ligeros y de fácil lectura para los humanos. JSON es una sigla que significa "JavaScript Object Notation".

JSON es un formato de texto plano que se utiliza para transmitir información en La Web. La información se almacena como un objeto de JavaScript, que es una colección de pares clave-valor. La clave es una cadena y el valor puede ser una cadena, número, objeto, matriz u otro tipo de valor.

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

Además, JSON es muy similar a La sintaxis de objetos y matrices de JavaScript, lo que lo hace fácil de entender y usar para los desarrolladores de JavaScript. Esto hace que JSON sea una de las opciones más populares para La transmisión de datos en La Web.
:::

## ¿Qué diferencia hay entre REST y RESTFULL?

La diferencia entre REST y RESTful radica en el grado en que una API web sigue los principios y las mejores prácticas del estilo arquitectónico REST. Aquí te explico ambas definiciones:

1. REST (Transferencia de Estado Representacional):
   - REST, abreviatura de "Transferencia de Estado Representacional," es un estilo arquitectónico para el diseño de sistemas de software distribuidos. Fue propuesto por Roy Fielding en su tesis doctoral en 2000.
   - REST se basa en una serie de principios y restricciones, como La representación de recursos, La comunicación sin estado, el uso de operaciones estándar de HTTP (GET, POST, PUT, DELETE), entre otros.
   - REST establece las pautas generales para el diseño de API web, pero no especifica detalles específicos sobre cómo debe implementarse una API.

2. RESTful (API RESTful):
   - Una API que sigue los principios y las mejores prácticas de REST se denomina "RESTful." En otras palabras, una API RESTful es una implementación concreta de una API web que adhiere a los principios de REST.
   - Una API RESTful se caracteriza por utilizar URLs y métodos HTTP de manera coherente, representar recursos de forma adecuada y utilizar códigos de estado HTTP de manera significativa. Además, se enfoca en La simplicidad, La escalabilidad y La interoperabilidad.
   - Una API RESTful sigue las restricciones de REST y busca crear una interfaz uniforme que sea fácil de entender y utilizar.

La principal diferencia entre REST y RESTful radica en que REST es un conjunto de principios y restricciones arquitectónicas, mientras que RESTful se refiere a una implementación específica de una API que cumple con esos principios y sigue las mejores prácticas de REST. En La práctica, muchas API web se describen como RESTful cuando están diseñadas siguiendo los principios de REST de manera coherente.

### Ejemplo

**Ejemplo de REST:**
Supongamos que se crea una API para administrar una lista de tareas. Aunque se utiliza el protocolo HTTP, no se siguen todas las mejores prácticas de REST:

- Para obtener la lista de tareas, la API utiliza la URL `/getTasks`.
- Para agregar una tarea, la API utiliza la URL `/addTask`.
- Para actualizar una tarea, la API utiliza la URL `/updateTask`.
- Para eliminar una tarea, la API utiliza la URL `/deleteTask`.

En este caso, las URLs no siguen una convención de nombres de recursos y operaciones que sería más coherente con REST. Además, no se utilizan los métodos HTTP estándar (GET, POST, PUT, DELETE) de manera adecuada.

**Ejemplo de RESTful:**
Ahora, consideremos una API de lista de tareas que sigue los principios de REST:

- Para obtener la lista de tareas, la API utiliza la URL `/tasks` con el método HTTP GET.
- Para agregar una tarea, la API utiliza la URL `/tasks` con el método HTTP POST.
- Para actualizar una tarea, la API utiliza la URL `/tasks/{id}` con el método HTTP PUT.
- Para eliminar una tarea, la API utiliza la URL `/tasks/{id}` con el método HTTP DELETE.

En este ejemplo RESTful, las URLs son más descriptivas y siguen la convención de utilizar sustantivos en plural para los recursos y métodos HTTP estándar para las operaciones. Esto hace que la API sea más fácil de entender y utilizar, y cumple con las pautas de REST de una manera más coherente.

La diferencia entre REST y RESTful radica en cómo se diseñan las URLs y se utilizan los métodos HTTP, siguiendo las mejores prácticas y principios de REST en una implementación específica de una API web.

## Buenas practicas

1. **Usar sustantivos en plural para los recursos:** Nombres de recursos como "usuarios," "tareas," o "productos" deben estar en plural, lo que facilita la comprensión y la consistencia. Por ejemplo, `/usuarios` en lugar de `/usuario`.

2. **Utilizar métodos HTTP de manera apropiada:**
   - `GET`: Para obtener información o recursos.
   - `POST`: Para crear un nuevo recurso.
   - `PUT`: Para actualizar un recurso existente.
   - `DELETE`: Para eliminar un recurso.

3. **Utilizar códigos de estado HTTP apropiados:** Utilizar códigos de estado HTTP estándar (por ejemplo, 200 OK, 201 Created, 204 No Content, 404 Not Found, 400 Bad Request, 401 Unauthorized) para indicar el resultado de una solicitud.

4. **Versionar la API:** Incluir una versión en la URL de la API (por ejemplo, `/v1/resource`) para permitir futuras actualizaciones sin afectar a los clientes existentes.

5. **Proporcionar documentación detallada:** Ofrecer documentación clara y completa que describa cómo utilizar la API, incluyendo descripciones de recursos, ejemplos de solicitud y respuesta, y ejemplos de código.

6. **Mantener la consistencia:** Mantener una estructura de URL y una nomenclatura coherentes en toda la API. Esto hace que la API sea más predecible y fácil de usar.

7. **Gestionar errores adecuadamente:** Devolver respuestas de error con información útil y coherente, incluyendo un código de estado, un mensaje de error y detalles adicionales si es necesario.

8. **Utilizar autenticación y autorización:** Implementar sistemas de autenticación y autorización para proteger los recursos y garantizar que solo los usuarios autorizados tengan acceso a ciertas partes de la API.

9. **Utilizar SSL/TLS:** Proteger las comunicaciones entre el cliente y el servidor mediante el uso de HTTPS para garantizar la seguridad de los datos transmitidos.

10. **Permitir paginación y filtrado:** Si la API devuelve grandes conjuntos de datos, permitir a los clientes paginar los resultados y filtrarlos para obtener solo la información relevante.

11. **Optimizar la latencia:** Utilizar técnicas como la compresión de datos y el almacenamiento en caché para reducir la latencia y mejorar el rendimiento.

12. **No utilizar verbos en las URL:** Evitar incluir verbos como "get" o "update" en las URL. En su lugar, utilizar los métodos HTTP para indicar la operación.

13. **Evitar rutas profundas:** Mantener las rutas de URL simples y poco profundas para evitar complicaciones innecesarias.

14. **Usar HATEOAS (Hypertext as the Engine of Application State):** Proporcionar enlaces (hipervínculos) a recursos relacionados en las respuestas para facilitar la navegación y el descubrimiento de la API.

Estas son algunas de las buenas prácticas clave para diseñar una API RESTful eficiente y fácil de usar. Seguir estas pautas puede ayudarte a crear una API que sea escalable, mantenible y que proporcione una experiencia consistente a los desarrolladores que la utilizan.

