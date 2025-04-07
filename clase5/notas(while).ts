import * as rls from "readline-sync";

let nota : number ;
let promedio : number ;
let sumaNota : number = 0 ;
let contador : number = 1 ;

while ( contador <= 10 ){

    nota = rls.questionInt (" ingrese su nota " ) ;

   sumaNota = sumaNota + nota ;

   contador = contador + 1

}
promedio = sumaNota / (contador - 1 )

console.log (" su nota promedio es = " + promedio)
