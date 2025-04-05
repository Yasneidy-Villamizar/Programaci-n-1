import Cl_EstDeportista from "./Cl_EstDeportista.js";

export default class Principal{
    constructor(){
        let depor1= new Cl_EstDeportista("Juan", 132, 8, 21, 1);
        let depor2= new Cl_EstDeportista("Félix", 110, 10, 20, 2);
    
        let salida = document.getElementById("salida")
        salida.innerHTML = `
        <br>Nombre del estudiante: ${depor1.nombre}
        <br>Acumulado de notas: ${depor1.notas}
        <br>Cantidad de materias: ${depor1.materias}
        <br>Deporte (1 = Beisbol - 2 = Futbol): ${depor1.deporte}
        <br>Edad Del Estudiante: ${depor1.edad}
        <br>Nota promedio: ${depor1.pormedio()}%
        <br>Admisión: ${depor1.beisbol()}
      
        <br>Nombre del estudiante: ${depor2.nombre}
        <br>Acumulado de notas: ${depor2.notas}
        <br>Cantidad de materias: ${depor2.materias}
        <br>Deporte (1 = Beisbol - 2 = Futbol): ${depor2.deporte}
        <br>Edad Del Estudiante: ${depor2.edad}
        <br>Nota promedio: ${depor2.pormedio()}%
        <br>Admisión: ${depor2.futbol()}
    `
    }
}