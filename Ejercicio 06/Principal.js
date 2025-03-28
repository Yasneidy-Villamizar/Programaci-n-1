/*6. ESTUDIANTE-A 
El promedio de notas resulta de dividir el acumulado de notas entre la cantidad de materias. 
Se tiene de todo estudiante su nombre, acumulado notas y cantidad materias. 
Un estudiante becado recibe una beca mensual de $30 si su promedio de notas es superior a 
15, ó recibe $20 si es al menos 10; si el promedio es menor de 10, no recibe beca. 
Diseñe las clases Cl_estudiante y Cl_becado, usando herencia, de manera que procese un 
estudiante y reporte el monto de la beca, o si no le corresponde beca. 
Ejemplos de la corrida: 
Nombre del estudiante: Mary 
Acumulado de notas: 132 
Cantidad de materias: 8 
Nota promedio: 16.50 
Mary recibe una beca de $30.00 
Nombre del estudiante: Alirio 
Acumulado de notas: 315 
Cantidad de materias: 35 
Nota promedio: 9.00 
Alirio no le corresponde beca */

import Cl_EstBecado from "./Cl_EstBecado.js";

export default class Principal{
    constructor(){
        let becado1= new Cl_EstBecado("Mary", 132, 8);
        let becado2= new Cl_EstBecado("Alirio", 315, 35);
    
        let salida = document.getElementById("salida")
        salida.innerHTML = `
        <br>Nombre del estudiante: ${becado1.nombre}
        <br>Acumulado de notas: ${becado1.notas}
        <br>Cantidad de materias: ${becado1.materias}
        <br>Nota promedio: ${becado1.pormedio()}%
        <br>recibe una beca de: ${becado1.montoBeca()}$
      
        <br>Nombre del estudiante: ${becado2.nombre}
        <br>Acumulado de notas: ${becado2.notas}
        <br>Cantidad de materias: ${becado2.materias}
        <br>Nota promedio: ${becado2.pormedio()}%
        <br>recibe una beca de: ${becado2.montoBeca()}
    `
    }
}