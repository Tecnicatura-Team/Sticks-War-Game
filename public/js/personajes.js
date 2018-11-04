var elemento = []
elemento["posicionPJ1"] = ""
elemento["posicionPJ2"] = ""
elemento["posicionPJ3"] = ""
var posicion


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
        "<td style='color:aliceblue; text-align: center;'>Asesino</td>" +
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
        "<div class='clases'><input type='radio' id='Asesino' class='pj' name='clases' value='Asesino' onclick='Descrip2()'> <label></label></div>" +
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

function detalleHabilidad() {

    //descripciones de cada habilidad
    var descripciones = [
            "Causa entre 80 - 180 de daño a un enemigo en la posicion ( 1 - 2 ) pero se disminuye 5% de precision y 10% de daño a si misma (acumulable hasta 6 veces)",
            "Descripción de la habilidad 2",
            "Descripción de la habilidad 3",
            "Descripción de la habilidad 4"
        ]
        //al pasar el mouse sobre cada habilidad ejecuta una funcion especifica
    $(document).ready(function() {
            obtenerclases()
            $(".imgH").on(
                "mouseenter",
                function() {
                    event.preventDefault()
                    verDesc('descHabilidad', descripciones[$(this).attr("id")[4] - 1])

                }
            )
            $(".imgH").on(
                "mouseleave",
                function() {
                    event.preventDefault()
                    ocultarDesc('descHabilidad')
                }
            )
        }

    )
}


//muestra las descripciones de las habilidades
function verDesc(elemento, descripcion) {
    console.log(clases)
    $("." + elemento).html(descripcion)


}
//oculta las descripciones de las habilidades
function ocultarDesc(elemento) {
    $("." + elemento).html("")
}

function ocultar() {


    $(".pj").each(function() {

        if ($(this).is(":checked")) {
            elemento[posicion] = $(this).attr("id")

        }
    })


    $("#Personajes").remove()
    $("#Asignar").remove()
    document.getElementById('Eleccion').style.display = ''; //vuelve a mostrar la div eleccion
    //habilita los radio button para ver las estadisticas de los pj luego de agregarlos
    for (var i = 1; i <= 3; i++) {
        if (!elemento["posicionPJ" + i].length == 0) {
            $("#ver" + i).css("display", "block")
        }
    }

}

function descrip() {
    $(".statsObjeto").remove()
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
        "<tr>" +
        "<td class='nomAttrib'>Modificador de daño: </td>" +
        "<td class='valAttrib'></td>" +
        "</tr>" +
        "</table>" +
        "</div>" +
        "</td>" +
        "<td class='Habilidades'>" +
        "<div class='pjHabilidades'>" +
        "<img src='img/logo1.jpg' class='imgH' id='Aseh1' width='40px' height='40px' style='display:table;'>" +
        "<img src='img/logo1.jpg' class='imgH' id='Aseh2' width='40px' height='40px' style='display:table;'>" +
        "<img src='img/logo1.jpg' class='imgH' id='Aseh3' width='40px' height='40px' style='display:table;'>" +
        "<img src='img/logo1.jpg' class='imgH' id='Aseh4' width='40px' height='40px' style='display:table;'>" +
        "</div>" +
        "</td>" +
        "<td class='objeto' rowspan='3'></td>" +
        "</tr>" +
        "<tr>" +
        "<td class='NomHabilidad'>" +
        "nombre habilidad" +
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

            $(".ver").click(
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
        "<td class='nomAttrib'>Modificador: </td>" +
        "<td class='valAttrib'></td>" +
        "</tr>" +
        "</table>" +
        "</div>" +
        "</td>" +
        "<td class='Habilidades'>" +
        "<div class='pjHabilidades'>" +
        "<img src='img/logo1.jpg' class='imgH' id='Aseh1' width='40px' height='40px' style='display:table;'>" +
        "<img src='img/logo1.jpg' class='imgH' id='Aseh2' width='40px' height='40px' style='display:table;'>" +
        "<img src='img/logo1.jpg' class='imgH' id='Aseh3' width='40px' height='40px' style='display:table;'>" +
        "<img src='img/logo1.jpg' class='imgH' id='Aseh4' width='40px' height='40px' style='display:table;'>" +
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