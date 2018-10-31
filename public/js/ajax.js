var socket = io.connect("http://127.0.0.1:3700")
    // function ajax(archivo, datos) {
    //     // var resultado
    //     $.ajax({
    //         type: "POST",
    //         url: archivo,
    //         data: datos,
    //         dataType: "JSON",
    //         beforeSend: function() {
    //             console.log("procesando informacion")
    //         },
    //         success: function(data) {
    //             console.log("exito")
    //                 // resultado = data
    //             if (data == undefined || data == null || data == '') {
    //                 console.log("data vacio")
    //             } else {
    //                 console.log(data)
    //                     // console.log("contiene datos data")
    //                     // resultado = data
    //                 resultado = "holas"

//             }

//             // console.log(data)
//             // var resultado = data
//             // console.log(resultado)
//             // return resultado
//             // data = eval("(" + data + ")")
//             // console.log("nombre: " + data["nombre"] + " contra: " + data["contraseña"])
//         },
//         error: function(vacio, error) {
//             console.log(error)
//                 // return error
//         }
//     });
//     console.log(resultado)
//         // console.log(resultado)
//         // return resultado
// }
function ajax(archivo, datos) {
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
                socket.emit("logueo", eval("(" + data + ")"))
            }

        },
        error: function(vacio, error) {
            console.log(error)
        }
    })
}

// function devolver(datos) {
//     this.resultado = 0;
// }