"use strict";(self.webpackChunkapi_laravel_doc=self.webpackChunkapi_laravel_doc||[]).push([[671],{3905:(e,a,r)=>{r.d(a,{Zo:()=>p,kt:()=>y});var n=r(7294);function s(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function t(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?t(Object(r),!0).forEach((function(a){s(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):t(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function i(e,a){if(null==e)return{};var r,n,s=function(e,a){if(null==e)return{};var r,n,s={},t=Object.keys(e);for(n=0;n<t.length;n++)r=t[n],a.indexOf(r)>=0||(s[r]=e[r]);return s}(e,a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(n=0;n<t.length;n++)r=t[n],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var l=n.createContext({}),c=function(e){var a=n.useContext(l),r=a;return e&&(r="function"==typeof e?e(a):o(o({},a),e)),r},p=function(e){var a=c(e.components);return n.createElement(l.Provider,{value:a},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var r=e.components,s=e.mdxType,t=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(r),m=s,y=u["".concat(l,".").concat(m)]||u[m]||d[m]||t;return r?n.createElement(y,o(o({ref:a},p),{},{components:r})):n.createElement(y,o({ref:a},p))}));function y(e,a){var r=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var t=r.length,o=new Array(t);o[0]=m;var i={};for(var l in a)hasOwnProperty.call(a,l)&&(i[l]=a[l]);i.originalType=e,i[u]="string"==typeof e?e:s,o[1]=i;for(var c=2;c<t;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9881:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>t,metadata:()=>i,toc:()=>c});var n=r(7462),s=(r(7294),r(3905));const t={sidebar_position:1},o="Introducci\xf3n a las APIs",i={unversionedId:"intro",id:"intro",title:"Introducci\xf3n a las APIs",description:"Mi imagen",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/api_cervezas_doc/docs/intro",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Entorno y configuraci\xf3n",permalink:"/api_cervezas_doc/docs/category/entorno-y-configuraci\xf3n"}},l={},c=[{value:"\xbfQu\xe9 son las APIs?",id:"qu\xe9-son-las-apis",level:2},{value:"\xbfPor qu\xe9 usar una API?",id:"por-qu\xe9-usar-una-api",level:2},{value:"Ejemplos de uso de APIs",id:"ejemplos-de-uso-de-apis",level:2},{value:"Diferencia entre una API y una aplicaci\xf3n web tradicional",id:"diferencia-entre-una-api-y-una-aplicaci\xf3n-web-tradicional",level:2},{value:"Laravel y las APIs",id:"laravel-y-las-apis",level:2}],p={toc:c},u="wrapper";function d(e){let{components:a,...t}=e;return(0,s.kt)(u,(0,n.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"introducci\xf3n-a-las-apis"},"Introducci\xf3n a las APIs"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Mi imagen",src:r(3201).Z,width:"900",height:"686"})),(0,s.kt)("h2",{id:"qu\xe9-son-las-apis"},"\xbfQu\xe9 son las APIs?"),(0,s.kt)("p",null,"Una API (Application Programming Interface) es un conjunto de reglas y est\xe1ndares que se utilizan para permitir que diferentes software interact\xfaen entre s\xed. En otras palabras, es una interfaz de programaci\xf3n que permite a diferentes sistemas compartir y acceder a informaci\xf3n y funcionalidades entre ellos."),(0,s.kt)("p",null,"Las APIs son esenciales para el desarrollo de aplicaciones y plataformas modernas, ya que permiten la integraci\xf3n de diferentes sistemas y tecnolog\xedas. Por ejemplo, una aplicaci\xf3n puede utilizar la API de un servicio en l\xednea para acceder a informaci\xf3n sobre el clima, el tr\xe1fico, o la localizaci\xf3n."),(0,s.kt)("p",null,"Las APIs tambi\xe9n son ampliamente utilizadas por las empresas para permitir que terceros accedan a sus datos y funcionalidades en una forma controlada y segura. Esto ha dado lugar a una gran cantidad de innovaci\xf3n, ya que permite a las empresas ofrecer sus servicios a trav\xe9s de diferentes canales y dispositivos."),(0,s.kt)("p",null,"En resumen, las APIs son una pieza clave para la conectividad y la integraci\xf3n en la era digital y permiten a los desarrolladores crear soluciones innovadoras y eficientes que puedan ser utilizadas por una amplia gama de aplicaciones y servicios."),(0,s.kt)("h2",{id:"por-qu\xe9-usar-una-api"},"\xbfPor qu\xe9 usar una API?"),(0,s.kt)("p",null,"Hay varias razones por las que alguien puede querer utilizar una API:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Integraci\xf3n de sistemas: Las APIs permiten a los desarrolladores integrar diferentes sistemas y tecnolog\xedas para crear soluciones m\xe1s eficientes y complejas.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Acceso a datos y funcionalidades: Las APIs permiten a los desarrolladores acceder a los datos y funcionalidades de otras aplicaciones y servicios en una forma controlada y segura.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Automatizaci\xf3n: Las APIs permiten a los desarrolladores automatizar tareas y procesos, lo que ahorra tiempo y reduce errores.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Creaci\xf3n de aplicaciones m\xe1s complejas: Las APIs permiten a los desarrolladores acceder a los recursos de otras aplicaciones y servicios para crear soluciones m\xe1s complejas y avanzadas.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Mejora de la experiencia del usuario: Las APIs permiten a los desarrolladores crear aplicaciones m\xe1s personalizadas y amigables para el usuario, lo que mejora la experiencia del usuario y aumenta la satisfacci\xf3n."))),(0,s.kt)("p",null,"En resumen, las APIs son una herramienta poderosa para los desarrolladores, que les permiten crear soluciones m\xe1s eficientes, innovadoras y personalizadas para sus usuarios."),(0,s.kt)("h2",{id:"ejemplos-de-uso-de-apis"},"Ejemplos de uso de APIs"),(0,s.kt)("p",null,"Hay muchos ejemplos de c\xf3mo se pueden utilizar las APIs en diferentes contextos. Aqu\xed hay algunos ejemplos comunes:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Integraci\xf3n con servicios en l\xednea:")," Las APIs permiten a las aplicaciones integrarse con servicios en l\xednea como Google Maps, Twitter, Facebook y muchos otros. Por ejemplo, una aplicaci\xf3n de viajes puede utilizar la API de Google Maps para mostrar mapas y rutas.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Creaci\xf3n de aplicaciones m\xf3viles:")," Las APIs permiten a los desarrolladores crear aplicaciones m\xf3viles que accedan a los datos y funcionalidades de otros servicios. Por ejemplo, una aplicaci\xf3n de mensajer\xeda puede utilizar la API de un servicio de mensajer\xeda para enviar y recibir mensajes.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Automatizaci\xf3n de procesos empresariales:")," Las APIs permiten a las empresas automatizar tareas y procesos, lo que ahorra tiempo y reduce errores. Por ejemplo, una empresa puede utilizar una API para integrar sus sistemas de gesti\xf3n de inventario con sus sistemas de pedidos y env\xedo.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Desarrollo de aplicaciones de an\xe1lisis de datos"),": Las APIs permiten a los desarrolladores acceder a grandes cantidades de datos para crear aplicaciones de an\xe1lisis de datos. Por ejemplo, una aplicaci\xf3n de an\xe1lisis de redes sociales puede utilizar la API de Twitter para acceder a los datos de tweets y analizarlos."))),(0,s.kt)("p",null,"Estos son solo algunos ejemplos de c\xf3mo se pueden utilizar las APIs en diferentes contextos. Hay muchas otras formas en las que las APIs pueden ser \xfatiles y hacer m\xe1s eficientes los procesos y sistemas."),(0,s.kt)("h2",{id:"diferencia-entre-una-api-y-una-aplicaci\xf3n-web-tradicional"},"Diferencia entre una API y una aplicaci\xf3n web tradicional"),(0,s.kt)("p",null,"Una API (Application Programming Interface) es un conjunto de reglas y protocolos que permiten a diferentes sistemas interactuar y compartir datos y funcionalidades. Por otro lado, una p\xe1gina web tradicional es un documento HTML que se muestra en un navegador y se accede a trav\xe9s de una URL."),(0,s.kt)("p",null,"Aqu\xed hay algunas de las principales diferencias entre una API y una p\xe1gina web tradicional:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Accesibilidad:"),"  Las APIs se accede a trav\xe9s de aplicaciones o scripts, mientras que las p\xe1ginas web se accede a trav\xe9s de un navegador.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Finalidad:")," Las APIs est\xe1n dise\xf1adas para compartir datos y funcionalidades con otros sistemas, mientras que las p\xe1ginas web est\xe1n dise\xf1adas para ser visualizadas por personas.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Formato de los datos:")," Las APIs devuelven datos en formato de texto plano o en formato JSON o XML, mientras que las p\xe1ginas web devuelven datos en formato HTML.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Interacci\xf3n con el usuario:")," Las APIs no tienen una interacci\xf3n directa con el usuario, mientras que las p\xe1ginas web se muestran en un navegador y permiten a los usuarios interactuar con ellas."))),(0,s.kt)("p",null,"En resumen, una API es una forma de compartir datos y funcionalidades entre diferentes sistemas, mientras que una p\xe1gina web es una forma de presentar informaci\xf3n a los usuarios. Ambas son importantes en diferentes contextos y se complementan entre s\xed."),(0,s.kt)("h2",{id:"laravel-y-las-apis"},"Laravel y las APIs"),(0,s.kt)("p",null,"Laravel es un framework de PHP que se enfoca en proporcionar una experiencia de desarrollo amigable y potente para los desarrolladores. Fue creado en 2011 y desde entonces ha ganado una gran popularidad por su facilidad de uso y su amplia gama de caracter\xedsticas."),(0,s.kt)("p",null,"Desde su versi\xf3n 5, Laravel ha proporcionado un enfoque enf\xe1tico en la creaci\xf3n de API. Incluye herramientas y caracter\xedsticas espec\xedficas para facilitar la creaci\xf3n de ",(0,s.kt)("strong",{parentName:"p"},"API RESTful"),", incluyendo la definici\xf3n de rutas, controladores, modelos y autenticaci\xf3n. Adem\xe1s, Laravel tambi\xe9n proporciona una forma f\xe1cil de realizar pruebas en las API y una amplia documentaci\xf3n para ayudar a los desarrolladores a entender c\xf3mo funciona."),(0,s.kt)("p",null,"En resumen, Laravel ofrece una soluci\xf3n completa y f\xe1cil de usar para crear API RESTful, lo que lo hace una opci\xf3n popular para los desarrolladores que desean crear aplicaciones web modernas y escalables."),(0,s.kt)("admonition",{title:"Requisitos:",type:"tip"},(0,s.kt)("ul",{parentName:"admonition"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"PHP:")," Laravel 10 requiere PHP versi\xf3n 8.1 o superior."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Servidor web:")," Laravel 10 requiere un servidor web compatible con PHP, como Apache o Nginx."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Base de datos:")," Laravel 10 soporta diversas bases de datos, incluyendo MySQL, PostgreSQL, SQLite y SQL Server."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Composer:")," Laravel 10 utiliza Composer como su gestor de paquetes, por lo que es necesario tenerlo instalado en el sistema."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Extensiones PHP:")," Laravel 10 requiere algunas extensiones PHP habilitadas, incluyendo OpenSSL, PDO, Mbstring y Tokenizer."))),(0,s.kt)("admonition",{title:"Precauci\xf3n",type:"danger"},(0,s.kt)("p",{parentName:"admonition"},"Es importante verificar que su entorno cumpla con estos requisitos antes de proceder a la instalaci\xf3n de Laravel 10. Si cualquiera de estos requisitos no est\xe1 cumplido, es posible que la instalaci\xf3n falle o que Laravel 10 no funcione correctamente.")),(0,s.kt)("p",null,"Para este proyecto se ha empleado el siguiente software:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"XAMPP")," (PHP,MariaDB,Apache) ",(0,s.kt)("a",{parentName:"li",href:"https://www.apachefriends.org/es/download.html"},"Enlace de descarga")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Visual Studio Code")," ",(0,s.kt)("a",{parentName:"li",href:"https://code.visualstudio.com/download"},"Enlace de descarga")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"MySQL Community Server 8.0.32")," ",(0,s.kt)("a",{parentName:"li",href:"https://dev.mysql.com/downloads/mysql/"},"Enlace de descarga")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"MySQL WORKBENCH")," ",(0,s.kt)("a",{parentName:"li",href:"https://www.mysql.com/products/workbench/"},"Enlace de descarga"))))}d.isMDXComponent=!0},3201:(e,a,r)=>{r.d(a,{Z:()=>n});const n=r.p+"assets/images/api_rest-63a11632e9004e6c77cb71308960698e.png"}}]);