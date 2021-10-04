import read from 'readline-sync';
import chalk from 'chalk'

// Zona de declaraciones
let secreto: number;
let intentos = 5;
let dato: number;
let continuar: boolean;
let opcion: string
let acertado = false;

// Logica del menu y repeticiones. debemos repetir esto hasta que pulse si
do {
  console.log(chalk.cyan("Bienvenid@ al juego de adivinar números de 1ºDAM"));
  // Numero de intentos
  intentos = 5;
  // Número entero aleatorio entre 1 y 100 redondeado
  secreto = Math.round(Math.random() * 100) + 1;

  // Logica de los intentos
  do {

    // Le quito un intento
    intentos = intentos - 1; // También puedo poner intentos-- que es lo mismo que intentos=intentos-1 o intentos -=1

    // Le pregunto el números. Repetimos si no están en el intervalo
    do {
      dato = read.questionInt("Introduce un número entre 1 y 100: ");
    } while (dato < 1 || dato > 100);

    // Si el número es mayor que el secreto
    if (dato > secreto) {
      console.log("El número secreto es menor");
      console.log("Te quedan " + intentos + " intentos");
    } else if (dato < secreto) {
      console.log("El número secreto es mayor");
      console.log("Te quedan " + intentos + " intentos");
    } else if (dato == secreto) {
      // console.log("Has acertado el número secreto en " + (5 - intentos) + " intentos");
      console.log(chalk.green("Has acertado :) El número secreto era: " + secreto + ". Lo has conseguido en " + (5 - intentos)));
      //intentos = 0;
      acertado = true;
    }
    // Si intentos es 0 y no he acertado es que he perdido
    if (intentos == 0 && !acertado) {
      console.log(chalk.red("Has perdido muchach@"));

    }

    // Ciclamos mientras el número es igual al secreto
  } while (intentos >= 1 && acertado == false);

  // Repito hasta que continuar sea false, es decir, no haya pulsado S o s
  opcion = read.question('¿Quieres jugar? (s/n) ');
  if (opcion == 's' || opcion == 'S')
    continuar = true;
  else
    continuar = false;

} while (continuar === true);
console.log(chalk.cyan("Fin del juego"));


