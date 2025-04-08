/*Cargue dos arreglos de dimensión N números
(la cantidad es ingresada por el usuario)
• Calcule el producto escalar entre los dos arreglos
Ejemplo:0x3+1x4+2x5
n =3
v1 = 0, 1, 2
v2 = 3, 4, 5
producto = 14
*/
import* as rls from "readline-sync";
import { cargarArreglo } from "../funciones/funciones";
import { sumarIndice } from "../funciones/funciones";

let longitud:number = rls.questionInt("ingrese un numero para determinar la longitud del arreglo: ");
let vector1:number[] = new Array (longitud);
let vector2:number[] = new Array (longitud);

cargarArreglo(vector1,longitud);
cargarArreglo(vector2,longitud);

function calcularProductoEscalar (vector1:number[],vector2:number[]): number {
    let producto:number = 0;
    for (let i:number = 0; i < vector1.length ; i++){
       producto = producto + (vector1[i] * vector2[i])
    }
    console.log(producto)    
    return producto
}
calcularProductoEscalar(vector1,vector2);