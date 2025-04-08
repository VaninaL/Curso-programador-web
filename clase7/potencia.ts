/* • Realice un programa que devuelva la potencia de un número.
• La base y el exponente deben ser ingresados por teclado.
• Sólo deben admitirse exponentes mayores o iguales a cero.
• Recuerde que el resultado de un numero elevado a 0 es 1.
• Separe la lógica de calcular la potencia utilizando métodos. alt 94*/

import* as rls from "readline-sync";

let base = rls.questionInt ("Ingrese un numero para la base: ");
let exponente = rls.questionInt ("Ingrese un numero entero mayor o igual que 0 para el exponente: ");
let resultado : number;

if (exponente < 0) {
      exponente = rls.questionInt ("Ingrese un numero entero mayor o igual que 0 para el exponente: ");
} else {
      
}

import { potenciaDeUnNumero } from "../funciones/funciones";

let resultadopotencia:number|null = potenciaDeUnNumero (base,exponente);
console.log (resultadopotencia);

