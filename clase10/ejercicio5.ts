/*
Diseñar un algoritmo que recorra las butacas de una sala de cine y determine cuántas butacas desocupadas hay
Suponga que para modelar este problema, se utiliza un arreglo con valores lógicos
La presencia de un valor verdadero (true) en el arreglo indica que la butaca está ocupada
La presencia de un valor falso (false) en el arreglo indica que la butaca está desocupada
*/
let cantidadButacas:number = 100;
let butacasDeCine:number[] = new Array (cantidadButacas);
let butacasDesocupadas:number = 0;

function LugaresRandom (arreglo:number[],longitud:number){
    for(let i:number = 0;i < cantidadButacas; i++){
        arreglo[i] = Math.floor(Math.random()*2)
    } console.log(butacasDeCine);
    
}
function evaluarLugares (arreglo:number[],longitud:number){
    for(let i:number = 0;i < cantidadButacas; i++){
        if(arreglo[i] === 0){
            butacasDesocupadas ++
        }
    }console.log("la cantidad de butacas desocupadas es de :" + butacasDesocupadas);    

}
LugaresRandom (butacasDeCine,cantidadButacas);
evaluarLugares (butacasDeCine,cantidadButacas);