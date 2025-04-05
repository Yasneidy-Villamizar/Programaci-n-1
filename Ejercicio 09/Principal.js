import Cl_Rectangulo from "./Cl_Rectangulo.js";

export default class Principal {
    constructor(){
        let rect1 = new Cl_Rectangulo(4, 2);
        let rect2 = new Cl_Rectangulo(3, 5);
        
        
    let salida = document.getElementById("salida")
    salida.innerHTML = `
            <br>Base del Rectangulo: ${rect1.base}
            <br>Altura: ${rect1.altura}
            <br>Área Resultante: ${rect1.areaResultante()}
            <br>Perimetro: ${rect1.perimetro()}

            <br>Base del Rectangulo: ${rect2.base}
            <br>Altura: ${rect2.altura}
            <br>Área Resultante: ${rect2.areaResultante()}
            <br>Perimetro: ${rect2.perimetro()}
            `
    }
}