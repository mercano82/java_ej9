

let ahorro = prompt("Ingrese Monto a Ahorrar");
let periodo = prompt("ingrese la cantidad de meses");

let tasa = (0.36/12);
var term4=(1+tasa)
var term3=Math.pow(term4, periodo)
var term2=(term3-1);
var term1=(term2/tasa);
var resultado=(ahorro*term1);


console.log (resultado);


//CREANDO EL BOTÓN DESDE JS
const btnCalc = document.createElement("button");
//ASIGNAR ID AL BOTÓN
btnCalc.id = 'btnCalc';
//ASIGNAR EL INTERIOR DEL BOTÓN
btnCalc.innerHTML = 'Calcular';
//ESCUCHAR EL EVENTO CLICK
btnCalc.addEventListener('click', function () {
    const h3 = document.createElement('h3');
    h3.innerHTML = "tu rendimiento es de "+ resultado;
    document.body.appendChild(h3);
})
//AGREGAR EL BOTON AL DOM
document.body.appendChild(btnCalc);


