
import* as rls from "readline-sync";

const num1: number =rls.questionInt ("Ingrese el primer numero: ");
const num2: number =rls.questionInt ("Ingrese el segundo numero: ");
const operacion: number =rls.questionInt ("Ingerse 1 para sumar, 2 para restar, cualquier otra tecla para salir ");



import { dibujarGuiones } from "../funciones/funciones";


if (operacion == 1){
   dibujarGuiones (20);
   console.log(`El resultado de la suma es ${num1 + num2}`);
   dibujarGuiones(30);
} else if (operacion == 2){
   dibujarGuiones(40);
   console.log(`El reusltado de la resta es ${num1 - num2}`);
   dibujarGuiones(50);
}
