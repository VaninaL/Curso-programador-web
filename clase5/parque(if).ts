import * as rs from "readline-sync";
const altura : number = rs.questionInt (" ingrese su altura en centimetros : ");
const alturaPermitida : number = 130 
console.log (" su altura en centimetros es de :" + altura + "cm.");

if ( altura >= alturaPermitida){
    console.log (" Puede ingresar ");
} else {
    console.log ( " Lo sentimos mucho, no puede ingresar ");
}