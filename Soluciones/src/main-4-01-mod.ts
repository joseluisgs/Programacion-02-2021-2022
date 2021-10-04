import read from 'readline-sync';
import chalk from 'chalk';
import aux from './mod-4-01'

// Suma de los n primeros números primos

let limite: number = 0;
let suma: number = 0;

do {
  limite = read.questionInt(chalk.yellow('Dime un número: '));
} while (limite <= 0);

// Repetimos hasta el limite
for (let num = 2; num <= limite; num++) {
  // Vamos a comprobar si es primo
  if (aux.esPrimo(num)) {
    suma += num;
  }
}

console.log(chalk.green("El resultado de la suma de los números primos entre 1 y " + limite + " es: " + suma));

// // Mis Funciones
// function esPrimo(num: number): boolean {
//   let esPrimo = true;
//   let contador = 2;
//   while ((esPrimo) && (contador != num)) {
//     if (num % contador == 0)
//       esPrimo = false;
//     contador++;
//   }
//   return esPrimo;
// }