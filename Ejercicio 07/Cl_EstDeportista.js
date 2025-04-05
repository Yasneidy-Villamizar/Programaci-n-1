import Cl_Estudiante from "./Cl_Estudiante.js";

export default class Cl_EstDeportista extends Cl_Estudiante{
    constructor(nombre, notas, materias, edad, deporte){
        super(nombre, notas, materias);
        this.edad = edad;
        this.deporte = deporte;
    }

beisbol(){
    if (this.deporte === 1 && this.pormedio() > 14 && this.edad >= 21)
        return "Es Admitido en el Equipo de Beisbol"
   
    else if (this.deporte === 1 && this.pormedio() < 14 && this.edad < 21)
        return "No es Admitido en el Equipo de Beisbol"
}

futbol(){
    if (this.deporte === 2 && this.pormedio() >= 12 && this.edad >=19)
        return "Es Admitido en el Equipo de Futbol "
    
     else return "No es Admitido en el Equipo de Futbol"

}

}