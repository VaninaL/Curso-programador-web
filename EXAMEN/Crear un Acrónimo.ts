/*

Ejercicio 4: Crear un Acrónimo

Descripción: Tienes una frase con varias palabras, y necesitas crear un acrónimo usando solo la primera letra de cada palabra. 
Usa split, map, y join.

Ejemplo: */

let frase = "Asociación de Padres de Familia";
// Debería convertirse en "ADPDF"

let arreglo:string = frase.split(" ").map((letra) => letra.charAt(0)).join("");
console.log(arreglo);




