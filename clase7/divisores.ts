/*• Implemente un método llamado cantidadDeDivisores que
 reciba un número entero y devuelva la cantidad de divisores
 • Por ejemplo, para el número 16, sus divisores son 1, 2, 4, 8,
 16, por lo que la respuesta debería ser 5
 • Re-utilice el método esMultiplo implementado para el ejercicio
 anterior*/

  

import {esMultiplof} from "./esMultiploFunc";

let contador:number=0;
let divisor:number;

 let cantidadDeDivisores = (divisor:number):number=> {
  
 for (let i:number =1; i<= divisor; i ++){ 
    esMultiplof (divisor,i)
      if (esMultiplof (divisor,i) == true){                
         contador=contador+1
      }        
   }
   return contador
 };

console.log(cantidadDeDivisores (20));
