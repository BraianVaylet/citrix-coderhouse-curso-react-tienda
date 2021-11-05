# Proyecto final del curso de React de Coderhouse

## Crear una tienda usando React.js

### **GIT: Branch o Ramas**

- El proyecto cuenta con una branch **master** donde se encuentra la versión productiva de la tienda y esta deployada en [vercel](https://vercel.com/) baja esta [url](https://citrix-coderhouse-store-lirrgy2az-braianvaylet.vercel.app/)
- El proyecto cuenta con una branch **dev** donde se encuentran los últimos cambios realizados en el proyecto.
- El proyecto cuenta con una branch por cada desafío realizado que cuenta con el código necesario para cumplir con los requisitos del mismo.

### **LIBRERÍAS**

- [react-router](https://reactrouter.com/resources): Librería para el ruteo de la SPA

### **LIBRERÍAS (opcionales)**

- [grommet](https://v2.grommet.io/): Librería UI de componentes
- [grommet-icons](https://icons.grommet.io/?): Librería de Iconos
- [eslint](https://eslint.org/) y [eslint-config-xo](https://github.com/xojs/xo): Linter del proyecto
- [husky](https://typicode.github.io/husky/#/) y [lint-staged](https://github.com/okonet/lint-staged): Librerías para ejecutar acciones antes de un commit
- [prop-types](https://www.npmjs.com/package/prop-types): Librería para el tipado de las props de los componentes

---

### [Desafio1: Crear la APP utilizando el CLI](https://github.com/BraianVaylet/coderhouse-curso-react-tienda/tree/feature/Desafio-01)

**Consigna:**

Crea una aplicación utilizando el CLI con el nombre de tu tienda, y ejecuta los comandos necesarios para instalar React, configurarlo y visualizarlo en tu navegador.

**Aspectos a incluir en el entregable:**

- Link al repositorio de github
- Dentro del repositorio, deberían encontrarse las carpetas y los archivos src, README.md y package.json, entre otros

**Material de referencia:**

[Clase 2](https://docs.google.com/presentation/d/1feC46NDgy67banPoGapfkx3UkWDQrWQ6xU8VElfIrtM/edit#slide=id.ga9071a1c49_0_0): INSTALACIÓN Y CONFIGURACIÓN DEL ENTORNO

**Resumen:**

- Se crea el repositorio del proyecto
- Se crea el branch **feature/Desafio-01**
- Se instala [node.js](https://nodejs.org/es/) - v16.13.0
- Se crea el proyecto de React utilizando [create-react-app](https://create-react-app.dev/)

---

### [Desafio2: Menú e-commerce](https://github.com/BraianVaylet/coderhouse-curso-react-tienda/tree/feature/Desafio-02)

**Consigna:**

En el directorio de tu proyecto, crea una carpeta dentro de src llamada “components”, que contenga a NavBar.js para crear una barra de menú simple.

**Aspectos a incluir en el entregable:**

Crea una carpeta dentro de src llamada components que contenga a NavBar.js para crear una barra de menú simple, que tenga:

- Brand (título/nombre de la tienda)
- Un listado de categorías clickeables
- Incorpora alguna librería de estilos con bootstrap/materialize u otro de tu preferencia (opcional).

**Material de referencia:**

[Clase 3](https://docs.google.com/presentation/d/1Ok2-w_7smwFVX6kw41jljISN2imp8MCx5X6dXtWJTo0/edit#slide=id.ge384d5ba75_0_7): JSX Y WEBPACK

**Resumen:**

- Se instala [Grommet](https://v2.grommet.io/) como librería de UI del proyecto. [Storybook](https://storybook.grommet.io/?path=/story/all--all)
- Se instala [icons-grommet](https://icons.grommet.io/?) como librería de iconos del proyecto.
- Se instala [eslint](https://eslint.org/) y [xo](https://github.com/xojs/xo) como linter del proyecto.
- Se instala [lint-staged](https://github.com/okonet/lint-staged) y [husky](https://typicode.github.io/husky/#/).
- Se crea el fichero /components y dentro el componente Navbar.
- Se crea el fichero /assets y dentro /images donde se guardan las imágenes del proyecto.
- Se crea el fichero /utils donde se colocan archivos de utilería.

---

### [Desafio3: Crea tu landing](https://github.com/BraianVaylet/coderhouse-curso-react-tienda/tree/feature/Desafio-03)

**Consigna:**

- Crea un componente CartWidget.js con un ícono, y ubícalo en el navbar. Agrega algunos estilos con bootstrap/materialize u otro.
- Crea un componente contenedor ItemListContainer.js con una prop greeting, y muestra el mensaje dentro del contenedor con el styling integrado.

**Aspectos a incluir en el entregable:**

- Parte 1: crea un componente CartWidget.js que haga rendering de un ícono Cart, e inclúyelo dentro de NavBar.js para que esté visible en todo momento.
- Parte 2: crea un componente ItemListContainer. Impórtalo dentro de App.js, y abajo de NavBar.js.

**Material de referencia:**

[Clase 4](https://docs.google.com/presentation/d/1JXz_rrZxhcL1Rw2fdH_X2ay6lQEHerRY6KF_cNoqxGo/edit#slide=id.ga90c0f760b_0_0): COMPONENTES I

**Resumen:**

- Se crea el componente CartWidget y se importa en el componente Navbar
- Se crea el componente ItemListContainer y se importa en el componente App, se pasa un mensaje por props
- Se instala la libreria [PropTypes](https://www.npmjs.com/package/prop-types) para manejar el tipado de las props del proyecto.

---

### [Desafio4: Contador con botón](https://github.com/BraianVaylet/coderhouse-curso-react-tienda/tree/feature/Desafio-04)

**Consigna:**

- Crea un componente ItemCount.js, que debe estar compuesto de un botón y controles, para incrementar y decrementar la cantidad requerida de ítems.

**Aspectos a incluir en el entregable:**

- Componente ItemCount.js con los respectivos controles de la consigna.

**A tener en cuenta:**

- El número contador nunca puede superar el stock disponible
- De no haber stock el click no debe tener efecto y por ende no ejecutar el callback onAdd
- Si hay stock al clickear el botón se debe ejecutar onAdd con un número que debe ser la cantidad seleccionada por el usuario.

**Detalle importante:**
Como sabes, todavía no tenemos nuestro detalle de ítem, y este desarrollo es parte de él, así que por el momento puedes probar e importar este componente dentro del ItemListContainer, sólo a propósitos de prueba. Después lo sacaremos de aquí y lo incluiremos en el detalle del ítem.

**Material de referencia:**

[Clase 5](https://docs.google.com/presentation/d/1FIwS8bJS0DuenG0aDcwcuNdQ4mm1zlDPyYoKPqNXqFc/edit#slide=id.ga9120ea362_0_0): COMPONENTES II

**Resumen:**

- Se crea el componente ItemCount
- Se importa el componente ItemCount en ItemListContainer y se le pasan las props: stock y onAdd
- Se utiliza dos veces con diferentes valores de stock para corroborar la independencia de ambos componentes.

---

### [Desafío5: Catálogo con MAPS y Promises](https://github.com/BraianVaylet/coderhouse-curso-react-tienda/tree/feature/Desafio-05)

**Consigna:**

- Crea los componentes Item.js e ItemList.js para mostrar algunos productos en tu ItemListContainer.js. Los ítems deben provenir de un llamado a una promise que los resuelva en tiempo diferido (setTimeout) de 2 segundos, para emular retrasos de red

**Aspectos a incluir en el entregable:**

- Item.js: Es un componente destinado a mostrar información breve del producto que el user clickeará luego para acceder a los detalles (los desarrollaremos más adelante)
- ItemList.js Es un agrupador de un set de componentes Item.js (Deberías incluirlo dentro de ItemListContainer del desafío 3)
- Implementa un async mock (promise): Usa un efecto de montaje para poder emitir un llamado asincrónico a un mock (objeto) estático de datos que devuelva un conjunto de item { id, title, description, price, pictureUrl } en dos segundos (setTimeout), para emular retrasos de red.

**Material de referencia:**

[Clase 6](https://docs.google.com/presentation/d/1DiozrjZU_VBCLaGjPc3RUTQraGsFD9fyJzZCzqPEB2o/edit#slide=id.ga90e52debd_0_0): PROMISES, ASINCRONÍA Y MAP

**Resumen:**

- Se agrega el favicon de Citrix
- Se agrega un enfoque de token para el precio de los productos 😋
- Se crea el componente Item y el componente ItemList
- Se crea el fichero /mocks con el archivo data donde se encuentra el listado de productos.
- Se movieron las imágenes de los productos al fichero /mocks (las imágenes van a estar en la firebase al finalizar el desarrollo)
- Se importa el componente Item dentro del componente ItemList
- Se importa el componente ItemList dentro del componente ItemListContainer
- Se simula la carga de los productos del mock utilizando promesas en el componente ItemListContainer.
- Se comprimien las imágenes usando [tinypng](https://tinypng.com/)

---

### [Desafío6: Detalle del producto](https://github.com/BraianVaylet/coderhouse-curso-react-tienda/tree/feature/Desafio-06)

#### **PUNTO 1**

**Consigna:**

- Crea tu componente ItemDetailContainer, con la misma premisa que ItemListContainer.

**Aspectos a incluir en el entregable:**

- Al iniciar utilizando un efecto de montaje, debe llamar a un async mock, utilizando lo visto en la clase anterior con Promise, que en 2 segundos le devuelva un 1 ítem, y lo guarde en un estado propio.

#### **PUNTO 2**

**Consigna:**

- Crea tu componente ItemDetail.js.

**Aspectos a incluir en el entregable:**

- ItemDetail.js, que debe mostrar la vista de detalle de un ítem incluyendo su descripción, una foto y el precio.

**Material de referencia:**

[Clase 7](https://docs.google.com/presentation/d/1MtcIrbRqpkkg5V7NEo8jIr7aHiRGac_RnpZey0iFzag/edit#slide=id.ga7f381865f_1_12): CONSUMIENDO API’S

**Resumen:**

- Se crea el componente ItemDetailContainer
- Se crea el componente ItemDetail
- Se importa el componente ItemDetail en ItemDetailContainer
- Se simula la carga de un producto del mock utilizando promesas en el componente ItemDetailContainer.
- Se crea el componente Spinner (opcional) y se usa en ItemDetailContainer y en ItemListContainer
- Se mueve la logica de handleIconByCategory en Item a un custom hook en el fichero /hook y en el archivo useLogoCategory
- Se implementa el useLogoCategory en Item, ItemDetail y Navbar

---

### [Desafío7: PRIMERA ENTREGA DEL PROYECTO FINAL](https://github.com/BraianVaylet/coderhouse-curso-react-tienda/tree/feature/Desafio-07-PrimeraEntregaProyectoFinal)

**Consigna:**

- Configura en App.js el routing usando un BrowserRouter de tu aplicación con react-router-dom

**Aspectos a incluir en el entregable:**

- Rutas a configurar

> - ‘/’ navega a `<ItemListContainer />`
> - ‘/category/:id’  `<ItemListContainer />`
> - ‘/item/:id’ navega a `<ItemDetailContainer />`

- Links a configurar

> - Clickear en el brand debe navegar a ‘/’
> - Clickear un Item.js debe navegar a /item/:id
> - Clickear en una categoría del navbar debe navegar a /category/:categoryId 

- Para finalizar integra los parámetros de tus async-mocks para reaccionar a :itemId y :categoryId ¡utilizando efectos y los hooks de parámetros que vimos en clase! Si te encuentras en una categoría deberías poder detectar la navegación a otra categoría y volver a cargar los productos que correspondan a dicha categoría

**Además:**

- Deberás corroborar que tu proyecto cuente con:

> - Navbar con cart
> - Catálogo
> - Detalle de producto
> - Incluir:
> - Archivo readme.md

**A tener en cuenta:**

- En la Rúbrica de Evaluación (ubicada en la carpeta de la camada) encontrarás un mayor detalle respecto a qué se tendrá en cuenta para la corrección.

**Importante:**

- La entrega intermedia no supone la realización de un archivo aparte o extra; marca que en este momento se hará una revisión más integral

**Material de referencia:**

[Clase 8](https://docs.google.com/presentation/d/119DNoDuHppUZVQlqP8xBAdcyE63RQlCU_ZeCQHTHQUU/edit#slide=id.gb187e8b98b_0_12): ROUTING Y NAVEGACIÓN

**Resumen:**

- Se instala la librería react-router-dom y history.
- Se inicializa el BrowserRouter en el src/index.js
- Se agrega las rutas en el archivo src/App.jsx
- Se crea el fichero /routes y dentro los page components Home y Product.
- Se acomodan los componentes de App.jsx en los page components Home y Product.
- Se crea el componente Layout el cual incluirá los componentes Navbar y Footer de la app.
- Se actualiza el mock del componente Navbar con las rutas correctas.
- Se usa el hook useParams en el componente ItemListContainer y se crea la función handleFilterData() para filtrar los ítems del mock por categoría.
- Se usa el hook useNavigate en el componente Item para navegar al page component Product pasando como parámetro el id del item.
- Se usa el hook useParams en el componente ItemDetailContainer y se crea la funcion handleFilterData() para filtrar los ítems del mock por id del item.
- Se usa el hook useNavigate en el componente Navbar para navegar siempre a la Home
- Se crea el componente 404 y se configura la ruta por defecto

---

### [Desafío8: Sincronizar Counter](https://github.com/BraianVaylet/coderhouse-curso-react-tienda/tree/feature/Desafio-08)

**Consigna:**

- Importa el ItemCount.js del desafío Nº 4 en el counter ItemDetail.js, y configura el evento de compra, siguiendo los detalles de manual.

**Aspectos a incluir en el entregable:**

- Debes lograr separar la responsabilidad del count, del detalle del ítem, y esperar los eventos de agregado emitidos por el ItemCount
- Cuando ItemCount emita un evento onAdd almacenarás ese valor en un estado interno del ItemDetail para hacer desaparecer el ItemCount
- El botón de terminar mi compra debe poder navegar a un componente vacío por el momento en la ruta ‘/cart’.

**Material de referencia:**

[Clase 9](https://docs.google.com/presentation/d/1dVy22YKjlS5HARCpmSYEtM7sHl-QerdEWNTGWisituY/edit#slide=id.ga7f3d42d5a_0_12): EVENTOS

**Resumen:**

- Se crea un estado count dentro del componente ItemDetail usando el hook useState donde se guarda el valor obtenido desde ItemCount
- Se condiciona para mostrar el ItemCount o un boton que redirecciona al page component Cart si dependiendo del valor de count
- Se crea un nuevo page component llamado Cart

---

### [Desafío9: CartContext](https://github.com/BraianVaylet/coderhouse-curso-react-tienda/tree/feature/Desafio-09)

**Consigna:**

- Implementa React Context para mantener el estado de compra del user, siguiendo los detalles del manual.

**Aspectos a incluir en el entregable:**

- Al clickear comprar en ItemDetail se debe guardar en el CartContext el producto y su cantidad en forma de objeto { name, price, quantity, etc. } dentro del array de productos agregados

**Detalle importante:**

- CartContext debe tener la lógica incorporada de no aceptar duplicados y mantener su consistencia.

**Métodos recomendados:**

- addItem(item, quantity) // agregar cierta cantidad de un ítem al carrito
- removeItem(itemId) // Remover un item del cart por usando su id
- clear() // Remover todos los items
- isInCart: (id) => true|false

**Material de referencia:**

[Clase 9](https://docs.google.com/presentation/d/1FUJb7pgOXVnEOUwAWD-bsb6IzO-qGoVOqqHJP3GedsY/edit#slide=id.gb19f78b158_0_12): CONTEXT

**Resumen:**

- Se crea el fichero /context y dentro el archivo CartContext.js
- Se inicializa el CartContextProvider en index.js
- Se crea en el CartContext los siguientes métodos: addItem, removeItem, clear, isInCart y algunos extras.
- Se implementa el addItems en el componente ItemDetail y se prueba usando un log por consola.
