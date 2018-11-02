// requiere jquery,socket.io,ajax.js,
// orden de carga socket, jquery, ajax.js
// 
var socket = io.connect("http://127.0.0.1:3700")

$(document).ready(
        mostrarnombre()
    )
    // $("#pepe").click(alert("hola"))

function mostrarnombre() {
    ajax("./Controlador/MostrarNombre.php", true, "mostrarnombre")
        // $("#closeB").hide()
    socket.on("mostrarnu", function(data) {
        // console.log(data)
        // console.log("'"+data.trim()+"'")

        // console.log(data.trim().length)
        if (data.trim()) {
            $(".opIndex").css("display", "none")
            $(".opPj").css("display", "block")
            $("#closeB").css("display", "block")
            $(".close").html(data.replace(/"/g, ''))
                // alert("Lleno")
        } else {

            $(".opPj").css("display", "none")
                // console.log("vacio")
        }

    })
}

function cerrarsesion() {

    ajax("./Controlador/CerrarSesion.php", true, "cerrarsesion")
    location.href = "index.html"
        // var nom =  $(".close").html()
        // socket.on("cerrarsesion"+nom, function(data) {

    // })

}