"use strict";(self.webpackChunkapi_laravel_doc=self.webpackChunkapi_laravel_doc||[]).push([[407],{3905:(e,n,a)=>{a.d(n,{Zo:()=>c,kt:()=>g});var r=a(7294);function t(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){t(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,r,t=function(e,n){if(null==e)return{};var a,r,t={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var u=r.createContext({}),l=function(e){var n=r.useContext(u),a=n;return e&&(a="function"==typeof e?e(n):s(s({},n),e)),a},c=function(e){var n=l(e.components);return r.createElement(u.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var a=e.components,t=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=l(a),m=t,g=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return a?r.createElement(g,s(s({ref:n},c),{},{components:a})):r.createElement(g,s({ref:n},c))}));function g(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=a.length,s=new Array(o);s[0]=m;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i[d]="string"==typeof e?e:t,s[1]=i;for(var l=2;l<o;l++)s[l]=a[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8029:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>u,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=a(7462),t=(a(7294),a(3905));const o={sidebar_position:1},s="\ud83d\udcd6JSON Web Token",i={unversionedId:"jwr/jwt",id:"jwr/jwt",title:"\ud83d\udcd6JSON Web Token",description:"\xbfQu\xe9 es JWT?",source:"@site/docs/jwr/jwt.md",sourceDirName:"jwr",slug:"/jwr/jwt",permalink:"/api_cervezas_doc/docs/jwr/jwt",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/jwr/jwt.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Autenticaci\xf3n, seguridad y pruebas",permalink:"/api_cervezas_doc/docs/category/autenticaci\xf3n-seguridad-y-pruebas"},next:{title:"\ud83d\udcd6Pruebas con Postman",permalink:"/api_cervezas_doc/docs/jwr/test1"}},u={},l=[{value:"\xbfQu\xe9 es JWT?",id:"qu\xe9-es-jwt",level:2},{value:"Instalaci\xf3n y configuraci\xf3n de JWT",id:"instalaci\xf3n-y-configuraci\xf3n-de-jwt",level:2},{value:"\ud83d\udcc7Instalar y configurar JWT",id:"instalar-y-configurar-jwt",level:3},{value:"\ud83d\udcc7Configuraci\xf3n de AuthGuard",id:"configuraci\xf3n-de-authguard",level:3},{value:"\ud83d\udcc7Modificar el modelo User",id:"modificar-el-modelo-user",level:3},{value:"\ud83d\udcc7Crear el controlador Auth",id:"crear-el-controlador-auth",level:3}],c={toc:l},d="wrapper";function p(e){let{components:n,...a}=e;return(0,t.kt)(d,(0,r.Z)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"json-web-token"},"\ud83d\udcd6JSON Web Token"),(0,t.kt)("h2",{id:"qu\xe9-es-jwt"},"\xbfQu\xe9 es JWT?"),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"JSON Web Token (JWT)")," es un est\xe1ndar de internet que define una forma de transferir informaci\xf3n segura entre partes como un token. La informaci\xf3n puede ser verificada y confiable debido a que es firmada digitalmente."),(0,t.kt)("p",null,"JWT se compone de tres partes: header, payload y signature. El header describe el tipo de token y la forma en que se firma, el payload contiene la informaci\xf3n a transferir, y la signature se utiliza para verificar que la informaci\xf3n no ha sido alterada en tr\xe1nsito."),(0,t.kt)("p",null,"JWT se utiliza a menudo en aplicaciones de autenticaci\xf3n y autorizaci\xf3n, en las que el cliente env\xeda una solicitud a un servidor con un token JWT y el servidor valida la autenticidad del token antes de proporcionar acceso a los recursos protegidos."),(0,t.kt)("p",null,"En resumen, JWT es una forma eficiente y segura de transmitir informaci\xf3n entre partes a trav\xe9s de un token que puede ser verificado y confiable."),(0,t.kt)("h2",{id:"instalaci\xf3n-y-configuraci\xf3n-de-jwt"},"Instalaci\xf3n y configuraci\xf3n de JWT"),(0,t.kt)("h3",{id:"instalar-y-configurar-jwt"},"\ud83d\udcc7Instalar y configurar JWT"),(0,t.kt)("p",null," instalaremos y configuraremos el paquete de autenticaci\xf3n JWT de Laravel Usaremos ",(0,t.kt)("strong",{parentName:"p"},"php-open-source-saver/jwt-auth"),", un fork de ",(0,t.kt)("strong",{parentName:"p"},"tymondesign/jwt-auth"),", ya que ",(0,t.kt)("strong",{parentName:"p"},"tymondesign/jwt-auth")," parece haber sido abandonado y no es compatible con Laravel 9."),(0,t.kt)("p",null,"Instale la versi\xf3n m\xe1s nueva del paquete usando este comando:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"composer require php-open-source-saver/jwt-auth\n")),(0,t.kt)("p",null,"A continuaci\xf3n, necesitamos hacer p\xfablicas las configuraciones del paquete. Copie el archivo de configuraci\xf3n de JWT desde el proveedor a confi/jwt.php con este comando:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},'php artisan vendor:publish --provider="PHPOpenSourceSaver\\JWTAuth\\Providers\\LaravelServiceProvider"\n')),(0,t.kt)("p",null,"Ahora, necesitamos generar una clave secreta para manejar el cifrado del token. Para hacerlo, ejecute este comando:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bah"},"php artisan jwt:secret\n")),(0,t.kt)("p",null,"Esto actualizar\xe1 nuestro archivo .env con algo como esto:"),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"JWT_SECRET=xxxxxxxx"),"\nEsta es la clave que se utilizar\xe1 para firmar nuestros tokens."),(0,t.kt)("h3",{id:"configuraci\xf3n-de-authguard"},"\ud83d\udcc7Configuraci\xf3n de AuthGuard"),(0,t.kt)("p",null,"Dentro del archivo ",(0,t.kt)("strong",{parentName:"p"},"config/auth.php"),", tendremos que hacer algunos cambios para configurar Laravel para usar el JWT AuthGuard para alimentar la autenticaci\xf3n de la aplicaci\xf3n."),(0,t.kt)("p",null,"Primero, haremos los siguientes cambios en el archivo:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},"'guards' => [\n    'web' => [\n        'driver' => 'session',\n        'provider' => 'users',\n    ],\n\n    'api' => [\n            'driver' => 'jwt',\n            'provider' => 'users',\n    ],\n\n],\n")),(0,t.kt)("p",null,"En este c\xf3digo, estamos diciendo al guardi\xe1n API que use el controlador JWT y que haga del guardi\xe1n API el predeterminado."),(0,t.kt)("p",null,"\xa1Ahora, podemos usar el mecanismo de autenticaci\xf3n integrado de Laravel, con jwt-auth manejando el trabajo pesado!"),(0,t.kt)("h3",{id:"modificar-el-modelo-user"},"\ud83d\udcc7Modificar el modelo User"),(0,t.kt)("p",null,"Para implementar el contrato PHPOpenSourceSaverJWTAuthContractsJWTSubject en nuestro modelo de Usuario, usaremos dos m\xe9todos: getJWTCustomClaims() y getJWTIdentifier()."),(0,t.kt)("p",null,"Reemplaza el c\xf3digo en el archivo app/Models/User.php con lo siguiente:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},"namespace App\\Models;\nuse Illuminate\\Contracts\\Auth\\MustVerifyEmail;\nuse Illuminate\\Database\\Eloquent\\Factories\\HasFactory;\nuse Illuminate\\Foundation\\Auth\\User as Authenticatable;\nuse Illuminate\\Notifications\\Notifiable;\nuse PHPOpenSourceSaver\\JWTAuth\\Contracts\\JWTSubject;\n\nclass User extends Authenticatable implements JWTSubject\n{\nuse HasFactory, Notifiable;\n\n/**\n * Los atributos que son asignables en masa.\n *\n * @var array<int, string>\n */\nprotected $fillable = [\n    'name',\n    'email',\n    'password',\n];\n\n/**\n * Los atributos que deben estar ocultos para la serializaci\xf3n.\n *\n * @var array<int, string>\n */\nprotected $hidden = [\n    'password',\n    'remember_token',\n];\n\n/**\n * Los atributos que deben ser convertidos.\n *\n * @var array<string, string>\n */\nprotected $casts = [\n    'email_verified_at' => 'datetime',\n];\n\n /**\n * Obtiene el identificador que se almacenar\xe1 en la afirmaci\xf3n de sujeto del JWT.\n *\n * @return mixed\n */\npublic function getJWTIdentifier()\n{\n    return $this->getKey();\n}\n\n/**\n * Devuelve un array de valores clave, que contiene cualquier afirmaci\xf3n personalizada que deba agregarse al JWT.\n *\n * @return array\n */\npublic function getJWTCustomClaims()\n{\n    return [];\n}\n}\n")),(0,t.kt)("p",null,"\xa1Eso es todo para nuestra configuraci\xf3n de modelos!"),(0,t.kt)("h3",{id:"crear-el-controlador-auth"},"\ud83d\udcc7Crear el controlador Auth"),(0,t.kt)("p",null,"Ahora, crearemos un controlador para manejar la l\xf3gica central del proceso de autenticaci\xf3n."),(0,t.kt)("p",null,"Primero, ejecutaremos este comando para generar el controlador:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},"php artisan make:controller AuthController\n")),(0,t.kt)("p",null,"Luego, reemplazaremos el contenido del controlador con el siguiente fragmento de c\xf3digo:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},"use App\\Models\\User;\n\nclass AuthController extends Controller\n{\n\n    public function __construct()\n    {\n        $this->middleware('auth:api', ['except' => ['login','register']]);\n    }\n\n    public function login(Request $request)\n    {\n        $request->validate([\n            'email' => 'required|string|email',\n            'password' => 'required|string',\n        ]);\n        $credentials = $request->only('email', 'password');\n\n        $token = Auth::attempt($credentials);\n        if (!$token) {\n            return response()->json([\n                'status' => 'error',\n                'message' => 'Unauthorized',\n            ], 401);\n        }\n\n        $user = Auth::user();\n        return response()->json([\n                'status' => 'success',\n                'user' => $user,\n                'authorisation' => [\n                    'token' => $token,\n                    'type' => 'bearer',\n                ]\n            ]);\n\n    }\n\n    public function register(Request $request){\n        $request->validate([\n            'name' => 'required|string|max:255',\n            'email' => 'required|string|email|max:255|unique:users',\n            'password' => 'required|string|min:6',\n        ]);\n\n        $user = User::create([\n            'name' => $request->name,\n            'email' => $request->email,\n            'password' => Hash::make($request->password),\n        ]);\n\n        $token = Auth::login($user);\n        return response()->json([\n            'status' => 'success',\n            'message' => 'User created successfully',\n            'user' => $user,\n            'authorisation' => [\n                'token' => $token,\n                'type' => 'bearer',\n            ]\n        ]);\n    }\n\n    public function logout()\n    {\n        Auth::logout();\n        return response()->json([\n            'status' => 'success',\n            'message' => 'Successfully logged out',\n        ]);\n    }\n\n    public function refresh()\n    {\n        return response()->json([\n            'status' => 'success',\n            'user' => Auth::user(),\n            'authorisation' => [\n                'token' => Auth::refresh(),\n                'type' => 'bearer',\n            ]\n        ]);\n    }\n\n}\n")),(0,t.kt)("p",null,"Este es un r\xe1pido resumen de las funciones p\xfablicas en el AuthController:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},"constructor:")," Establecemos esta funci\xf3n en nuestra clase controladora para que podamos usar el middleware auth:api dentro de ella para bloquear el acceso no autenticado a ciertos m\xe9todos dentro del controlador."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},"login:")," Este m\xe9todo autentica a un usuario con su correo electr\xf3nico y contrase\xf1a. Cuando un usuario es autenticado con \xe9xito, el m\xe9todo attempt() de la fachada Auth devuelve el token JWT. El token generado se recupera y se devuelve como JSON con el objeto usuario.\nregister: Este m\xe9todo crea el registro de usuario y inicia sesi\xf3n en el usuario con la generaci\xf3n de tokens."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},"logout:")," Este m\xe9todo invalida el token de Auth de usuario."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},"refresh:")," Este m\xe9todo invalida el token de Auth de usuario y genera un nuevo token.")),(0,t.kt)("p",null,"Quedara por incluir el siguiente constructor a todos nuestros controladores:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},"public function __construct()\n    {\n        $this->middleware('auth:api');\n    }\n")),(0,t.kt)("p",null,"\xa1Hemos terminado de configurar nuestra autenticaci\xf3n JWT!"))}p.isMDXComponent=!0}}]);