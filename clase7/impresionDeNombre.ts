/* Implemente un método llamado imprimirNombre que reciba unnombre y un apellido y devuelva los dos datos concatenados
en una variable de tipo string.
El string devuelto debe imprimirse por consola.
• Refactorizar el método dibujarGuiones utilizado para el
ejercicio de la calculadora realizado anteriormente*/


import { dibujarGuiones } from "../funciones/funciones";

  let nombre:string = "Vanina ";
  let apellido:string = "Labrunee";
  let separador:string = dibujarGuiones (15);
  

let imprimirNombre = (n:string, a:string ): string => {
let datosCompletos:string = n + "" + a
    console.log( datosCompletos);  
return datosCompletos
  
}
console.log(separador);
imprimirNombre (nombre,apellido);
console.log(separador);


