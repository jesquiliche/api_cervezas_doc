---
sidebar_position: 6
---
# 📖Controladores
## ¿Qué es un controlador?
Un **controlador** en Laravel es una clase PHP que se encarga de manejar las solicitudes HTTP y proporcionar una respuesta apropiada. Los controladores se utilizan para agrupar el lógica de negocios y proporcionar un punto de acceso central para el manejo de solicitudes **HTTP**.

Un controlador puede contener varios métodos, cada uno de los cuales se ejecutará en respuesta a una solicitud HTTP específica. Por ejemplo, puedes tener un controlador que maneje las solicitudes para ver, crear, actualizar y eliminar registros de una tabla de la base de datos.

Para crear un controlador en Laravel, debes usar el comando php artisan make:controller seguido del nombre del controlador. Por ejemplo, para crear un controlador llamado **ProductosController**, ejecutarías el siguiente comando:

```bash
php artisan make:controller ProductosController
```

Una vez creado el controlador, puedes agregar métodos para manejar diferentes solicitudes HTTP. Por ejemplo, puedes tener un método index que muestre una lista de productos y un método store que almacene un nuevo producto en la base de datos.

Para hacer una solicitud HTTP a un controlador, debes definir una ruta en el archivo routes/web.php que apunte a un método específico en el controlador. Por ejemplo, para hacer una solicitud GET a /productos y ejecutar el método index en el controlador ProductosController, podrías agregar la siguiente ruta:

```bash
Route::get('/productos', 'ProductosController@index');
```

El controlador es una parte importante de la arquitectura de Laravel y se utiliza para separar la lógica de negocios de la lógica de presentación, lo que ayuda a mantener tu aplicación limpia y organizada.



## Creación de un controladores REST

### 📇ColorController
Para crear el controlador teclee el siguiente comando en su terminal:

```bash
php artisan make:controller Api/V1/ColorController --resource
```
La opción --resource le indica a la Laravel que cree los métodos necesarios para crear un CRUD.

Diríjase a la carpeta **App\Http\Controllers\Api\V1** y edite el archivo CategoriaController.

Seguidamente comentaremos paso a paso los para crear el controlador:

```js
<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Color; // Asegúrate de importar el modelo Color
use Illuminate\Support\Facades\Validator;


class ColorController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * Método: index
     * Ruta asociada: GET /colores
     * Descripción: Este método muestra una lista de recursos (en este caso, colores).
     */
    public function index()
    {
        // Recuperar todos los colores desde la base de datos y retornarlos como una respuesta JSON
        $colores = Color::all();
        return response()->json(['colores' => $colores]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * Método: create
     * Ruta asociada: POST /colores
    */
    
    public function store(Request $request)
    {
        // Validación de los datos del nuevo color (por ejemplo, nombre, código de color).
        $validator = Validator::make($request->all(), [
            'nombre' => 'required|string|max:255|unique:colores'
        ]);
        
        if($validator->fails()){
            return response()->json($validator->errors(),422); 
        }

        //Debe estar configurado fillable en el modelo para 
        //utilizar inserción masiva
        $color=Color::create($request->all());
       
        // Retornar una respuesta JSON que confirma la creación exitosa del color.
        return response()->json(['message' => 'Color creado con éxito', 'color' => $color]);
    }

    /**
     * Display the specified resource.
     *
     * Método: show
     * Ruta asociada: GET /colors/{id}
     * Descripción: Este método muestra un recurso (color) específico identificado por su ID.
     */
    public function show(string $id)
    {
        // Buscar el color por su ID en la base de datos y retornarlo como una respuesta JSON.
        $color = Color::find($id);

        if (!$color) {
            return response()->json(['message' => 'Color no encontrado'], 404);
        }


        return response()->json(['color' => $color]);
    }

    
    /**
     * Update the specified resource in storage.
     *
     * Método: update
     * Ruta asociada: PUT/PATCH /colores/{id}
     * Descripción: Este método actualiza un recurso (color) específico identificado por su ID en el almacenamiento.
     */
    public function update(Request $request, string $id)
    {
        // Validación de los datos actualizados del color.
        $validator = Validator::make([
            'nombre' => 'required|string|max:255|unique:colores'
        ]);

        if($validator->fails()){
            return response()->json($validator->errors(),422); 
        }
        

        // Buscar el color por su ID en la base de datos.
        $color = Color::find($id);

        if (!$color) {
            return response()->json(['message' => 'Color no encontrado'], 404);
        }

        // Actualizar los datos del color con los datos validados.
        $color->update($validator);

        // Retornar una respuesta JSON que confirma la actualización exitosa del color.
        return response()->json(['message' => 'Color actualizado con éxito', 'color' => $color]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * Método: destroy
     * Ruta asociada: DELETE /colores/{id}
     * Descripción: Este método elimina un recurso (color) específico identificado por su ID del almacenamiento.
     */
    public function destroy(string $id)
    {
        // Buscar el color por su ID en la base de datos.
        $color = Color::find($id);

        if (!$color) {
            return response()->json(['message' => 'Color no encontrado'], 404);
        }

        // Eliminar el color de la base de datos.
        $color->delete();

        // Retornar una respuesta JSON que confirma la eliminación exitosa del color.
        return response()->json(['message' => 'Color eliminado con éxito']);
    }
}
```
1. Hemos añadido dos clases: Color y la clase Validator.

