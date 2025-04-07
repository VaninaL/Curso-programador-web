/* Desarrolle un algoritmo que dados tres 
números determine cuál es el mayor de los 
tres*/

import* as rls from "readline-sync";

const num1: number = rls.questionInt ("ingrese el primer numero: ");
const num2: number = rls.questionInt ("ingrese el segundo numero: ");
const num3: number = rls.questionInt ("ingrese el tercer numero: ");

switch (true) {
    case (num1 > num2 && num1 > num3):
        console.log(num1 + " Es el numero mayor");
    break;    
    case (num2 > num1 && num2 > num3):
        console.log(num2 + " Es el numero mayor");
    break;    
    case (num3 > num1 && num3 > num2):
        console.log(num3 + " Es el numero mayor");
    break;    
           
}
