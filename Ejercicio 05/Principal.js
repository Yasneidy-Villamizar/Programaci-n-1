/*Haga un programa que haga uso de la misma clase Cl_profesor del ejercicio anterior, lea los 
datos de un profesor contratado y reporte su ingreso total. 
Ejemplos de la corrida: 
Nombre del profesor contratado: Rafael 
Monto del bono: $30 
Cantidad de horas: 15 
Ingreso total del profesor Rafael: $180 
Nombre del profesor contratado: Felicia 
Monto del bono: $30 
Cantidad de horas: 20 
Ingreso total del profesor Felicia: $230 
*/

import Cl_Fijo from "./Cl_Fijo.js";
import Cl_Contratado from "./Cl_Contratado.js";

export default class Principal{
    constructor(){
        let contra1= new Cl_Contratado("Rafael", 30, 15);
        let contra2= new Cl_Contratado("Felicia", 30, 20);
    
        let salida = document.getElementById("salida")
        salida.innerHTML = `
        <br>Nombre del profesor: ${contra1.nombre}
        <br>monto del bono: ${contra1.bono}$
        <br>cantidad Horas: ${contra1.cantHorasExtras}$
        <br>ingreso total del profesor: ${contra1.totalCobrar()}$

        <br>Nombre del profesor: ${contra2.nombre}
        <br>monto del bono: ${contra2.bono}$
        <br>cantidad Horas: ${contra2.cantHorasExtras}$
        <br>ingreso total del profesor: ${contra2.totalCobrar()}$
    `
    }
}