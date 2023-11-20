"use strict";(self.webpackChunkapi_laravel_doc=self.webpackChunkapi_laravel_doc||[]).push([[222],{3905:(e,a,n)=>{n.d(a,{Zo:()=>p,kt:()=>b});var r=n(7294);function s(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function t(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?t(Object(n),!0).forEach((function(a){s(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):t(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function l(e,a){if(null==e)return{};var n,r,s=function(e,a){if(null==e)return{};var n,r,s={},t=Object.keys(e);for(r=0;r<t.length;r++)n=t[r],a.indexOf(n)>=0||(s[n]=e[n]);return s}(e,a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(r=0;r<t.length;r++)n=t[r],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var i=r.createContext({}),d=function(e){var a=r.useContext(i),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},p=function(e){var a=d(e.components);return r.createElement(i.Provider,{value:a},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},m=r.forwardRef((function(e,a){var n=e.components,s=e.mdxType,t=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(n),m=s,b=c["".concat(i,".").concat(m)]||c[m]||u[m]||t;return n?r.createElement(b,o(o({ref:a},p),{},{components:n})):r.createElement(b,o({ref:a},p))}));function b(e,a){var n=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var t=n.length,o=new Array(t);o[0]=m;var l={};for(var i in a)hasOwnProperty.call(a,i)&&(l[i]=a[i]);l.originalType=e,l[c]="string"==typeof e?e:s,o[1]=l;for(var d=2;d<t;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1557:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>t,metadata:()=>l,toc:()=>d});var r=n(7462),s=(n(7294),n(3905));const t={sidebar_position:5},o="Rellenando la BB.DD",l={unversionedId:"BacKend/seeders",id:"BacKend/seeders",title:"Rellenando la BB.DD",description:"Seeders",source:"@site/docs/BacKend/seeders.md",sourceDirName:"BacKend",slug:"/BacKend/seeders",permalink:"/api_cervezas_doc/docs/BacKend/seeders",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/BacKend/seeders.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Creando modelos y relaciones",permalink:"/api_cervezas_doc/docs/BacKend/modelos"},next:{title:"Backup y restauraci\xf3n de la base datos",permalink:"/api_cervezas_doc/docs/BacKend/comandos"}},i={},d=[{value:"Seeders",id:"seeders",level:2},{value:"\xbfQu\xe9 es un seeder?",id:"qu\xe9-es-un-seeder",level:3},{value:"\xbfC\xf3mo se crea un seeder?",id:"c\xf3mo-se-crea-un-seeder",level:3},{value:"ColoresSeeder",id:"coloresseeder",level:3},{value:"TiposSeeder",id:"tiposseeder",level:3},{value:"PaisesSeeder",id:"paisesseeder",level:3},{value:"GraduacionesSeeder",id:"graduacionesseeder",level:3},{value:"CervezasSeeder",id:"cervezasseeder",level:3},{value:"Ejecuci\xf3n masiva de los Seeders",id:"ejecuci\xf3n-masiva-de-los-seeders",level:3},{value:"Faker",id:"faker",level:2},{value:"UsersSeeder",id:"usersseeder",level:3}],p={toc:d},c="wrapper";function u(e){let{components:a,...t}=e;return(0,s.kt)(c,(0,r.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"rellenando-la-bbdd"},"Rellenando la BB.DD"),(0,s.kt)("h2",{id:"seeders"},"Seeders"),(0,s.kt)("h3",{id:"qu\xe9-es-un-seeder"},"\xbfQu\xe9 es un seeder?"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Seeder",src:n(1120).Z,width:"600",height:"300"})),(0,s.kt)("p",null,"Un seeder en Laravel es una clase que se utiliza para poblar una base de datos con datos de prueba. Los seeders son \xfatiles para probar aplicaciones, crear datos de prueba para desarrolladores y para personalizar una base de datos con informaci\xf3n espec\xedfica."),(0,s.kt)("p",null,"Cada seeder en Laravel extiende de la clase ",(0,s.kt)("strong",{parentName:"p"},"Illuminate\\Database\\Seeder")," y contiene un m\xe9todo run que se ejecuta cuando se llama el comando ",(0,s.kt)("strong",{parentName:"p"},"php artisan db:seed"),". Dentro de este m\xe9todo, puedes escribir cualquier l\xf3gica que necesites para insertar datos en tu base de datos."),(0,s.kt)("p",null,"Puedes crear varios seeders y ejecutarlos todos o solo algunos seg\xfan tus necesidades. Al ejecutar un seeder, sus datos se insertan en la base de datos de forma autom\xe1tica, lo que te permite rellenar tus tablas de forma r\xe1pida y sencilla."),(0,s.kt)("h3",{id:"c\xf3mo-se-crea-un-seeder"},"\xbfC\xf3mo se crea un seeder?"),(0,s.kt)("p",null,"Para crear un seeder en Laravel, puedes usar el siguiente comando de Artisan:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"php artisan make:seeder NombreSeeder\n")),(0,s.kt)("p",null,"Donde NombreSeeder es el nombre que le quieres dar a tu seeder. Este comando crear\xe1 un archivo en la carpeta database/seeds con el nombre que le hayas especificado y con una estructura b\xe1sica de c\xf3digo para que puedas empezar a escribir tu l\xf3gica de seeding."),(0,s.kt)("p",null,"Aqu\xed tienes un ejemplo b\xe1sico de c\xf3digo para un seeder:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"<?php\nuse Illuminate\\Database\\Seeder;\nuse Illuminate\\Support\\Facades\\DB;\n\nclass NombreSeeder extends Seeder\n{\n    /**\n     * Run the database seeds.\n     *\n     * @return void\n     */\n    public function run()\n    {\n        DB::table('table_name')->insert([\n            'column1' => 'value1',\n            'column2' => 'value2',\n            // ...\n        ]);\n    }\n}\n?>\n")),(0,s.kt)("p",null,"Puedes agregar m\xe1s datos o l\xf3gica para rellenar tus tablas de forma m\xe1s compleja."),(0,s.kt)("p",null,"Para ejecutar los seeders, puedes usar el siguiente comando:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"php artisan db:seed\n")),(0,s.kt)("p",null,"Tambi\xe9n puedes ejecutar un seeder espec\xedfico utilizando el siguiente comando:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"php artisan db:seed --class=NombreSeeder\n")),(0,s.kt)("h3",{id:"coloresseeder"},"ColoresSeeder"),(0,s.kt)("p",null,"Vamos a poner en practica lo aprendido en el apartado anterior. Crearemos un ",(0,s.kt)("strong",{parentName:"p"},"seeder")," destinado a rellanar nuestra tabla colores con los distintos colores que puede tener una cerveza. Para ello ejecute el siguiente comando en su terminal y dentro de su proyecto."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"php artisan make:seeder  --class=ColoresSeeder\n")),(0,s.kt)("p",null,"Se habr\xe1 creado en la carpeta database/seeders un nuevo archivo con extensi\xf3n PHP llamado ",(0,s.kt)("strong",{parentName:"p"},"ColoresSeeder"),". En el deberemos escribir el siguiente c\xf3digo, el cual comentaremos a continuaci\xf3n."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'<?php\n\nnamespace Database\\Seeders;\nnamespace Database\\Seeders;\n\nuse Illuminate\\Database\\Console\\Seeds\\WithoutModelEvents;\nuse Illuminate\\Database\\Seeder;\nuse Illuminate\\Support\\Facades\\DB;\n\nclass ColorSeeder extends Seeder\n{\n    /**\n     * Run the database seeds.\n     *\n     * @return void\n     */\n    \n    public function run()\n    {\n        $data = [\n    ["nombre" => "Amarillo"],\n    ["nombre" => "Ambar"],\n    ["nombre" => "Blanca"],\n    ["nombre" => "Cobrizo"],\n    ["nombre" => "Marr\xf3n"],\n    ["nombre" => "Negra"],\n    ["nombre" => "Rubia"],\n    ["nombre" => "Tostada"]\n];\n\n            DB::table(\'colores\')->insert($data);\n    }\n}\n')),(0,s.kt)("p",null,'Este Seeder en Laravel tiene como objetivo insertar datos en la tabla "colores" de la base de datos. Veamos una explicaci\xf3n de lo que hace:'),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Namespace y Uso de Clases"),": Al principio del Seeder, se declaran los namespaces necesarios para Laravel. El Seeder se encuentra en el namespace ",(0,s.kt)("inlineCode",{parentName:"p"},"Database\\Seeders"),". Adem\xe1s, se importa la clase ",(0,s.kt)("inlineCode",{parentName:"p"},"Seeder")," de Laravel, as\xed como otras clases \xfatiles, como ",(0,s.kt)("inlineCode",{parentName:"p"},"DB"),".")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Clase ",(0,s.kt)("inlineCode",{parentName:"strong"},"ColorSeeder")),": El Seeder se define como una clase llamada ",(0,s.kt)("inlineCode",{parentName:"p"},"ColorSeeder")," que extiende la clase base ",(0,s.kt)("inlineCode",{parentName:"p"},"Seeder"),".")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"M\xe9todo ",(0,s.kt)("inlineCode",{parentName:"strong"},"run")),": En el Seeder, se implementa el m\xe9todo ",(0,s.kt)("inlineCode",{parentName:"p"},"run"),". Este m\xe9todo se ejecuta cuando ejecutas el Seeder y es el lugar donde se define la l\xf3gica para insertar datos en la base de datos.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Datos a Insertar"),": Se define un array llamado ",(0,s.kt)("inlineCode",{parentName:"p"},"$data"),' que contiene un conjunto de registros de colores. Cada registro es un array asociativo con un campo "nombre" que representa el nombre del color.')),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Inserci\xf3n en la Base de Datos"),": Se utiliza la clase ",(0,s.kt)("inlineCode",{parentName:"p"},"DB")," y su m\xe9todo ",(0,s.kt)("inlineCode",{parentName:"p"},"table"),' para especificar la tabla en la que se insertar\xe1n los datos, en este caso, "colores". Luego, se utiliza el m\xe9todo ',(0,s.kt)("inlineCode",{parentName:"p"},"insert")," para insertar los datos del array ",(0,s.kt)("inlineCode",{parentName:"p"},"$data"),' en la tabla "colores".')),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Ejecuci\xf3n del Seeder"),": Cuando ejecutas este Seeder mediante el comando ",(0,s.kt)("inlineCode",{parentName:"p"},"php artisan db:seed"),", los datos definidos en el array ",(0,s.kt)("inlineCode",{parentName:"p"},"$data"),' se insertar\xe1n en la tabla "colores" de la base de datos.'))),(0,s.kt)("p",null,"A continuaci\xf3n aplicaremos la misma l\xf3gica para el resto de seeders"),(0,s.kt)("h3",{id:"tiposseeder"},"TiposSeeder"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="database\\seeders\\TiposSeeder.php"',title:'"database\\seeders\\TiposSeeder.php"'},'<?php\n\nnamespace Database\\Seeders;\n\nuse Illuminate\\Database\\Console\\Seeds\\WithoutModelEvents;\nuse Illuminate\\Database\\Seeder;\nuse Illuminate\\Support\\Facades\\DB;\n\nclass TiposSeeder extends Seeder\n{\n    /**\n     * Run the database seeds.\n     */\n    public function run(): void\n    {\n        $data = [\n            ["nombre" => "Ale"],\n            ["nombre" => "Lager/Pilsner"],\n            ["nombre" => "Stout"],\n            ["nombre" => "Porter"],\n            ["nombre" => "IPA (India Pale Ale)"],\n            ["nombre" => "Wheat Beer"],\n            ["nombre" => "Sour Beer"],\n            ["nombre" => "Belgian Ale"],\n            ["nombre" => "Pale Ale"],\n            ["nombre" => "Brown Ale"],\n            ["nombre" => "Amber Ale"],\n            ["nombre" => "Golden Ale"],\n            ["nombre" => "Blonde Ale"],\n            ["nombre" => "Cream Ale"],\n            ["nombre" => "K\xf6lsch"],\n            ["nombre" => "Pilsner"],\n            ["nombre" => "Bock"],\n            ["nombre" => "Doppelbock"],\n            ["nombre" => "Helles"],\n            ["nombre" => "Vienna Lager"],\n            ["nombre" => "Marzen/Oktoberfest"],\n            ["nombre" => "Kellerbier"],\n            ["nombre" => "Dunkel"],\n            ["nombre" => "Schwarzbier"],\n            ["nombre" => "Barleywine"],\n            ["nombre" => "Saison"],\n            ["nombre" => "Witbier"],\n            ["nombre" => "Gose"],\n            ["nombre" => "Kvass"],\n            ["nombre" => "Rauchbier"],\n            ["nombre" => "Fruit Beer"],\n            ["nombre" => "Cider"],\n            ["nombre" => "Mead"],\n        ];\n        \n        DB::table(\'tipos\')->insert($data);\n    }\n}\n\n')),(0,s.kt)("h3",{id:"paisesseeder"},"PaisesSeeder"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'<?php\n\nnamespace Database\\Seeders;\n\nuse Illuminate\\Database\\Console\\Seeds\\WithoutModelEvents;\nuse Illuminate\\Database\\Seeder;\nuse Illuminate\\Support\\Facades\\DB;\n\nclass PaisesSeeder extends Seeder\n{\n    /**\n     * Run the database seeds.\n     */\n    public function run(): void\n    {\n        $data = [\n            ["nombre" => "Espa\xf1a"],\n            ["nombre" => "Alemania"],\n            ["nombre" => "Francia"],\n            ["nombre" => "Rep\xfablica checa"],\n            ["nombre" => "Belgica"],\n            ["nombre" => "EEUU"],\n            ["nombre" =>"Escocia"],\n            ["nombre" => "Holanda"],\n            ["nombre" => "Inglaterra"],\n            ["nombre" =>"Escocia"],\n            ["nombre" => "Holanda"],\n            ["nombre" => "Irlanda"]\n        ];\n\n        DB::table(\'Paises\')->insert($data);\n    }\n}\n')),(0,s.kt)("h3",{id:"graduacionesseeder"},"GraduacionesSeeder"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'<?php\n\nnamespace Database\\Seeders;\n\nuse Illuminate\\Database\\Console\\Seeds\\WithoutModelEvents;\nuse Illuminate\\Database\\Seeder;\nuse Illuminate\\Support\\Facades\\DB;\n\nclass GraduacionesSeeder extends Seeder\n{\n    /**\n     * Run the database seeds.\n     */\n    public function run(): void\n    {\n        $data = [\n            ["nombre" => "Alta(7-9"],\n            ["nombre" => "Baja(3-5)"],\n            ["nombre" => "Maxima(12+)"],\n            ["nombre" => "Muy alta(9-12"],\n            ["nombre" => "Sin alcohol(0-2.9)"],\n        ];\n        \n        DB::table(\'graduaciones\')->insert($data);\n    }\n}\n')),(0,s.kt)("h3",{id:"cervezasseeder"},"CervezasSeeder"),(0,s.kt)("p",null,"A continuaci\xf3n, vamos a estudiar un caso diferente. Vamos a llenar nuestra tabla ",(0,s.kt)("strong",{parentName:"p"},"cervezas")," con datos de un archivo externo, espec\xedficamente un archivo en formato ",(0,s.kt)("strong",{parentName:"p"},"JSON"),". Esta opci\xf3n es interesante cuando necesitamos migrar datos ya existentes de otra aplicaci\xf3n a nuestra aplicaci\xf3n Laravel. Para lograrlo, crearemos un archivo llamado ",(0,s.kt)("strong",{parentName:"p"},"cervezas.json")," en un directorio llamado ",(0,s.kt)("strong",{parentName:"p"},"data")," dentro de ",(0,s.kt)("strong",{parentName:"p"},"database/seeders"),". A continuaci\xf3n, edita el archivo y escribe el siguiente c\xf3digo:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'[\n    {\n        "nombre": "POMELO IPA IDA Y VUELTA 24x33cl",\n        "descripcion": "**Estilo POMELO IPA. Sin gluten**\\n5,8 % ABV\\nIBU\xb4S 50, amarga.\\n**INGREDIENTES:** Agua; maltas de trigo Torrefacto y Extra pale; l\xfapulos Cascade, Columbus y Citra, copos de AVENA, zumo y c\xe1scara de pomelo y levadura Ale. \\nGastos de env\xedo Espa\xf1a Peninsular incluidos.\\n24 botellas de 33 cl\\n\\nExiste la posibilidad de que, como realizamos los env\xedos en cajas de 12 unidades, puedas componer la tuya con los tipos de cerveza de Dougall que desees. Para ello, debes enviar un correo a info@milcervezas.com explicando lo que desear\xedas. \\n\\nCerveza elaborada por DouGall\'s desde el 2023 en colaboraci\xf3n con Refu. Valle de Ar\xe1n",\n        "precio": 59.81,\n        "marca": "DouGall\'s",\n        "envase": "Botella",\n        "contenido": "33cl",\n        "unidades": 24,\n        "novedad": true,\n        "color_id": 1,\n        "graduacion_id": 4,\n        "pais_id": 1,\n        "tipo_id": 2,\n        "foto": "https://res.cloudinary.com/dkrew530b/image/upload/v1697309153/pomelo_ipa_ida_y_vuelta_24x33cl_4baeb73584.jpg"\n    },\n    {\n        "nombre": "DIPA or Nothing 12x33",\n        "descripcion": "Estilo: DDH Doble IPA\\nAlcohol: 7,5 % Abv \\nIBU\u2019S: 70 Bastante Amarga\\nSin gluten\\nIngredientes: Agua, maltas y l\xfapulos Incognito Mosaic, Azacca y Vic Secret.\\nGastos de env\xedo Espa\xf1a Peninsular incluidos.\\n1\\n",\n        "precio": 46.58,\n        "marca": "DIPA or Nothing ",\n        "envase": "Botella",\n        "contenido": "33cl",\n        "unidades": 12,\n        "novedad": true,\n        "color_id": 8,\n        "graduacion_id": 1,\n        "pais_id": 2,\n        "tipo_id": 7,\n        "foto": "https://res.cloudinary.com/dkrew530b/image/upload/v1697311032/dipa_or_nothing_12x33_a547d464d5.jpg"\n    }\n]\n')),(0,s.kt)("p",null,"En este archivo JSON, hemos proporcionado datos de cervezas que pueden ser insertados en la tabla 'cervezas' de Laravel utilizando seeders. Aseg\xfarate de que el archivo JSON est\xe9 en el directorio correcto y que siga el formato adecuado para que puedas utilizarlo en tu aplicaci\xf3n."),(0,s.kt)("p",null,"Seguidamente crearemos el ",(0,s.kt)("strong",{parentName:"p"},"seeder")," desde la terminal escriba el siguiente comando y ejec\xfatelo:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"php artisan make:seeder CervezasSeeder\n")),(0,s.kt)("p",null,"Abra el archivo y escriba el siguiente c\xf3digo el cual analizaremos a continuaci\xf3n."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"<?php\n\n// Paso 1: Espacio de nombres y Uso de Clases\nnamespace Database\\Seeders;\n\nuse App\\Models\\Cerveza; // Modelo de cerveza\nuse Illuminate\\Database\\Seeder;\nuse Illuminate\\Support\\Facades\\DB; // Facade para la base de datos\nuse \\Illuminate\\Support\\Facades\\File; // Facade para trabajar con archivos\n\n// Paso 2: Clase `CervezasSeeder`\nclass CervezasSeeder extends Seeder\n{\n    // Paso 3: M\xe9todo `run`\n    public function run()\n    {\n        // Paso 4: Eliminaci\xf3n de Datos Existente\n        DB::table('cervezas')->delete(); // Elimina todos los registros existentes en la tabla \"cervezas\"\n\n        // Paso 5: Lectura del Archivo JSON\n        $json = File::get(\"database/seeders/data/cervezas.json\"); // Lee el contenido del archivo JSON\n\n        // Paso 6: Decodificaci\xf3n del JSON\n        $data = json_decode($json); // Convierte el contenido JSON en un array de objetos PHP\n\n        // Paso 7: Bucle de Inserci\xf3n de Datos\n        foreach ($data as $obj) {\n            // Cada objeto se utiliza para crear un nuevo registro en la tabla \"cervezas\" utilizando el modelo `Cerveza`\n            Cerveza::create(array(\n                'nombre' => $obj->nombre,\n                'descripcion' => $obj->descripcion,\n                'color_id' => $obj->color_id,\n                'tipo_id' => $obj->tipo_id,\n                'pais_id' => $obj->pais_id,\n                'graduacion_id' => $obj->graduacion_id,\n                'marca' => $obj->marca,\n                'precio' => $obj->precio,\n                'foto' => $obj->foto\n            ));\n            // Paso 8: Impresi\xf3n de Mensajes\n            print \"Insertando cerveza -> \" . $obj->nombre . \"\\n\";\n        }\n    }\n}\n")),(0,s.kt)("admonition",{title:"Explicaci\xf3n del c\xf3digo",type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"Vamos a desglosar lo que hace paso a paso:"),(0,s.kt)("ol",{parentName:"admonition"},(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Espacio de nombres y Uso de Clases"),":"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"Se establece el espacio de nombres del Seeder en ",(0,s.kt)("inlineCode",{parentName:"li"},"Database\\Seeders"),"."),(0,s.kt)("li",{parentName:"ul"},"Se importan las clases necesarias, como ",(0,s.kt)("inlineCode",{parentName:"li"},"Cerveza")," (el modelo de cerveza), ",(0,s.kt)("inlineCode",{parentName:"li"},"Seeder"),", ",(0,s.kt)("inlineCode",{parentName:"li"},"DB")," (facade para la base de datos) y ",(0,s.kt)("inlineCode",{parentName:"li"},"File")," (facade para trabajar con archivos)."))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Clase ",(0,s.kt)("inlineCode",{parentName:"strong"},"CervezasSeeder")),":"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"La clase ",(0,s.kt)("inlineCode",{parentName:"li"},"CervezasSeeder")," extiende la clase base ",(0,s.kt)("inlineCode",{parentName:"li"},"Seeder")," de Laravel."))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"M\xe9todo ",(0,s.kt)("inlineCode",{parentName:"strong"},"run")),":"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"El m\xe9todo ",(0,s.kt)("inlineCode",{parentName:"li"},"run")," es el punto de entrada para ejecutar el Seeder. En este m\xe9todo, se realizar\xe1n las operaciones para insertar datos en la base de datos."))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Eliminaci\xf3n de Datos Existente"),":"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"DB::table('cervezas')->delete()"),' elimina todos los registros existentes en la tabla "cervezas" antes de insertar nuevos datos. Esto asegura que la tabla est\xe9 vac\xeda antes de agregar nuevos registros.'))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Lectura del Archivo JSON"),":"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},'File::get("database/seeders/data/cervezas.json")'),' lee el contenido del archivo JSON llamado "cervezas.json" ubicado en la ruta especificada.'))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Decodificaci\xf3n del JSON"),":"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"json_decode($json)")," convierte el contenido JSON en un array de objetos PHP. Cada objeto en el array representa un registro de cerveza."))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Bucle de Inserci\xf3n de Datos"),":"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"Se recorre el array de objetos JSON en un bucle ",(0,s.kt)("inlineCode",{parentName:"li"},"foreach"),'. Para cada objeto, se crea un nuevo registro en la tabla "cervezas" utilizando el modelo ',(0,s.kt)("inlineCode",{parentName:"li"},"Cerveza"),"."),(0,s.kt)("li",{parentName:"ul"},"Los campos de la tabla se llenan con los valores correspondientes de los objetos JSON."))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Impresi\xf3n de Mensajes"),":"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"print")," se utiliza para imprimir un mensaje que indica que se est\xe1 insertando una cerveza en la base de datos. Esto puede ser \xfatil para rastrear el progreso de la inserci\xf3n.")))),(0,s.kt)("p",{parentName:"admonition"},'En resumen, este Seeder se encarga de eliminar los datos existentes en la tabla "cervezas" y luego inserta nuevos registros en esa tabla a partir de los datos contenidos en el archivo JSON "cervezas.json". Es una forma eficaz de poblar la base de datos con datos iniciales para su aplicaci\xf3n Laravel.')),(0,s.kt)("h3",{id:"ejecuci\xf3n-masiva-de-los-seeders"},"Ejecuci\xf3n masiva de los Seeders"),(0,s.kt)("p",null,"Para ejecutar m\xfaltiples seeders en Laravel, puedes utilizar el comando de ",(0,s.kt)("em",{parentName:"p"},"Artisan db:seed"),". Este comando se utiliza para llenar la base de datos con datos iniciales y se ejecuta en la consola."),(0,s.kt)("p",null,"Por defecto, el comando ",(0,s.kt)("strong",{parentName:"p"},"db:seed")," ejecutar\xe1 todos los seeders registrados en el archivo DatabaseSeeder.php en el directorio database/seeds. El archivo ",(0,s.kt)("strong",{parentName:"p"},"DatabaseSeeder.php")," deber\xeda contener una clase que extienda de ",(0,s.kt)("strong",{parentName:"p"},"Illuminate\\Database\\Seeder")," y que llame a los seeders individuales a trav\xe9s del m\xe9todo call."),(0,s.kt)("p",null,"Aqu\xed esta el fichero ",(0,s.kt)("strong",{parentName:"p"},"DatabaseSeeder.php")," que ejecuta todo los seeders:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"<?php\n\nnamespace Database\\Seeders;\n\n// use Illuminate\\Database\\Console\\Seeds\\WithoutModelEvents;\nuse Illuminate\\Database\\Seeder;\n\nclass DatabaseSeeder extends Seeder\n{\n    /**\n     * Seed the application's database.\n     */\n    public function run(): void\n    {\n        $this->call(ColoresSeeder::class);\n        $this->call(TiposSeeder::class);\n        $this->call(GraduacionesSeeder::class);\n        $this->call(PaisesSeeder::class);\n        $this->call(CervezasSeeder::class);\n    }\n}\n")),(0,s.kt)("p",null,"Una vez que tengas tu archivo DatabaseSeeder.php configurado, puedes ejecutar el comando db:seed en la consola de la siguiente manera:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"php artisan db:seed\n")),(0,s.kt)("p",null,"Esto ejecutar\xe1 todos los seeders registrados en el archivo DatabaseSeeder.php y llenar\xe1 la base de datos con los datos iniciales especificados en cada seeder."),(0,s.kt)("p",null,"Tambi\xe9n puede ejecutar los sideers despu\xe9s de ejecutar las migraciones con el siguiente comando:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"php artisan migrate --seed\n")),(0,s.kt)("h2",{id:"faker"},"Faker"),(0,s.kt)("p",null,'Un "Faker" es una herramienta o biblioteca que se utiliza para generar datos falsos y realistas en el contexto del desarrollo de software. Estos datos falsos son \xfatiles en diversas situaciones, como pruebas unitarias, pruebas de integraci\xf3n, desarrollo de prototipos y relleno de bases de datos con informaci\xf3n de prueba. El objetivo principal de un Faker es proporcionar datos que parezcan reales, pero que no tengan informaci\xf3n confidencial o privada.'),(0,s.kt)("p",null,"En el desarrollo de software, los Fakers son especialmente \xfatiles en las siguientes situaciones:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Pruebas Unitarias y de Integraci\xf3n"),": Puedes utilizar un Faker para crear datos de prueba que se ajusten a las estructuras de datos de tu aplicaci\xf3n. Esto es \xfatil para simular situaciones reales y probar el comportamiento de tu c\xf3digo.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Desarrollo de Prototipos"),": Cuando est\xe1s creando un prototipo de una aplicaci\xf3n, no siempre tienes datos reales disponibles. Un Faker te permite generar datos ficticios que se ven como datos reales y que pueden ayudarte a dise\xf1ar y probar la interfaz de usuario.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Poblaci\xf3n de Bases de Datos de Prueba"),": Cuando necesitas llenar una base de datos con datos de prueba, un Faker puede generar una gran cantidad de datos ficticios que se asemejan a los datos que esperar\xedas en una aplicaci\xf3n real.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Privacidad y Seguridad"),": Los Fakers son \xfatiles cuando necesitas compartir informaci\xf3n de muestra con otros desarrolladores o equipos sin exponer datos confidenciales o personales."))),(0,s.kt)("p",null,'Laravel, un popular framework de PHP, proporciona una biblioteca llamada "Faker" que es ampliamente utilizada en el desarrollo de aplicaciones web. Laravel Faker permite generar una variedad de datos falsos, como nombres, direcciones, direcciones de correo electr\xf3nico, n\xfameros de tel\xe9fono, fechas, y m\xe1s, de una manera sencilla y coherente.'),(0,s.kt)("h3",{id:"usersseeder"},"UsersSeeder"),(0,s.kt)("p",null,"Supongamos que tienes el modelo ",(0,s.kt)("inlineCode",{parentName:"p"},"User")," predeterminado proporcionado por Laravel con los campos ",(0,s.kt)("inlineCode",{parentName:"p"},"name"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"email")," y ",(0,s.kt)("inlineCode",{parentName:"p"},"password"),". El objetivo es llenar la tabla de usuarios con datos de prueba generados por el Faker de Laravel. Aprovecharemos de paso para crear un usuario administrador."),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Crea un Seeder utilizando el comando Artisan:"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre"},"php artisan make:seeder UsersSeeder\n"))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Abre el Seeder (",(0,s.kt)("inlineCode",{parentName:"p"},"UsersSeeder.php"),") y agrega la l\xf3gica para poblar la base de datos con datos falsos:"))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"<?php\n\nnamespace Database\\Seeders;\n\nuse Illuminate\\Database\\Seeder;\nuse App\\Models\\User; // Aseg\xfarate de importar el modelo User\nuse Faker\\Factory as Faker;\n\nclass UsersSeeder extends Seeder\n{\n    public function run()\n    {\n  \n        //Crear usuario administrador\n        User::create([\n            'name' => 'admin',\n            'email' => 'admin@test.com',\n            'password' => bcrypt('admin_password') // Puedes establecer una contrase\xf1a predeterminada\n        ]);\n        \n        $faker = Faker::create();\n\n        // Genera 20 usuarios de prueba\n        for ($i = 0; $i < 20; $i++) {\n            User::create([\n                'name' => $faker->name,\n                'email' => $faker->unique()->safeEmail,\n                'password' => bcrypt('password') // Puedes establecer una contrase\xf1a predeterminada\n            ]);\n        }\n    }\n}\n\n")),(0,s.kt)("p",null,"En este ejemplo, se generan 20 usuarios de prueba con nombres y correos electr\xf3nicos falsos. Se utiliza la funci\xf3n ",(0,s.kt)("inlineCode",{parentName:"p"},"bcrypt"),' para cifrar una contrase\xf1a predeterminada ("password"), pero en una aplicaci\xf3n real, probablemente querr\xe1s generar contrase\xf1as seguras.'),(0,s.kt)("ol",{start:3},(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Ejecuta el Seeder para poblar la tabla de usuarios:"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre"},"php artisan db:seed --class=UsersSeeder\n")))),(0,s.kt)("p",null,"Este Seeder generar\xe1 20 registros de usuarios de prueba en la tabla ",(0,s.kt)("inlineCode",{parentName:"p"},"users")," de tu base de datos. Los nombres y correos electr\xf3nicos ser\xe1n ficticios, pero puedes personalizar y extender este Seeder seg\xfan tus necesidades, agregando m\xe1s campos y l\xf3gica si es necesario. Este es un ejemplo b\xe1sico de c\xf3mo usar el Faker de Laravel para poblar una tabla con datos falsos."),(0,s.kt)("ol",{start:4},(0,s.kt)("li",{parentName:"ol"},"A\xf1adir a la class DatabaseSeeder:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"<?php\n\nnamespace Database\\Seeders;\n\n// use Illuminate\\Database\\Console\\Seeds\\WithoutModelEvents;\nuse Illuminate\\Database\\Seeder;\n\nclass DatabaseSeeder extends Seeder\n{\n    /**\n     * Seed the application's database.\n     */\n    public function run(): void\n    {\n        $this->call(ColoresSeeder::class);\n        $this->call(TiposSeeder::class);\n        $this->call(GraduacionesSeeder::class);\n        $this->call(PaisesSeeder::class);\n        $this->call(CervezasSeeder::class);\n        $this->call(UsersSeeder::class);\n    }\n}\n")))}u.isMDXComponent=!0},1120:(e,a,n)=>{n.d(a,{Z:()=>r});const r=n.p+"assets/images/bd-c79b1820edc033d09f811de2dea41af8.webp"}}]);