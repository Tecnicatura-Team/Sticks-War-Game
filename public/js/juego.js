var socket = io.connect("http://127.0.0.1:3700")
var Partida
    // var PartidaEnCurso = false
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
                // PartidaEnCurso = true

            // console.log(Partida)
            recargarEstadisticas(Partida)
            cargarBatalla()
        })
        // console.log("ganador" + $(".close").html().trim())



    socket.on("ganador" + $(".close").html().trim(), function(data) {
        // PartidaEnCurso = false
        ajax("./Controlador/CancelarBusqueda.php", false, "cancelarbusqueda")
        contenido =
            "<div class='finPartida'>" +
            "<div class='ganador'>" +
            // "<div>" +
            // "<label class='resultadoPartida'>" + data.replace(/"/g, "") + "</label>" +
            // "</div>" +
            // "<br>" +
            "<input type='button' value='Aceptar' onclick='finPartida()'>" +
            "</div>" +
            "</div>"

        ajax("./Controlador/BorrarPersonajes.php", { datos: Partida["Jugador"]["ID"] }, "borrarpersonajes")

        $(".Juego").fadeOut(500)
        $(".versus").fadeOut(500)
        $("footer").before(contenido)


        // alert("Ganaste")
    })
    socket.on("perdedor" + $(".close").html().trim(), function(data) {
        PartidaEnCurso = false
        ajax("./Controlador/CancelarBusqueda.php", false, "cancelarbusqueda")
        contenido =
            "<div class='finPartida'>" +
            "<div class='perdedor'>" +
            // "<label class='resultadoPartida'>" + data.replace(/"/g, "") + "</label>" +
            // "<br>" +
            "<input type='button' value='Aceptar' onclick='finPartida()'>" +
            "</div>" +
            "</div>"

        ajax("./Controlador/BorrarPersonajes.php", { datos: Partida["Jugador"]["ID"] }, "borrarpersonajes")

        $(".Juego").fadeOut(500)
        $(".versus").fadeOut(500)
        $("footer").before(contenido)

        // alert("perdiste prro")
    })
}

