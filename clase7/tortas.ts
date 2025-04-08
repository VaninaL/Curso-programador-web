/*¡Gran Concurso de Tortas de Tres Arroyos! :birthday:

Te toca ser jurado de un concurso de tortas, y el número de participantes puede variar.
Tu tarea es pedir al usuario cuántos concursantes habrá y luego solicitar las puntuaciones        
de Sabor, Presentación y Dificultad para cada torta.
Al final, debes determinar qué torta tiene el mayor puntaje.
Y si hay empate ? En ese caso, informaremos que se produjo un empate
(no es necesario indicar si fueron dos o más empates ni entre qué tortas es el empate,
solo basta con indicar que se produjo empate si al menos existe uno).
## Funciones a implementar:
calcularPuntaje(sabor, presentacion, dificultad):
Recibe tres números entre 1 y 5 que representan las puntuaciones de una torta y devuelve la suma de esos números 
(el puntaje total del pastel).

determinarGanador():
Utiliza la librería readline-sync para pedir al usuario el número de participantes, luego solicita las puntuaciones de cada uno de ellos
y usa la función calcularPuntaje para determinar la torta con el mayor puntaje.

*SI lo consideras necesario, pueden IMPLEMENTAR funciones extra.*/
import* as rls from "readline-sync";
import { dibujarGuiones } from "../funciones/funciones";

let sabor:number;
let presentacion:number;
let dificultad:number;
let respuesta:boolean = false;
let puntajeTotal:number = 0;
let tortaGanadora:number = 1;
let empate:boolean = false;


import { calcularPuntaje } from "../funciones/funciones";
import { comprobarPuntaje } from "../funciones/funciones";

console.log(
    "Bienvenido al concurso de tortas de Tres Arroyos, la cantidad minima de participantes debe ser de 2 "
);

let cantidadParticipantes:number = rls.questionInt("Indique la cantidad de participantes: ");

while(cantidadParticipantes <= 1 ){
cantidadParticipantes= rls.questionInt("Numero incorrecto, vuelva a ingresar la cantidad: ")
}  



for (let i:number=1; i <= cantidadParticipantes;i++){

    sabor=rls.questionInt(`Indique un puntaje entre 1 y 5 para determinar el sabor del pastel ${i} : `);
    respuesta=comprobarPuntaje(sabor);
    while (!respuesta){
        sabor=rls.questionInt(`Valor incorrecto, indique un puntaje entre 1 y 5 para determinar el sabor del pastel ${i} : `);
        respuesta=comprobarPuntaje(sabor);
    }   

    presentacion=rls.questionInt(`Indique un puntaje entre 1 y 5 para determinar la presentacion del pastel ${i} : `);
    respuesta=comprobarPuntaje(presentacion);
    while (!respuesta){
        presentacion=rls.questionInt(`Valor incorrecto, indique un puntaje entre 1 y 5 para determinar la presentacion del pastel ${i} : `);
        respuesta=comprobarPuntaje(presentacion);
    }

    dificultad=rls.questionInt(`Indique un puntaje entre 1 y 5 para determinar la dificultad del pastel ${i} : `);
    respuesta=comprobarPuntaje(dificultad);
    while (!respuesta){     
        dificultad=rls.questionInt(`Valor incorrecto, indique un puntaje entre 1 y 5 para determinar la dificultad del pastel ${i} : `);
        respuesta=comprobarPuntaje(dificultad);
    }
    
    console.log (`El puntaje total del pastel ${i} es : ${calcularPuntaje(sabor,presentacion,dificultad)} `);

    if (puntajeTotal < calcularPuntaje(sabor,presentacion,dificultad)){
        puntajeTotal = calcularPuntaje(sabor,presentacion,dificultad);
        tortaGanadora = i;
    } else if (calcularPuntaje(sabor,presentacion,dificultad = puntajeTotal)){
        empate = true;             

    }              
}  
let separador:string =  dibujarGuiones (25);  
console.log(separador)  
    
if (empate) {
    console.log(" Hay un empate !!!!!!!!!  ");
    
} else {
    console.log ("El pastel ganador es el numero " + tortaGanadora + " con " + puntajeTotal + " puntos !!!!!! " )
}    
console.log(separador);





