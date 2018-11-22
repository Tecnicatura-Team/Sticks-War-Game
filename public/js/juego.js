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
        subirnivel(Partida["Jugador"]["ID"], "ganador")
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
        subirnivel(Partida["Jugador"]["ID"], "perdedor")
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

    // ---------------------------------------------------------------------


    //para clickear al enemigo 

    $("#EPJ0").on("click", function(e) {

        if ((Partida["Jugador"]["HabilidadSelect"] !== null) && esSeleccionable(1) && estaVivo(0)) {
            clickearEnemigo(0)

        }
    })

    $("#EPJ1").on("click", function(e) {
        if ((Partida["Jugador"]["HabilidadSelect"] !== null) && esSeleccionable(2) && estaVivo(1)) {
            clickearEnemigo(1)

        }
    })

    $("#EPJ2").on("click", function(e) {
        if ((Partida["Jugador"]["HabilidadSelect"] !== null) && esSeleccionable(3) && estaVivo(2)) {
            clickearEnemigo(2)

        }
    })

})

function clickearEnemigo(numeroEnemigo) {

    var DatosEventoJugador = new Array()
    var DatosEventoContrincante = new Array()
    var tipohabilidad = "versus"
    var personajeTurno = Partida["Jugador"]["TurnoPersonaje"]
    var numeroHabilidad = Partida["Jugador"]["HabilidadSelect"]
    var ListaEfectos = Partida["Jugador"]["Personajes"][personajeTurno]["Habilidades"][numeroHabilidad]["Efectos"]

    var idEnemigo = Partida["Contrincante"]["Personajes"][numeroEnemigo]["ID"]

    for (i = 0; i < ListaEfectos.length; i++) {
        //verifica si el efecto es daño o buff
        if (ListaEfectos[i]["Tipo"] == null) {
            //a quien afecta la habilidad, lanzador nosotros o enemigo            
            if (ListaEfectos[i]["Objetivo"] == "lanzador") {
                afectarVida(Partida["Jugador"]["Personajes"][personajeTurno]["ID"], sortear(ListaEfectos[i]["Minimo"], ListaEfectos[i]["Maximo"]))
                    // recargarEstadisticas()
            } else {

                var alPrecision = Partida["Jugador"]["Personajes"][personajeTurno]["Precision"]
                var alModDamage = Partida["Jugador"]["Personajes"][personajeTurno]["ModificadorDaño"]
                var enEvasion = Partida["Contrincante"]["Personajes"][numeroEnemigo]["Evasion"]
                var enResistencia = Partida["Contrincante"]["Personajes"][numeroEnemigo]["Resistencia"]
                var dminimo = ListaEfectos[i]["Minimo"]
                var dmaximo = ListaEfectos[i]["Maximo"]

                afectarVida(idEnemigo, dañarEnemigo(alPrecision, alModDamage, enEvasion, enResistencia, dminimo, dmaximo))
                    // recargarEstadisticas(Partida)
            }
        } else {
            if (ListaEfectos[i]["Objetivo"] == "lanzador") {
                asignarBuffoPersonaje(Partida["Jugador"]["Personajes"][personajeTurno]["ID"], ListaEfectos[i]["ID"])
            } else {
                asignarBuffoPersonaje(Partida["Contrincante"]["Personajes"][numeroEnemigo]["ID"], ListaEfectos[i]["ID"])

            }
        }
    }

    pasarTurno()

}

function dañarEnemigo(alPrecision, alModDamage, enEvasion, enResistencia, dminimo, dmaximo) {
    // console.log("Precision: " + alPrecision + " evacion: " + enEvasion + " moddaño: " + alModDamage + " resistencio: " + enResistencia + " dañominimo: " + dminimo + " dañomaximo: " + dmaximo)
    // var provAcierto = alPrecision - enEvasion
    // if (provAcierto >= sortear(0, 100)) {
    //     var porcentajeDaño = alModDamage - enResistencia
    //     var daño = sortear(dminimo, dmaximo)
    //     if (porcentajeDaño < 0) {
    //         porcentajeDaño = 0
    //     }
    //     return daño * (porcentajeDaño / 100)
    // } else {
    //     return 0
    // }
    var asiertooponente
    var asierto = (sortear(1, 100) <= alPrecision) ? true : false
    var evadido = (sortear(1, 100) <= enEvasion) ? true : false
    if (asierto && !evadido) {
        asiertooponente = true
    } else {
        asiertooponente = false
    }
    console.log(asiertooponente)
    if (asiertooponente) {
        var porcentajeDaño = alModDamage - enResistencia
            // console.log(porcentajeDaño)
        var daño = sortear(parseInt(dminimo), parseInt(dmaximo))
        if (porcentajeDaño < 0) {
            porcentajeDaño = 0
        }
        console.log(daño)
            // console.log(sortear(1, 10))
            // console.log(daño * (porcentajeDaño / 100))
        return daño * (porcentajeDaño / 100)
    } else {
        return 0
    }

}

function estaVivo(numeroPersonaje) {
    if (Partida["Contrincante"]["Personajes"][numeroPersonaje]["VidaActual"] == 0) {
        return false
    } else {
        return true
    }
}

