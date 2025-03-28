import Cl_ProfesorPadre from "./Cl_ProfesorPadre.js";

export default class Cl_Contratado extends Cl_ProfesorPadre{
    constructor(nombre, bono, cantHorasExtras){
        super(nombre, bono);
        this.cantHorasExtras = cantHorasExtras;

    }

totalHorasExtras(){
    return this.cantHorasExtras * 10;
}

    totalCobrar(){
        return this.bono + this.totalHorasExtras();
           }
}