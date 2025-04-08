export let calcularAreaTriangulo =(base:number,altura:number) : number => {
    let resultado = (base * altura)
    return (resultado)
} 

export  let cantidadDeDivisores = (divisor:number):number=> {
    for (let i:number = 1; i<= divisor; i ++){ 
    esMultiplof (divisor,i)
        if (esMultiplof (divisor,i) == true){                
            let contador:number;
            contador=contador+1
        }        
    }
    return contador
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
export 
function sumarIndice (n1:number,n2:number):(number){
    let resultado:number = n1 + n2  
    let indiceSuma = resultado                      ///llevara ; despuesw de estas expresiones?
    return resultado
}
