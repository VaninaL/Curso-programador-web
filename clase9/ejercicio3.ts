/*Construya un algoritmo que tenga un arreglo 
de dimensión deseada por el usuario y llénelo 
con los nombres que el usuario desee
 • Crear un arreglo de las posiciones que desee 
el usuario y llenarlo con nombres de personas*/

import* as rls from "readline-sync";

let dimension:number = rls.questionInt("Ingrese un numero para la dimension del arreglo: ");

let NombresDeseados:string[]= new Array (dimension);

for (let i:number =0;i<NombresDeseados.length;i++){
    NombresDeseados[i]= rls.question (`Ingrese el nombre que deseea para la posicion ${i}: `)

}
console.log(NombresDeseados);

