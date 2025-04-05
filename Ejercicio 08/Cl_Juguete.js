 import Cl_Articulo from "./Cl_Articulo.js";

 export default class Cl_Juguete extends Cl_Articulo{
    constructor(nombre, cant, precioBase, edad){
        super(nombre, cant, precioBase);
        this.edad = edad;

    }

descuento(){
    if (this.edad <= 1)
        return this.montoBasePagar() * 0.10;
    
    else return 0;
}

montoTotalPagar(){
    return this.montoBasePagar() - this.descuento();
}


 }