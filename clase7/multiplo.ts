/* Cree un método esMultiplo con 2 parámetros que devuelva el
 valor lógico verdadero o falso según si el primer número que
 se indique como parámetro es múltiplo del segundo
 • Recuerde que un numero es múltiplo de otro si al dividirlo su
 resto es cero
 • Recuerde que la operación mod permite saber si el resto de
 una división es cero*/

    let numero1:number = 12;
    let numero2:number = 2;
   

let esMultiplo = (num1:number,num2:number):boolean =>{
    if (num1 % num2 == 0){
        let respuesta:boolean = true
       return respuesta
        
    } else {
        let respuesta1:boolean = false
      return respuesta1
    }
 }
    console.log(esMultiplo (11,2) );
    console.log(esMultiplo(numero1,numero2));

