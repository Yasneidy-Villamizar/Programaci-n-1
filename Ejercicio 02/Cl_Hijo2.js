import Cl_Padre from "./Cl_Padre.js";

export default class Cl_Hijo2 extends Cl_Padre{
constructor (atribA, atrib2){
    super(atribA);
    this.atrib2 = atrib2;
}

calculo2(){
    return this.atribA + this.atrib2;
}
} 