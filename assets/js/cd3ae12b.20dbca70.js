"use strict";(self.webpackChunkapi_laravel_doc=self.webpackChunkapi_laravel_doc||[]).push([[516],{3905:(e,a,n)=>{n.d(a,{Zo:()=>p,kt:()=>g});var o=n(7294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function t(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?t(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):t(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,o,r=function(e,a){if(null==e)return{};var n,o,r={},t=Object.keys(e);for(o=0;o<t.length;o++)n=t[o],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(o=0;o<t.length;o++)n=t[o],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),d=function(e){var a=o.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):s(s({},a),e)),n},p=function(e){var a=d(e.components);return o.createElement(l.Provider,{value:a},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return o.createElement(o.Fragment,{},a)}},m=o.forwardRef((function(e,a){var n=e.components,r=e.mdxType,t=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=d(n),m=r,g=c["".concat(l,".").concat(m)]||c[m]||u[m]||t;return n?o.createElement(g,s(s({ref:a},p),{},{components:n})):o.createElement(g,s({ref:a},p))}));function g(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var t=n.length,s=new Array(t);s[0]=m;var i={};for(var l in a)hasOwnProperty.call(a,l)&&(i[l]=a[l]);i.originalType=e,i[c]="string"==typeof e?e:r,s[1]=i;for(var d=2;d<t;d++)s[d]=n[d];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6917:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>t,metadata:()=>i,toc:()=>d});var o=n(7462),r=(n(7294),n(3905));const t={sidebar_position:6},s="\ud83d\udcd6Controladores",i={unversionedId:"controladores/controladores",id:"controladores/controladores",title:"\ud83d\udcd6Controladores",description:"\xbfQu\xe9 es un controlador?",source:"@site/docs/controladores/controladores.md",sourceDirName:"controladores",slug:"/controladores/",permalink:"/api_cervezas_doc/docs/controladores/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/controladores/controladores.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcd6Conceptos b\xe1sicos",permalink:"/api_cervezas_doc/docs/controladores/conceptos"},next:{title:"\ud83d\udcd6Rutas",permalink:"/api_cervezas_doc/docs/controladores/rutas"}},l={},d=[{value:"\xbfQu\xe9 es un controlador?",id:"qu\xe9-es-un-controlador",level:2},{value:"Creaci\xf3n de un controladores REST",id:"creaci\xf3n-de-un-controladores-rest",level:2},{value:"\ud83d\udcc7ColorController",id:"colorcontroller",level:3},{value:"\ud83d\udcc7TipoController",id:"tipocontroller",level:3},{value:"\ud83d\udcc7PaisController",id:"paiscontroller",level:3},{value:"\ud83d\udcc7GraduacionController",id:"graduacioncontroller",level:3}],p={toc:d},c="wrapper";function u(e){let{components:a,...n}=e;return(0,r.kt)(c,(0,o.Z)({},p,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"controladores"},"\ud83d\udcd6Controladores"),(0,r.kt)("h2",{id:"qu\xe9-es-un-controlador"},"\xbfQu\xe9 es un controlador?"),(0,r.kt)("p",null,"Un ",(0,r.kt)("strong",{parentName:"p"},"controlador")," en Laravel es una clase PHP que se encarga de manejar las solicitudes HTTP y proporcionar una respuesta apropiada. Los controladores se utilizan para agrupar el l\xf3gica de negocios y proporcionar un punto de acceso central para el manejo de solicitudes ",(0,r.kt)("strong",{parentName:"p"},"HTTP"),"."),(0,r.kt)("p",null,"Un controlador puede contener varios m\xe9todos, cada uno de los cuales se ejecutar\xe1 en respuesta a una solicitud HTTP espec\xedfica. Por ejemplo, puedes tener un controlador que maneje las solicitudes para ver, crear, actualizar y eliminar registros de una tabla de la base de datos."),(0,r.kt)("p",null,"Para crear un controlador en Laravel, debes usar el comando php artisan make:controller seguido del nombre del controlador. Por ejemplo, para crear un controlador llamado ",(0,r.kt)("strong",{parentName:"p"},"ProductosController"),", ejecutar\xedas el siguiente comando:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"php artisan make:controller ProductosController\n")),(0,r.kt)("p",null,"Una vez creado el controlador, puedes agregar m\xe9todos para manejar diferentes solicitudes HTTP. Por ejemplo, puedes tener un m\xe9todo index que muestre una lista de productos y un m\xe9todo store que almacene un nuevo producto en la base de datos."),(0,r.kt)("p",null,"Para hacer una solicitud HTTP a un controlador, debes definir una ruta en el archivo routes/web.php que apunte a un m\xe9todo espec\xedfico en el controlador. Por ejemplo, para hacer una solicitud GET a /productos y ejecutar el m\xe9todo index en el controlador ProductosController, podr\xedas agregar la siguiente ruta:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Route::get('/productos', 'ProductosController@index');\n")),(0,r.kt)("p",null,"El controlador es una parte importante de la arquitectura de Laravel y se utiliza para separar la l\xf3gica de negocios de la l\xf3gica de presentaci\xf3n, lo que ayuda a mantener tu aplicaci\xf3n limpia y organizada."),(0,r.kt)("h2",{id:"creaci\xf3n-de-un-controladores-rest"},"Creaci\xf3n de un controladores REST"),(0,r.kt)("h3",{id:"colorcontroller"},"\ud83d\udcc7ColorController"),(0,r.kt)("p",null,"Para crear el controlador teclee el siguiente comando en su terminal:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"php artisan make:controller Api/V1/ColorController --resource\n")),(0,r.kt)("p",null,"La opci\xf3n --resource le indica a la Laravel que cree los m\xe9todos necesarios para crear un CRUD."),(0,r.kt)("p",null,"Dir\xedjase a la carpeta ",(0,r.kt)("strong",{parentName:"p"},"App\\Http\\Controllers\\Api\\V1")," y edite el archivo CategoriaController."),(0,r.kt)("p",null,"Seguidamente comentaremos paso a paso los para crear el controlador:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"<?php\n\nnamespace App\\Http\\Controllers\\Api\\V1;\n\nuse App\\Http\\Controllers\\Controller;\nuse Illuminate\\Http\\Request;\nuse App\\Models\\Color; // Aseg\xfarate de importar el modelo Color\nuse Illuminate\\Support\\Facades\\Validator;\n\n\nclass ColorController extends Controller\n{\n    /**\n     * Display a listing of the resource.\n     *\n     * M\xe9todo: index\n     * Ruta asociada: GET /colors\n     * Descripci\xf3n: Este m\xe9todo muestra una lista de recursos (en este caso, colores).\n     */\n    public function index()\n    {\n        // Recuperar todos los colores desde la base de datos y retornarlos como una respuesta JSON\n        $colores = Color::all();\n        return response()->json(['colores' => $colores]);\n    }\n\n    /**\n     * Show the form for creating a new resource.\n     *\n     * M\xe9todo: create\n     * Ruta asociada: GET /colors/create\n     * Descripci\xf3n: Este m\xe9todo muestra el formulario para crear un nuevo recurso (color).\n     */\n    \n    public function store(Request $request)\n    {\n        // Validaci\xf3n de los datos del nuevo color (por ejemplo, nombre, c\xf3digo de color).\n        $validator = Validator::make($request->all(), [\n            'nombre' => 'required|string|max:255|unique:colores'\n        ]);\n        \n        if($validator->fails()){\n            return response()->json($validator->errors(),422); \n        }\n\n        //Debe estar configurado fillable en el modelo para \n        //utilizar inserci\xf3n masiva\n        \n        $color=Color::create($request->all());\n       \n        // Retornar una respuesta JSON que confirma la creaci\xf3n exitosa del color.\n        return response()->json(['message' => 'Color creado con \xe9xito', 'color' => $color]);\n    }\n\n    /**\n     * Display the specified resource.\n     *\n     * M\xe9todo: show\n     * Ruta asociada: GET /colors/{id}\n     * Descripci\xf3n: Este m\xe9todo muestra un recurso (color) espec\xedfico identificado por su ID.\n     */\n    public function show(string $id)\n    {\n        // Buscar el color por su ID en la base de datos y retornarlo como una respuesta JSON.\n        $color = Color::find($id);\n\n        if (!$color) {\n            return response()->json(['message' => 'Color no encontrado'], 404);\n        }\n\n\n        return response()->json(['color' => $color],201);\n    }\n\n    \n    /**\n     * Update the specified resource in storage.\n     *\n     * M\xe9todo: update\n     * Ruta asociada: PUT/PATCH /colors/{id}\n     * Descripci\xf3n: Este m\xe9todo actualiza un recurso (color) espec\xedfico identificado por su ID en el almacenamiento.\n     */\n    public function update(Request $request, string $id)\n    {\n        // Validaci\xf3n de los datos actualizados del color.\n        $validator = Validator::make($request->all(),[\n            'nombre' => 'required|string|max:255|unique:colores'\n        ]);\n\n        if($validator->fails()){\n            return response()->json($validator->errors(),422); \n        }\n        \n\n        // Buscar el color por su ID en la base de datos.\n        $color = Color::find($id);\n\n        if (!$color) {\n            return response()->json(['message' => 'Color no encontrado'], 404);\n        }\n\n        // Actualizar los datos del color con los datos validados.\n        $color->update($request->all());\n\n        // Retornar una respuesta JSON que confirma la actualizaci\xf3n exitosa del color.\n        return response()->json(['message' => 'Color actualizado con \xe9xito', 'color' => $color]);\n    }\n\n    /**\n     * Remove the specified resource from storage.\n     *\n     * M\xe9todo: destroy\n     * Ruta asociada: DELETE /colors/{id}\n     * Descripci\xf3n: Este m\xe9todo elimina un recurso (color) espec\xedfico identificado por su ID del almacenamiento.\n     */\n    public function destroy(string $id)\n    {\n        // Buscar el color por su ID en la base de datos.\n        $color = Color::find($id);\n\n        if (!$color) {\n            return response()->json(['message' => 'Color no encontrado'], 404);\n        }\n\n        // Eliminar el color de la base de datos.\n        $color->delete();\n\n        // Retornar una respuesta JSON que confirma la eliminaci\xf3n exitosa del color.\n        return response()->json(['message' => 'Color eliminado con \xe9xito']);\n    }\n}\n")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Hemos a\xf1adido dos clases: Color y la clase Validator.")),(0,r.kt)("admonition",{title:"La clase validator",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"La clase ",(0,r.kt)("inlineCode",{parentName:"p"},"Validator")," en Laravel es una parte fundamental del sistema de validaci\xf3n de datos de Laravel. Proporciona una forma conveniente y poderosa de validar los datos de entrada de una solicitud antes de procesarlos o almacenarlos en la base de datos. Laravel utiliza esta clase para llevar a cabo la validaci\xf3n de datos, y es ampliamente utilizada en controladores, formularios, y en otros lugares donde es necesario garantizar la integridad de los datos."),(0,r.kt)("p",{parentName:"admonition"},"Aqu\xed hay algunas caracter\xedsticas y conceptos clave relacionados con la clase ",(0,r.kt)("inlineCode",{parentName:"p"},"Validator")," en Laravel:"),(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Creaci\xf3n de un Validador"),": Puedes crear una instancia de la clase ",(0,r.kt)("inlineCode",{parentName:"p"},"Validator")," pasando los datos que deseas validar y las reglas de validaci\xf3n. Las reglas de validaci\xf3n se definen como un array asociativo donde las claves son los nombres de los campos y los valores son las reglas de validaci\xf3n que se deben aplicar."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-php"},"$validator = Validator::make($data, [\n    'nombre' => 'required|string|max:255',\n    'correo' => 'required|email|unique:users',\n]);\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Reglas de Validaci\xf3n"),": Las reglas de validaci\xf3n son expresiones que especifican c\xf3mo se debe validar un campo. Laravel proporciona una amplia variedad de reglas de validaci\xf3n predefinidas, como 'required', 'numeric', 'email', 'unique', 'max', 'min', entre otras. Tambi\xe9n puedes crear tus propias reglas de validaci\xf3n personalizadas si es necesario.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Mensajes de Error Personalizados"),": Puedes personalizar los mensajes de error para cada regla de validaci\xf3n si deseas proporcionar mensajes m\xe1s descriptivos."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-php"},"$messages = [\n    'nombre.required' => 'El nombre es obligatorio.',\n    'correo.email' => 'El correo debe ser una direcci\xf3n de correo electr\xf3nico v\xe1lida.',\n];\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Evaluaci\xf3n de Validaci\xf3n"),": Una vez que has creado una instancia del validador, puedes evaluar la validaci\xf3n utilizando el m\xe9todo ",(0,r.kt)("inlineCode",{parentName:"p"},"validate()"),". Este m\xe9todo devolver\xe1 ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," si la validaci\xf3n es exitosa y lanzar\xe1 una excepci\xf3n ",(0,r.kt)("inlineCode",{parentName:"p"},"ValidationException")," si la validaci\xf3n falla."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-php"},"if ($validator->validate()) {\n    // La validaci\xf3n fue exitosa\n}\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Recuperaci\xf3n de Errores"),": Si la validaci\xf3n falla, puedes recuperar los errores generados por el validador. Esto es \xfatil para mostrar mensajes de error al usuario."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-php"},"if ($validator->fails()) {\n    $errors = $validator->errors();\n    // Puedes acceder a los errores individualmente, por ejemplo: $errors->first('nombre')\n}\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Validaci\xf3n en Controladores"),": La validaci\xf3n se usa com\xfanmente en controladores para garantizar que los datos de entrada cumplan con ciertas reglas antes de procesarlos o almacenarlos en la base de datos. Esto ayuda a mantener la integridad de los datos y a prevenir problemas de seguridad.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Middleware de Validaci\xf3n"),": Laravel tambi\xe9n proporciona middleware de validaci\xf3n que se puede utilizar para validar los datos antes de que lleguen al controlador. Esto es especialmente \xfatil para formularios web y API.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Personalizaci\xf3n de Reglas de Validaci\xf3n"),": Puedes personalizar las reglas de validaci\xf3n y crear reglas personalizadas si tus requisitos son m\xe1s espec\xedficos que las reglas de validaci\xf3n predefinidas.")))),(0,r.kt)("admonition",{title:"Reglas de validaci\xf3n m\xe1s comunes",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Claro, aqu\xed tienes ejemplos de algunas de las reglas de validaci\xf3n m\xe1s comunes en Laravel:"),(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"required"),": El campo debe estar presente y no puede estar en blanco.")),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-php"},"'nombre' => 'required'\n")),(0,r.kt)("ol",{parentName:"admonition",start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"email"),": El campo debe ser una direcci\xf3n de correo electr\xf3nico v\xe1lida.")),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-php"},"'correo' => 'email'\n")),(0,r.kt)("ol",{parentName:"admonition",start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"numeric"),": El campo debe ser un valor num\xe9rico.")),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-php"},"'edad' => 'numeric'\n")),(0,r.kt)("ol",{parentName:"admonition",start:4},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"alpha"),": El campo debe contener solo letras del alfabeto.")),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-php"},"'nombre' => 'alpha'\n")),(0,r.kt)("ol",{parentName:"admonition",start:5},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"integer"),": El campo debe ser un n\xfamero entero.")),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-php"},"'cantidad' => 'integer'\n")),(0,r.kt)("ol",{parentName:"admonition",start:6},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"min:valor"),': El campo debe tener un valor num\xe9rico mayor o igual que "valor".')),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-php"},"'edad' => 'min:18'\n")),(0,r.kt)("ol",{parentName:"admonition",start:7},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"max:valor"),': El campo debe tener un valor num\xe9rico menor o igual que "valor".')),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-php"},"'puntaje' => 'max:100'\n")),(0,r.kt)("ol",{parentName:"admonition",start:8},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"between:min,max"),": El campo debe tener un valor num\xe9rico que est\xe9 dentro del rango especificado.")),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-php"},"'nota' => 'between:0,10'\n")),(0,r.kt)("ol",{parentName:"admonition",start:9},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"in:foo,bar,..."),": El campo debe estar en la lista de valores permitidos.")),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-php"},"'color' => 'in:rojo,verde,azul'\n")),(0,r.kt)("ol",{parentName:"admonition",start:10},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"not_in:foo,bar,..."),": El campo no debe estar en la lista de valores prohibidos.")),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-php"},"'rol' => 'not_in:admin,superadmin'\n")),(0,r.kt)("ol",{parentName:"admonition",start:11},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"date"),": El campo debe ser una fecha v\xe1lida.")),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-php"},"'fecha_nacimiento' => 'date'\n")),(0,r.kt)("ol",{parentName:"admonition",start:12},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"before:date"),": El campo debe ser una fecha anterior a la fecha especificada.")),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-php"},"'fecha_vencimiento' => 'before:2023-12-31'\n")),(0,r.kt)("ol",{parentName:"admonition",start:13},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"after:date"),": El campo debe ser una fecha posterior a la fecha especificada.")),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-php"},"'fecha_inicio' => 'after:2023-01-01'\n")),(0,r.kt)("p",{parentName:"admonition"},"Estos son solo ejemplos de algunas reglas de validaci\xf3n comunes en Laravel. Puedes combinar varias reglas en una sola validaci\xf3n y personalizar los mensajes de error seg\xfan tus necesidades espec\xedficas. La validaci\xf3n de datos es una parte fundamental de cualquier aplicaci\xf3n web para garantizar la integridad de los datos recibidos.")),(0,r.kt)("h3",{id:"tipocontroller"},"\ud83d\udcc7TipoController"),(0,r.kt)("p",null,"Para el controlador teclee el siguiente comando en su terminal:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"php artisan make:controller Api/V1/TipoController\n")),(0,r.kt)("p",null,"Dir\xedjase a la carpeta ",(0,r.kt)("strong",{parentName:"p"},"App\\Http\\Controllers\\Api\\V1")," y edite el archivo TipoController."),(0,r.kt)("p",null,"Seguidamente comentaremos paso a paso los para crear el controlador:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"De momento teclee el siguiente c\xf3digo")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"<?php\n\nnamespace App\\Http\\Controllers\\Api\\V1;\n\nuse App\\Http\\Controllers\\Controller;\nuse Illuminate\\Http\\Request;\nuse App\\Models\\Tipo;\nuse Illuminate\\Support\\Facades\\Validator;\n\n\nclass TipoController extends Controller\n{\n    /**\n     * Display a listing of the resource.\n     *\n     * M\xe9todo: index\n     * Ruta asociada: GET /tipos\n     * Descripci\xf3n: Este m\xe9todo muestra una lista de recursos (en este caso, tipoes).\n     */\n    public function index()\n    {\n        // Recuperar todos los tipoes desde la base de datos y retornarlos como una respuesta JSON\n        $tipos = Tipo::all();\n        return response()->json(['tipos' => $tipos]);\n    }\n\n    \n    public function store(Request $request)\n    {\n        // Validaci\xf3n de los datos del nuevo tipo (por ejemplo, nombre, c\xf3digo de tipo).\n        $validator = Validator::make($request->all(), [\n            'nombre' => 'required|string|max:150|unique:tipos'\n        ]);\n        \n        if($validator->fails()){\n            return response()->json($validator->errors(),422); \n        }\n\n        //Debe estar configurado fillable en el modelo para \n        //utilizar inserci\xf3n masiva\n        $tipo=Tipo::create($request->all());\n       \n        // Retornar una respuesta JSON que confirma la creaci\xf3n exitosa del tipo.\n        return response()->json(['message' => 'Tipo creado con \xe9xito', 'tipo' => $tipo]);\n    }\n\n    /**\n     * Display the specified resource.\n     *\n     * M\xe9todo: show\n     * Ruta asociada: GET /tipos/{id}\n     * Descripci\xf3n: Este m\xe9todo muestra un recurso (tipo) espec\xedfico identificado por su ID.\n     */\n    public function show(string $id)\n    {\n        // Buscar el tipo por su ID en la base de datos y retornarlo como una respuesta JSON.\n        $tipo = Tipo::find($id);\n\n        if (!$tipo) {\n            return response()->json(['message' => 'Tipo no encontrado'], 404);\n        }\n\n\n        return response()->json(['Tipo' => $tipo]);\n    }\n\n    \n    /**\n     * Update the specified resource in storage.\n     *\n     * M\xe9todo: update\n     * Ruta asociada: PUT/PATCH /tipos/{id}\n     * Descripci\xf3n: Este m\xe9todo actualiza un recurso (tipo) espec\xedfico identificado por su ID en el almacenamiento.\n     */\n    public function update(Request $request, string $id)\n    {\n        // Validaci\xf3n de los datos actualizados del tipo.\n        $validator = Validator::make([\n            'nombre' => 'required|string|max:150|unique:tipoes'\n        ]);\n\n        if($validator->fails()){\n            return response()->json($validator->errors(),422); \n        }\n        \n\n        // Buscar el tipo por su ID en la base de datos.\n        $tipo = Tipo::find($id);\n\n        if (!$tipo) {\n            return response()->json(['message' => 'tipo no encontrado'], 404);\n        }\n\n        // Actualizar los datos del tipo con los datos validados.\n        $tipo->update($tipo);\n\n        // Retornar una respuesta JSON que confirma la actualizaci\xf3n exitosa del tipo.\n        return response()->json(['message' => 'Tipo actualizado con \xe9xito', 'tipo' => $tipo]);\n    }\n\n    /**\n     * Remove the specified resource from storage.\n     *\n     * M\xe9todo: destroy\n     * Ruta asociada: DELETE /tipos/{id}\n     * Descripci\xf3n: Este m\xe9todo elimina un recurso (tipo) espec\xedfico identificado por su ID del almacenamiento.\n     */\n    public function destroy(string $id)\n    {\n        // Buscar el tipo por su ID en la base de datos.\n        $tipo = Tipo::find($id);\n\n        if (!$tipo) {\n            return response()->json(['message' => 'Tipo no encontrado'], 404);\n        }\n\n        // Eliminar el tipo de la base de datos.\n        $tipo->delete();\n\n        // Retornar una respuesta JSON que confirma la eliminaci\xf3n exitosa del tipo.\n        return response()->json(['message' => 'Tipo eliminado con \xe9xito']);\n    }\n}\n")),(0,r.kt)("h3",{id:"paiscontroller"},"\ud83d\udcc7PaisController"),(0,r.kt)("p",null,"Para crear el controlador teclee el siguiente comando en su terminal:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"php artisan make:controller Api/V1/PaisController --resource\n")),(0,r.kt)("p",null,"Dir\xedjase a la carpeta ",(0,r.kt)("strong",{parentName:"p"},"App\\Http\\Controllers\\Api\\V1")," y edite el archivo TipoController."),(0,r.kt)("p",null,"Seguidamente comentaremos paso a paso los para crear el controlador:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"De momento teclee el siguiente c\xf3digo")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"<?php\n\nnamespace App\\Http\\Controllers\\Api\\V1;\n\nuse App\\Http\\Controllers\\Controller;\nuse Illuminate\\Http\\Request;\nuse App\\Models\\Pais;\nuse Illuminate\\Support\\Facades\\Validator;\n\nclass PaisController extends Controller\n{\n       /**\n     * Display a listing of the resource.\n     *\n     * M\xe9todo: index\n     * Ruta asociada: GET /paises\n     * Descripci\xf3n: Este m\xe9todo muestra una lista de recursos (en este caso, paises).\n     */\n    public function index()\n    {\n        // Recuperar todos los paises desde la base de datos y retornarlos como una respuesta JSON\n        $paises = Pais::all();\n        return response()->json(['paises' => $paises]);\n    }\n\n    /**\n     * Show the form for creating a new resource.\n     *\n     * M\xe9todo: create\n     * Ruta asociada: POST /paises\n     * Descripci\xf3n: Este m\xe9todo muestra el formulario para crear un nuevo recurso (pais).\n     */\n    \n    public function store(Request $request)\n    {\n        // Validaci\xf3n de los datos del nuevo pais (por ejemplo, nombre, c\xf3digo de pais).\n        $validator = Validator::make($request->all(), [\n            'nombre' => 'required|string|max:255|unique:paises'\n        ]);\n        \n        if($validator->fails()){\n            return response()->json($validator->errors(),422); \n        }\n\n        //Debe estar configurado fillable en el modelo para \n        //utilizar inserci\xf3n masiva\n        $tipo=Pais::create($request->all());\n       \n        // Retornar una respuesta JSON que confirma la creaci\xf3n exitosa del pais.\n        return response()->json(['message' => 'Pa\xeds creado con \xe9xito', 'pais' => $tipo]);\n    }\n\n    /**\n     * Display the specified resource.\n     *\n     * M\xe9todo: show\n     * Ruta asociada: GET /paiss/{id}\n     * Descripci\xf3n: Este m\xe9todo muestra un recurso (pais) espec\xedfico identificado por su ID.\n     */\n    public function show(string $id)\n    {\n        // Buscar el pais por su ID en la base de datos y retornarlo como una respuesta JSON.\n        $pais = Pais::find($id);\n\n        if (!$pais) {\n            return response()->json(['message' => 'pa\xeds no encontrado'], 404);\n        }\n\n        return response()->json(['Pa\xeds' => $pais]);\n    }\n\n    \n    /**\n     * Update the specified resource in storage.\n     *\n     * M\xe9todo: update\n     * Ruta asociada: PUT/PATCH /itposs/{id}\n     * Descripci\xf3n: Este m\xe9todo actualiza un recurso (pais) espec\xedfico identificado por su ID en el almacenamiento.\n     */\n    public function update(Request $request, string $id)\n    {\n        // Validaci\xf3n de los datos actualizados del tipo.\n        $validator = Validator::make([\n            'nombre' => 'required|string|max:255'\n        ]);\n\n        if($validator->fails()){\n            return response()->json($validator->errors(),422); \n        }\n        \n\n        // Buscar el pais por su ID en la base de datos.\n        $pais = Pais::find($id);\n\n        if (!$pais) {\n            return response()->json(['message' => 'Pais no encontrado'], 404);\n        }\n\n        // Actualizar los datos del pais con los datos validados.\n        $pais->update($pais);\n\n        // Retornar una respuesta JSON que confirma la actualizaci\xf3n exitosa del pais.\n        return response()->json(['message' => 'Pa\xeds actualizado con \xe9xito', 'pais' => $pais]);\n    }\n\n    /**\n     * Remove the specified resource from storage.\n     *\n     * M\xe9todo: destroy\n     * Ruta asociada: DELETE /paises/{id}\n     * Descripci\xf3n: Este m\xe9todo elimina un recurso (pais) espec\xedfico identificado por su ID del almacenamiento.\n     */\n    public function destroy(string $id)\n    {\n        // Buscar el pais por su ID en la base de datos.\n        $pais = Pais::find($id);\n\n        if (!$pais) {\n            return response()->json(['message' => 'Pa\xeds no encontrado'], 404);\n        }\n\n        // Eliminar el pais de la base de datos.\n        $pais->delete();\n\n        // Retornar una respuesta JSON que confirma la eliminaci\xf3n exitosa del tipo.\n        return response()->json(['message' => 'Pa\xeds eliminado con \xe9xito']);\n    }//\n}\n")),(0,r.kt)("h3",{id:"graduacioncontroller"},"\ud83d\udcc7GraduacionController"),(0,r.kt)("p",null,"Para crear el controlador teclee el siguiente comando en su terminal:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"php artisan make:controller Api/V1/GraduacionController --resource\n")),(0,r.kt)("p",null,"Dir\xedjase a la carpeta ",(0,r.kt)("strong",{parentName:"p"},"App\\Http\\Controllers\\Api\\V1")," y edite el archivo TipoController."),(0,r.kt)("p",null,"Seguidamente comentaremos pasos para crear el controlador:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"De momento teclee el siguiente c\xf3digo")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"<?php\n\nnamespace App\\Http\\Controllers\\Api\\V1;\n\nuse App\\Http\\Controllers\\Controller;\nuse Illuminate\\Http\\Request;\nuse App\\Models\\Graduacion;\nuse Illuminate\\Support\\Facades\\Validator;\n\n\nclass GraduacionController extends Controller\n{\n    /**\n     * Display a listing of the resource.\n     *\n     * M\xe9todo: index\n     * Ruta asociada: GET /tipos\n     * Descripci\xf3n: Este m\xe9todo muestra una lista de recursos (en este caso, tipoes).\n     */\n    public function index()\n    {\n        // Recuperar todos los tipoes desde la base de datos y retornarlos como una respuesta JSON\n        $graduaciones = Graduacion::all();\n        return response()->json(['graduaciones' => $graduaciones]);\n    }\n\n    \n    public function store(Request $request)\n    {\n        // Validaci\xf3n de los datos del nuevo tipo (por ejemplo, nombre, c\xf3digo de tipo).\n        $validator = Validator::make($request->all(), [\n            'nombre' => 'required|string|max:150|unique:tipos'\n        ]);\n        \n        if($validator->fails()){\n            return response()->json($validator->errors(),422); \n        }\n\n        //Debe estar configurado fillable en el modelo para \n        //utilizar inserci\xf3n masiva\n        $graduacion=Graduacion::create($request->all());\n       \n        // Retornar una respuesta JSON que confirma la creaci\xf3n exitosa del tipo.\n        return response()->json(['message' => 'Graduaci\xf3n creado con \xe9xito', 'graduacion' => $graduacion]);\n    }\n\n    /**\n     * Display the specified resource.\n     *\n     * M\xe9todo: show\n     * Ruta asociada: GET /tipos/{id}\n     * Descripci\xf3n: Este m\xe9todo muestra un recurso (tipo) espec\xedfico identificado por su ID.\n     */\n    public function show(string $id)\n    {\n        // Buscar el tipo por su ID en la base de datos y retornarlo como una respuesta JSON.\n        $graduacion = Graduacion::find($id);\n\n        if (!$graduacion) {\n            return response()->json(['message' => 'Graduaci\xf3n no encontrado'], 404);\n        }\n\n\n        return response()->json(['Tipo' => $graduacion]);\n    }\n\n    \n    /**\n     * Update the specified resource in storage.\n     *\n     * M\xe9todo: update\n     * Ruta asociada: PUT/PATCH /itposs/{id}\n     * Descripci\xf3n: Este m\xe9todo actualiza un recurso (tipo) espec\xedfico identificado por su ID en el almacenamiento.\n     */\n    public function update(Request $request, string $id)\n    {\n        // Validaci\xf3n de los datos actualizados del tipo.\n        $validator = Validator::make([\n            'nombre' => 'required|string|max:150|unique:tipoes'\n        ]);\n\n        if($validator->fails()){\n            return response()->json($validator->errors(),422); \n        }\n        \n\n        // Buscar el tipo por su ID en la base de datos.\n        $graduacion = Graduacion::find($id);\n\n        if (!$graduacion) {\n            return response()->json(['message' => 'graduaci\xf3n no encontrada'], 404);\n        }\n\n        // Actualizar los datos del tipo con los datos validados.\n        $graduacion->update($graduacion);\n\n        // Retornar una respuesta JSON que confirma la actualizaci\xf3n exitosa del tipo.\n        return response()->json(['message' => 'Graduaci\xf3n actualizado con \xe9xito', 'graduacion' => $graduacion]);\n    }\n\n    /**\n     * Remove the specified resource from storage.\n     *\n     * M\xe9todo: destroy\n     * Ruta asociada: DELETE /tipos/{id}\n     * Descripci\xf3n: Este m\xe9todo elimina un recurso (tipo) espec\xedfico identificado por su ID del almacenamiento.\n     */\n    public function destroy(string $id)\n    {\n        // Buscar el tipo por su ID en la base de datos.\n        $graduacion = Graduacion::find($id);\n\n        if (!$graduacion) {\n            return response()->json(['message' => 'Graduaci\xf3n no encontrada'], 404);\n        }\n\n        // Eliminar el tipo de la base de datos.\n        $graduacion->delete();\n\n        // Retornar una respuesta JSON que confirma la eliminaci\xf3n exitosa del tipo.\n        return response()->json(['message' => 'Graduaci\xf3n eliminado con \xe9xito']);\n    }\n}\n")))}u.isMDXComponent=!0}}]);