export let calcularAreaTriangulo =(base:number,altura:number) : number => {
    let resultado = (base * altura)
    return (resultado)
} 

export  let cantidadDeDivisores = (divisor:number):number=> {
    let contador:number=0
    for (let i:number = 1; i<= divisor; i ++){ 
    esMultiplof (divisor,i)
        if (esMultiplof (divisor,i) == true){                
        contador++
        }        
    }  return contador  
}

export let esMultiplof = (num1:number,num2:number):boolean =>{
    if (num1 % num2 == 0){      
    return true        
    } else {       
    return false
    }
}


export function dibujarGuiones (cantidad:number) :string {
    let i : number;
    let linea : string = ""
    for (i=0; i< cantidad;i++){
        linea = linea + "-"
    };
    return (linea)
}

export let esMultiplo = (num1:number,num2:number):boolean =>{
    if (num1 % num2 == 0){
        let respuesta:boolean = true
    return respuesta
        
    } else {
        let respuesta1:boolean = false
    return respuesta1
    }
}

export let potenciaDeUnNumero =(b:number,e:number):number|null=> {
    let exponente:number = 0
    if (exponente >= 0){
         let resultado:number = b ** e
        return (resultado)
    } else {
        return null
    }
}
export function calcularPuntaje (sabor:number, presentacion:number, dificultad:number):number {
let puntajeTotal=sabor+presentacion+dificultad         
    return puntajeTotal    
}

export function comprobarPuntaje (puntaje:number):boolean {    
    let respuesta:boolean = false;
if(puntaje >0 && puntaje <6){
    respuesta=true;      
}
return respuesta
}
export function recorrerArreglos (lista:string[]|number[]):void {
    for (let i:number =0;i < lista.length ;i++){
        console.log(lista[i]); 
    }
}
export function azar():number {
    let numero = Math.round(Math.random() * 100);
    return numero
}
export function parImpar (n:number):string {
    let respuesta:string;
    if (n % 2 === 0){
        respuesta = " El numero ingresado es par "
    } else {
        respuesta = " El numero ingresado es impar "
    }
    console.log(respuesta);    
    return respuesta;
}
 
export function sumarIndice (n1:number,n2:number):(number){
    let resultado:number = n1 + n2  
    let indiceSuma = resultado                      ///llevara ; despuesw de estas expresiones?
    return resultado
}
export function cargarArreglo (nombreArreglo:number[],longitud:number):void {
    for (let i:number = 0; i < longitud;i++){
        nombreArreglo[i] = rls.questionInt(`Ingrese el numero ${i+1} de ${longitud} para la posicion ${i} del arreglo: `);
    }
}
import* as rls from "readline-sync";

export function evaluarNumero (arreglo:number[]):void{
    let positivos:number=0;
    let negativos:number=0;
    let ceros:number=0;
    for(let i:number = 0; i < arreglo.length ; i++){
        if (arreglo[i] > 0){
            positivos++
        }else if (arreglo[i] < 0){
            negativos++
        }else {
            ceros++
        }
    }
}
export function cambiarVocales(letraV:string):string {
    let cambio:string = "";
    if(letraV.toLowerCase() === "a"){
        cambio = "!";
    }else if (letraV.toLowerCase()  === "e") {
        cambio = ";";
    }else if(letraV.toLowerCase()  === "i"){
        cambio = ":";
    }else if (letraV.toLowerCase()  === "o"){
        cambio = "*";        
    }else if (letraV.toLowerCase()  === "u"){
        cambio = "/";
    }
    return cambio;
}   
export function cambiarConsonantes(letraC:string) : string {
    let letraNormalizada:string = letraC.toLowerCase()
    if(letraC == letraNormalizada){
        letraC = letraC.toUpperCase();
    }else {
        letraC = letraC.toLowerCase();
    }
    return letraC
}