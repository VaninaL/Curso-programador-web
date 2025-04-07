import * as rls from "readline-sync";
let primerPuesto : number = 1;
let segundoPuesto : number = 2;
let tercerPuesto : number = 3;


let pregunta : number = rls.questionInt ( " ingrese el numero de su puesto ");

console.log  (" usted salio en " +  pregunta + "puesto" )

if ( pregunta == primerPuesto ){{
    console.log ("Felicitaciones !!! usted gano una medalla de oro ");
}
    if (pregunta == segundoPuesto ) {
        console.log ("Felicitaciones !!! usted gano una medalla de plata ");
    }
        if (pregunta == tercerPuesto){
            console.log ("Felicitaciones !!! usted gano una medalla de bronce ");
        }} else [
            console.log ("usted ha ganado un diploma de reconocimiento por participar")
        ]
        
   
