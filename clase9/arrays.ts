import* as rls from "readline-sync";

let meses:string[]=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

let nroMes:number=rls.questionInt("Ingrese el numero de mes : ");
let index:number=nroMes-1;

console.log("El Mes que eligio es: " + meses[index]);
console.log(meses[3]);
