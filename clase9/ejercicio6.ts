/* Llenar un array de 10 posiciones con números 
aleatorios entre 0 y 99
• Para obtener números aleatorios crear una función 
Azar, que se base en las funciones disponibles en el 
paquete Math:-Math.random() devuelve un nro al azar entre 0 y 1*/

let numerosAleatorios:number[] = new Array (10);

import { azar } from "../funciones/funciones";

for (let i:number = 0; i<10; i++){
    numerosAleatorios[i] = azar();    
}
console.log(numerosAleatorios);
