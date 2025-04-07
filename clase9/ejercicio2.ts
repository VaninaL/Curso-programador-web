/* Construya un algoritmo que tenga un arreglo de 
dimensión 5 y llénelo con los números que el usuario 
desee.
 • Muestre los números del arreglo al usuario*/
 import* as rls from "readline-sync";

 let num1:number[]=new Array(5);  


 for (let i:number=0; i<num1.length; i++){
    num1[i] = rls.questionInt("Ingrese un numero: ");
    console.log(num1[i]);    
 }
 
 for (let i:number=0; i<num1.length; i++){
    console.log(`el numero que ingreso en la posicion ${i} es: ${num1[i]}`);
 }
    
    
    
