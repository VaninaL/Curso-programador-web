/*• Una tienda al cumplir años en Octubre ofrece 
un descuento del 15% a sus clientes en todas 
sus compras
 • Desarrolle un algoritmo que dada una compra: 
precio unitario, cantidad y el mes, indicados 
por el usuario, determine si el cliente tiene 
descuento o no*/

import* as rls from "readline-sync";

const precioU: number = rls.questionInt ("Ingrese el precio unitario de la prenda: ");
const cantidad: number = rls.questionInt ("Ingrese la cantidad de prendas que llevara: ");
const mes: string = rls.question ("Ingrese el mes en el cual realizara la compra: ");
const descuento: string = "Octubre"

if (mes == descuento){
    console.log("Felicidades por ser el aniversario de la tienda ha ganado un descuento del 15 % ");
    
}