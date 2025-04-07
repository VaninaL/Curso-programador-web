
import* as rls from "readline-sync";

const num1: number =rls.questionInt ("Ingrese el primer numero: ");
const num2: number =rls.questionInt ("Ingrese el segundo numero: ");
const operacion: number =rls.questionInt ("Ingerse 1 para sumar, 2 para restar, cualquier otra tecla para salir ");



function dibujarGuiones () :void {
    let i : number;
    let linea : string=""
    for (i=0; i<=40;i++){
    linea = linea + "-"
    };
     console.log( linea);
     
}
 if (operacion == 1){
    dibujarGuiones ();
    console.log(`El resultado de la suma es ${num1 + num2}`);
    dibujarGuiones();
 } else if (operacion == 2){
    dibujarGuiones();
    console.log(`El reusltado de la resta es ${num1 - num2}`);
    dibujarGuiones();
 }
    
    

