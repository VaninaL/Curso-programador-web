/* Realice una calculadora que sume o reste 
según el pedido del usuario. 
• El usuario deberá ingresar 2 números por teclado
 • Luego ingresará una opción: 
• Si ingresa 1 los números se sumarán
 • Si ingresa 2 los números se restarán
 • Si ingresa cualquier otra tecla termina el programa
 • Para informar el resultado de la operación debe usar el 
siguiente formato (40 guiones ‘-’ ):---------------------------------------
El resultado de la operación es: X---------------------------------------
*/

import* as rls from "readline-sync";

const num1: number =rls.questionInt ("Ingrese el primer numero: ");
const num2: number =rls.questionInt ("Ingrese el segundo numero: ");
const operacion: number =rls.questionInt ("Ingerse 1 para sumar, 2 para restar, cualquier otra tecla para salir ");
let resultado: number = 0

while (operacion == 1&&2){
    if (operacion == 1 ){
        resultado = num1 + num2
    } else {
        resultado = num1 - num2
    }
    console.log("----------------------------------------\n El resultado de la operacion es: " + (resultado) + " \n----------------------------------------" );
break

    }
  



/* barra vertical | alt 124*/