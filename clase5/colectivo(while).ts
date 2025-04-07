import * as rls from "readline-sync";

let llegadaColectivo:string;

console.log("esperando el colectivo");

llegadaColectivo = rls.question ("llego el colectivo? (s/n):)");

/*
do{
    console.log("esperando el colectivo");
    llegadaColectivo=rls.question ("llego el colectivo? (s/n):)");

}while (llegadaColectivo != "s")
 */

while (llegadaColectivo != "s"){
    console.log("esperando el colectivo");
    llegadaColectivo=rls.question ("llego el colectivo? (s/n):)");
}


console.log("llego el colectivo");

