<?php

class classarray{
    
   public function utf8Arraydoble($datos = array()){
       $arraynuevo=array();
    //    $datos=json_encode($datos);
       for($i = 0;$i<count($datos);$i++){
            $cabezera=array_keys($datos[$i]);
            // $arraynuevo[$i];
            for($c2=0;$c2<count($cabezera);$c2++){
                $arraynuevo[$i][$cabezera[$c2]]=utf8_encode($datos[$i][$cabezera[$c2]]);
                
            }
            
       }
    //    $remplazar=array("\u00e1","\u00e9","\u00ed","\u00f3","\u00fa","\u00c1","\u00c9","\u00cd","\u00d3",
    // "\u00da","\u00f1","\u00d1");
    //    $con=array("á","é","í","ó","ú","Á","É","Í","Ó","Ú","ñ","Ñ");
    //    $arraynuevo=str_replace($remplazar,$con,$arraynuevo);
    // print_r($arraynuevo);
    // print_r($arraynuevo) ;
    // echo json_encode(str_replace("\ ","/",$datos));
    // print_r($arraynuevo);
    // echo json_encode("ñ",JSON_UNESCAPED_UNICODE);
    return $arraynuevo;
    // echo json_encode($arraynuevo);
    
    //    echo json_encode($arraynuevo);
    //    echo json_encode($datos);
   }
   public function utf8Array($datos = array()){
    $arraynuevo=array();
    $cabezera=array_keys($datos);
    // $arraynuevo[$i];
    for($c2=0;$c2<count($cabezera);$c2++){
        $arraynuevo[$i][$cabezera[$c2]]=utf8_encode($datos[$i][$cabezera[$c2]]);
        
    }
    return $arraynuevo;
   }
// \u00e1 -> á
// \u00e9 -> é
// \u00ed -> í
// \u00f3 -> ó
// \u00fa -> ú
// \u00c1 -> Á
// \u00c9 -> É
// \u00cd -> Í
// \u00d3 -> Ó
// \u00da -> Ú
// \u00f1 -> ñ
// \u00d1 -> Ñ

}
?>