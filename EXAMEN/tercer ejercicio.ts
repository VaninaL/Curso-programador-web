/*
    Cree una funcion que reciba un array con numeros (crear un array con numeros de mas de 10 y en cualquier orden)
    muestre por consola que cantidad de numeros son par y que cantidad es impar
*/


let numeros:number []= [5,6,8,10,85,4,7,0,3,58,41,12,86,457,2]; 
let par:number = 0;
let impar:number = 0;

function arraynum (numero:number[]){
    for(let i:number = 0;i < numeros.length;i++){
        if(numero[i] % 2 == 0){
            par++ ;
        }else{
            impar++;
        };
    };
};

arraynum(numeros);

console.log(`la cantidad de numeros pares en el arreglo es de: ${par}`);
console.log(`la cantidad de numeros impares en el arreglo es de: ${impar}`);

