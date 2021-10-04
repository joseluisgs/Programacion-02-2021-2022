// Zona de declaración de librerías y módulos propios o del sistema
// ers importante que sepas que aunque nos apoyemos en determinadas librerías hay que saber implementar determinadas operaciones
import read from 'readline-sync'; // --> Librería para leer datos por consola. Puedes leer sobre ella y aprender a usarla en: https://github.com/anseki/readline-sync
import chalk from 'chalk'; // --> Podemos obtener colores para decorar nuestra salida. Puedes leer sobre ella y aprender a usarla en: https://github.com/chalk/chalk


// Zona de declaración de variables y constantes. 
// Variables con let y constante con const
// Tipos: number (con signo y sin signo incluyendo decimales), string (cadenas y carácteres) y boolean (true o false)
let edad = 10;
let nombre, apellido: string;
const NUM_PI = 3.14;
let verdadero = true;
let contador = 0;

// Salida de texto, con comillas simples o dobles
console.log(edad);
console.log("Tu edad es de " + edad + " años");

// Salida con colores, le decimos a chalk el color
console.log(chalk.blue('Hola') + ' Clase' + chalk.red('!'));

// Entrada de texto conb read.question. Siempre se lee un string
nombre = read.question('¿Cómo te llamas? ');
console.log('Tu nombre: ' + nombre);

apellido = read.question("¿Cuál es tu apellido? ");
console.log('Tu apellido: ' + apellido);

// Si queremos leer un número, hay que poner un tipo de dato: questionInt (entero) o questionFloat (decimales)
edad = read.questionInt("¿Cuál es tu edad directamente? ");

// Si quiero leer una tecla, puedo usar read.keyIn y decir donde
verdadero = Boolean(read.keyInYN());
// Podemos poner verdadero o verdadero==true
if (verdadero) {
    console.log('Sí has pulsado Y');
} else {
  console.log('Has pulsado N')
}

// Haciendo el casting a numero. ¿Adivinas el problema?
edad = Number(read.question("¿Cuál es tu edad con casting? "));

console.log('Imprimo una constante: ' + NUM_PI);
console.log(chalk.blue.bgYellowBright.bold('¡Hola: ' + nombre + ' ' + apellido + ' y tienes ' + edad +'!'));

// Esto es un comentario de una línea de código
// Si quiero comentar varias líneas debo poner // en cada una de de ellas

/*
  Esto es un comentario de bloque de código
  Si quiero comentar varias líneas debo poner /* en cada una de de ellas
  Y cerrarlo con 
*/

// Condicionales
if (edad >= 10){
  console.log('Verdadero');
} else {
  console.log('Falso');
}

// Condicionales multiples con if
if (edad >= 10){
  console.log('Mayor que 10');
} else if (edad >= 5) {
  console.log('Menor que 10 y mayor que 5');
} else {
  console.log('Menor que 5');
} 

// Condicionales múltiples con swich. El default es el caso por defecto. Break para salir
switch (edad) {
  case 10:
    console.log('Edad 10');
    break;
  case 20:
    console.log('Edad 20');
    break;
  default:
    console.log('Edad no es 10 ni 20');
}

// Bucles indefinidos
// While, primero comprueba la condición, luego entra
contador = 0;
while (contador<10){
  console.log('Contador: ' + contador);
  contador++; // equivale a contador = contador +1
}

contador = 10;
// repetir mientras, primero ejecuta y luego comprueba la condición por si debe repetirse
do {
  console.log('Contador: ' + contador);
  contador++; // equivale a contador = contador +1
} while (contador < 10)

// Bucle indefinidos con for
for (let i = 0; i < 10; i++) {
  console.log('Contador: ' + i);
}
