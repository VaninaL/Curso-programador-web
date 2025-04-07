//Crear un arreglo de letras e imprimirlo.
/*Dado un array con nombres de tamaño 5,pedir al usuario que ingrese un nombre y verificar 
si esta en el arreglo.Imprimir el arreglo y si esta o no en el.*/

import* as rls from "readline-sync";

let listaDeLetras:string[] = ["mabel","carla","vanina","melina","lourdes"];
let nombreBuscado:string = rls.question ("Ingrese el nombre que desea buscar en la lista: ");
let i:number = 0;

for (i; i<5; i++){
    
    if(nombreBuscado == listaDeLetras[i]){
        console.log("El nombre ingresado se encuentra en el arreglo");        
    }else {
        console.log("El nombre ingresado no se encuentra en el arreglo"); 
    }

}
let vanina:string;
