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
        // console.log("llego los datos")
        if (data.nombre) {
            io.sockets.emit("logueoespera" + data.user[0] + data.user[1], data)
        } else {
            io.sockets.emit("logueoerror" + data.user[0] + data.user[1], false)
        }

    })
    socket.on("registro", function(data) {
        if (data.menssage == true) {
            io.sockets.emit("registroespera" + data.user[0] + data.user[1], data)
        } else {
            io.sockets.emit("registroerror" + data.user[0] + data.user[1], data)
        }
    })
})