/*
Christian Gaviria
Grupo 1
Problema C: Factura de energía eléctrica con subsidio y contribución por estrato
*/

const TARIFA_KWH = 900;
const CONSUMO_SUBSISTENCIA = 173;
const CARGO_FIJO = 6000;

let consumo = parseFloat(prompt("Ingrese el consumo de energía eléctrica en kWh:"));
let estrato = parseInt(prompt("Ingrese el estrato socioeconómico (1-6):"));

if (Number.isFinite(consumo) && consumo >= 0 && Number.isInteger(estrato) && estrato >= 1 && estrato <= 6) {
    let porcentajeSubsidio = 0;
    let porcentajeContribucion = 0;

    let valorConsumo = consumo * TARIFA_KWH;
    let tarifaBase = valorConsumo + CARGO_FIJO;

    let consumoSubsidiado = Math.min(consumo, CONSUMO_SUBSISTENCIA);
    let subsidio = consumoSubsidiado * TARIFA_KWH * porcentajeSubsidio;
    let contribucion = tarifaBase * porcentajeContribucion;
    let total = tarifaBase - subsidio + contribucion;

    if (estrato === 1) {
        porcentajeSubsidio = 0.50;
    } else if (estrato === 2) {
        porcentajeSubsidio = 0.40;
    } else if (estrato === 3) {
        porcentajeSubsidio = 0.15;
    } else if (estrato === 5) {
        porcentajeContribucion = 0.50;
    } else if (estrato === 6) {
        porcentajeContribucion = 0.60;
    }

    let estrato = number (prompt ("Estrato invalidado"))     


    alert("El consumo de energía eléctrica es: " + consumo + " kWh");
    alert("El valor del subsidio es: " + subsidio);
    alert("El valor de la contribución es: " + contribucion);
    alert("El total a pagar es: " + total);
} else {
    alert("Dato inválido. Por favor, ingrese valores válidos.");
}