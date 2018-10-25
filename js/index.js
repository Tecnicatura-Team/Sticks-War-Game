crearlogin()

function crearlogin() {
    var elemento = document.createElement('section')
    elemento.id = 'login'
    elemento.className = 'login'
    var contenido =
        '<h2 class=\'subtitulo\'>Inicia sesión!</h2>' +
        '<br><br>' +
        '<form method=\'post\' action=\'ValidarConexion.php\' id="form" align=\'center\'>' +
        '<label class=\'labelc\' for=\'in\'>Ingrese su Nombre:</label> <br>' +
        '<input type=\'text\' name=\'Nombre\' >' +
        '<br>' +
        '<br>' +
        '<label class=\'labelc\' for=\'ic\'>Ingrese su Contraseña:</label><br>' +
        '<input id=\'pass\' type=\'password\' name=\'Contraseña\' >' +
        '<br><br>' +
        '<input id=\'mostrar\' type=\'checkbox\' checked onClick=\'mostrarPassword()\'>' +
        '<label class=\'labelc\' for=\'mc\'>Mostrar/Ocultar contraseña</label>' +
        '<br>' +
        '<br>' +
        '<input type=\'submit\' value=\'Iniciar Sesión\' id="iniciarsesion">' +
        '<input type=\'submit\' value=\'Recuperar mi Cuenta\' onclick=\'location="recuperar.php"\'>' +
        '</form>' +
        '<br> <br>' +
        '<input type=\'button\' onclick=\'cambiarir()\' value=\'¿Eres nuevo? Registrate ahora!\'>'
    elemento.innerHTML = contenido
    document.getElementById('contenido').appendChild(elemento)
    $("#iniciarsesion").on("click", mensajelogin())
}


function crearregistro() {
    var elemento = document.createElement('section')
    elemento.id = "registro"
    var contenido =
        '<h2 class=\'subtitulo\'>Registrar nueva cuenta</h2>' +
        '<br><br>' +
        '<form method="post" action="insert.php" id="form">' +
        '<label class=\'labelc\' for=\'in\'>Ingrese el nombre de usuario:</label><br>' +
        '<input type="text" name="RNombre">' +
        '<br>' +
        '<br>' +
        '<label class=\'labelc\' for=\'ic\'>Ingrese una contraseña:</label><br>' +
        '<input type="password" name="RContraseña" id="RContraseña">' +
        '<br>' +
        '<br>' +
        '<label class=\'labelc\' for=\'rc\'>Repetir Contraseña:</label><br>' +
        '<input type="password" name="RContraseña2" id="RContraseña2">' +
        '<br><br>' +
        '<input type="submit" value="Crear cuenta" id="crearcuenta">' +
        '<br> <br>' +
        '<input type="button" onclick="cambiarir()" value="¿Ya tienes cuenta? Inicia sesión">' +
        '</form>'
    elemento.innerHTML = contenido
    document.getElementById('contenido').appendChild(elemento)
    $("#crearcuenta").on("click", compararpsw())
}

function cambiarir() {
    if (document.getElementById('login')) {
        document.getElementById('login').parentNode.removeChild(document.getElementById('login'))
        crearregistro()
    } else {
        document.getElementById('registro').parentNode.removeChild(document.getElementById('registro'))
        crearlogin()
    }
}

function mostrarPassword() {
    var mostrarc = document.getElementById('mostrar')
    var contraseñam = document.getElementById('pass')
    if (!mostrarc.checked) {
        contraseñam.setAttribute('type', 'text')
    } else {
        contraseñam.setAttribute('type', 'password')
    }
}

function compararpsw() {
    $("#form").validate({
        rules: {
            RNombre: { required: true, minlength: 3 },
            RContraseña: { required: true, minlength: 3, maxlength: 20 },
            RContraseña2: { required: true, minlength: 3, maxlength: 20, equalTo: "#RContraseña" }
        },
        messages: {
            RNombre: {
                required: "<br>     <div class='mensajes' > Este campo es requerido </div>",
                minlength: "<br>    <div class='mensajes' > Se requiere que ingrese al menos 3 caracteres </div>"
            },
            RContraseña: {
                required: "<br>     <div class='mensajes' > Este campo es requerido </div>",
                minlength: "<br>    <div class='mensajes' > Se requiere que ingrese al menos 3 caracteres</div>",
                maxlength: "<br>    <div class='mensajes' > Solo se puede ingresar 20 caracteres maximo </div>"
            },
            RContraseña2: {
                required: "<br>     <div class='mensajes'> Este campo es requerido </div>",
                minlength: "<br>    <div class='mensajes'> Se requiere que ingrese al menos 3 caracteres</div>",
                maxlength: "<br>    <div class='mensajes'> Solo se puede ingresar 20 caracteres maximo </div>",
                equalTo: "<br>      <div class='mensajes'> Las contraseñas no coinciden </div>"
            }
        }
    })
}

function mensajelogin() {
    $("#form").validate({
        rules: {
            Nombre: { required: true },
            Contraseña: { required: true },
        },
        messages: {
            Nombre: {
                required: "<br>     <div class='mensajes' > Este campo es requerido </div>",
            },
            Contraseña: {
                required: "<br>     <div class='mensajes' > Este campo es requerido </div>",
            },

        }
    })
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