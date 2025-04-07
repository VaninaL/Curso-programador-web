/* Realizar un algoritmo que dado un
 número entero ingresado por el
 usuario, visualice en pantalla si es
 par o impar
 • En el caso de ingresar un cero, se
 debe volver a pedir el número por
 teclado (hasta que se ingrese un
 número mayor que cero*/ 

 import* as rls from "readline-sync";

 let numero: number 
  
 
do {
    numero = rls.questionInt ("Ingrese un numero entero: ");  
 
} 
    while (numero == 0){
    
}
    if (numero %2 ==0 ){
    console.log("Su número es par");
    
}else {
    console.log("Su número es impar");
    
}








 
 
 
 
 
 
 
      
