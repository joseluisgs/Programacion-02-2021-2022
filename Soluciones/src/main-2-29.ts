import read from 'readline-sync';
import chalk from 'chalk'

// Zona de decllaracion de variables
let continuar = true;
let aprobados = 0;
let suspensos = 0;
let suficientes = 0;
let bienes = 0;
let notables = 0;
let sobresalientes = 0;
let alumnos: number;
let media: number;

// Lo primero es crea un menú que nos diga si queremos salir o parar de introducir datos
do {
    console.log(chalk.blue('¿Quieres salir? (si/no)'));
    let salir = read.question();
    if (salir == 'si') {
        continuar = false;
    } else {
        continuar = true;
    }
} while (continuar);

// Mostramos las estadisticas
console.log(chalk.blue('Estadisticas:'));
console.log(chalk.green('Aprobados: ' + aprobados));
console.log(chalk.red('Suspensos: ' + suspensos));
console.log(chalk.yellow('Suficientes: ' + suficientes));
console.log(chalk.magenta('Bienes: ' + bienes));
console.log(chalk.cyan('Notables: ' + notables));
console.log(chalk.greenBright('Sobresalientes: ' + sobresalientes));
