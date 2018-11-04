var socket = io.connect("http://127.0.0.1:3700")

function obtenerclases() {
    // console.log($(".close").html().trim())
    ajax("./Controlador/Clases.php", false, "obtenerclases")
    socket.on("robtenerclases" + $(".close").html().trim(), function(data) {
        for (var i = 0; i < data["clases"].length; i++) {
            $("#" + data["clases"][i]["clasenombre"].trim()).css("background", "url(" + data["clases"][i]["direiconoclas"].trim() + ") no-repeat")
                // console.log("te violo")
                // console.log(data["clases"][i]["clasenombre"].trim())
        }

    })
}