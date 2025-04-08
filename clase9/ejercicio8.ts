/*Dado el siguiente arreglo 
[4,7,9,3,1,45,67,23,29,78,11,16]- Crear un programa que encuentre cuál es el número 
más grande del arreglo e imprimirlo por consola- Almacenar el número más grande en una variable 
global y pasarlo a una función para determinar si el 
número es par o impar*/
// pseudocodigo
/*  
    1- hacer un arreglo que se va a llamar numeros de tipo number con una longitud 
        de 12 items que van a ser [4,7,9,3,1,45,67,23,29,78,11,16].

    2- hacer una variable global para almacenar el numero mas grande. 
        va a ser de tipo number y se va a llamar numMasGrande.

    3- hacer una funcion que se va a llamar parImpar que va a recibir un numero 
        y me va a devolver un booleano.va a contener la variable numMasGrande.

    4- hacer un for para recorrer el arreglo y determinar cual el el numero mas grande 
        y lo va a imprimir por consola. ese numero se va a guardar en la variable numMasGrande.
    
*/
let numeros:number[] = [4,7,9,3,1,45,67,23,29,78,11,16];
let numMasGrande:number = 1;
let dimension:number = numeros.length;
let contador:number = 0;

import { parImpar } from "../funciones/funciones";

for(let i:number=0; i< dimension; i++){    
    if (numeros[i]> contador){
        contador = numeros [i]       
            
    }
}
console.log ("el numero mas grande es: " + contador);
numMasGrande = contador;
parImpar(numMasGrande);

