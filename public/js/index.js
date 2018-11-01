var socket = io.connect("http://127.0.0.1:3700")
crearlogin()
$("#login").hide().fadeIn(2000) //efecto al crear el objeto

function crearlogin() {

    var contenido =
        '<div id="login" class="login">' +
        '<h2 class=\'subtitulo\'>Inicia sesión!</h2>' +
        '<br><br>' +
        '<form  id="form" align=\'center\'>' +
        '<label class=\'labelc\' for=\'in\'>Ingrese su Nombre:</label> <br>' +
        '<input type=\'text\' id="nombre" name=\'Nombre\' >' +
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
        '<br> <br>' +
        '<input type=\'button\' onclick=\'cambiarir()\' value=\'¿Eres nuevo? Registrate ahora!\'>' +
        '</form>' +
        '</div>'
    $("footer").before(contenido)
    $("#iniciarsesion").on("click", mensajelogin())

}


function crearregistro() {
    var contenido =
        '<div class="registro" id="registro">' +
        '<h2 class=\'subtitulo\'>Registrar nueva cuenta</h2>' +
        '<br><br>' +
        '<form  id="form">' +
        '<label class=\'labelc\' for=\'in\'>Ingrese el nombre de usuario:</label><br>' +
        '<input type="text" id="nombre" name="RNombre">' +
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
        '</form>' +
        '</div>'
    $("footer").before(contenido)
    $("#crearcuenta").on("click", compararpsw())
}

function cambiarir() {
    if (document.getElementById('login')) {
        document.getElementById('login').parentNode.removeChild(document.getElementById('login'))
        crearregistro()
        $("#registro").submit(function(e) {
            e.preventDefault()
            var contador = 0
            nom = $("#nombre").val()
            contra = $("#RContraseña").val()

            ajax("./Controlador/Registro.php", { nombre: nom, contrasena: contra }, "registro")
            socket.on("registroespera" + nom + contra, function(data) {
                if (contador == 0) {

                    $(".msj").html("<p style='color:green;'>Usuario registrado Correctamente</p>")

                    contador = 1
                }
            })
            socket.on("registroerror" + nom + contra, function(data) {
                if (contador == 0) {
                    $(".msj").html("La cuenta ingresada ya existe, intente nuevamente")

                    contador = 1
                }
            })
        })
        $("#registro").hide().fadeIn(2000) //efecto al crear el objeto

    } else {
        document.getElementById('registro').parentNode.removeChild(document.getElementById('registro'))
        crearlogin()
        $("#login").hide().fadeIn(2000) //efecto al crear el objeto
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
                maxlength: "<br>    <div class='mensajes' > Solo se puede ingresar 20 caracteres máximo </div>"
            },
            RContraseña2: {
                required: "<br>     <div class='mensajes'> Este campo es requerido </div>",
                minlength: "<br>    <div class='mensajes'> Se requiere que ingrese al menos 3 caracteres</div>",
                maxlength: "<br>    <div class='mensajes'> Solo se puede ingresar 20 caracteres máximo </div>",
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
$(document).ready(function() {
    // socket.on("welcome", function(menssage) {
    //         alert(menssage.menssage)
    //     })


    $("#login").submit(function(e) {
        e.preventDefault()
        var contador = 0
        nom = $("#nombre").val()
        contra = $("#pass").val()
            // console.log("nombre: " + nom + "; contraseña: " + contra)
        ajax("./Controlador/Login.php", { nombre: nom, contrasena: contra }, "login")
            // console.log(resultado)
        socket.on("logueoespera" + nom + contra, function(data) {

            // var contador = 0;
            if (contador == 0) {
                location.href = "armarequipo.html"
                    // console.log(data)
                    // alert("Logueado")
                contador = 1
            }
        })
        socket.on("logueoerror" + nom + contra, function() {

            if (contador == 0) {
                $(".msj").html("Los datos ingresados son incorrectos, intente nuevamente")
                contador = 1
            }
        })
        contador = 0
    })

})