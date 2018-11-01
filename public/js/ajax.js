var socket = io.connect("http://127.0.0.1:3700")

function ajax(archivo, datos, evento) {
    // var resultado
    $.ajax({
        type: "POST",
        url: archivo,
        // data: datos,
        // dataType: "JSON",
        data: datos,
        // async: false,
        beforeSend: function() {
            // console.log("procesando informacion")
        },
        success: function(data) {
            if (data.length > 0) {
                // console.log("exito")
                // console.log(datos)
                // console.log(eval("(" + data + ")").nombre)
                // console.log(data)
                // console.log(data.contraseña)
                // console.log(data.estado)
                // console.log(data)
                switch (evento) {
                    case "login":
                        socket.emit("logueo", eval("(" + data + ")"))
                        break;
                    case "registro":
                        // console.log("datos php: " + data)
                        socket.emit("registro", eval("(" + data + ")"))
                        break;
                    case "mostrarnombre":
                        // console.log(data)
                        socket.emit("mostrarnombre", data.replace(/"/g,""))
                        break;
                    // case "cerrarsesion":
                    // socket.emit("cerrar",data.replace(/"/g,''))
                    // break;
                    default:
                        console.log("error en la funcion ajax.js")
                        break;
                }

            }

        },
        error: function(vacio, error) {
            console.log(error)
        }
    })
}