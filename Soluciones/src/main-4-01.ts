import read from 'readline-sync';
import chalk from 'chalk';

// Suma de los n primeros números primos

let limite: number = 0;
let suma: number = 0;

do {
  limite = read.questionInt(chalk.yellow('Dime un número: '));
} while (limite <= 0);

// Repetimos hasta el limite
for (let num = 2; num <= limite; num++) {
  // Vamos a comprobar si es primo
  let primo = true;
  let contador = 2;
  while ((primo) && (contador != num)) {
    if (num % contador == 0)
      primo = false;
    contador++;
  }

  // Si es primo, lo sumamos
  if (primo) 
    suma += num;

}

console.log(chalk.green("El resultado de la suma de los números primos entre 1 y " + limite + " es: " + suma));

