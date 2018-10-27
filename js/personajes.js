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
        "<div class='clases'><input type='radio' class='Paladin' name='clases' value='Paladin' > <label></label></div>" +
        "</td>" +
        "<td>" +
        "<div class='clases'><input type='radio' class='Guerrero'name='clases' value='Guerrero' > <label></label></div>" +
        "</td>" +
        "<td>" +
        "<div class='clases'><input type='radio' class='Mago' name='clases' value='Mago'> <label></label></div>" +
        "</td>" +
        "<td>" +
        "<div class='clases'><input type='radio' class='Arquero' name='clases' value='Arquero'> <label></label></div>" +
        "</td>" +
        "<td>" +
        "<div class='clases'><input type='radio' class='Amazona' name='clases' value='Amazona'> <label></label></div>" +
        "</td>" +
        "<td>" +
        "<div class='clases'><input type='radio' class='Asesino' name='clases' value='Asesino'> <label></label></div>" +
        "</td>" +
        "</tr>" +
        "<tr>" +
        "<td class='Habilidades'>" +
        "<img src='img/logo1.jpg' class='imgH' id='Palh1' alt='' width='40px' height='40px' style='display:table;'>" +
        "<img src='img/logo1.jpg' class='imgH' id='Palh2' alt='' width='40px' height='40px' style='display:table;'>" +
        "<img src='img/logo1.jpg' class='imgH' id='Palh3' alt='' width='40px' height='40px' style='display:table;'>" +
        "<img src='img/logo1.jpg' class='imgH' id='Palh4' alt='' width='40px' height='40px' style='display:table;'>" +
        "</td>" +
        "<td class='Habilidades'>" +
        "<img src='img/logo1.jpg' class='imgH' id='Gueh1' alt='' width='40px' height='40px' style='display:table;'>" +
        "<img src='img/logo1.jpg' class='imgH' id='Gueh2' alt='' width='40px' height='40px' style='display:table;'>" +
        "<img src='img/logo1.jpg' class='imgH' id='Gueh3' alt='' width='40px' height='40px' style='display:table;'>" +
        "<img src='img/logo1.jpg' class='imgH' id='Gueh4' alt='' width='40px' height='40px' style='display:table;'>" +
        "</td>" +
        "<td class='Habilidades'>" +
        "<img src='img/logo1.jpg' class='imgH' id='Magh1' alt='' width='40px' height='40px' style='display:table;'>" +
        "<img src='img/logo1.jpg' class='imgH' id='Magh2' alt='' width='40px' height='40px' style='display:table;'>" +
        "<img src='img/logo1.jpg' class='imgH' id='Magh3' alt='' width='40px' height='40px' style='display:table;'>" +
        "<img src='img/logo1.jpg' class='imgH' id='Magh4' alt='' width='40px' height='40px' style='display:table;'>" +
        "</td>" +
        "<td class='Habilidades'>" +
        "<img src='img/logo1.jpg' class='imgH' id='Arqh1' alt='' width='40px' height='40px' style='display:table;'>" +
        "<img src='img/logo1.jpg' class='imgH' id='Arqh2' alt='' width='40px' height='40px' style='display:table;'>" +
        "<img src='img/logo1.jpg' class='imgH' id='Arqh3' alt='' width='40px' height='40px' style='display:table;'>" +
        "<img src='img/logo1.jpg' class='imgH' id='Arqh4' alt='' width='40px' height='40px' style='display:table;'>" +
        "</td>" +
        "<td class='Habilidades'>" +
        "<img src='img/logo1.jpg' class='imgH' id='Amah1' alt='' width='40px' height='40px' style='display:table;'>" +
        "<img src='img/logo1.jpg' class='imgH' id='Amah2' alt='' width='40px' height='40px' style='display:table;'>" +
        "<img src='img/logo1.jpg' class='imgH' id='Amah3' alt='' width='40px' height='40px' style='display:table;'>" +
        "<img src='img/logo1.jpg' class='imgH' id='Amah4' alt='' width='40px' height='40px' style='display:table;'>" +
        "</td>" +
        "<td class='Habilidades'>" +
        "<img src='img/logo1.jpg' class='imgH' id='Aseh1' alt='' width='40px' height='40px' style='display:table;'>" +
        "<img src='img/logo1.jpg' class='imgH' id='Aseh2' alt='' width='40px' height='40px' style='display:table;'>" +
        "<img src='img/logo1.jpg' class='imgH' id='Aseh3' alt='' width='40px' height='40px' style='display:table;'>" +
        "<img src='img/logo1.jpg' class='imgH' id='Aseh4' alt='' width='40px' height='40px' style='display:table;'>" +
        "</td>" +
        "<tr>" +
        "<td colspan='6' class='desc'>" +
        "<div id='descHabilidad'></div>" +
        "</td>" +
        "</tr>" +
        "</table>" +
        "</div>"

    var boton = "<input id='Asignar' type='button' value='Asignar' onclick=ocultar()>"


    $("footer").before(contenido)
    $("footer").before(boton)
    $("#Eleccion").fadeOut(500)

    var descripciones = [
        "Descripción de la habilidad 1",
        "Descripción de la habilidad 2",
        "Descripción de la habilidad 3",
        "Descripción de la habilidad 4"
    ]
    $(document).ready(
        $(".imgH").on(
            "mouseenter",
            function() {
                event.preventDefault()

                showdiv(event, descripciones[$(this).attr("id")[4] - 1]);
            }
        ),
        $(".imgH").on(
            "mouseleave",
            function() {
                event.preventDefault()
                hiddenDiv();
            }
        )
    )


}

// function ocultar() {
//     document.getElementById('team').removeChild(document.getElementById("Personajes"))

// }