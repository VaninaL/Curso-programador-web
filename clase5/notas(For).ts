import * as rls from "readline-sync";

let nota : number ;
let promedio : number ;
let sumaNota : number = 0 ;
let contador : number  = 1;

for (contador ; contador <=10 ; contador++ ){

    nota = rls.questionInt ("ingrese su nota");
    sumaNota = sumaNota + nota;
    
}
promedio=sumaNota / contador -1 ;
console.log("su promedio es " + promedio);


