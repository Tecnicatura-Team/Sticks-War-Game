// requiere jquery,socket.io,ajax.js,
// orden de carga socket, jquery, ajax.js
// 
var socket = io.connect("http://127.0.0.1:3700")

$(document).ready(mostrarnombre())

function mostrarnombre() {
    ajax("./Controlador/MostrarNombre.php", true, "mostrarnombre")

    socket.on("mostrarnu", function(data) {
        $(".close").html(data.replace(/"/g, ''))
    })
}