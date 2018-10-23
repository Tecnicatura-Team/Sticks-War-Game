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


//alert("entre")
// var psw = document.frmregistro.RContraseña.value
// var psw1 = document.frmregistro.RContraseña2.value
// alert("los valores son: " + psw + " - " + psw1)
// if (psw !== psw1) {
//     alert("Contraseñas no coinciden")
//     var el = document.getElementById("RContraseña")
//     el.style.background = "#FF0000"
// } else {
//     alert("ingreso correcto")
// }