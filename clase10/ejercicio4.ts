/*
El jardín infantil necesita un programa para poder asignar cursos a las aulas
• Se cuentan con tres aulas: Azul, Verde y Amarilla
• Cada aula cuenta con una capacidad diferente (es decir, un número de 
bancos)
• La aula Azul tiene 40 bancos, la Verde 35 y la Amarilla 30
• Dado un número de infantes ingresado por el usuario, el programa deberá 
determinar el aula que minimice la cantidad de bancos vacíos
• La salida del algoritmo es el color que identifica al aula asignada
 */
import* as rls from "readline-sync";

let salaAzul:number = 40;
let salaVerde:number = 35;
let salaAmarilla:number = 30;

let cantidadAlumnos = rls.questionInt("ingrese la cantidad de alumnos: ");

if (cantidadAlumnos <= 30 ){
    console.log("le sera asignada la sala amarilla");
    }else if (cantidadAlumnos > 30 && cantidadAlumnos <= 35) {
        console.log("le sera asignada la sala verde");
    }else if (cantidadAlumnos >35 && cantidadAlumnos <=40){
        console.log("le sera asignada la sala verde");
    }else {
        console.log("Lo lamentamos pero no disponemos de esa capacidad.");
        
    }