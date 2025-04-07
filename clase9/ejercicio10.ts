/*Almacene en un arreglo de tamaño N los números ingresados
por el usuario
• Ladimensión N también es ingresada por el usuario
• Muestre los números del arreglo pero del último al primero*/
/*PSEUDOCODIGO
1-importar la biblioteca del readline-sync
2-crear un arreglo de tipo number llamado numeros 
3-pedir al usuario la dimension del arreglo y los elementos que van a estar en el
buscar un metodo que muestre el arreglo de atras para adelante
*/

import* as rls from "readline-sync";

let longitud:number = rls.questionInt ("Ingrese un numero para determinar la longitud del arreglo: ");
let numeros:number[] = new Array (longitud);
let dimension:number = numeros.length;

for (let i:number = 0; i < dimension; i++){
    numeros[i] = rls.questionInt(`Ingrese el numero ${i+1} de ${dimension} para el indice ${i}: `);
}
console.log (numeros.reverse());
