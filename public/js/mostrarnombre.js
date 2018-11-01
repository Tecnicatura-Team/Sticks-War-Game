// requiere jquery,socket.io,ajax.js,
// orden de carga socket, jquery, ajax.js
// 
function mostrarnombre() {
    ajax("./Controlador/MostrarNombre.php", true, "mostrarnombre")
}