// Importamos componentes
import { menu } from "./componentes/menu.js";
import { home } from "./vistas/home.js";
import { about } from "./vistas/about.js";

console.log(menu());
function app() {
	return `
  ${menu()}
  <div id="vistas">Aquí van las vistas</div>
  `;
}

document.querySelector("#root").innerHTML = app();

function navegar(pagina) {
	if (pagina == "home") {
		// Cargamos la vista home
		document.querySelector("#vistas").innerHTML = home();
	} else if (pagina == "about") {
		// Cargamos la vista home
		document.querySelector("#vistas").innerHTML = about();
	}
}

// Detectamos eventos sobre los botones del menú
document.querySelector('#btn-home').addEventListener('click', function(){
  navegar('home')
});

document.querySelector('#btn-about').addEventListener('click', function(){
  navegar('about')
});


// Cargamos por defecto la página home
navegar('home')
