export default class Cl_Articulo {

    constructor (nombre, cant, precioBase){
        this.nombre = nombre;
        this.cant= cant;
        this.precioBase =precioBase;
    }

montoBasePagar(){
    return this.cant * this.precioBase;
}

}