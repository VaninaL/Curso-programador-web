/* Desarrolle un algoritmo que permita cargar alumnos y sus notas en los tres trimestres
• Se debe permitir obtener el promedio anual (es decir, de sus tres notas) de un alumno 
(ingresado por el usuario)
• Luego de resolverlo, pensar en aprovechar métodos y discutir cómo representar la información*/

import* as rls from "readline-sync";
import { sumarIndice } from "../funciones/funciones"; 

const cantidadAlumnos:number = rls.questionInt("Ingrese la cantidad de alumnos: ");
const nombreAlumnos:string[] = new Array (cantidadAlumnos);
const trimestre1:number[] = new Array (cantidadAlumnos);
const trimestre2:number[] = new Array (cantidadAlumnos);
const trimestre3:number[] = new Array (cantidadAlumnos);
let promedio:number = 0 ;

for (let i:number = 0; i < cantidadAlumnos; i++){
    nombreAlumnos[i] = rls.question (`ingrese el nombre del alumno: `);
    trimestre1[i] = rls.questionInt (`Ingrese la nota del alumno ${nombreAlumnos[i]} para el trimestre 1: `);
    trimestre2[i] = rls.questionInt (`Ingrese la nota del alumno ${nombreAlumnos[i]} para el trimestre 2: `);
    trimestre3[i] = rls.questionInt (`Ingrese la nota del alumno ${nombreAlumnos[i]} para el trimestre 3: `);
    promedio = sumarIndice (trimestre1[i],trimestre2[i],trimestre3[i])/3 
    console.log(`el promedio del alumno ${nombreAlumnos[i]} es de ${promedio}`);
    
}



