var elemento = []
elemento["posicionPJ1"] = ""
elemento["posicionPJ2"] = ""
elemento["posicionPJ3"] = ""

elemento["objeto1"] = 1
elemento["objeto2"] = 1
elemento["objeto3"] = 1


var posicion

obtenerHabilidades()
obtenerObjetos()


$(document).ready(
    selectClase()
)

function ElegirPJ(lugar) {
    posicion = $(lugar).attr("class")
        // console.log(posicion)

    var contenido =
        "<div class='Personajes' id='Personajes'>" +
        "<h2>Elije una clase</h2></br>" +
        "<br>" +
        "<table class='Eclass'>" +
        "<tr class='NomClases'>" +
        "<td style='color:aliceblue; text-align: center;'>Paladín</td>" +
        "<td style='color:aliceblue; text-align: center;'>Guerrero</td>" +
        "<td style='color:aliceblue; text-align: center;'>Sacerdotisa</td>" +
        "<td style='color:aliceblue; text-align: center;'>Arquera</td>" +
        "<td style='color:aliceblue; text-align: center;'>Amazona</td>" +
        "<td style='color:aliceblue; text-align: center;'>Bufón</td>" +
        "</tr>" +
        "<tr>" +
        "<td>" +
        "<div class='clases'><input type='radio' id='Paladin' class='pj' name='clases' value='Paladin' onclick='Descrip2()'> <label></label></div>" +
        "</td>" +
        "<td>" +
        "<div class='clases'><input type='radio' id='Guerrero' class='pj' name='clases' value='Guerrero' onclick='Descrip2()'> <label></label></div>" +
        "</td>" +
        "<td>" +
        "<div class='clases'><input type='radio' id='Sacerdotisa' class='pj' name='clases' value='Sacerdotisa' onclick='Descrip2()'> <label></label></div>" +
        "</td>" +
        "<td>" +
        "<div class='clases'><input type='radio' id='Arquera' class='pj' name='clases' value='Arquera' onclick='Descrip2()'> <label></label></div>" +
        "</td>" +
        "<td>" +
        "<div class='clases'><input type='radio' id='Amazona' class='pj' name='clases' value='Amazona' onclick='Descrip2()'> <label></label></div>" +
        "</td>" +
        "<td>" +
        "<div class='clases'><input type='radio' id='Bufon' class='pj' name='clases' value='Bufon' onclick='Descrip2()'> <label></label></div>" +
        "</td>" +
        "</tr>" +
        "</table>" +
        "</div>"

    var boton = "<input id='Asignar' type='button' value='Asignar' onclick='ocultar()'>"

    $("footer").before(contenido)
    $("footer").before(boton)
    $("#Eleccion").fadeOut(500)
    $("#Personajes").hide().fadeIn(4000) //efecto al crear el objeto

    detalleHabilidad()
}

function detalleHabilidad(pj) {

    //descripciones de cada habilidad

    //al pasar el mouse sobre cada habilidad ejecuta una funcion especifica
    $(document).ready(function() {
            obtenerclases()
            $(".imgH").on(
                "mouseenter",
                function() {
                    event.preventDefault()
                    verDesc($(this).attr("id")[1], ($(".pj").is(":checked")) ? $(".pj:checked").val() : false)
                    obtenerHabilidades()

                }
            )
            $(".imgH").on(
                "mouseleave",
                function() {
                    event.preventDefault()
                    ocultarDesc('descHabilidad')
                    ocultarDesc('NomHabilidad')
                }
            )
        }

    )
}



//muestra las descripciones de las habilidades
function verDesc(ele1, ele2) {
    // $("." + elemento).html(descripcion)
    var habilidad = ele1
    var habilidadcd = new Array()
    var clase = ele2
        // ($(".pj").is(":checked")) ? $(".pj:checked").val() : false

    if (clase) {
        var contadorhabilidad = 1
        for (var i = 0; i < habilidades.length; i++) {
            if (habilidades[i]["habilidadclase"] == clases[claseid[clase]]["claseid"]) {
                habilidadcd[contadorhabilidad] = { "nombre": habilidades[i]["habilidadnombre"], "descripcion": habilidades[i]["descripcion"] }

                contadorhabilidad += 1
            }
        }
        $(".NomHabilidad").html(habilidadcd[habilidad]["nombre"])
        $(".descHabilidad").html(habilidadcd[habilidad]["descripcion"])

    }

    // console.log(elemento)

}

