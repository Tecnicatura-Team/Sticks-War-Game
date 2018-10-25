//carga las img sobre los pj
/* cargarPjJuego("SelectPJ3", "img/SelectAliado.png")
cargarPjJuego("SelectPJ2", "img/SelectAliado.png")
cargarPjJuego("SelectPJ1", "img/SelectAliado.png")

cargarPjJuego("SelectPJ1", "img/SelectAliado.png")
cargarPjJuego("SelectPJ2", "img/SelectAliado.png")
cargarPjJuego("SelectPJ3", "img/SelectAliado.png") */

function cargarPjJuego(elemento, img) {
    //es para cargar los personajes en la pagina juego desde al bd y cargarlos en en src de las img
    $("#" + elemento).attr("src", img)
        // $("#PJ3").attr("src","../img/StickMago2.png")

}


//función para mostrar texto flotante en las habilidades

function showdiv(event, text) {
    //determina un margen de pixels del div al raton
    margin = 5;

    //La variable IE determina si estamos utilizando IE
    var IE = document.all ? true : false;

    var tempX = 0;
    var tempY = 0;

    //document.body.clientHeight = devuelve la altura del body
    if (IE) { //para IE
        IE6 = navigator.userAgent.toLowerCase().indexOf('msie 6');
        IE7 = navigator.userAgent.toLowerCase().indexOf('msie 7');
        //event.y|event.clientY = devuelve la posicion en relacion a la parte superior visible del navegador
        //event.screenY = devuelve la posicion del cursor en relaciona la parte superior de la pantalla
        //event.offsetY = devuelve la posicion del mouse en relacion a la posicion superior de la caja donde se ha pulsado

        if (IE6 > 0 || IE7 > 0) {
            tempX = event.x
            tempY = event.y
            if (window.pageYOffset) {
                tempY = (tempY + window.pageYOffset);
                tempX = (tempX + window.pageXOffset);
            } else {
                tempY = (tempY + Math.max(document.body.scrollTop, document.documentElement.scrollTop));
                tempX = (tempX + Math.max(document.body.scrollLeft, document.documentElement.scrollLeft));
            }
        } else {
            //IE8
            tempX = event.x
            tempY = event.y
        }
    } else { //para netscape
        //window.pageYOffset = devuelve el tamaño en pixels de la parte superior no visible (scroll) de la pagina
        document.captureEvents(Event.MOUSEMOVE);
        tempX = event.pageX;
        tempY = event.pageY;
    }

    if (tempX < 0) { tempX = 0; }
    if (tempY < 0) { tempY = 0; }

    // Modificamos el contenido de la capa
    document.getElementById('flotante').innerHTML = text;

    // Posicionamos la capa flotante
    document.getElementById('flotante').style.top = (tempY + margin) + "px";
    document.getElementById('flotante').style.left = (tempX + margin) + "px";
    document.getElementById('flotante').style.display = 'block';
    return;
}

/**
 * Funcion para esconder el div
 */
function hiddenDiv() {
    document.getElementById('flotante').style.display = 'none';
}

//limitar checkbox personajes
function validacion(obj) {
    limite = 3;
    num = 0;
    if (obj.checked) {
        for (i = 0; ele = obj.form.elements[i]; i++)
            if (ele.checked) num++;
        if (num > limite)
            obj.checked = false;
    }
}
//muestra las flechas sobre los pj y descripcion de habilidades
function mostrarhabilidad(elemento, img, event, desc) {
    cargarPjJuego(elemento, img)
    showdiv(event, desc)
}
//oculta las flechas sobre los pj y descripcion de habilidades
function ocultarhabilidad(elemento) {
    cargarPjJuego(elemento, "")
    hiddenDiv()
}

//barras de vida aliados
turno("VidaPJ1")
turno("VidaPJ2")
turno("VidaPJ3")

turno("VidaEnemigoPJ1")
turno("VidaEnemigoPJ2")
turno("VidaEnemigoPJ3")


function turno(elemento) {
    $("#" + elemento).css("background-color", "rgba(0, 128, 0, 0.70)")
}

//variación de la vida con el daño recibido
vida("VidaPJ1", "20")

function vida(elemento, actual) {
    $("#" + elemento).css("width", actual)
}