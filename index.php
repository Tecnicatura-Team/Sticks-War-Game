    <html>
    <head>
        <meta charset="utf-8">
    <title>Inicio Sticks War</title>
    </head>
    <body>
      <h1 align="center">Bienvenido a Sticks Wars</h1>
      <h2 align="center">Iniciar sesión.</h2>
        <div align="center">
      <br>
        <form method="post" action="ValidarConexion.php" id=form>
        Ingrese su Nombre:  <br>
        <input type="text" name="Nombre" minlength="3" required>
        <br>
        <br>
        Ingrese su Contraseña:  <br>
        <input id="pass" type="password" name="Contraseña" minlength="3" required>

        <!--mostrar ocultar campo de contraseña -->
        <input id="mostrar" type="checkbox" checked onClick="mostrarPassword()">
        <br>
        <br>
        <input type="submit" value="Iniciar Sesión">
        </form>
        <input type="submit" value="Recuperar Cuenta" onclick="location='recuperar.php'">
      </div>

        <br>
        <br>
        <h2 align="center">Registrar nueva cuenta.</h2>

        <div align="center">
          <br>
          <form method="post" action="">
            Ingrese el nombre de usuario:  <br>
            <input type="text" name="RNombre" minlength="3" required>
            <br>
            <br>
            Ingrese una contraseña:  <br>
            <input type="password" name="RContraseña" id="RContraseña" minlength="3" required>
            <br>
            <br>
            Repetir contraseña:  <br>
            <input type="password" name="RContraseña2" id="RContraseña2" minlength="3" required>


            <!--Validar ambas contraseñas para que sean iguales -->
            <script>
            var clave, clave2;

            clave = document.getElementById('RContraseña');
            clave2 = document.getElementById('RContraseña2');

            RContraseña.onchange = RContraseña2.onkeyup = CompararPass;

            function CompararPass() {

                if(RContraseña.value !== RContraseña2.value) {
                  RContraseña2.setCustomValidity('Las contraseñas no coinciden.');
                }else{
                    RContraseña2.setCustomValidity('');
            }} //fin funcion CompararPass

            //funcion para mostrar/ocultar contraseña
           function mostrarPassword(){
                //Accedo a los elementos del formulario
                var chkbox = document.getElementById("mostrar");
                var contenido = document.getElementById("pass");
                var atributo = contenido.getAttribute("type");

                 //Pregunto si el checkbox esta marcado
                if(chkbox.checked){
                     contenido.setAttribute("type","password"); //Si el checkbox esta marcado, el atributo type vale password
                    }else{
                     contenido.setAttribute("type","text"); //Si el checkbox esta sin marcar, el atributo type vale text
                      }
               }// fin funcion mostrar password

            </script>
            <br>
            <br>
            <input type="submit" name="submit" value="Crear cuenta">
          </form>

          <?php
          //redirige a insert.php cuando se presione el boton "crear cuenta " de tipo "submit"
          if (isset($_POST['submit'])) {
          require("insert.php");
          }

          ?>
         </div>
    </body>
    </html>
