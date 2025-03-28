import Cl_Administrativo from "./Cl_Administrativo.js";
import Cl_Obrero from "./Cl_Obrero.js";

export default class Principal{
    constructor(){

        let empleObrero = new Cl_Obrero(2, 2);
        let empleAdmin = new Cl_Administrativo(2, 2);
    
        let salida = document.getElementById("salida")
        salida.innerHTML = `
                    <br>salario Obrero: ${empleObrero.calcularSueldo()}
                    <br>salario Administrador: ${empleAdmin.calcularSueldo()}

        `

    }
}