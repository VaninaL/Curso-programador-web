import* as rls from "readline-sync" 

let vuelta1 : number;
let vuelta2 : number;
let vuelta3 : number;
let vuelta4 : number;
let total : number;
let promedio : number;

console.log (  "vueltas \n --------------------\n ")


vuelta1 = rls.questionFloat (" indique el tiempo de la vuelta 1 :");
console.log ("");
vuelta2 = rls.questionFloat (" indique el tiempo de la vuelta 2 :");
console.log ("");
vuelta3 = rls.questionFloat (" indique el tiempo de la vuelta 3 :");
console.log ("");
vuelta4 = rls.questionFloat (" indique el tiempo de la vuelta 4 :");
console.log ("");

total = vuelta1+vuelta2+vuelta3+vuelta4; 
console.log (" el tiempo total es : " + total + " seg ");


promedio = total /4;
console.log (" el promedio por vuelta es " + promedio + " seg.");
