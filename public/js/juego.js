var socket = io.connect("http://127.0.0.1:3700")
var Partida
cargaNombrePartida()

function cargaNombrePartida() {

    ajax("./Controlador/CargarFunciones.php", false, "cargarversuspartida")

    socket.on("cargarversuspartida" + $(".close").html().trim(), function(data) {
        //carga el nombre de los usuarios en la partida
        $("#v1").html(data["jugador1"])
        $("#v2").html(data["jugador2"])
    })

    ajax("./Controlador/Partidacargar.php", false, "partidacargar")
    socket.on("partidacargar" + $(".close").html().trim(), function(data) {
            //carga el nombre de los usuarios en la partida
            Partida = data
                // console.log(Partida);
            recargarEstadisticas(Partida)
        })
        // console.log("ganador" + $(".close").html().trim())


    socket.on("ganador" + $(".close").html().trim(), function(data) {


        contenido =
            "<div>" +
            "<label id='resultadoPartida'>" + data.replace(/"/g, "") + "</label>" +
            "<input type='button' value='Aceptar' onclick='finPartida()'>" +
            "</div>"

        $(".Juego").fadeOut(500)
        $(".versus").fadeOut(500)
        $("footer").before(contenido)


        alert("Ganaste")
    })
    socket.on("perdedor" + $(".close").html().trim(), function(data) {

        contenido =
            "<div>" +
            "<label id='resultadoPartida'>" + data.replace(/"/g, "") + "</label>" +
            //finPartida() está en juego.js
            "<input type='button' value='Aceptar' onclick='finPartida()'>" +
            "</div>"


        $(".Juego").fadeOut(500)
        $(".versus").fadeOut(500)
        $("footer").before(contenido)

        alert("perdiste prro")
    })

    function recargarEstadisticas(Partida) {

        ajax("./Controlador/RecargarEstadisticas.php", { datos: Partida }, "recargarestadisticas")
        socket.on("recargarestadisticas" + $(".close").html().trim(), function(data) {
            Partida = data
            console.log(Partida)
        })
    }
}

function finPartida() {

    //falta borrar datos de ambos jugadores

    location.href = "armarequipo.html"
}









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