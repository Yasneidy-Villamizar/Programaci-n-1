import Cl_Juguete from "./Cl_Juguete.js";

export default class Cl_Principal {
constructor(){
let jugue1 = new Cl_Juguete("Muñeca", 2, 10, 2),
    jugue2 = new Cl_Juguete("Peluche", 3, 20, 1);

let salida = document.getElementById("salida")
salida.innerHTML = `
            <br>Nombre del juguete: ${jugue1.nombre}
            <br>Cantidad: ${jugue1.cant}
            <br>Precio base: ${jugue1.precioBase}$
            <br>Edad recomendada: ${jugue1.edad}
            <br>Monto a pagar por el carrito: ${jugue1.montoTotalPagar()}$

            <br>Nombre del juguete: ${jugue2.nombre}
            <br>Cantidad: ${jugue2.cant}
            <br>Precio base: ${jugue2.precioBase}$
            <br>Edad recomendada: ${jugue2.edad}
            <br>Monto a pagar por el carrito: ${jugue2.montoTotalPagar()}$
`

}


}