:::tip La clase validator
La clase `Validator` en Laravel es una parte fundamental del sistema de validación de datos de Laravel. Proporciona una forma conveniente y poderosa de validar los datos de entrada de una solicitud antes de procesarlos o almacenarlos en la base de datos. Laravel utiliza esta clase para llevar a cabo la validación de datos, y es ampliamente utilizada en controladores, formularios, y en otros lugares donde es necesario garantizar la integridad de los datos.

Aquí hay algunas características y conceptos clave relacionados con la clase `Validator` en Laravel:

1. **Creación de un Validador**: Puedes crear una instancia de la clase `Validator` pasando los datos que deseas validar y las reglas de validación. Las reglas de validación se definen como un array asociativo donde las claves son los nombres de los campos y los valores son las reglas de validación que se deben aplicar.

   ```php
   $validator = Validator::make($data, [
       'nombre' => 'required|string|max:255',
       'correo' => 'required|email|unique:users',
   ]);
   ```

2. **Reglas de Validación**: Las reglas de validación son expresiones que especifican cómo se debe validar un campo. Laravel proporciona una amplia variedad de reglas de validación predefinidas, como 'required', 'numeric', 'email', 'unique', 'max', 'min', entre otras. También puedes crear tus propias reglas de validación personalizadas si es necesario.

3. **Mensajes de Error Personalizados**: Puedes personalizar los mensajes de error para cada regla de validación si deseas proporcionar mensajes más descriptivos.

   ```php
   $messages = [
       'nombre.required' => 'El nombre es obligatorio.',
       'correo.email' => 'El correo debe ser una dirección de correo electrónico válida.',
   ];
   ```

4. **Evaluación de Validación**: Una vez que has creado una instancia del validador, puedes evaluar la validación utilizando el método `validate()`. Este método devolverá `true` si la validación es exitosa y lanzará una excepción `ValidationException` si la validación falla.

   ```php
   if ($validator->validate()) {
       // La validación fue exitosa
   }
   ```

5. **Recuperación de Errores**: Si la validación falla, puedes recuperar los errores generados por el validador. Esto es útil para mostrar mensajes de error al usuario.

   ```php
   if ($validator->fails()) {
       $errors = $validator->errors();
       // Puedes acceder a los errores individualmente, por ejemplo: $errors->first('nombre')
   }
   ```

6. **Validación en Controladores**: La validación se usa comúnmente en controladores para garantizar que los datos de entrada cumplan con ciertas reglas antes de procesarlos o almacenarlos en la base de datos. Esto ayuda a mantener la integridad de los datos y a prevenir problemas de seguridad.

7. **Middleware de Validación**: Laravel también proporciona middleware de validación que se puede utilizar para validar los datos antes de que lleguen al controlador. Esto es especialmente útil para formularios web y API.

8. **Personalización de Reglas de Validación**: Puedes personalizar las reglas de validación y crear reglas personalizadas si tus requisitos son más específicos que las reglas de validación predefinidas.
:::

:::tip Reglas de validación más comunes
Claro, aquí tienes ejemplos de algunas de las reglas de validación más comunes en Laravel:

1. **required**: El campo debe estar presente y no puede estar en blanco.

```php
'nombre' => 'required'
```

2. **email**: El campo debe ser una dirección de correo electrónico válida.

```php
'correo' => 'email'
```

3. **numeric**: El campo debe ser un valor numérico.

```php
'edad' => 'numeric'
```

4. **alpha**: El campo debe contener solo letras del alfabeto.

```php
'nombre' => 'alpha'
```

5. **integer**: El campo debe ser un número entero.

```php
'cantidad' => 'integer'
```

6. **min:valor**: El campo debe tener un valor numérico mayor o igual que "valor".

```php
'edad' => 'min:18'
```

7. **max:valor**: El campo debe tener un valor numérico menor o igual que "valor".

```php
'puntaje' => 'max:100'
```

8. **between:min,max**: El campo debe tener un valor numérico que esté dentro del rango especificado.

```php
'nota' => 'between:0,10'
```

