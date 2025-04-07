/*Realice un programa que devuelva el área del 
triángulo usando los siguientes pares de base-altura:
 • (1,2) (2,4) (3,6) (4,8) (5, 10) (6,12) (7,14)
 • Implemente un método llamado calcularAreaTriangulo 
que reciba dos números por parámetro (uno llamado 
base y otro altura)*/

let calcularAreaTriangulo =(base:number,altura:number) : number => {
    resultado = (base * altura)
    return (resultado)
} 
 let resultado : number;

 resultado = calcularAreaTriangulo (1,2);
 console.log("El resultado para 1,2 es: " + resultado);
 resultado = calcularAreaTriangulo (2,4);
 console.log("El resultado para 2,4 es: " + resultado);
 resultado = calcularAreaTriangulo (3,6);
 console.log("El resultado para 3,6 es: " + resultado);
 resultado = calcularAreaTriangulo (4,8);
 console.log("El resultado para 4,8 es: " + resultado);
 resultado = calcularAreaTriangulo (5,10);
 console.log("El resultado para 5,10 es: " + resultado);
 resultado = calcularAreaTriangulo (6,12);
 console.log("El resultado para 6,12 es: " + resultado);
 resultado = calcularAreaTriangulo (7,14);
 console.log("El resultado para 7,14 es: " + resultado);
 