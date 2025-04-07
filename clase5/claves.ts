/* • Escribir un algoritmo que nos pida
 una clave y verifique que sea la
 correcta
 • Tenga en cuenta que la clave es
 la palabra “eureka”
 • Solo tenemos 3 intentos para
 acertar, si fallamos los 3 intentos
 el sistema mostrará un mensaje
 indicándonos que hemos agotado
 todas las oportunidades
 • Si acertamos la clave, saldremos
 directamente del programa*/

 import * as rls from "readline-sync";


let oportunidad:number = 0;
let clave:string = "";

for (oportunidad; oportunidad <3; oportunidad ++){

    clave = rls.question ("ingrese su clave: ");

    if (clave== "eureka"){
        console.log("clave correcta");
        break
       
    }else {
       if (oportunidad <2) {
           console.log("clave incorrecta, vuelva a intentar ");
       
       }else {
           console.log("clave incorrecta"); 
       }
    }
}
     
if (oportunidad ==3 ){
    console.log(" ha superado los intentos");
}


