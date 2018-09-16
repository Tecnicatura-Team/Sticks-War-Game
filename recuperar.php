
<html>
     <head></head>
     <body>
          <input type="password" id="pass" name="pass">
          <small>Ocultar contraseña</small>
          <input type="checkbox" id="mostrar" name="mostrar" checked onClick="mostrarPassword()">
     </body>
     <script language="javascript" type="text/javascript">
          function mostrarPassword(){
		//Accedo a los elementos del formulario mediante el DOM
		var chkbox = document.getElementById("mostrar");
		var contenido = document.getElementById("pass");
		var atributo = contenido.getAttribute("type");

		//Pregunto si el checkbox esta marcado
		if(chkbox.checked){
			contenido.setAttribute("type","password"); //Si el checkbox esta marcado, el atributo type vale password
		}else{
			contenido.setAttribute("type","text"); //Si el checkbox esta sin marcar, el atributo type vale text
		}
	}
     </script>
</html> 
