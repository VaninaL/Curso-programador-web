// Ejercicio 2: Capitalizar la Primera Letra de Cada Palabra
// Descripción: Tienes una cadena de texto que contiene varias palabras en minúsculas. 
// Utiliza split, map, charAt, slice, y join para capitalizar la primera letra de cada palabra.

// Ejemplo: 

let texto = "hola mundo esto es una prueba";
// Debería convertirse en "Hola Mundo Esto Es Una Prueba"

let textoFinal = texto.split(" ")
                .map((letra) => letra.charAt(0).toUpperCase() + letra.slice(1))
                .join(" ");

console.log(textoFinal);

