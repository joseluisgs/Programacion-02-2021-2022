import read from 'readline-sync';
import chalk from 'chalk'

// Imprimir los numeros del 1 al 100 que son pares

// Bucle para numeros pare
for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

let resultado = 0;
let inferior, superior;
// Suma los números impares entre dos intervalos de menor a mayor

// Vamos a ciclar hasta que los metan de menor a mayor
do {
    inferior = read.questionInt('Introduce el número inferior: ');
    superior = read.questionInt('Introduce el número superior: ');
} while (inferior >= superior);

// es un bucle definido desde inferior a superior
for (let i = inferior; i <= superior; i++) {
    resultado += i; // equivale a resultado = resultado +1
}

console.log("El resultado es: " + resultado);