function recargarEstadisticas() {

    ajax("./Controlador/RecargarEstadisticas.php", { datos: Partida }, "recargarestadisticas")
    socket.on("recargarestadisticas" + $(".close").html().trim(), function(data) {
        Partida = data
            // console.log(Partida)
    })
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
// var turno = "SelectPJ3"

// function ocultarhabilidad(elemento, img) {
//     cargarPjJuego(elemento, img)
//         // hiddenDiv()
//     ocultarDesc('descHabilidad')

//     if (turno == elemento) {
//         cargarPjJuego(elemento, "img/SelectAliado.png")
//     } else {
//         cargarPjJuego(elemento, img)
//     }
// }

//carga las img sobre los pj
// cargarPjJuego("SelectPJ3", "img/SelectAliado.png")
// cargarPjJuego("SelectPJ2", "img/SelectAliado.png")
// cargarPjJuego("SelectPJ1", "img/SelectAliado.png")

// cargarPjJuego("SelectPJ1", "img/SelectAliado.png")
// cargarPjJuego("SelectPJ2", "img/SelectAliado.png")
// cargarPjJuego("SelectPJ3", "img/SelectAliado.png")

//muestra turno de pj sobre el mismo
// function mostrarhabilidad(elemento, img, habilidad) {
//     cargarPjJuego(elemento, img)
//         // showdiv(event, desc)
//     }

//muestra img de turno
cargarPjJuego("SelectPJ3", "img/SelectAliado.png")

//barras de vida color
vida("VidaPJ0")
vida("VidaPJ1")
vida("VidaPJ2")

vida("VidaEnemigoPJ0")
vida("VidaEnemigoPJ1")
vida("VidaEnemigoPJ2")

function vida(elemento) {
    $("#" + elemento).css("background-color", "rgba(0, 128, 0, 0.70)")
}

//variación de la vida con el daño recibido

function variacionVida(elemento, actual) {
    // console.log(actual)
    $("#" + elemento).css("width", actual + "%")
}


function cargarBatalla() {

    if (Partida) {
        // console.log("entro if")
        var porcentajeVida = 0;
        Partida["Jugador"]["HabilidadSelect"] = null
        for (i = 0; i < 3; i++) {
            if (Partida["Jugador"]["Personajes"][i]["VidaActual"] == 0) {

                $("#PJ" + i).attr("src", Partida["Jugador"]["Personajes"][i]["Imagen"] + "Tumba.png")
                    //varia la vida del pj en la partida
                variacionVida("VidaPJ" + i, "0")

            } else {
                $("#PJ" + i).attr("src", Partida["Jugador"]["Personajes"][i]["Imagen"] + "Normal.png")
                    //varia la vida del pj en la partida
                porcentajeVida = (100 / Partida["Jugador"]["Personajes"][i]["VidaMaxima"]) * Partida["Jugador"]["Personajes"][i]["VidaActual"]
                variacionVida("VidaPJ" + i, parseInt(Math.round(porcentajeVida)))


            }
        }

        for (i = 0; i < 3; i++) {
            if (Partida["Contrincante"]["Personajes"][i]["VidaActual"] == 0) {

                $("#EPJ" + i).attr("src", Partida["Contrincante"]["Personajes"][i]["Imagen"] + "Tumba.png")
                    //varia la vida del pj en la partida
                variacionVida("VidaEnemigoPJ" + i, "0")

            } else {
                $("#EPJ" + i).attr("src", Partida["Contrincante"]["Personajes"][i]["Imagen"] + "Normal.png")
                    //varia la vida del pj en la partida
                porcentajeVida = (100 / Partida["Contrincante"]["Personajes"][i]["VidaMaxima"]) * Partida["Contrincante"]["Personajes"][i]["VidaActual"]
                variacionVida("VidaEnemigoPJ" + i, parseInt(Math.round(porcentajeVida)))
            }
        }
        // console.log(Partida)
        var TurnoPersonaje = parseInt(Partida["Jugador"]["TurnoPersonaje"])

        // console.log("variable: " + TurnoPersonaje)

        for (i = 0; i < 4; i++) {

            $("#h" + i).attr("src", Partida["Jugador"]["Personajes"][TurnoPersonaje]["Habilidades"][i]["Icono"])

        }

        $(".aliadovida").html(Partida["Jugador"]["Personajes"][TurnoPersonaje]["VidaActual"])
        $(".aliadoprecision").html(Partida["Jugador"]["Personajes"][TurnoPersonaje]["Precision"])
        $(".aliadoevasion").html(Partida["Jugador"]["Personajes"][TurnoPersonaje]["Evasion"])
        $(".aliadocritico").html(Partida["Jugador"]["Personajes"][TurnoPersonaje]["Critico"])
        $(".aliadoresistencia").html(Partida["Jugador"]["Personajes"][TurnoPersonaje]["Resistencia"])
        $(".aliadomod").html(Partida["Jugador"]["Personajes"][TurnoPersonaje]["ModificadorDaño"])


        $("#SelectPJ0").attr("src", "img/Espera.png")
        $("#SelectPJ1").attr("src", "img/Espera.png")
        $("#SelectPJ2").attr("src", "img/Espera.png")

        desmarcarEnemigos()


        if (Partida["Turno"] == "jugador") {
            $("#SelectPJ" + TurnoPersonaje).attr("src", "img/TurnoAliado.png")
                // $(".versus").attr("src", "img/vsTurnoJugador.png")


            $(".versus").css({
                "background": "url(./img/vsTurnoJugador.png) no-repeat 0 0",
                "background-size": "400px 50px",
                "background-position": "center",
                "background-position-y": "5px",
                "margin": "auto",
                "color": "aliceblue",
                "position": "absolute",
                "width": "100% ",
                "height": "60px",
                "margin - top": "15px",
                "display": "inline-block",
            })

        } else {
            $("#SelectEnemigoPJ" + Partida["Contrincante"]["TurnoPersonaje"]).attr("src", "img/TurnoEnemigo.png")

            $(".versus").css({
                "background": "url(./img/vsTurnoContrincante.png) no-repeat 0 0",
                "background-size": "400px 50px",
                "background-position": "center",
                "background-position-y": "5px",
                "margin": "auto",
                "color": "aliceblue",
                "position": "absolute",
                "width": "100% ",
                "height": "60px",
                "margin - top": "15px",
                "display": "inline-block",
            })

        }



    } else {
        // console.log("no carga partida")
    }

    // console.log(Partida)
    // console.log("cargado")
    // variacionVida("VidaPJ1", 50)
}

function ejecutareventocontrincante(datos) {
    // alert(datos)

}

function ejecutareventojugador(datos) {
    // alert(datos)
}
$(document).ready(function() {

    $("#h0").on("click", function(e) {
        if (Partida["Turno"] == "jugador") {
            clickearHabilidad(0)
        }
    })
    $("#h1").on("click", function(e) {
        if (Partida["Turno"] == "jugador") {
            clickearHabilidad(1)
        }
    })
    $("#h2").on("click", function(e) {
        if (Partida["Turno"] == "jugador") {
            clickearHabilidad(2)
        }
    })
    $("#h3").on("click", function(e) {
        if (Partida["Turno"] == "jugador") {
            clickearHabilidad(3)
        }
    })

})


function pasarTurno() {
    Partida["Turno"] = "contrincante"

    Partida["Jugador"]["TurnoPersonaje"] = parseInt(Partida["Jugador"]["TurnoPersonaje"]) + 1

    if (Partida["Jugador"]["TurnoPersonaje"] == 3) {
        Partida["Jugador"]["TurnoPersonaje"] = 0
    }

    cargarBatalla()

    socket.emit("pasarturno", { "receptor": Partida["Contrincante"]["Nombre"] })
        // alert("pasa turno")

}

socket.on("pasarturno" + $(".close").html().trim(), function(data) {

    var contador = 0
    if (contador == 0) {
        dispararFinPartida()
        contador += 1

        Partida["Contrincante"]["TurnoPersonaje"] = parseInt(Partida["Contrincante"]["TurnoPersonaje"]) + 1

        if (Partida["Contrincante"]["TurnoPersonaje"] == 3) {
            Partida["Contrincante"]["TurnoPersonaje"] = 0
        }
    }

})


function dispararFinPartida() {

    ajax("./Controlador/DispararFinPartida.php", { ID: Partida["Jugador"]["ID"] }, "dispararfinpartida")

    socket.on("dispararfinpartida" + $(".close").html().trim(), function(data) {

        var contador = 0
        if (contador == 0) {
            if (data["respuesta"]) {
                socket.emit("asignarganador", Partida["Contrincante"]["Nombre"])
                socket.emit("asignarperdedor", Partida["Jugador"]["Nombre"])
            } else {
                // alert("llego el turno")

                Partida["Turno"] = "jugador"

                var TurnoPersonaje = parseInt(Partida["Jugador"]["TurnoPersonaje"])
                if (Partida["Jugador"]["Personajes"][TurnoPersonaje]["VidaActual"] == 0) {
                    pasarTurno()
                }
                cargarBatalla()
            }
            contador += 1
        }

    })
}


function clickearHabilidad(numeroHabilidad) {

    var personajeturno = Partida["Jugador"]["TurnoPersonaje"]
    if (Partida["Jugador"]["Personajes"][personajeturno]["Habilidades"][numeroHabilidad]["PosicionesObjetivo"] == null) {
        Partida["Jugador"]["HabilidadSelect"] == null
        var DatosEvento = array()
        var ListaEfectos = Partida["Jugador"]["Personajes"][personajeturno]["Habilidades"][numeroHabilidad]["Efectos"]
        for (i = 0; i < count(ListaEfectos); i++) {
            //verifica si el efecto es daño o buff
            if (ListaEfectos[i]["Tipo"] == null) {
                //a quien afecta la habilidad, lanzador nosotros o enemigo
                if (ListaEfectos[i]["Objetivo"] == "lanzador") {

                }
            }
        }

        // Objetivo Minimo Maximo - Objetivo ID Tipo






        socket.emit("ejecutareventocontrincante", { usuario: Partida["Contrincante"]["Nombre"], evento: datos })

    } else {
        datos = "habilidad ofensiva"
        socket.emit("ejecutareventocontrincante", { usuario: Partida["Contrincante"]["Nombre"], evento: datos })
    }


    pasarTurno()
        // Partida["Turno"] = "contrincante"
        // console.log("habilidad: " + numeroHabilidad)
}

// console.log(Partida["Jugador"]["Nombre"])
socket.on("ejecutareventocontrincante" + $(".close").html().trim(), function(data) {
    console.log("se ejecuto")
    ejecutareventocontrincante(data["evento"])
})


function afectarVida(idpersonaje, cambiovida) {

    ajax("./Controlador/AfectarVida.php", idpersonaje.array(), "afectarvida")


}

function asignarBuffoPersonaje(idpersonaje, idbuff) {

}

function desmarcarEnemigos() {

    $("#SelectEnemigoPJ0").attr("src", "img/Espera.png")
    $("#SelectEnemigoPJ1").attr("src", "img/Espera.png")
    $("#SelectEnemigoPJ2").attr("src", "img/Espera.png")
}


function test() {
    recargarEstadisticas()
    cargarBatalla()
        //     contenido =
        //         "<div class='finPartida'>" +
        //         "<div class='ganador'>" +
        //         // "<div>" +
        //         // "<label class='resultadoPartida'>" + data.replace(/"/g, "") + "</label>" +
        //         // "</div>" +
        //         // "<br>" +
        //         "<input type='button' value='Aceptar' onclick='finPartida()'>" +
        //         "</div>" +
        //         "</div>"

    //     // ajax("./Controlador/BorrarPersonajes.php", { datos: Partida["Jugador"]["ID"] }, "borrarpersonajes")

    //     $(".Juego").fadeOut(500)
    //     $(".versus").fadeOut(500)
    //     $("footer").before(contenido)
}