9. **in:foo,bar,...**: El campo debe estar en la lista de valores permitidos.

```php
'color' => 'in:rojo,verde,azul'
```

10. **not_in:foo,bar,...**: El campo no debe estar en la lista de valores prohibidos.

```php
'rol' => 'not_in:admin,superadmin'
```

11. **date**: El campo debe ser una fecha válida.

```php
'fecha_nacimiento' => 'date'
```

12. **before:date**: El campo debe ser una fecha anterior a la fecha especificada.

```php
'fecha_vencimiento' => 'before:2023-12-31'
```

13. **after:date**: El campo debe ser una fecha posterior a la fecha especificada.

```php
'fecha_inicio' => 'after:2023-01-01'
```

Estos son solo ejemplos de algunas reglas de validación comunes en Laravel. Puedes combinar varias reglas en una sola validación y personalizar los mensajes de error según tus necesidades específicas. La validación de datos es una parte fundamental de cualquier aplicación web para garantizar la integridad de los datos recibidos.
:::


### 📇TiposController
Para el controlador teclee el siguiente comando en su terminal:

```bash
php artisan make:controller Api/V1/TipoController
```
Diríjase a la carpeta **App\Http\Controllers\Api\V1** y edite el archivo TipoController.

Seguidamente comentaremos paso a paso los para crear el controlador:

1. De momento teclee el siguiente código

```js
<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Tipo;
use Illuminate\Support\Facades\Validator;


class TipoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * Método: index
     * Ruta asociada: GET /tipos
     * Descripción: Este método muestra una lista de recursos (en este caso, tipoes).
     */
    public function index()
    {
        // Recuperar todos los tipoes desde la base de datos y retornarlos como una respuesta JSON
        $tipos = Tipo::all();
        return response()->json(['tipos' => $tipos]);
    }

    
    public function store(Request $request)
    {
        // Validación de los datos del nuevo tipo (por ejemplo, nombre, código de tipo).
        $validator = Validator::make($request->all(), [
            'nombre' => 'required|string|max:150|unique:tipos'
        ]);
        
        if($validator->fails()){
            return response()->json($validator->errors(),422); 
        }

        //Debe estar configurado fillable en el modelo para 
        //utilizar inserción masiva
        $tipo=Tipo::create($request->all());
       
        // Retornar una respuesta JSON que confirma la creación exitosa del tipo.
        return response()->json(['message' => 'Tipo creado con éxito', 'tipo' => $tipo]);
    }

    /**
     * Display the specified resource.
     *
     * Método: show
     * Ruta asociada: GET /tipos/{id}
     * Descripción: Este método muestra un recurso (tipo) específico identificado por su ID.
     */
    public function show(string $id)
    {
        // Buscar el tipo por su ID en la base de datos y retornarlo como una respuesta JSON.
        $tipo = Tipo::find($id);

        if (!$tipo) {
            return response()->json(['message' => 'Tipo no encontrado'], 404);
        }


        return response()->json(['Tipo' => $tipo]);
    }

    
    /**
     * Update the specified resource in storage.
     *
     * Método: update
     * Ruta asociada: PUT/PATCH /tipos/{id}
     * Descripción: Este método actualiza un recurso (tipo) específico identificado por su ID en el almacenamiento.
     */
    public function update(Request $request, string $id)
    {
        // Validación de los datos actualizados del tipo.
        $validator = Validator::make([
            'nombre' => 'required|string|max:150|unique:tipoes'
        ]);

        if($validator->fails()){
            return response()->json($validator->errors(),422); 
        }
        

        // Buscar el tipo por su ID en la base de datos.
        $tipo = Tipo::find($id);

        if (!$tipo) {
            return response()->json(['message' => 'tipo no encontrado'], 404);
        }

        // Actualizar los datos del tipo con los datos validados.
        $tipo->update($tipo);

        // Retornar una respuesta JSON que confirma la actualización exitosa del tipo.
        return response()->json(['message' => 'Tipo actualizado con éxito', 'tipo' => $tipo]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * Método: destroy
     * Ruta asociada: DELETE /tipos/{id}
     * Descripción: Este método elimina un recurso (tipo) específico identificado por su ID del almacenamiento.
     */
    public function destroy(string $id)
    {
        // Buscar el tipo por su ID en la base de datos.
        $tipo = Tipo::find($id);

        if (!$tipo) {
            return response()->json(['message' => 'Tipo no encontrado'], 404);
        }

        // Eliminar el tipo de la base de datos.
        $tipo->delete();

        // Retornar una respuesta JSON que confirma la eliminación exitosa del tipo.
        return response()->json(['message' => 'Tipo eliminado con éxito']);
    }
}
```
