/*Construya un algoritmo que tenga dos arreglos 
uno que almacene 2 nombres y otro que 
almacene 3 números ambos ingresados por el 
usuario. 
• Al final debe imprimir los valores por consola*/

import* as rls from "readline-sync";

let nombres:string[] = new Array (2);
let numeros:number[] = new Array (3);

function recorrerArreglos (lista:string[]|number[]):void {
    for (let i:number =0;i < lista.length ;i++){
        console.log(lista[i]); 
    }
}

for (let i:number = 0; i< nombres.length; i++){
    nombres[i]= rls.question (`Ingrese el nombre que desee para la posicion ${i}: `);

}

for (let i:number = 0; i< numeros.length; i++){
    numeros[i]= rls.questionInt (`Ingrese el numero que desee para la posicion ${i}: `);
    
}

recorrerArreglos(nombres);
recorrerArreglos(numeros);


/* for (let i:number = 0; i< nombres.length; i++){
console.log(nombres[i]);
}

for (let i:number = 0; i< numeros.length; i++){
    console.log(numeros[i]);
    
}*/






 
   
    
