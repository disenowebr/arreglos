const menu = document.querySelector("#menu");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");


function abrirMenu() {
    menu.classList.toggle("visible");
}

abrir.addEventListener("click", abrirMenu);
cerrar.addEventListener("click", abrirMenu);

const menuLinksClose = document.querySelectorAll("#menu a[href^='#']");
menuLinksClose.forEach(menuLinksClose => {
    menuLinksClose.addEventListener("click", function () {
        menu.classList.remove("visible");
    })
})






// abrir.addEventListener("click", () => {
//     menu.classList.add("visible");
// } )

// cerrar.addEventListener("click", () =>{
//     menu.classList.remove("visible");
// })

