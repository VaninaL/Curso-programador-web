/*
Personas en un Bar
El gerente de una discoteca desea tener un registro del número de personas que ingresan al local. 
Para mantener un ambiente seguro y controlado, solo se permite la entrada a personas de entre 18 y 40 años. 
Actualmente, el total de personas en el local es de 270.

El gerente necesita saber:

    * Cuántas personas menores de 21 años han ingresado.
    * Cuántas personas de 21 años o más han ingresado
    * El promedio de edad de las personas que ingresaron al local.

Para la simulación de las edades de los asistentes, puedes utilizar la siguiente función que genera un número aleatorio
 entre un valor mínimo y máximo:

function aleatorio(min, max) { 
    return Math.floor(Math.random() * (max - min + 1)) + min; 
} 
*/ 

let edadMin:number = 18;
let edadMax:number=40;
let totalPersonas:number = 270;
let res:number = 0;
let menores:number = 0;
let mayores:number =0;
let promedio:number = 0;
let edades:number = 0;

function aleatorio(min:number, max:number) :number { 
    return Math.floor(Math.random() * (max - min + 1)) + min;      
}

for (let i:number = 0;i < totalPersonas;i++){
    res = aleatorio(edadMax,edadMin)    
    if (res < 21){
    menores++    
    }else{
        mayores++
    } 
    edades = res + edades
    promedio = edades / totalPersonas
}


console.log(`la cantidad de menores de 21 años en el local es de: ${menores}`);
console.log(`la cantidad de mayores de 21 años en el local es de: ${mayores}`);
console.log(`el promedio de edad de las personas en el local es de ${Math.round(promedio)} años`);

