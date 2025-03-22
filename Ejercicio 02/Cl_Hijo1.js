import Cl_Padre from "./Cl_Padre.js";

export default class Cl_Hijo1 extends Cl_Padre{
constructor (atribA, atrib1){
    super(atribA);
    this.atrib1= atrib1
}

calculo1(){
    return this.atribA * this.atrib1;
}

}