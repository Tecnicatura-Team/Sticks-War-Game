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

        io.sockets.emit("logueoespera" + data.nombre + data.contrasena, { menssage: data })
    })
})