function esSeleccionable(numeroPersonaje) {

    var seleccionable = false

    if (Partida["Jugador"]["HabilidadSelect"] !== null) {

        var personajeTurno = Partida["Jugador"]["TurnoPersonaje"]
        var numeroHabilidad = Partida["Jugador"]["HabilidadSelect"]

        var objetivos = Partida["Jugador"]["Personajes"][personajeTurno]["Habilidades"][numeroHabilidad]["PosicionesObjetivo"]

        for (i = 0; i < objetivos.length; i++) {
            if (parseInt(numeroPersonaje) == parseInt(objetivos[i]["PosicionID"])) {
                seleccionable = true
            }
        }
    }
    return seleccionable
}

function pasarTurno() {
    Partida["Turno"] = "contrincante"

    Partida["Jugador"]["TurnoPersonaje"] = parseInt(Partida["Jugador"]["TurnoPersonaje"]) + 1

    if (Partida["Jugador"]["TurnoPersonaje"] == 3) {
        Partida["Jugador"]["TurnoPersonaje"] = 0
    }

    recargarEstadisticas(Partida)
    cargarBatalla()
    console.log("turno personajeA: " + Partida["Jugador"]["TurnoPersonaje"])
    console.log("turno personajeE: " + Partida["Contrincante"]["TurnoPersonaje"])
    socket.emit("pasarturno", { "receptor": Partida["Contrincante"]["Nombre"] })
        // alert("pasa turno")

}

