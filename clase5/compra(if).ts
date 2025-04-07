import * as rs from "readline-sync"

let precioUnitario:number= rs.questionFloat (" ingrese el precio del producto: ") ;
let cantidad : number = rs.questionFloat (" ingrese la cantidad :");

let compraTotal : number = ( precioUnitario * cantidad );
console.log (" la compra total es de $ " + compraTotal);

const descuento : number = compraTotal * 0.1;
if (compraTotal >= 1000){
    console.log ( "la compra total con descuento es de $ : "  + (compraTotal - descuento)) ;
} else {
    console.log ( "la compra total sin descuento es de $ : " + compraTotal )
}