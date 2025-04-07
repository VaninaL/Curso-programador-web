/*Desarrollar un algoritmo que dado un número, 
ingresado por el usuario determine si el 
número es par o impar y le informe al usuario
 • En el caso de ser 0 (cero) el algoritmo deberá  
informarlo */

import* as rls from "readline-sync";

const numero : number = rls.questionInt ("Ingrese un numero entero: ");

if(numero == 0){
    console.log("Su numero es 0 ");

      
} else if (numero %2 == 0){

    console.log("Su numero es par");
    
} else {
    console.log("Su numero es impar");
    
}