socket.on("pasarturno" + $(".close").html().trim(), function(data) {
    console.log(Partida)
    var contador = 0
    if (contador == 0) {

        dispararFinPartida()
        contador += 1

        Partida["Contrincante"]["TurnoPersonaje"] = parseInt(Partida["Contrincante"]["TurnoPersonaje"]) + 1

        if (Partida["Contrincante"]["TurnoPersonaje"] == 3) {
            Partida["Contrincante"]["TurnoPersonaje"] = 0
        }
        recargarEstadisticas(Partida)
        cargarBatalla()
        console.log("turno personajeA: " + Partida["Jugador"]["TurnoPersonaje"])
        console.log("turno personajeE: " + Partida["Contrincante"]["TurnoPersonaje"])
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
    // console.log(Partida)
    var personajeturno = Partida["Jugador"]["TurnoPersonaje"]
    if (Partida["Jugador"]["Personajes"][personajeturno]["Habilidades"][numeroHabilidad]["PosicionesObjetivo"] == null) {
        Partida["Jugador"]["HabilidadSelect"] = null
            // console.log(Partida)
            // console.log(Partida["Jugador"]["Personajes"][personajeturno]["Habilidades"][numeroHabilidad])
            // console.log(Partida["Jugador"]["Personajes"][personajeturno]["Habilidades"])
        desmarcarEnemigos()
        var DatosEventoJugador = new Array()
        var DatosEventoContrincante = new Array()
        var tipohabilidad = "solo"
        var ListaEfectos = Partida["Jugador"]["Personajes"][personajeturno]["Habilidades"][numeroHabilidad]["Efectos"]
        for (i = 0; i < ListaEfectos.lenght; i++) {
            //verifica si el efecto es daño o buff
            if (ListaEfectos[i]["Tipo"] == null) {
                //a quien afecta la habilidad, lanzador nosotros o enemigo
                if (ListaEfectos[i]["Objetivo"] == "lanzador") {
                    afectarVida(Partida["Jugador"]["Personajes"][personajeturno]["ID"], sortear(ListaEfectos[i]["Minimo"], ListaEfectos[i]["Maximo"]))

                } else {
                    for (var j = 0; j < 3; j++) {
                        afectarVida(Partida["Jugador"]["Personajes"][j]["ID"], sortear(ListaEfectos[i]["Minimo"], ListaEfectos[i]["Maximo"]))
                    }
                }
            } else {
                if (ListaEfectos[i]["Objetivo"] == "lanzador") {
                    asignarBuffoPersonaje(Partida["Jugador"]["Personajes"][personajeturno]["ID"], ListaEfectos[i]["ID"])
                } else {
                    for (var j = 0; j < 3; j++) {
                        asignarBuffoPersonaje(Partida["Jugador"]["Personajes"][j]["ID"], ListaEfectos[i]["ID"])
                    }
                }
            }
        }

        // Objetivo Minimo Maximo - Objetivo ID Tipo

        socket.emit("ejecutareventocontrincante", { usuario: Partida["Contrincante"]["Nombre"], evento: "pepe" })
        pasarTurno()
    } else {
        var personajeturno = Partida["Jugador"]["TurnoPersonaje"]
            // afectarVida(10, -50)
        var NroObjetivos = Partida["Jugador"]["Personajes"][personajeturno]["Habilidades"][numeroHabilidad]["PosicionesObjetivo"].length
        desmarcarEnemigos()
        Partida["Jugador"]["HabilidadSelect"] = numeroHabilidad
            // console.log("personaje turno: " + personajeturno)
            // console.log("Nro objetivos: " + NroObjetivos)
            // console.log(Partida)
        for (var i = 0; i < NroObjetivos; i++) {
            console.log(Partida["Jugador"]["Personajes"][personajeturno]["Habilidades"][numeroHabilidad]["PosicionesObjetivo"][i]["PosicionID"])
            $("#SelectEnemigoPJ" + (parseInt(Partida["Jugador"]["Personajes"][personajeturno]["Habilidades"][numeroHabilidad]["PosicionesObjetivo"][i]["PosicionID"]) - 1)).attr("src", "img/SelectEnemigo.png")
        }
        // datos = "habilidad ofensiva"

        // socket.emit("ejecutareventocontrincante", { usuario: Partida["Contrincante"]["Nombre"], evento: datos })
    }


    // pasarTurno()
    // Partida["Turno"] = "contrincante"
    // console.log("habilidad: " + numeroHabilidad)
}

function sortear(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}
// console.log(Partida["Jugador"]["Nombre"])
socket.on("ejecutareventocontrincante" + $(".close").html().trim(), function(data) {
    console.log("se ejecuto")
    ejecutareventocontrincante(data["evento"])
})

function subirnivel(userid, status) {
    ajax("./Controlador/SubirNivel.php", { usuario: userid, estado: status }, "subirnivel")
}

function afectarVida(idpersonaje, cambiovida) {

    ajax("./Controlador/AfectarVida.php", { personaje: idpersonaje, vida: cambiovida }, "afectarvida")


}

function asignarBuffoPersonaje(idpersonaje, idbuff) {
    ajax("./Controlador/AsignarBuffo.php", { personaje: idpersonaje, buff: idbuff }, "asignarbuffo")
}

function desmarcarEnemigos() {

    $("#SelectEnemigoPJ0").attr("src", "img/Espera.png")
    $("#SelectEnemigoPJ1").attr("src", "img/Espera.png")
    $("#SelectEnemigoPJ2").attr("src", "img/Espera.png")
}


function test() {
    recargarEstadisticas()
    cargarBatalla()
        // cargarPeleaTurno()

}

function cargarPeleaTurno() {

    contenido =
        "<div class='transparencia'>" +
        "<div class='afectados'>" +
        // "<img src='img/batalla3.jpg' class='fondoPelea ' width='1010px ' height='450px '>" +
        "<table class='tabAfectados'>" +
        "<tr>" +
        "<td>" +
        "<div class='accion'><label></label> </div>" +
        "<img src='img/clase/StickAmazonaNormal.png' id='PJ2' alt='stickpj' width='150px' height='280px'></td>" +
        "<td>" +
        "<div class='accion'><label></label> </div>" +
        "<img src='img/clase/StickAmazonaNormal.png' id='PJ1' alt='stickpj' width='150px' height='280px'></td>" +
        "<td>" +
        "<div class='accion'><label></label> </div>" +
        "<img src='img/clase/StickAmazonaNormal.png' id='PJ0' alt='stickpj' width='150px' height='280px'></td>" +

        "<td>" +
        "<img src='img/Espera.png' alt='espacio vacio' width='80px' height='200px'>" +
        "</td>" +

        "<td>" +
        "<div class='accion'><label>bloqueado</label> </div>" +
        "<img src='img/clase/StickAmazonaNormal.png' id='EPJ0' alt='stickpj' width='150px' height='280px'></td>" +
        "<td>" +
        "<div class='accion'><label>contraataque</label> </div>" +
        "<img src='img/clase/StickAmazonaNormal.png' id='EPJ1' alt='stickpj' width='150px' height='280px'></td>" +
        "<td>" +
        "<div class='accion'><label>Evadido</label> </div>" +
        "<img src='img/clase/StickAmazonaNormal.png' id='EPJ2' alt='stickpj' width='150px' height='280px'></td>" +
        "</tr>" +
        "<tr>" +
        "<td id='TurnoPJ3'>" +
        "<div class='fondoVida'>" +
        "<div id='VidaPJ2'></div>" +
        "</div>" +
        "</td>" +
        "<td id='TurnoPJ2'>" +
        "<div class='fondoVida'>" +
        "<div id='VidaPJ1'></div>" +
        "</div>" +
        "</td>" +
        "<td id='TurnoPJ1'>" +
        "<div class='fondoVida'>" +
        "<div id='VidaPJ0'></div>" +
        "</div>" +
        "</td>" +
        "<td>" +
        "</td>" +
        "<td id='EnemigoPJ1'>" +
        "<div class='fondoVida'>" +
        "<div id='VidaEnemigoPJ0'></div>" +
        "</div>" +
        "</td>" +
        "<td id='EnemigoPJ2'>" +
        "<div class='fondoVida'>" +
        "<div id='VidaEnemigoPJ1'></div>" +
        "</div>" +
        "</td>" +
        "<td id='EnemigoPJ3'>" +
        "<div class='fondoVida'>" +
        "<div id='VidaEnemigoPJ2'></div>" +
        "</div>" +
        "</td>" +
        "</tr>" +
        "</table>" +
        "</div>" +
        "</div>"


    $("header").after(contenido)

}