const parrafoTexto:string = `Urania. Qué nombre. A la gente le gusta, le parece sonoro, original, raro.
A ella también, aunque le evoca sólo cosas tristes. Todo le evoca cosas tristes, ahora que ha vuelto. 
Pero ¿cuándo no, desde que se fue de esta ciudad, a la que creía no volvería nunca? ¿Y cómo era posible 
que alguien se llamara así en una familia de dominicanos católicos, que adoraban a la Virgen del Rosario
y a la Virgen de Altagracia? Su padre le contó que su madre era la que había escogido su nombre. Urania:
la Musa de la astronomía. Nadie se atrevió a contradecirla. A él le parecía bien, se lo dijo como si la
elección del nombre hubiera sido cosa de poca importancia. En aquellos días no había problemas en la casa.
Las cosas cambiaron después, claro. Cambiaron tanto.`

let palabraBuscada:string = "tristes";
let cantidadRepeticiones:number = 0;
let contador:number = 0;

function textoCompleto (texto:string,busqueda:string): boolean{
    return texto.toLowerCase().includes(busqueda.toLowerCase());
}

console.log(textoCompleto(parrafoTexto,palabraBuscada));

//FUNCION PARA AVERIGUAR CUANTAS VECES SE REPITE EN EL TEXTO LA PALABRA BUSCADA*/

function repeticiones (arreglo:string[]): number {
    for (let i:number = 0; i < arregloparrafo.length; i++){
        contador++
    }return contador -1
}



let parrafoCompletoMinuscula:string = parrafoTexto.toLowerCase();
let arregloparrafo:string[] = parrafoCompletoMinuscula.split(palabraBuscada.toLowerCase());

//console.log(arregloparrafo.length -1);
console.log(" La palabra " + palabraBuscada + " se repite " + repeticiones(arregloparrafo) + " veces en el parrafo ");