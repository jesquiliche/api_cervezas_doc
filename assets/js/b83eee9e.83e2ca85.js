"use strict";(self.webpackChunkapi_laravel_doc=self.webpackChunkapi_laravel_doc||[]).push([[533],{3905:(e,a,n)=>{n.d(a,{Zo:()=>p,kt:()=>b});var o=n(7294);function t(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){t(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function s(e,a){if(null==e)return{};var n,o,t=function(e,a){if(null==e)return{};var n,o,t={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var i=o.createContext({}),d=function(e){var a=o.useContext(i),n=a;return e&&(n="function"==typeof e?e(a):l(l({},a),e)),n},p=function(e){var a=d(e.components);return o.createElement(i.Provider,{value:a},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return o.createElement(o.Fragment,{},a)}},m=o.forwardRef((function(e,a){var n=e.components,t=e.mdxType,r=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(n),m=t,b=c["".concat(i,".").concat(m)]||c[m]||u[m]||r;return n?o.createElement(b,l(l({ref:a},p),{},{components:n})):o.createElement(b,l({ref:a},p))}));function b(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var r=n.length,l=new Array(r);l[0]=m;var s={};for(var i in a)hasOwnProperty.call(a,i)&&(s[i]=a[i]);s.originalType=e,s[c]="string"==typeof e?e:t,l[1]=s;for(var d=2;d<r;d++)l[d]=n[d];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6187:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var o=n(7462),t=(n(7294),n(3905));const r={sidebar_position:4},l="Creando modelos y relaciones",s={unversionedId:"BacKend/modelos",id:"BacKend/modelos",title:"Creando modelos y relaciones",description:"\xbfQu\xe9 es un modelo?",source:"@site/docs/BacKend/modelos.md",sourceDirName:"BacKend",slug:"/BacKend/modelos",permalink:"/api_cervezas_doc/docs/BacKend/modelos",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/BacKend/modelos.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Migraciones",permalink:"/api_cervezas_doc/docs/BacKend/migraciones"},next:{title:"Rellenando la BB.DD",permalink:"/api_cervezas_doc/docs/BacKend/seeders"}},i={},d=[{value:"\xbfQu\xe9 es un modelo?",id:"qu\xe9-es-un-modelo",level:2},{value:"\xbfC\xf3mo crear un modelo?",id:"c\xf3mo-crear-un-modelo",level:2},{value:"Relaciones en Elocuent(Conceptos)",id:"relaciones-en-elocuentconceptos",level:2},{value:"Color",id:"color",level:3},{value:"Tinker",id:"tinker",level:2},{value:"Modelos",id:"modelos",level:2},{value:"Cerveza",id:"cerveza",level:3},{value:"Pa\xeds",id:"pa\xeds",level:3},{value:"Provincia",id:"provincia",level:3},{value:"Poblacion",id:"poblacion",level:3},{value:"Tipo",id:"tipo",level:3},{value:"Graduaci\xf3n",id:"graduaci\xf3n",level:3}],p={toc:d},c="wrapper";function u(e){let{components:a,...r}=e;return(0,t.kt)(c,(0,o.Z)({},p,r,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"creando-modelos-y-relaciones"},"Creando modelos y relaciones"),(0,t.kt)("h2",{id:"qu\xe9-es-un-modelo"},"\xbfQu\xe9 es un modelo?"),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"Descripcion de la imagen&quot;",src:n(6323).Z,width:"770",height:"450"})),(0,t.kt)("p",null,"Eloquent es el ORM (Object-Relational Mapping) integrado en Laravel, que permite trabajar con las bases de datos de manera objetual. Es decir, Eloquent permite interactuar con las tablas de la base de datos a trav\xe9s de modelos en lugar de escribir consultas SQL manualmente. Cada modelo de Eloquent representa una tabla de la base de datos y proporciona m\xe9todos para interactuar con la informaci\xf3n almacenada en la tabla. Con Eloquent, se pueden realizar operaciones comunes de CRUD (Crear, Leer, Actualizar y Borrar) de manera f\xe1cil y sencilla."),(0,t.kt)("admonition",{title:"CRUD con Eloquent",type:"tip"},(0,t.kt)("p",{parentName:"admonition"},"Aqu\xed hay algunos comandos b\xe1sicos de Eloquent:"),(0,t.kt)("p",{parentName:"admonition"},"$model = new ModelName: Crea una nueva instancia del modelo."),(0,t.kt)("p",{parentName:"admonition"},"$model->save(): Guarda un nuevo registro en la base de datos."),(0,t.kt)("p",{parentName:"admonition"},"ModelName::create(","[data]","): Crea un nuevo registro en la base de datos con los datos especificados."),(0,t.kt)("p",{parentName:"admonition"},"ModelName::find($id): Obtiene un registro en base a su identificador.")),(0,t.kt)("p",null,"No se preocupe si de momento no entiende estos comandos los iremos viendo a medida que vallamos realizando este proyecto.\nPara m\xe1s informaci\xf3n consulte la ",(0,t.kt)("a",{parentName:"p",href:"https://laravel.com/docs/9.x/readme"},"documentaci\xf3n oficial")),(0,t.kt)("h2",{id:"c\xf3mo-crear-un-modelo"},"\xbfC\xf3mo crear un modelo?"),(0,t.kt)("p",null,"Para crear un modelo en Laravel, se puede utilizar el comando de Artisan en la terminal:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"php artisan make:model NombreDelModelo\n")),(0,t.kt)("p",null,"Este comando crear\xe1 un archivo en la carpeta app con el nombre especificado. A continuaci\xf3n, se puede agregar la l\xf3gica y atributos del modelo en este archivo."),(0,t.kt)("p",null,"Por ejemplo, si queremos crear un modelo para una tabla de productos, podemos ejecutar el siguiente comando:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"php artisan make:model Color\n")),(0,t.kt)("p",null,"Este comando crear\xe1 un archivo Producto.php en la carpeta app con la siguiente estructura b\xe1sica:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},"<?php\n\nnamespace App;\n\nuse Illuminate\\Database\\Eloquent\\Model;\n\nclass Color extends Model\n{\n    //\n}\n")),(0,t.kt)("p",null,"Despu\xe9s de crear el modelo, se pueden agregar los atributos y m\xe9todos necesarios para interactuar con la tabla correspondiente en la base de datos. Como tenemos m\xe1s de una tabla relacionada en nuestra base de datos, vamos a ver una breve introducci\xf3n a las relaciones,"),(0,t.kt)("h2",{id:"relaciones-en-elocuentconceptos"},"Relaciones en Elocuent(Conceptos)"),(0,t.kt)("admonition",{title:"Uno a uno",type:"tip"},(0,t.kt)("p",{parentName:"admonition"},'En Laravel, una relaci\xf3n "uno a uno" significa que un registro de una tabla est\xe1 asociado con exactamente un registro en otra tabla. Por ejemplo, un usuario puede tener un solo perfil, y un perfil puede ser de un solo usuario.'),(0,t.kt)("p",{parentName:"admonition"},'Para definir una relaci\xf3n "uno a uno" en Laravel, primero debes crear los modelos para las tablas implicadas en la relaci\xf3n. Luego, debes usar el m\xe9todo hasOne en el modelo que representa la tabla con la clave for\xe1nea y el m\xe9todo belongsTo en el modelo que representa la tabla principal.'),(0,t.kt)("p",{parentName:"admonition"},'Aqu\xed hay un ejemplo de c\xf3mo crear una relaci\xf3n "uno a uno" entre las tablas de usuarios y perfiles:'),(0,t.kt)("pre",{parentName:"admonition"},(0,t.kt)("code",{parentName:"pre",className:"language-js"},"// Archivo User.php\nclass User extends Model\n{\n    public function profile()\n    {\n        return $this->hasOne('App\\Profile');\n    }\n}\n\n// Archivo Profile.php\nclass Profile extends Model\n{\n    public function user()\n    {\n        return $this->belongsTo('App\\User');\n    }\n}\n")),(0,t.kt)("p",{parentName:"admonition"},"Luego, puedes acceder a la informaci\xf3n del perfil de un usuario de la siguiente manera:"),(0,t.kt)("pre",{parentName:"admonition"},(0,t.kt)("code",{parentName:"pre",className:"language-js"},"$user = User::find(1);\n$profile = $user->profile;\n")),(0,t.kt)("p",{parentName:"admonition"},"Esto te permitir\xe1 acceder a los atributos del perfil asociado con un usuario determinado.")),(0,t.kt)("admonition",{title:"Uno a muchos",type:"tip"},(0,t.kt)("p",{parentName:"admonition"},'En Laravel Eloquent, una relaci\xf3n de uno a muchos se establece en un modelo mediante el uso del m\xe9todo "hasMany".'),(0,t.kt)("p",{parentName:"admonition"},'Por ejemplo, si tienes un modelo "User" y un modelo "Order", y cada usuario puede tener muchos pedidos, la relaci\xf3n ser\xeda:'),(0,t.kt)("pre",{parentName:"admonition"},(0,t.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Relaci\xf3n uno a muchos"',title:'"Relaci\xf3n',uno:!0,a:!0,'muchos"':!0},"class User extends Model\n{\n    public function orders()\n    {\n        return $this->hasMany(Order::class);\n    }\n}\n")),(0,t.kt)("p",{parentName:"admonition"},"Entonces, puedes acceder a los pedidos de un usuario de la siguiente manera:"),(0,t.kt)("pre",{parentName:"admonition"},(0,t.kt)("code",{parentName:"pre",className:"language-js"},"$user = User::find(1);\n$orders = $user->orders;\n")),(0,t.kt)("p",{parentName:"admonition"},"Tambi\xe9n puedes personalizar la clave for\xe1nea en la relaci\xf3n, por ejemplo:"),(0,t.kt)("pre",{parentName:"admonition"},(0,t.kt)("code",{parentName:"pre",className:"language-js"},"class Order extends Model\n{\n    public function user()\n    {\n        return $this->belongsTo(User::class, 'user_id');\n    }\n}\n")),(0,t.kt)("p",{parentName:"admonition"},'Esto significa que Eloquent buscar\xe1 una columna "user_id" en la tabla de "orders" para hacer la relaci\xf3n con la tabla de "users".')),(0,t.kt)("admonition",{title:"Muchos a muchos",type:"tip"},(0,t.kt)("p",{parentName:"admonition"},'En Laravel Eloquent, una relaci\xf3n de muchos a muchos se establece mediante el uso del m\xe9todo "belongsToMany".'),(0,t.kt)("p",{parentName:"admonition"},'Por ejemplo, si tienes un modelo "User" y un modelo "Role", y cada usuario puede tener varios roles y cada rol puede ser asignado a varios usuarios, la relaci\xf3n ser\xeda:'),(0,t.kt)("pre",{parentName:"admonition"},(0,t.kt)("code",{parentName:"pre",className:"language-js"},"class User extends Model\n{\n    public function roles()\n    {\n        return $this->belongsToMany(Role::class);\n    }\n}\n")),(0,t.kt)("pre",{parentName:"admonition"},(0,t.kt)("code",{parentName:"pre",className:"language-js"},"class Role extends Model\n{\n    public function users()\n    {\n        return $this->belongsToMany(User::class);\n    }\n}\n")),(0,t.kt)("p",{parentName:"admonition"},"Entonces, puedes acceder a los roles de un usuario de la siguiente manera:"),(0,t.kt)("pre",{parentName:"admonition"},(0,t.kt)("code",{parentName:"pre",className:"language-js"},"$user = User::find(1);\n$roles = $user->roles;\n")),(0,t.kt)("p",{parentName:"admonition"},"Y puedes acceder a los usuarios de un rol de la siguiente manera:"),(0,t.kt)("pre",{parentName:"admonition"},(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"$role = Role::find(1);\n$users = $role->users;\n")),(0,t.kt)("p",{parentName:"admonition"},'Por defecto, Eloquent buscar\xe1 una tabla intermedia con nombres en plural en orden alfab\xe9tico de las dos tablas relacionadas, por ejemplo, "role_user". Sin embargo, puedes especificar un nombre personalizado para la tabla intermedia utilizando el segundo argumento en el m\xe9todo "belongsToMany", por ejemplo:'),(0,t.kt)("pre",{parentName:"admonition"},(0,t.kt)("code",{parentName:"pre",className:"language-js"},"return $this->belongsToMany(Role::class, 'user_roles');\n"))),(0,t.kt)("admonition",{title:"Uno a muchos polim\xf3rfica",type:"tip"},(0,t.kt)("p",{parentName:"admonition"},"Para establecer una relaci\xf3n uno a muchos polim\xf3rfica, debes utilizar los m\xe9todos ",(0,t.kt)("inlineCode",{parentName:"p"},"morphTo()")," y ",(0,t.kt)("inlineCode",{parentName:"p"},"morphMany()")," en tus modelos. El m\xe9todo ",(0,t.kt)("inlineCode",{parentName:"p"},"morphTo()"),' se utiliza en el modelo que puede tener varias relaciones "uno a muchos", mientras que el m\xe9todo ',(0,t.kt)("inlineCode",{parentName:"p"},"morphMany()"),' se utiliza en los modelos que pueden tener una relaci\xf3n "muchos a uno".'),(0,t.kt)("p",{parentName:"admonition"},"Por ejemplo, supongamos que tienes un modelo ",(0,t.kt)("inlineCode",{parentName:"p"},"Comment")," y varios modelos diferentes que pueden ser comentados, como ",(0,t.kt)("inlineCode",{parentName:"p"},"Post")," y ",(0,t.kt)("inlineCode",{parentName:"p"},"Video"),". Para establecer una relaci\xf3n uno a muchos polim\xf3rfica, puedes agregar el siguiente m\xe9todo ",(0,t.kt)("inlineCode",{parentName:"p"},"comments()")," al modelo ",(0,t.kt)("inlineCode",{parentName:"p"},"Post")," y al modelo ",(0,t.kt)("inlineCode",{parentName:"p"},"Video"),":"),(0,t.kt)("pre",{parentName:"admonition"},(0,t.kt)("code",{parentName:"pre"},"public function comments()\n{\n    return $this->morphMany('App\\Models\\Comment', 'commentable');\n}\n")),(0,t.kt)("p",{parentName:"admonition"},"Este m\xe9todo indica que el modelo ",(0,t.kt)("inlineCode",{parentName:"p"},"Post")," o ",(0,t.kt)("inlineCode",{parentName:"p"},"Video")," puede tener muchos comentarios a trav\xe9s de la relaci\xf3n ",(0,t.kt)("inlineCode",{parentName:"p"},"commentable"),"."),(0,t.kt)("p",{parentName:"admonition"},"A continuaci\xf3n, en el modelo ",(0,t.kt)("inlineCode",{parentName:"p"},"Comment"),", debes agregar el siguiente m\xe9todo ",(0,t.kt)("inlineCode",{parentName:"p"},"commentable()")," para establecer la relaci\xf3n inversa:"),(0,t.kt)("pre",{parentName:"admonition"},(0,t.kt)("code",{parentName:"pre"},"public function commentable()\n{\n    return $this->morphTo();\n}\n")),(0,t.kt)("p",{parentName:"admonition"},"Este m\xe9todo indica que el modelo ",(0,t.kt)("inlineCode",{parentName:"p"},"Comment"),' puede pertenecer a cualquier modelo que tenga una relaci\xf3n "uno a muchos" polim\xf3rfica a trav\xe9s del campo ',(0,t.kt)("inlineCode",{parentName:"p"},"commentable_id")," y ",(0,t.kt)("inlineCode",{parentName:"p"},"commentable_type"),"."),(0,t.kt)("p",{parentName:"admonition"},"Ahora puedes acceder a los comentarios de un ",(0,t.kt)("inlineCode",{parentName:"p"},"Post")," o un ",(0,t.kt)("inlineCode",{parentName:"p"},"Video")," utilizando el m\xe9todo ",(0,t.kt)("inlineCode",{parentName:"p"},"comments()")," y puedes acceder al modelo al que pertenece un comentario utilizando el m\xe9todo ",(0,t.kt)("inlineCode",{parentName:"p"},"commentable()"),". Por ejemplo:"),(0,t.kt)("pre",{parentName:"admonition"},(0,t.kt)("code",{parentName:"pre"},"$post = Post::find(1);\n$comments = $post->comments; // Obtener todos los comentarios del post\n$comment = Comment::find(1);\n$commentable = $comment->commentable; // Obtener el modelo (Post o Video) al que pertenece el comentario\n")),(0,t.kt)("p",{parentName:"admonition"},'La relaci\xf3n uno a muchos polim\xf3rfica en Eloquent permite que un modelo tenga varias relaciones "uno a muchos" con diferentes modelos, lo que puede ser \xfatil para simplificar la estructura de la base de datos y hacer que el c\xf3digo sea m\xe1s f\xe1cil de mantener.')),(0,t.kt)("admonition",{title:"Muchos a muchos polim\xf3rfica",type:"tip"},(0,t.kt)("p",{parentName:"admonition"},'En Eloquent, una relaci\xf3n muchos a muchos polim\xf3rfica te permite establecer una relaci\xf3n "muchos a muchos" entre varios modelos diferentes a trav\xe9s de una \xfanica tabla de relaci\xf3n polim\xf3rfica. Esto es \xfatil cuando tienes varias entidades diferentes que pueden tener muchas instancias de otra entidad y deseas evitar la creaci\xf3n de m\xfaltiples tablas de relaci\xf3n.'),(0,t.kt)("p",{parentName:"admonition"},"Para establecer una relaci\xf3n muchos a muchos polim\xf3rfica, debes utilizar los m\xe9todos ",(0,t.kt)("inlineCode",{parentName:"p"},"morphToMany()")," y ",(0,t.kt)("inlineCode",{parentName:"p"},"morphedByMany()")," en tus modelos. El m\xe9todo ",(0,t.kt)("inlineCode",{parentName:"p"},"morphToMany()")," se utiliza en el modelo que puede tener muchas instancias de otra entidad, mientras que el m\xe9todo ",(0,t.kt)("inlineCode",{parentName:"p"},"morphedByMany()")," se utiliza en el modelo que puede ser utilizado por muchas instancias de otros modelos."),(0,t.kt)("p",{parentName:"admonition"},"Por ejemplo, supongamos que tienes un modelo ",(0,t.kt)("inlineCode",{parentName:"p"},"Tag")," y varios modelos diferentes que pueden tener muchas etiquetas, como ",(0,t.kt)("inlineCode",{parentName:"p"},"Post")," y ",(0,t.kt)("inlineCode",{parentName:"p"},"Video"),". Para establecer una relaci\xf3n muchos a muchos polim\xf3rfica, puedes agregar el siguiente m\xe9todo ",(0,t.kt)("inlineCode",{parentName:"p"},"tags()")," al modelo ",(0,t.kt)("inlineCode",{parentName:"p"},"Post")," y al modelo ",(0,t.kt)("inlineCode",{parentName:"p"},"Video"),":"),(0,t.kt)("pre",{parentName:"admonition"},(0,t.kt)("code",{parentName:"pre"},"public function tags()\n{\n    return $this->morphToMany('App\\Models\\Tag', 'taggable');\n}\n")),(0,t.kt)("p",{parentName:"admonition"},"Este m\xe9todo indica que el modelo ",(0,t.kt)("inlineCode",{parentName:"p"},"Post")," o ",(0,t.kt)("inlineCode",{parentName:"p"},"Video")," puede tener muchas etiquetas a trav\xe9s de la relaci\xf3n ",(0,t.kt)("inlineCode",{parentName:"p"},"taggable"),"."),(0,t.kt)("p",{parentName:"admonition"},"A continuaci\xf3n, en el modelo ",(0,t.kt)("inlineCode",{parentName:"p"},"Tag"),", debes agregar el siguiente m\xe9todo ",(0,t.kt)("inlineCode",{parentName:"p"},"taggable()")," para establecer la relaci\xf3n inversa:"),(0,t.kt)("pre",{parentName:"admonition"},(0,t.kt)("code",{parentName:"pre"},"public function taggable()\n{\n    return $this->morphedByMany('App\\Models\\Post', 'taggable');\n}\n")),(0,t.kt)("p",{parentName:"admonition"},"Este m\xe9todo indica que el modelo ",(0,t.kt)("inlineCode",{parentName:"p"},"Tag")," puede pertenecer a cualquier modelo que tenga una relaci\xf3n muchos a muchos polim\xf3rfica a trav\xe9s de la tabla de relaci\xf3n ",(0,t.kt)("inlineCode",{parentName:"p"},"taggables")," y la columna ",(0,t.kt)("inlineCode",{parentName:"p"},"taggable_id")," y ",(0,t.kt)("inlineCode",{parentName:"p"},"taggable_type"),"."),(0,t.kt)("p",{parentName:"admonition"},"Ahora puedes acceder a las etiquetas de un ",(0,t.kt)("inlineCode",{parentName:"p"},"Post")," o un ",(0,t.kt)("inlineCode",{parentName:"p"},"Video")," utilizando el m\xe9todo ",(0,t.kt)("inlineCode",{parentName:"p"},"tags()")," y puedes acceder a los modelos que tienen una etiqueta espec\xedfica utilizando el m\xe9todo ",(0,t.kt)("inlineCode",{parentName:"p"},"taggable()"),". Por ejemplo:"),(0,t.kt)("pre",{parentName:"admonition"},(0,t.kt)("code",{parentName:"pre"},"$post = Post::find(1);\n$tags = $post->tags; // Obtener todas las etiquetas del post\n$tag = Tag::find(1);\n$taggable = $tag->taggable; // Obtener todos los modelos (Post o Video) que tienen la etiqueta\n")),(0,t.kt)("p",{parentName:"admonition"},'En conclusi\xf3n, la relaci\xf3n muchos a muchos polim\xf3rfica en Eloquent te permite establecer una relaci\xf3n "muchos a muchos" entre varios modelos diferentes a trav\xe9s de una \xfanica tabla de relaci\xf3n polim\xf3rfica, lo que puede ser \xfatil para simplificar la estructura de la base de datos y hacer que el c\xf3digo sea m\xe1s f\xe1cil de mantener.')),(0,t.kt)("h3",{id:"color"},"Color"),(0,t.kt)("p",null,"A continuaci\xf3n, vamos a definir el modelo de la clase ",(0,t.kt)("strong",{parentName:"p"},"Color")," para la tabla ",(0,t.kt)("strong",{parentName:"p"},"colores"),". Si recuerdas, cuando estudiamos las migraciones, establecimos una relaci\xf3n entre la tabla ",(0,t.kt)("strong",{parentName:"p"},"colores")," y la tabla ",(0,t.kt)("strong",{parentName:"p"},"cervezas"),". En este caso, una cerveza puede tener un color, como por ejemplo, un tono tostado. Sin embargo, un color puede estar asociado a muchas cervezas de distintas marcas, tipos, etc. Esto constituye una ",(0,t.kt)("strong",{parentName:"p"},(0,t.kt)("em",{parentName:"strong"},"relaci\xf3n de uno a muchos")),". En la parte del 'uno', tenemos el modelo ",(0,t.kt)("strong",{parentName:"p"},"Color"),", y en la parte de 'muchos', tenemos el modelo ",(0,t.kt)("strong",{parentName:"p"},"Cerveza"),". A continuaci\xf3n, veremos c\xf3mo implementar esta relaci\xf3n en los modelos. Desde la terminal ejecute el siguiente comando:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"php artisan make:model Color\n")),(0,t.kt)("p",null,"Sit\xfaese en la carpeta ",(0,t.kt)("strong",{parentName:"p"},"app\\Models")," y edite el c\xf3digo del archivo ",(0,t.kt)("strong",{parentName:"p"},"Color.php"),". Deje el c\xf3digo tal como le muestro a continuaci\xf3n."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},"<?php\n\nnamespace App\\Models;\n\nuse Illuminate\\Database\\Eloquent\\Factories\\HasFactory;\nuse Illuminate\\Database\\Eloquent\\Model;\n\nclass Color extends Model\n{\n    use HasFactory;\n    protected $fillable=['nombre'];\n    protected $table='colores';\n    \n    public function cervezas()\n    {\n        return $this->hasMany(Cerveza::class);\n    }\n}\n")),(0,t.kt)("p",null,"Hay varios puntos a destacar en este c\xf3digo:"),(0,t.kt)("ol",null,(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},'Se utiliza el trait "HasFactory", que es una caracter\xedstica de Laravel para generar datos de prueba o sembrar la base de datos con registros falsos. Esto es \xfatil en entornos de desarrollo y pruebas.')),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},"La propiedad fillable en los modelos de Eloquent en Laravel es utilizada para especificar qu\xe9 columnas de una tabla de base de datos se pueden asignar masivamente, es decir, cu\xe1les columnas pueden ser llenadas con datos en una \xfanica operaci\xf3n de asignaci\xf3n masiva. Esta propiedad es una medida de seguridad para proteger contra asignaciones masivas no deseadas y potenciales vulnerabilidades de seguridad. Ahondaremos m\xe1s en este tema cuando veamos los controladores.")),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},"La propiedad protegida ",(0,t.kt)("strong",{parentName:"p"},"$table")," se establece en 'colores', lo que indica que este modelo est\xe1 asociado con la tabla de la base de datos llamada \"colores\". Laravel asume por defecto que el nombre de la tabla es el nombre del modelo en plural ",(0,t.kt)("strong",{parentName:"p"},"(colors)")," en ingles, pero puedes especificar manualmente el nombre de la tabla utilizando esta propiedad.")),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},"El m\xe9todo ",(0,t.kt)("strong",{parentName:"p"},"cervezas()"),' es un m\xe9todo de relaci\xf3n definido en el modelo "Color". Este m\xe9todo establece una relaci\xf3n "uno a muchos" con el modelo "Cerveza". En otras palabras, un "Color" puede tener muchas "Cervezas", pero una "Cerveza" pertenece a un \xfanico "Color". Esto se define utilizando el m\xe9todo ',(0,t.kt)("strong",{parentName:"p"},"hasMany()")," de Eloquent."))),(0,t.kt)("p",null,'En resumen, este c\xf3digo define el modelo "Color" en Laravel y configura una relaci\xf3n "uno a muchos" entre los colores y las cervezas, lo que significa que un color puede estar asociado con varias cervezas en la base de datos. Esto es \xfatil para representar relaciones complejas entre tablas en una base de datos relacional dentro de una aplicaci\xf3n Laravel.'),(0,t.kt)("h2",{id:"tinker"},"Tinker"),(0,t.kt)("p",null,"Tinker es una herramienta de ",(0,t.kt)("strong",{parentName:"p"},"REPL (Read-Eval-Print Loop)")," de Laravel que te permite interactuar con tu aplicaci\xf3n de Laravel desde la consola. Con Tinker, puedes ejecutar c\xf3digo PHP, consultar y modificar la informaci\xf3n en la base de datos, y ejecutar otros comandos relacionados con Laravel."),(0,t.kt)("p",null,"Para usar ",(0,t.kt)("strong",{parentName:"p"},"Tinker"),", abre la consola en tu proyecto de Laravel y ejecuta el comando php artisan tinker. Una vez que se abra la sesi\xf3n de Tinker, puedes escribir cualquier c\xf3digo PHP y ver los resultados en tiempo real. Por ejemplo, puedes consultar informaci\xf3n de la base de datos, crear nuevos registros y modificar registros existentes."),(0,t.kt)("p",null,"Aqu\xed hay algunos ejemplos de lo que puedes hacer con Tinker:"),(0,t.kt)("p",null,"Consultar informaci\xf3n de una tabla:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},">>> App\\Models\\Producto::all()\n")),(0,t.kt)("p",null,"Crear un nuevo registro:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},'>>> $producto = new App\\Models\\Producto;\n>>> $producto->nombre = "Producto 1";\n>>> $producto->save()\n')),(0,t.kt)("p",null,"Modificar un registro existente:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},'>>> $producto = App\\Models\\Producto::find(1);\n>>> $producto->nombre = "Producto actualizado";\n>>> $producto->save()\n')),(0,t.kt)("p",null,"Tinker es una herramienta muy \xfatil para probar c\xf3digo r\xe1pidamente y ver los resultados sin tener que recargar la p\xe1gina o escribir c\xf3digo adicional en tu aplicaci\xf3n de Laravel. \xa1Disfruta!"),(0,t.kt)("h2",{id:"modelos"},"Modelos"),(0,t.kt)("h3",{id:"cerveza"},"Cerveza"),(0,t.kt)("p",null,"Seguidamente procederemos a crear el Modelo ",(0,t.kt)("strong",{parentName:"p"},"Cerveza"),", nuestro Modelo central."),(0,t.kt)("p",null,"Desde la terminal teclee:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"php artisan make:model Cerveza\n")),(0,t.kt)("p",null,"A continuaci\xf3n dir\xedjase a la carpeta App/Models de su proyecto y edite el fichero ",(0,t.kt)("strong",{parentName:"p"},"Cerveza"),". Copie el siguiente c\xf3digo;"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},"\n<?php\n\nnamespace App\\Models;\n\nuse Illuminate\\Database\\Eloquent\\Factories\\HasFactory;\nuse Illuminate\\Database\\Eloquent\\Model;\n\nclass Cerveza extends Model\n{\n    use HasFactory;\n    protected $table = 'cervezas'; // Nombre de la tabla en la base de datos\n\n    protected $primaryKey = 'id';\n\n    protected $fillable = [\n        'nombre',\n        'descripcion',\n        'color_id',\n        'graduacion_id',\n        'tipo_id',\n        'pais_id'\n    ];\n\n    public function color()\n    {\n        return $this->belongsTo(Color::class, 'color_id');\n    }\n\n    public function tipo()\n    {\n        return $this->belongsTo(Tipo::class, 'tipo_id');\n    }\n\n    public function graduacion(()\n    {\n        return $this->belongsTo(Graduacion::class, 'graduacion_id');\n    }\n\n    public function pais(()\n    {\n        return $this->belongsTo(Pais::class, 'pais_id');\n    }\n}\n")),(0,t.kt)("p",null,"Los siguientes modelos siguen el mismo el mismo mecanismo de edici\xf3n y creaci\xf3n."),(0,t.kt)("h3",{id:"pa\xeds"},"Pa\xeds"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},"<?php\n\nnamespace App\\Models;\n\nuse Illuminate\\Database\\Eloquent\\Factories\\HasFactory;\nuse Illuminate\\Database\\Eloquent\\Model;\n\nclass Pais extends Model\n{\n    use HasFactory;\n    protected $table='paises';\n    protected $fillable=['nombre'];\n   \n    public function cervezas()\n    {\n        return $this->hasMany(Cerveza::class);\n    }\n}\n")),(0,t.kt)("h3",{id:"provincia"},"Provincia"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},"<?php\n\nnamespace App\\Models;\n\nuse Illuminate\\Database\\Eloquent\\Factories\\HasFactory;\nuse Illuminate\\Database\\Eloquent\\Model;\n\nclass Provincia extends Model\n{\n    protected $fillable = [\n        'codigo',\n        'nombre'\n       \n    ];\n    use HasFactory;\n}\n")),(0,t.kt)("h3",{id:"poblacion"},"Poblacion"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},"<?php\n\nnamespace App\\Models;\n\nuse Illuminate\\Database\\Eloquent\\Factories\\HasFactory;\nuse Illuminate\\Database\\Eloquent\\Model;\n\nclass Poblacion extends Model\n{\n    protected $table=\"poblaciones\";\n    protected $fillable = ['codigo','nombre'];\n    use HasFactory;\n}\n\n")),(0,t.kt)("h3",{id:"tipo"},"Tipo"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},"<?php\n\nnamespace App\\Models;\n\nuse Illuminate\\Database\\Eloquent\\Factories\\HasFactory;\nuse Illuminate\\Database\\Eloquent\\Model;\n\nclass Tipo extends Model\n{\n    use HasFactory;\n    protected $fillable=['nombre'];\n   \n    public function cervezas()\n    {\n        return $this->hasMany(Cerveza::class);\n    }\n}\n")),(0,t.kt)("h3",{id:"graduaci\xf3n"},"Graduaci\xf3n"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},"<?php\n\nnamespace App\\Models;\n\nuse Illuminate\\Database\\Eloquent\\Factories\\HasFactory;\nuse Illuminate\\Database\\Eloquent\\Model;\n\nclass Graduacion extends Model\n{\n    use HasFactory;\n    protected $table='graduaciones';\n    protected $fillable=['nombre'];\n   \n    public function cervezas()\n    {\n        return $this->hasMany(Cervezas::class);\n    }\n}\n")))}u.isMDXComponent=!0},6323:(e,a,n)=>{n.d(a,{Z:()=>o});const o=n.p+"assets/images/orm-2e16332f35cfbeb88f732225822887bf.png"}}]);