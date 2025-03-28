import Cl_ProfesorPadre from "./Cl_ProfesorPadre.js";

export default class Cl_fijo extends Cl_ProfesorPadre{
    constructor(nombre, bono, sueldoFijo){
        super(nombre, bono);
        this.sueldoFijo = sueldoFijo;

    }

    totalCobrar(){
        return this.bono + this.sueldoFijo;
           }
}