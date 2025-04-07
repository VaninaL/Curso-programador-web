/* Una empresa desea premiar a sus empleados con un 
aumento de sueldo. Este aumento se ajusta a la siguiente 
tabla:
 Sueldo Actual                 Sueldo con Aumento 
 0 - 15.000 $                  20%
 15.001 - 20.000 $             10%
 20.001 - 25.000 $             5%
 Más de 25.000 $               No hay aumento
 
 • Desarrolle un algoritmo dado el salario actual de un 
empleado determine el aumento de sueldo a aplicar y 
se lo muestre*/

import * as rls from "readline-sync"; 

const sueldo: number = rls.questionInt ("Ingrese su sueldo en pesos: ");

switch (true){
    case (sueldo >=0 && sueldo <=15000):
        console.log("Felicidades su sueldo luego del aumento del 20% sera de $ " + (sueldo * 1.2 ));
        break
    case (sueldo >= 15001 && sueldo <= 20000):
        console.log("Felicidades su sueldo luego del aumento del 10% sera de $ " + (sueldo * 1.1 ));
        break
    case (sueldo >= 20001 && sueldo <= 25000):
        console.log("Felicidades su sueldo luego del aumento del 5% sera de $ " + (sueldo * 1.05 )); 
        break
    case (sueldo > 25000):
        console.log("Su sueldo no sufrira modificaciones ");
         
}