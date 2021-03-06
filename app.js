var express = require("express")
var app = express()
var port = 3700
app.use(express.static(__dirname + "/public"))
app.set("views", __dirname + "/views")
app.set("view engine", "jade")
app.engine("jade", require("jade").__express)
var io = require("socket.io").listen(app.listen(port))
io.sockets.on("connection", function(socket) {
    // socket.emit("welcome", { menssage: "Bienvenido a Sticks War Game" })
    socket.on("logueo", function(data) {
        // console.log("app.js: " + data)
        // console.log("logueoespera" + data.trim().toUpperCase().replace(/"/g, ""))
        // console.log("llego los datos")
        // console.log("logueoerror" + data.trim().toUpperCase().replace(/"/g, ""))
        // console.log(data.user[0])
        // console.log(data.usuario.id)
        if (data.usuario.estado) {
            if (data.usuario.estado.trim() == "desconectado") {
                io.sockets.emit("logueoespera" + data.user[0].trim().toUpperCase().replace(/"/g, ""), data)
            } else {
                io.sockets.emit("logueoerror" + data.user[0].trim().toUpperCase().replace(/"/g, ""), data.usuario.estado.trim())
            }
            // console.log("se logueo")

        } else {
            // console.log("no se logueo")
            io.sockets.emit("logueoerror" + data.user[0].trim().toUpperCase().replace(/"/g, ""), false)
        }
    })
    socket.on("registro", function(data) {
        if (data.menssage == true) {
            io.sockets.emit("registroespera" + data.user[0] + data.user[1], data)
        } else {
            io.sockets.emit("registroerror" + data.user[0] + data.user[1], data)
        }
    })
    socket.on("eobtenerclases", function(data) {
            // console.log(data["usuario"].trim())
            io.sockets.emit("robtenerclases" + data["usuario"].trim(), data)
        })
        // socket.on("mostrarnombre", function(data) {
        // if (data) {
        // console.log("mostrarnu")
        // io.sockets.emit("mostrarnu", data)
        // }
        // })
        // socket.on("cerrar", function(data) {

    //         io.sockets.emit("cerrarsesion"+data, data)

    // })
    socket.on("obtenerhabilidad", function(data) {
        io.sockets.emit("obtenerhabilidad" + data["usuario"].trim(), data)
    })

    socket.on("obtenerobjeto", function(data) {
        io.sockets.emit("obtenerobjeto" + data["usuario"].trim(), data)
            // alert("socket")
            // console.log("app")
    })

    socket.on("partidaIniciada", function(data) {
        // console.log("encontro: '" + data["usuario"] + "'")
        io.sockets.emit("partidaIniciada" + data["usuario"], data)

    })

    // socket.on("datosoponente", function(data) {
    //     // var datos = eval("(" + data + ")")
    //     console.log("datos me: " + data["usuario"])
    //     console.log("datos oponente: " + data["usuario2"])
    // })

    socket.on("cargarversuspartida", function(data) {
        // console.log("encontro: '" + data["usuario"] + "'")
        io.sockets.emit("cargarversuspartida" + data["jugador1"], data)

    })
    socket.on("partidacargar", function(data) {
        io.sockets.emit("partidacargar" + data["Jugador"]["Nombre"], data)
    })

    socket.on("recargarestadisticas", function(data) {
        // console.log("enviando partida nueva")
        io.sockets.emit("recargarestadisticas" + data["Jugador"]["Nombre"], data)
    })
    socket.on("asignarganador", function(data) {
        // console.log("enviando partida nueva")
        console.log("ganador" + data.replace(/"/g, "").trim())
            // console.log("Gano: " + data.replace(/"/g, "").trim())
        io.sockets.emit("ganador" + data.replace(/"/g, "").trim(), data)
    })
    socket.on("asignarperdedor", function(data) {
        io.sockets.emit("perdedor" + data.replace(/"/g, "").trim(), data)
    })

    socket.on("pasarturno", function(data) {
        // console.log("enviando partida nueva")
        // console.log("se paso turno")
        // console.log("Gano: " + data.replace(/"/g, "").trim())
        // console.log()
        io.sockets.emit("pasarturno" + data["receptor"].replace(/"/g, "").trim(), data)
    })
    socket.on("dispararfinpartida", function(data) {
        // console.log("enviando partida nueva")
        // console.log("Gano: " + data.replace(/"/g, "").trim())
        io.sockets.emit("dispararfinpartida" + data["usuario"].replace(/"/g, "").trim(), data)
    })
    socket.on("ejecutareventocontrincante", function(data) {
        // console.log("ejecutareventocontrincante" + data["usuario"].replace(/"/g, "").trim())
        io.sockets.emit("ejecutareventocontrincante" + data["usuario"].replace(/"/g, "").trim(), data)
    })






})