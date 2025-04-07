/* Diseñar un algoritmo que muestre por pantalla la tabla de 
multiplicación del número ingresado porel usuario
 • Para definir hasta qué número desea que muestre la tabla de 
multiplicación, el usuariotambién deberá ingresar dicho valor*/

import* as rls from "readline-sync";

const tabla: number = rls.questionInt ("Ingrese el numero que desea multiplicar: ");
const numero: number = rls.questionInt ("Diga hasta que numero desea multiplicar el numero ingresado anteriormente: ");

for (let i = 0; i <= numero; i ++){
    
    const resultado: number = i * tabla;

   
    console.log(`${tabla} x ${i} = ${resultado}`);
}
// comilla invertida ` alt 096
