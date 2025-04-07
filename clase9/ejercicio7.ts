//Crear un arreglo de letras e imprimirlo.
/*Dado un array con nombres de tamaño 5,pedir al usuario que ingrese un nombre y verificar 
si esta en el arreglo.Imprimir el arreglo y si esta o no en el.*/

import* as rls from "readline-sync";

let listaDeLetras:string[] = ["mabel","carla","vanina","melina","lourdes"];
let nombreBuscado:string = rls.question ("Ingrese el nombre que desea buscar en la lista: ");
let i:number = 0;
let verificador:string = "El nombre no se encuentra en el arreglo "

for (i; i<5;i++){
    if (listaDeLetras[i] === nombreBuscado ){
        verificador = `El nombre coincide con la posicion ${i} del arreglo `;
    }
}
console.log(verificador);
console.log(listaDeLetras);


