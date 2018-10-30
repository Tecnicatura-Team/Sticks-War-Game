function cargarPjJuego(elemento, img) {
    //es para cargar los personajes en la pagina juego desde al bd y cargarlos en en src de las img
    $("#" + elemento).attr("src", img)
        // $("#PJ3").attr("src","../img/StickMago2.png")

}

// //muestra las flechas sobre los pj y descripcion de habilidades
// function mostrarhabilidad(elemento, img, event, desc) {
//     cargarPjJuego(elemento, img)

//     showdiv(event, desc)
// }

//oculta las flechas sobre los pj y descripcion de habilidades
var turno = "SelectPJ3"

function ocultarhabilidad(elemento, img) {
    cargarPjJuego(elemento, img)
        // hiddenDiv()
    ocultarDesc('descHabilidad')

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
function mostrarhabilidad(elemento, img, habilidad) {
    cargarPjJuego(elemento, img)
        // showdiv(event, desc)

    var descripciones = [
        "Causa entre 80 - 180 de daño a un enemigo en la posicion ( 1 - 2 ) pero se disminuye 5% de precision y 10% de daño a si misma (acumulable hasta 6 veces)",
        "Descripción de la habilidad 2",
        "Descripción de la habilidad 3",
        "Descripción de la habilidad 4"
    ]
    verDesc('descHabilidad', descripciones[$(habilidad).attr("id")[4] - 1])

    // console.log($(habilidad).attr("id"))
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