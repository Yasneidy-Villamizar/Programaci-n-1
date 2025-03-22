import Cl_Padre from "./Cl_Padre.js";

export default class Cl_Hija extends Cl_Padre{
constructor (atribA, atribB){
    super(atribA);
    this.atribB = atribB;
}

}