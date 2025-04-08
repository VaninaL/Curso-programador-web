/* Sumar los elementos de cada una de las posiciones
de dos arreglos y guardar el resultado en otro arreglo
• El arreglo tiene dimensión 6 y los números de los dos
vectores los carga el usuario*/
/*PSEUDOCODIGO
1- IMPORTAR BIBLIOTECA DE READLINE-SYNC
2- CREAR TRES ARREGLOS DE TIPO NUMBER. CON 6 ITEMS DE LONGITUD VECTOR1, VECTOR2 Y VECTORSUMA.
LOS VALORES DE LAS DOS PRIMERAS SERAN INGRESADOS POR EL USUARIO MEDIANTE QUESTIONINT
3- CREAR UNA FUNCION PARA SUMAR LOS VALORES DE LOS DOS PRIMEROS ARREGLOS QUE VA A RETORNAR LOS NUMEROS
QUE DEBEN SER INGRESADOS COMO ITEMS DEL ULTIMO ARREGLO.ESO LO HARIA CON UN FOR
4-PARA RECORRER LOS PRIMEROS DOS ARREGLOS TAMBIEN USARIA UN FOR POR CADA UNO
VERE......
*/

import* as rls from "readline-sync";

let vector1:number[] = new Array (6);
let vector2:number[] = new Array (6);
let vectorSuma:number[] = new Array (6);
let dimension:number = vectorSuma.length;
let indice1:number;
let indice2:number;
let indiceSuma:number = 0;
import { sumarIndice } from "../funciones/funciones";

console.log(`Ingresemos los numeros para el vector1`);

for (let i:number = 0; i< dimension;i++){   
    indice1 = rls.questionInt(`Ingrese el numero ${i+1} de ${dimension} para la posicion ${i}: `);
    vector1[i]=indice1
    };
    console.log (`El arreglo vector1 quedo conformado de la siguiente manera: ${vector1} `);

console.log(`Ahora hagamos lo mismo para el vector2`);

for (let i:number = 0 ; i< dimension;i++){   
    indice2 = rls.questionInt(`Ingrese el numero ${i+1} de ${dimension} para la posicion ${i}: `);
    vector2[i] = indice2
    };
    console.log (`El arreglo vector2 quedo conformado de la siguiente manera: ${vector2} `);

for (let i:number = 0 ; i< dimension;i++){ 
    sumarIndice (vector1[i],vector2[i]);
    vectorSuma[i]=indiceSuma
}  
console.log("");

console.log(`El arreglo vectorSuma quedo conformado de la siguiente manera: ${vectorSuma}`);

console.log(vectorSuma);


