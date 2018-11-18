<?php
INCLUDE_ONCE "./array.php";
INCLUDE_ONCE "../Modelo/class.consultas.php";
INCLUDE_ONCE "../Modelo/Jugador.php";
INCLUDE_ONCE "../Modelo/Contrincante.php";
INCLUDE_ONCE "../Modelo/Partida.php";
INCLUDE_ONCE "../Modelo/DañoCuracion.php";
INCLUDE_ONCE "../Modelo/BuffDebuff.php";
INCLUDE_ONCE "../Modelo/Ofensiva.php";
INCLUDE_ONCE "../Modelo/Defensiva.php";
INCLUDE_ONCE "../Modelo/PersonajeAliado.php";
INCLUDE_ONCE "../Modelo/PersonajeEnemigo.php";

session_start();

class Func{
    public function cargarPersonajesAliados(){
        
        $personajesAliados=array();
        for($i=0; $i<3; $i++){

            $personajesAliados[]=array(
                "PersonajeID"=>$_SESSION["Partida"]->GetJugador()->GetPersonajesAliados()[$i]->GetPersonajeID(),
                "VidaActual"=>$_SESSION["Partida"]->GetJugador()->GetPersonajesAliados()[$i]->GetVidaActual(),
                "DirImagen"=>$_SESSION["Partida"]->GetJugador()->GetPersonajesAliados()[$i]->GetDirImagen(),
                "Posicion"=>$_SESSION["Partida"]->GetJugador()->GetPersonajesAliados()[$i]->GetPosicion(),   
                "ModDaño"=>$_SESSION["Partida"]->GetJugador()->GetPersonajesAliados()[$i]->GetModDaño(),
                "VidaTotal"=>$_SESSION["Partida"]->GetJugador()->GetPersonajesAliados()[$i]->GetVidaExtra(),
                "Precision"=>$_SESSION["Partida"]->GetJugador()->GetPersonajesAliados()[$i]->GetPrecision(),
                "Evasion"=>$_SESSION["Partida"]->GetJugador()->GetPersonajesAliados()[$i]->GetEvasion(),
                "Critico"=>$_SESSION["Partida"]->GetJugador()->GetPersonajesAliados()[$i]->GetCritico(),
                "Resistencia"=>$_SESSION["Partida"]->GetJugador()->GetPersonajesAliados()[$i]->GetResistencia(),
                "Habilidades"=>$this->cargarHabilidades($i)              
            );
        }     
        return $personajesAliados;  
    }
    public function cargarHabilidades($i){
       
        $Habilidades=array();          
        
        for($j=0; $j<4; $j++){

            $Habilidades[]=array(
                "Nombre"=>$_SESSION["Partida"]->GetJugador()->GetPersonajesAliados()[$i]->GetHabilidades()[$j]->GetNombre(),
                "DirIcono"=>$_SESSION["Partida"]->GetJugador()->GetPersonajesAliados()[$i]->GetHabilidades()[$j]->GetDirIcono(),
                "DirImagen"=>$_SESSION["Partida"]->GetJugador()->GetPersonajesAliados()[$i]->GetHabilidades()[$j]->GetDirImagen(),
                "Descripcion"=>$_SESSION["Partida"]->GetJugador()->GetPersonajesAliados()[$i]->GetHabilidades()[$j]->GetDescripcion(),
                "Efectos"=>$this->cargarEfectos($i, $j),
                "PosicionesObjetivos"=>$_SESSION["Partida"]->GetJugador()->GetPersonajesAliados()[$i]->GetHabilidades()[$j]->GetPosicionesObjetivos()
            );
        }   
        return $Habilidades;
    } 
    
   public function cargarEfectos($i, $j){
    
       $Efectos=array();

       for($k=0; $k< count( $_SESSION["Partida"]->GetJugador()->GetPersonajesAliados()[$i]->GetHabilidades()[$j]->GetEfectos() ); $k++){
        try{      
            $Efectos[]=array(
            "Objetivo"=>$_SESSION["Partida"]->GetJugador()->GetPersonajesAliados()[$i]->GetHabilidades()[$j]->GetEfectos()[$k]->GetObjetivo(),   
            "BuffDebuff"=>$_SESSION["Partida"]->GetJugador()->GetPersonajesAliados()[$i]->GetHabilidades()[$j]->GetEfectos()[$k]->GetBuffDebuffID()
            // "DañoMaximo"=>$_SESSION["Partida"]->GetJugador()->GetPersonajesAliados()[$i]->GetHabilidades()[$j]->GetEfectos()[$k]->GetDañoMaximo(),
            // "DañoMinimo"=>$_SESSION["Partida"]->GetJugador()->GetPersonajesAliados()[$i]->GetHabilidades()[$j]->GetEfectos()[$k]->GetDañoMinimo()
        );  
        }        
        catch(Exception $E){
            $Efectos[]=array(
                "Objetivo"=>$_SESSION["Partida"]->GetJugador()->GetPersonajesAliados()[$i]->GetHabilidades()[$j]->GetEfectos()[$k]->GetObjetivo(),   
                // "BuffDebuff"=>$_SESSION["Partida"]->GetJugador()->GetPersonajesAliados()[$i]->GetHabilidades()[$j]->GetEfectos()[$k]->GetBuffDebuffID(),
                "DañoMaximo"=>$_SESSION["Partida"]->GetJugador()->GetPersonajesAliados()[$i]->GetHabilidades()[$j]->GetEfectos()[$k]->GetDañoMaximo(),
                "DañoMinimo"=>$_SESSION["Partida"]->GetJugador()->GetPersonajesAliados()[$i]->GetHabilidades()[$j]->GetEfectos()[$k]->GetDañoMinimo()
            );           
        }   
        }
        return $Efectos;
    }   