function imghabilidad(clase, ele) {

    $(document).ready(function() {
        var habilidadcd = new Array()
            // var clase = ($(".pj").is(":checked")) ? $(".pj:checked").val() : false

        if (clase) {
            var contadorhabilidad = 1
            for (var i = 0; i < habilidades.length; i++) {
                if (habilidades[i]["habilidadclase"] == clases[claseid[clase]]["claseid"]) {
                    habilidadcd[contadorhabilidad] = { "img": habilidades[i]["direcicono"] }

                    // console.log(habilidadcd[contadorhabilidad]["img"])
                    // console.log("#h" + contadorhabilidad + " img: " + habilidadcd[contadorhabilidad]["img"])

                    $("#" + ele + contadorhabilidad).attr("src", habilidadcd[contadorhabilidad]["img"])

                    contadorhabilidad += 1
                }
            }

        }
    })

}



//oculta las descripciones de las habilidades
function ocultarDesc(elemento) {
    $("." + elemento).html("")
}

function ocultar() {
    $(".statsObjeto").remove()
    $(".ver").prop("checked", false)
    $(".pj").each(function() {

        if ($(this).is(":checked")) {
            elemento[posicion] = $(this).attr("id")

        }

    })
    $(".cuerpoCarga").remove()
    $("#Personajes").remove()
    $("#Asignar").remove()
    document.getElementById('Eleccion').style.display = ''; //vuelve a mostrar la div eleccion
    //habilita los radio button para ver las estadisticas de los pj luego de agregarlos
    for (var i = 1; i <= 3; i++) {
        if (!elemento["posicionPJ" + i].length == 0) {
            $("#ver" + i).css("display", "block")
                // console.log(elemento["posicionPJ" + i])
                // console.log(claseid[elemento["posicionPJ" + i]])
            $(".posicionPJ" + i).css({

                "background": "url(" + clases[claseid[elemento["posicionPJ" + i]]]["direiconoclas"] + ") no-repeat",
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

    }
}

function selectClase() {
    for (var i = 1; i <= 3; i++) {
        if (elemento["posicionPJ" + i] == "") {
            $(".posicionPJ" + i).css({

                "background": "url(./img/Agregar" + i + ".png) no-repeat",
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
    }
}

function cargarObjeto(num) {

    $(document).ready(function() {

        // var contadorobjeto = 1
        // console.log("cantidad objetos:" + objetos.length)
        if (objetos) {
            for (var i = 0; i < objetos.length; i++) {


                var boto = "<img src='" + objetos[i]["direcimagen"] + "' id='objeto" + i + "' width='40px' height='40px' onclick='elegirObjeto(" + num + ",this,true)' >"
                $(".imgObjeto").append(boto)
            }
            elegirObjeto(num, "", false)
        }
    })
}

function elegirObjeto(elem, obj, fun) {
    if (fun) {
        // console.log("no es un numero")
        for (var i = 0; i < objetos.length; i++) {
            if (i == $(obj).attr("id")[6]) {
                elemento["objeto" + elem] = objetos[i]["tipoobjetoid"]
                    // carta la nueva img para el objeto seleccionado
                    // $(elemento).attr("src", objetos[$(elemento).attr("id")[6]]["direcimagen2"])
                $("#objeto" + i).attr("src", objetos[$(obj).attr("id")[6]]["direcimagen2"])
                $(".nomObjeto").html(objetos[i]["nombre"])
                $(".rarObjeto").html(objetos[i]["calidad"])
                $(".descripObjeto").html(objetos[i]["descripcion"])
                    // console.log("elemento clic " + i + " " + objetos[$(elemento).attr("id")[6]]["direcimagen2"])
            } else {
                // imagen por defecto
                // $(elemento).attr("src", objetos[i]["direcimagen"])
                $("#objeto" + i).attr("src", objetos[i]["direcimagen"])
                    // console.log("else " + i + " " + objetos[i]["direcimagen"])
            }
        }

    } else {

        for (var i = 0; i < objetos.length; i++) {
            if (objetos[i]["tipoobjetoid"] == elemento["objeto" + elem]) {

                $("#objeto" + i).attr("src", objetos[i]["direcimagen2"])
                $(".nomObjeto").html(objetos[i]["nombre"])
                $(".rarObjeto").html(objetos[i]["calidad"])
                $(".descripObjeto").html(objetos[i]["descripcion"])
                    // console.log(objetos[i])
            } else {
                // imagen por defecto
                // $(elemento).attr("src", objetos[i]["direcimagen"])
                $("#objeto" + i).attr("src", objetos[i]["direcimagen"])
                    // console.log("else " + i + " " + objetos[i]["direcimagen"])
            }
        }
    }
}


function descrip(ele) {
    $(".statsObjeto").remove()

    var clase = elemento["posicionPJ" + ($(ele).val())]

    if (clase) {
        imghabilidad(clase, "ha")
    }
    cargarObjeto($(ele).val())


    var contenido =

        "<table class='statsObjeto'>" +
        "<tr>" +
        "<td class='stats' rowspan='3'>" +
        "<div>" +
        "<table>" +
        "<tr>" +
        "<td class='nomAttrib'>Vida:</td>" +
        "<td class='vidamaxima'></td>" +
        "</tr>" +
        "<tr>" +
        "<td class='nomAttrib'>Precisión: </td>" +
        "<td class='precision'></td>" +
        "</tr>" +
        "<tr>" +
        "<td class='nomAttrib'>Evasión: </td>" +
        "<td class='provevasion'></td>" +
        "</tr>" +
        "<tr>" +
        "<td class='nomAttrib'>Daño crítico: </td>" +
        "<td class='provcritico'></td>" +
        "</tr>" +
        "<tr>" +
        "<td class='nomAttrib'>Resistencia: </td>" +
        "<td class='reddamage'></td>" +
        "</tr>" +
        // "<tr>" +
        // "<td class='nomAttrib'>Modificador: </td>" +
        // "<td class='valAttrib'></td>" +
        // "</tr>" +
        "</table>" +
        "</div>" +
        "</td>" +
        "<td class='Habilidades'>" +
        "<div class='pjHabilidades'>" +
        "<img src='' class='imgH' id='ha1' width='40px' height='40px' style='display:table;'>" +
        "<img src='' class='imgH' id='ha2' width='40px' height='40px' style='display:table;'>" +
        "<img src='' class='imgH' id='ha3' width='40px' height='40px' style='display:table;'>" +
        "<img src='' class='imgH' id='ha4' width='40px' height='40px' style='display:table;'>" +
        "</div>" +
        "</td>" +
        "<td rowspan='3'>" +
        "<div class='divobjeto'>" +
        "<table class='objeto'>" +
        "<tr><td colspan=2><div class='imgObjeto'></div></td></tr>" +
        "<tr><td colspan=2><div class='espacio'></div ></td></tr>" +
        "<tr><td>Nombre:</td><td class='nomObjeto'></td></tr>" +
        "<tr><td>Rareza:</td><td class='rarObjeto'></td></tr>" +
        "<tr><td colspan=2><div class='descripObjeto'></div ></td></tr>" +
        "</table>" +
        "</div>" +
        "</td>" +
        "</tr>" +
        "<tr>" +
        "<td class='NomHabilidad'>" +
        "</td>" +
        "</tr>" +
        "<tr>" +
        "<td class='desc'>" +
        "<div class='descHabilidad'>" +
        "</div>" +
        "</td>" +
        "</tr>" +
        "</table>"

    //crea la tabla statsObjeto evitando que se cree repetidas veces
    if ($(".statsObjeto").length == 0) {
        $(".BContinuar").before(contenido)
            //aplica efecto chidori
        $(document).ready(
            $(".imgH").mouseenter(function(e) {
                e.preventDefault()
                    // console.log($(this).attr("id"))
                    // console.log(clase)
                verDesc($(this).attr("id")[2], clase)
            }), $(".ver").click(
                caracteristicas(),
                $(".statsObjeto").hide().fadeIn(500), //efecto al crear el objeto
                $(".statsObjeto").animate({

                    height: '250px',
                    color: "#fff",
                    marginTop: "20px"
                }, "slow")
            ))
    }
    detalleHabilidad()

}

function Descrip2() {
    $(".statsHabilidad").remove()

    // var clase = ($(".pj").is(":checked")) ? $(".pj:checked").val() : false

    if ($(".pj").is(":checked")) {
        imghabilidad($(".pj:checked").val(), "h")
    }

    var contenido =
        "<table class='statsHabilidad'>" +
        "<tr>" +
        "<td class='stats' rowspan='3'>" +
        "<div>" +
        "<table>" +
        "<tr>" +
        "<td class='nomAttrib'>Vida:</td>" +
        "<td class='vidamaxima'></td>" +
        "</tr>" +
        "<tr>" +
        "<td class='nomAttrib'>Precisión: </td>" +
        "<td class='precision'></td>" +
        "</tr>" +
        "<tr>" +
        "<td class='nomAttrib'>Evasión: </td>" +
        "<td class='provevasion'></td>" +
        "</tr>" +
        "<tr>" +
        "<td class='nomAttrib'>Daño crítico: </td>" +
        "<td class='provcritico'></td>" +
        "</tr>" +
        "<tr>" +
        "<td class='nomAttrib'>Resistencia: </td>" +
        "<td class='reddamage'></td>" +
        "</tr>" +
        // "<td class='nomAttrib'>Modificador: </td>" +
        // "<td class='valAttrib'></td>" +
        // "</tr>" +
        "</table>" +
        "</div>" +
        "</td>" +
        "<td class='Habilidades'>" +
        "<div class='pjHabilidades'>" +
        "<img src='' class='imgH' id='h1' width='40px' height='40px' style='display:table;'>" +
        "<img src='' class='imgH' id='h2' width='40px' height='40px' style='display:table;'>" +
        "<img src='' class='imgH' id='h3' width='40px' height='40px' style='display:table;'>" +
        "<img src='' class='imgH' id='h4' width='40px' height='40px' style='display:table;'>" +
        "</div>" +
        "</td>" +
        "</tr>" +
        "<tr>" +
        "<td class='NomHabilidad'>" +
        "</td>" +
        "</tr>" +
        "<tr>" +
        "<td class='desc'>" +
        "<div class='descHabilidad'>" +
        "</div>" +
        "</td>" +
        "</tr>" +
        "</table>"

    // ----------------------------------------------------------------------------------------



    // -----------------------------------------------------------------------------------
    if ($(".statsHabilidad").length == 0) {
        $(".Eclass").after(contenido)

        //aplica efecto chidori
        $(document).ready(

            $(".pj").click(
                $(".statsHabilidad").hide().fadeIn(500), //efecto al crear el objeto
                $(".statsHabilidad").animate({
                    height: '250px',
                    color: "#fff",
                    marginTop: "20px"
                }, "slow")
            ))
    }
    detalleHabilidad()
}

function cargarClases() {

    ajax("./Controlador/CrearClases.php", true, "crearclases")


}

function caracteristicas() {

    if ($(".ver").is(":checked")) {

        $(".vidamaxima").html(clases[claseid[elemento["posicionPJ" + $(".ver:checked").val()]]]["vidamaxima"].trim())
        $(".precision").html(clases[claseid[elemento["posicionPJ" + $(".ver:checked").val()]]]["precision"].trim())
        $(".provevasion").html(clases[claseid[elemento["posicionPJ" + $(".ver:checked").val()]]]["provevasion"].trim())
        $(".provcritico").html(clases[claseid[elemento["posicionPJ" + $(".ver:checked").val()]]]["provcritico"].trim())
        $(".reddamage").html(clases[claseid[elemento["posicionPJ" + $(".ver:checked").val()]]]["reddamage"].trim())

        // console.log(clases[claseid[elemento["posicionPJ" + $(".ver:checked").val()]]]["precision"].trim())

        // console.log(clases[claseid[elemento["posicionPJ" + $(".ver:checked").val()]]]["provevasion"].trim())

        // console.log(clases[claseid[elemento["posicionPJ" + $(".ver:checked").val()]]]["provcritico"].trim())

        // console.log(clases[claseid[elemento["posicionPJ" + $(".ver:checked").val()]]]["reddamage"].trim())


    }
}


// pantalla de carga
function Cargando() {

    var contenido =
        "<div class='cuerpoCarga'>" +
        "<div class='imgcarga'>" +
        "</div>" +
        "<input class='cancelar' type='button' value='Cancelar' onclick='ocultar()'>" +
        "</div>"


    $("footer").before(contenido)
    $("#Eleccion").fadeOut(500)
    $(".cuerpoCarga").hide().fadeIn(4000)
}