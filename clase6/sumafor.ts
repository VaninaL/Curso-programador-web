/* Escriba un programa que pida al usuario dos números 
enteros, y luego retorne la suma de todos los números 
que están entre ellos
 • Por ejemplo, si los números son 2 y 7, debe entregar 
como resultado  2 + 3 + 4 + 5 + 6 + 7 = 27*/ 

import * as rls from "readline-sync";

const numeroinicial :number = rls.questionInt ("ingrese un numero entero: ");
const numerofinal :number = rls.questionInt ("ingrese otro numero entero:  ");
let suma : number = 0 ;

for (let i = numeroinicial; i <= numerofinal; i ++){

suma = suma + i ;
}
console.log("El resultado de la suma es: " + suma);




