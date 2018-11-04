var socket = io.connect("http://127.0.0.1:3700")
var claseid
var clases

function obtenerclases() {
    // console.log($(".close").html().trim())
    ajax("./Controlador/Clases.php", false, "obtenerclases")
    socket.on("robtenerclases" + $(".close").html().trim(), function(data) {
        clases = data["clases"]
        for (var i = 0; i < data["clases"].length; i++) {

            $("#" + data["clases"][i]["clasenombre"].trim()).after().css({

                "background": "url(" + data["clases"][i]["direiconoclas"].trim() + ") no-repeat",
                "top": "0",
                "display": "inline-block",
                "background-size": "150px 150px",
                "display": "block",
                "width": "150px",
                "height": "150px",
                "content": "''",
                "vertical-align": "middle"
            })
        }

        var ele = new Array()
        for (var i = 0; i < data["clases"].length; i++) {
            ele[data["clases"][i]["clasenombre"]] = i
        }

        claseid = ele

        if ($(".pj").is(":checked")) {
            $(".pj:checked").css({
                    "background": "transparent url(" + data["clases"][ele[$(".pj:checked").val()]]["direiconoclas2"].trim() + ") no-repeat",
                    "background-size": "150px 150px",
                })
                // console.log(data["clases"][ele[$(".pj:checked").val()]]["vidamaxima"].trim())
            $(".vidamaxima").html(data["clases"][ele[$(".pj:checked").val()]]["vidamaxima"].trim())
            $(".precision").html(data["clases"][ele[$(".pj:checked").val()]]["precision"].trim())
            $(".provevasion").html(data["clases"][ele[$(".pj:checked").val()]]["provevasion"].trim())
            $(".provcritico").html(data["clases"][ele[$(".pj:checked").val()]]["provcritico"].trim())
            $(".reddamage").html(data["clases"][ele[$(".pj:checked").val()]]["reddamage"].trim())
        }
    })
}

function obtenerHabilidades() {
    ajax("./Controlador/ObtenerHabilidades.php", false, "obtenerhabilidades")
}