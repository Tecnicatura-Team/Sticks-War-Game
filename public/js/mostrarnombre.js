// requiere jquery,socket.io,ajax.js,
// orden de carga socket, jquery, ajax.js
// 
var socket = io.connect("http://127.0.0.1:3700")

$(document).ready(
        mostrarnombre()
    )
    // $("#pepe").click(alert("hola"))

function mostrarnombre() {
    // ajax("./Controlador/MostrarNombre.php", true, "mostrarnombre")
    // $("#closeB").hide()
    $.ajax({
            type: "POST",
            url: "./Controlador/MostrarNombre.php",
            async: false,
            success: function(data) {
                // console.log(data)
                if (data.replace(/"/g, '').trim()) {
                    $(".opIndex").css("display", "none")
                    $(".opPj").css("display", "block")
                    $("#closeB").css("display", "block")
                    $(".close").html(data.replace(/"/g, ''))

                    // alert("Lleno")
                } else {

                    $(".opPj").css("display", "none")
                        // console.log("vacio")
                }
            },
            error: function(vacion, error) {
                console.log(error)
            }
        })
        // socket.on("mostrarnu", function(data) {
        // console.log(data)
        // console.log("'"+data.trim()+"'")

    // console.log(data.trim().length)


    // })
}

function cerrarsesion() {
    if (Partida) {
        subirnivel(Partida["Jugador"]["ID"], "perdedor")
            // console.log(Partida)
            // alert(Partida["Contrincante"]["ID"])
        ajax("./Controlador/BorrarPersonajes.php", { datos: Partida["Jugador"]["ID"] }, "borrarpersonajes")
        ajax("./Controlador/AsignarGanador.php", { datos: { "ganador": Partida["Contrincante"]["ID"], "partida": Partida["ID"] } }, "asignarganador")
        socket.emit("asignarperdedor", Partida["Jugador"]["ID"])
        alert("Abandonaras la partida y perderas")
    }


    ajax("./Controlador/CerrarSesion.php", true, "cerrarsesion")

    location.href = "index.html"
        // var nom =  $(".close").html()
        // socket.on("cerrarsesion"+nom, function(data) {

    // })

}