import Cl_Estudiante from "./Cl_Estudiante.js";

export default class Cl_EstBecado extends Cl_Estudiante{
    constructor(nombre, notas, materias){
        super(nombre, notas, materias);
    }

montoBeca(){
    if (this.pormedio() > 15)
        return 30;

    else if (this.pormedio() <= 15 && this.pormedio >=10)
        return 20;

    else return "No le corresponde beca";
}
}