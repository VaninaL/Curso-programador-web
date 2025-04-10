/*

Ejercicio 1: Invertir el Orden de las Palabras

Descripción: Tienes una cadena de texto que contiene una oración, pero las palabras están en el orden incorrecto. 
Utiliza split, reverse, y join para invertir el orden de las palabras. 

Ejemplo: */

let texto1 = "hola cómo estás";
// Debería convertirse en "estás cómo hola"

/*
Pista: Divide el texto en palabras, invierte el arreglo y luego vuelve a unirlo.*/

let textoArray:string[] = texto1.split(" ")
textoArray.reverse();
let finalText:string = textoArray.join(" ");
console.log(finalText);
