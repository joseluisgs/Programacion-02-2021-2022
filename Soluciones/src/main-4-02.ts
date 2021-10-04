import read from 'readline-sync';
import chalk from 'chalk'

let numero1: number;
let numero2: number;
let dividendo, divisor: number;
let cociente: number = 0;
let resto: number;

console.log("División Entera");

do {
    numero1 = read.questionInt("Ingrese el primer numero: ");
    numero2 = read.questionInt("Ingrese el segundo numero: ");
} while ((numero1 < 0 || numero2 < 0) || (numero2 > numero1));

dividendo = numero1;
divisor = numero2;

while (numero1 >= numero2) {
  cociente++;
  numero1 = numero1 - numero2;
}

resto = numero1;

console.log("El resultado de dividir: " + dividendo + " entre " + divisor + " es: " + cociente + " con un resto de: " + resto);