    public function cargarPosicionesObjetivo($i, $j){
        
        $Posiciones=array();

        for($t=0; $t< count( $_SESSION["Partida"]->GetJugador()->GetPersonajesAliados()[$i]->GetHabilidades()[$j]->GetPosicionesObjetivos() ); $t++){
             $Posiciones[]=array(
            "PosicioneID"=>$_SESSION["Partida"]->GetJugador()->GetPersonajesAliados()[$i]->GetHabilidades()[$j]->GetPosicionesObjetivos()[$t]-> GetPosicion()
            );
        }
        return $Posiciones;
    }

        public function cargarPersonajeEnemigo(){
            
            $PersonajesEnemigos=array();

            for($i=0; $i< 3; $i++){
                 $PersonajesEnemigos[]=array(
                "PersonajeID"=>$_SESSION["Partida"]->GetContrincante()->GetPersonajesEnemigos()[$i]->GetPersonajeID(),
                "VidaActual"=>$_SESSION["Partida"]->GetContrincante()->GetPersonajesEnemigos()[$i]->GetVidaActual(),
                "DirImagen"=>$_SESSION["Partida"]->GetContrincante()->GetPersonajesEnemigos()[$i]->GetDirImagen(),
                "Posicion"=>$_SESSION["Partida"]->GetContrincante()->GetPersonajesEnemigos()[$i]->GetPosicion(),   
                "ModDaño"=>$_SESSION["Partida"]->GetContrincante()->GetPersonajesEnemigos()[$i]->GetModDaño(),
                "VidaTotal"=>$_SESSION["Partida"]->GetContrincante()->GetPersonajesEnemigos()[$i]->GetVidaExtra(),
                "Precision"=>$_SESSION["Partida"]->GetContrincante()->GetPersonajesEnemigos()[$i]->GetPrecision(),
                "Evasion"=>$_SESSION["Partida"]->GetContrincante()->GetPersonajesEnemigos()[$i]->GetEvasion(),
                "Critico"=>$_SESSION["Partida"]->GetContrincante()->GetPersonajesEnemigos()[$i]->GetCritico(),
                "Resistencia"=>$_SESSION["Partida"]->GetContrincante()->GetPersonajesEnemigos()[$i]->GetResistencia()
              
                );
            }
        }

};


// print_r($_SESSION["Partida"]);
// echo json_encode($_SESSION["Partida"], JSON_UNESCAPED_UNICODE);


$Funcion=new Func();

$Jugador=array(
    "UsuarioID"=>$_SESSION["Partida"]->GetJugador()->GetUsuarioID(),
    "Nombre"=>$_SESSION["Partida"]->GetJugador()->GetNombre(),
    "Nivel"=>$_SESSION["Partida"]->GetJugador()->GetNivel(),
    "Experiencia"=>$_SESSION["Partida"]->GetJugador()->GetExperiencia(),
    "PersonajesAliados"=>$Funcion->cargarPersonajesAliados()   
);

$Contrincante=array(
    "UsuarioID"=>$_SESSION["Partida"]->GetContrincante()->GetUsuarioID(),
    "Nombre"=>$_SESSION["Partida"]->GetContrincante()->GetNombre(),
    "Nivel"=>$_SESSION["Partida"]->GetContrincante()->GetNivel(),   
    "PersonajesEnemigos"=>$Funcion->cargarPersonajeEnemigo()  
);

$Partida=array(
    "PartidaID"=>$_SESSION["Partida"]->GetPartidaID(),
    "Jugador"=>$Jugador,
    "Contrincante"=>$Contrincante,
    "Turno"=>$_SESSION["Partida"]->GetTurno()
);


print_r($Partida);
?>