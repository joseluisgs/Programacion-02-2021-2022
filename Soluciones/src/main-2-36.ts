import read from 'readline-sync';
import chalk from 'chalk'

// Zona de declaración
let numero1: number;
let numero2: number;
let simbolo: string;
let continuar = true;
let opcion: string
let resultado: number = 0;
let posible = true;

do {
  numero1 = read.questionFloat("Ingresa el primer número: ");
  numero2 = read.questionFloat("Ingresa el segundo número: ");

  // Menú para el simbolo de operación
  do {
    simbolo = read.question("Ingresa el simbolo de operación (+,-,*,/): ");
  } while (simbolo != "+" && simbolo != "-" && simbolo != "*" && simbolo != "/");

  // Realizamos la operacion
  switch (simbolo) {
    case "+":
      resultado = numero1 + numero2;
      posible = true
      break;
    case "-":
      resultado = numero1 - numero2;
      posible = true
      break;
    case "*":
      resultado = numero1 * numero2;
      posible = true
      break;
    case "/":
      if (numero2 != 0) {
        resultado = numero1 / numero2;
        posible = true;
      } else {
        posible = false;
      }
      break;
  }

  // Mostramos el resultado si ha sido posible el calculo
  if (posible)
    console.log(chalk.green("El resultado es: " + resultado.toFixed(2)));
  else
    console.log(chalk.red("No se puede dividir entre 0"));

  opcion = read.question("¿Desea continuar? (s/n) ");
  if (opcion == "s" || opcion == "S")
    continuar = true;
  else
    continuar = false;
} while (continuar);

