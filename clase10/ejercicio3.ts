/* 
Implemente un método llamado “multiplicarArreglo” que recibe 
como parámetros tres arreglos de Enteros del mismo tamaño
• Los dos primeros arreglos contienen los números que se quieren 
multiplicar
• El tercer arreglo almacena el cálculo de la multiplicación de cada 
posición de los dos arreglos

*/
let numero1:number[] = new Array (3);
let numero2:number[] = new Array (3);
let resultado:number[] = new Array (3);

function multiplicarArreglo (num1:number[],num2:number[]) : number[] {
    for (let i:number = 0;i < resultado.length;i++){
        resultado[i] = num1[i] * num2[i]
    }
    return resultado
}
numero1 = [1,2,3];
numero2 = [7,3,4];
console.log(multiplicarArreglo(numero1,numero2));


/*• Utilice este método para multiplicar los siguientes cuatro arreglos 
de tres elementos
v1: [1, 2, 3]
v2: [4, 5, 6]
v3: [2, 1, 2]
v4: [1, 2, 1]
vResultado (v1*v2*v3*v4): [8, 20, 36]
*/

function multiplicarArreglo4 (num1:number[],num2:number[],num3:number[],num4:number[]) : number[] {
    for (let i:number = 0;i < resultado.length;i++){
        resultado[i] = num1[i] * num2[i] * num3[i] * num4[i]
    }
    return resultado
}

let arreglo1:number[] = [1,2,3];
let arreglo2:number[] = [4,5,6];
let arreglo3:number[] = [2,1,2];
let arreglo4:number[] = [1,2,1];

console.log(multiplicarArreglo4(arreglo1,arreglo2,arreglo3,arreglo4));
