var numeroY = prompt("Introduce un numero (puede ser decimal)");
var numeroX = prompt("Introduce otro numero (puede ser decimal)");

console.log("El número Y redondeado al alza al siguiente entero: " + Math.ceil(numeroY));
console.log("El número X redondeado a la baja al anterior entero: " + Math.floor(numeroX));
console.log("El entero más proximo de Y: " + Math.round(numeroY));
console.log("Un valor aleatorio entre 0 y 1: " + Math.random());
console.log("Un valor de X elevado a Y: " + Math.pow(numeroX,numeroY));
console.log("Raíz cuadrada de Y: " + Math.sqrt(numeroY));
console.log("El maximo y el minimo entre X e Y: " + "max: " + Math.max(numeroX,numeroY) + ", min: " + Math.min(numeroX,numeroY));
