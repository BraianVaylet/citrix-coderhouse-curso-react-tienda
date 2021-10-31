# Proyecto final del curso de React de Coderhouse

## Crear una tienda usando React.js

### **GIT: Branch o Ramas**

- El proyecto cuenta con una branch **master** donde se encuentra la versión productiva de la tienda y esta deployada en [vercel](https://vercel.com/) baja esta [url](https://citrix-coderhouse-store-lirrgy2az-braianvaylet.vercel.app/)
- El proyecto cuenta con una branch **dev** donde se encuentran los últimos cambios realizados en el proyecto.
- El proyecto cuenta con una branch por cada desafío realizado que cuenta con el código necesario para cumplir con los requisitos del mismo.

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

### [Desafio2: MENÚ E-COMMERCE](https://github.com/BraianVaylet/coderhouse-curso-react-tienda/tree/feature/Desafio-02)

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

[Clase 3](https://docs.google.com/presentation/d/1JXz_rrZxhcL1Rw2fdH_X2ay6lQEHerRY6KF_cNoqxGo/edit#slide=id.ga90c0f760b_0_12): COMPONENTES I

**Resumen:**

- Se crea el componente CartWidget y se importa en el componente Navbar
- Se crea el componente ItemListContainer y se importa en el componente App, se pasa un mensaje por props
- Se instala la libreria [PropTypes](https://www.npmjs.com/package/prop-types) para manejar el tipado de las props del proyecto.

---