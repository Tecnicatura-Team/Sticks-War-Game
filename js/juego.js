function cargarPjJuego(elemento, img) {
    //es para cargar los personajes en la pagina juego desde al bd y cargarlos en en src de las img
    $("#" + elemento).attr("src", img)
        // $("#PJ3").attr("src","../img/StickMago2.png")

}

//muestra las flechas sobre los pj y descripcion de habilidades
function mostrarhabilidad(elemento, img, event, desc) {
    cargarPjJuego(elemento, img)
    showdiv(event, desc)
}

//oculta las flechas sobre los pj y descripcion de habilidades
var turno = "SelectPJ3"

function ocultarhabilidad(elemento, img) {
    cargarPjJuego(elemento, img)
    hiddenDiv()
    if (turno == elemento) {
        cargarPjJuego(elemento, "img/SelectAliado.png")
    } else {
        cargarPjJuego(elemento, img)
    }

}

//carga las img sobre los pj
/* cargarPjJuego("SelectPJ3", "img/SelectAliado.png")
cargarPjJuego("SelectPJ2", "img/SelectAliado.png")
cargarPjJuego("SelectPJ1", "img/SelectAliado.png")

cargarPjJuego("SelectPJ1", "img/SelectAliado.png")
cargarPjJuego("SelectPJ2", "img/SelectAliado.png")
cargarPjJuego("SelectPJ3", "img/SelectAliado.png") */

//muestra turno de pj sobre el mismo
function mostrarhabilidad(elemento, img, event, desc) {
    cargarPjJuego(elemento, img)
    showdiv(event, desc)
}

//muestra img de turno
cargarPjJuego("SelectPJ3", "img/SelectAliado.png")

//barras de vida aliados
vida("VidaPJ1")
vida("VidaPJ2")
vida("VidaPJ3")

vida("VidaEnemigoPJ1")
vida("VidaEnemigoPJ2")
vida("VidaEnemigoPJ3")


function vida(elemento) {
    $("#" + elemento).css("background-color", "rgba(0, 128, 0, 0.70)")
}

//variación de la vida con el daño recibido
variacionVida("VidaPJ1", "20")

function variacionVida(elemento, actual) {
    $("#" + elemento).css("width", actual)
}