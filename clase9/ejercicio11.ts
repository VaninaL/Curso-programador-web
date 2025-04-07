/* Almacene en un arreglo de dimensión N números (la
cantidad es ingresada por el usuario)
• Muestre cuántos números son positivos, cuántos son
negativos y cuántos ceros hay*/
/*PSEUDOCODIGO
1-importar la biblioteca del readline-sync
2-crear un arreglo de tipo number, la longitud es ingresada por el usuario
3-




 */
import* as rls from "readline-sync";

let longitud:number = rls.questionInt ("Ingrese un numero para determinar la longitud del arreglo: ");
let numeros:number[] = new Array (longitud);
let dimension:number = numeros.length;
let contador0:number = 0;
let contadorEnteros:number = 0;
let contadorNegativos:number = 0;

for (let i:number = 0; i < dimension; i++){
    numeros[i] = rls.questionInt(`Ingrese el numero ${i+1} de ${dimension} para el indice ${i}: `);
    console.log(numeros);
    if (numeros[i] === 0){
        contador0 ++
    }else if (numeros[i] < 0){
        contadorNegativos ++
    } else {
        contadorEnteros ++
    }
}
console.log(`la cantidad de 0 en el arreglo es: ${contador0}`);
console.log(`la cantidad de numeros negativos en el arreglo es: ${contadorNegativos}`);
console.log(`la cantidad de numeros enteros en el arreglo es: ${contadorEnteros}`);

