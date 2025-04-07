/* • Construya un algoritmo que sume todos los 
elementos de un arreglo de tamaño N
• La dimensión del arreglo es ingresada por el 
usuario
• Los elementos (números) del arreglo son 
ingresados por el usuario*/

import* as rls from "readline-sync";

let dimension:number = rls.questionInt("Ingrese un numero para determinar la dimension del arreglo: ");
let listaNumeros:number[] = new Array(dimension);
let numeros:number ;
let i:number = 0;
let resultado:number=0;

for( i; i < dimension ; i++ ){
   numeros = rls.questionInt("ingrese un numero para el arreglo: ");
   listaNumeros [i] = numeros;
   resultado = numeros + resultado;
}
console.log(listaNumeros);
console.log( `La suma de todos sus items es: ${resultado}`);


//cuando necesito crear un arreglo y no se ni la cantidad ni el valor de cada item
let ejemplo1:string[] = [];

 //cuando necesito crear un arreglo y se la cantidad de items (5) pero no el valor de cada uno de ellos
let ejemplo2:string[] = new Array (5);

 //cuando necesito crear un arreglo y se la cantidad(3) de items y el valor de cada item (juan,pedro y pablo)
let ejemplo3:string[] = ["juan","pedro","pablo"]


