/* Llenar un array de 10 posiciones con números 
aleatorios entre 0 y 99
• Para obtener números aleatorios crear una función 
Azar, que se base en las funciones disponibles en el 
paquete Math:-Math.random() devuelve un nro al azar entre 0 y 1*/

let numerosAleatorios:number[] = new Array (10);

function azar():number {
    let numero = Math.round(Math.random() * 100);
    return numero
}

for (let i:number = 0; i<10; i++){
    numerosAleatorios[i] = azar();    
}
console.log(numerosAleatorios);
