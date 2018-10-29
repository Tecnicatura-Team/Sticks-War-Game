function ElegirPJ() {
    var contenido =
        "<div class='Personajes' id='Personajes'>" +
        "<h2>Elije un una clase</h2></br>" +
        "<br>" +
        "<table class='Eclass'>" +
        "<tr class='NomClases'>" +
        "<td style='color:aliceblue; text-align: center;'>Paladín</td>" +
        "<td style='color:aliceblue; text-align: center;'>Guerrero</td>" +
        "<td style='color:aliceblue; text-align: center;'>Mago</td>" +
        "<td style='color:aliceblue; text-align: center;'>Arquero</td>" +
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
        "<div class='clases'><input type='radio' id='Mago' class='pj' name='clases' value='Mago' onclick='Descrip2()'> <label></label></div>" +
        "</td>" +
        "<td>" +
        "<div class='clases'><input type='radio' id='Arquero' class='pj' name='clases' value='Arquero' onclick='Descrip2()'> <label></label></div>" +
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

    detalleHabilidad()
}

function detalleHabilidad() {

    //descripciones de cada habilidad
    var descripciones = [
            "Causa entre 80 - 180 de daño a un enemigo en la posicion ( 1 - 2 ) pero se disminuye 5% de precicion y 10% de daño a si misma (acumulable hasta 6 veces)",
            "Descripción de la habilidad 2",
            "Descripción de la habilidad 3",
            "Descripción de la habilidad 4"
        ]
        //al pasar el mouse sobre cada habilidad ejecuta una funcion especifica
    $(document).ready(
        $(".imgH").on(
            "mouseenter",
            function() {
                event.preventDefault()
                    // console.log("1")
                    // showdiv(event, descripciones[$(this).attr("id")[4] - 1]);
                    // $(".descHabilidad").html("estoy")
                verDesc('descHabilidad', descripciones[$(this).attr("id")[4] - 1])
            }
        ),
        $(".imgH").on(
            "mouseleave",
            function() {
                event.preventDefault()
                    // console.log("2")
                    // hiddenDiv();
                    // $(".descHabilidad").html("bye")
                ocultarDesc('descHabilidad')
            }
        )
    )
}


//muestra las descripciones de las habilidades
function verDesc(elemento, descripcion) {
    $("." + elemento).html(descripcion)
}
//oculta las descripciones de las habilidades
function ocultarDesc(elemento) {
    $("." + elemento).html("")
}


function ocultar() {
    $("#Personajes").remove()
    $("#Asignar").remove()
    document.getElementById('Eleccion').style.display = ''; //vuelve a mostrar la div eleccion
}

function descrip() {
    $(".statsObjeto").remove()
    var contenido =

        "<table class='statsObjeto'>" +
        "<tr>" +
        "<td class='stats' rowspan='2'>" +
        "<div>" +
        "<table>" +
        "<tr>" +
        "<td class='nomAttrib'>Vida:</td>" +
        "<td class='valAttrib'></td>" +
        "</tr>" +
        "<tr>" +
        "<td class='nomAttrib'>Precisión: </td>" +
        "<td class='valAttrib'></td>" +
        "</tr>" +
        "<tr>" +
        "<td class='nomAttrib'>Evasión: </td>" +
        "<td class='valAttrib'></td>" +
        "</tr>" +
        "<tr>" +
        "<td class='nomAttrib'>Daño crítico: </td>" +
        "<td class='valAttrib'></td>" +
        "</tr>" +
        "<tr>" +
        "<td class='nomAttrib'>Resistencia: </td>" +
        "<td class='valAttrib'></td>" +
        "</tr>" +
        "<tr>" +
        "<td class='nomAttrib'>Modificador de daño: </td>" +
        "<td class='valAttrib'></td>" +
        "</tr>" +
        "</table>" +
        "</div>" +
        "</td>" +
        "<td class='Habilidades'>" +
        "<div>" +
        "<img src='img/logo1.jpg' class='imgH' id='Aseh1' width='40px' height='40px' style='display:table;'>" +
        "<img src='img/logo1.jpg' class='imgH' id='Aseh2' width='40px' height='40px' style='display:table;'>" +
        "<img src='img/logo1.jpg' class='imgH' id='Aseh3' width='40px' height='40px' style='display:table;'>" +
        "<img src='img/logo1.jpg' class='imgH' id='Aseh4' width='40px' height='40px' style='display:table;'>" +
        "</div>" +
        "</td>" +
        "<td class='objeto' rowspan=2></td>" +
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
        "<td class='stats' rowspan='2'>" +
        "<div>" +
        "<table>" +
        "<tr>" +
        "<td class='nomAttrib'>Vida:</td>" +
        "<td class='valAttrib'></td>" +
        "</tr>" +
        "<tr>" +
        "<td class='nomAttrib'>Precisión: </td>" +
        "<td class='valAttrib'></td>" +
        "</tr>" +
        "<tr>" +
        "<td class='nomAttrib'>Evasión: </td>" +
        "<td class='valAttrib'></td>" +
        "</tr>" +
        "<tr>" +
        "<td class='nomAttrib'>Daño crítico: </td>" +
        "<td class='valAttrib'></td>" +
        "</tr>" +
        "<tr>" +
        "<td class='nomAttrib'>Resistencia: </td>" +
        "<td class='valAttrib'></td>" +
        "</tr>" +
        "<tr>" +
        "<td class='nomAttrib'>Modificador: </td>" +
        "<td class='valAttrib'></td>" +
        "</tr>" +
        "</table>" +
        "</div>" +
        "</td>" +
        "<td class='Habilidades'>" +
        "<div>" +
        "<img src='img/logo1.jpg' class='imgH' id='Aseh1' width='40px' height='40px' style='display:table;'>" +
        "<img src='img/logo1.jpg' class='imgH' id='Aseh2' width='40px' height='40px' style='display:table;'>" +
        "<img src='img/logo1.jpg' class='imgH' id='Aseh3' width='40px' height='40px' style='display:table;'>" +
        "<img src='img/logo1.jpg' class='imgH' id='Aseh4' width='40px' height='40px' style='display:table;'>" +
        "</div>" +
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
                $(".statsHabilidad").animate({
                    height: '250px',
                    color: "#fff",
                    marginTop: "20px"
                }, "slow")

            ))
    }
    detalleHabilidad()
}