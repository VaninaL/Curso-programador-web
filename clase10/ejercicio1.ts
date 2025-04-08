/*
Estructuras de Datos y Métodos
Cadenas
Ejercicio: Convertir una palabra ingresada por el usuario en clave, según las reglas siguientes:
Si el carácter es una vocal reemplazar aeiou por !, ;, :, *, / respectivamente.
Si el carácter es un número o un operador matemático (+ - * /) queda igual.
Si el carácter es una consonante minúscula pasar a mayúscula y viceversa.
Mauricio2781 → m!UR;C:c;2781 
*/

import* as rls from "readline-sync";
import { cambiarConsonantes } from "../funciones/funciones";
import { cambiarVocales } from "../funciones/funciones";


let palabra:string = rls.question("ingrese una palabra cualquiera: ");
let palabraNueva:string;
let condicion1:RegExp;
let condicion2:RegExp;

condicion1 = /[aeiou]/gi;

palabraNueva = palabra.replace(condicion1,cambiarVocales);
console.log(palabraNueva);

condicion2 = /[bcdfghjklmnpqrstvwxyz]/gi;

palabraNueva = palabraNueva.replace(condicion2,cambiarConsonantes);

console.log(palabra);
console.log(palabraNueva);

