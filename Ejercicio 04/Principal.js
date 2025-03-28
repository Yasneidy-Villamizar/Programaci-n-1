//en la Universidad se le paga a cada profesores un bono, 
// sin embargo si es personal fijo tiene un sueldo y si es contratado 
// tiene cantidad de horas, donde cada una se paga a $10. Considere que a 
// todos los profesores se les pide su nombre, y las clases Cl_fijo y 
// Cl_contratado heredan de la clase Cl_profesor. 
// Haga un programa que lea los datos de un profesor fijo y reporte su ingreso total. 
// Ejemplos de la corrida: 
// Nombre del profesor fijo: Carlos 
// Monto del bono: $25 
// Monto del sueldo: $100 
// Ingreso total del profesor Carlos: $125 
// Nombre del profesor fijo: Carolina 
// Monto del bono: $40 
// Monto del sueldo: $90 
// Ingreso total del profesor Carolina: $130 

import Cl_fijo from "./Cl_Fijo.js";
import Cl_Contratado from "./Cl_Contratado.js";

export default class Principal{
    constructor(){
        let fijo1= new Cl_fijo("carlos", 25, 100);
        let fijo2= new Cl_fijo("carolina", 40, 90);
    
        let salida = document.getElementById("salida")
        salida.innerHTML = `
        <br>Nombre del profesor: ${fijo1.nombre}
        <br>monto del bono: ${fijo1.bono}$
        <br>monto del sueldo: ${fijo1.sueldoFijo}$
        <br>ingreso total del profesor: ${fijo1.totalCobrar()}$

        <br>Nombre del profesor: ${fijo2.nombre}
        <br>monto del bono: ${fijo2.bono}$
        <br>monto del sueldo: ${fijo2.sueldoFijo}$
        <br>ingreso total del profesor: ${fijo2.totalCobrar()}$
        `
    }
}