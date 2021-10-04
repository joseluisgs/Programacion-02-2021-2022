import read from 'readline-sync';

// Salario de fabrica version Azahara

// Declaracion de variables
const TARIFA_DIURNA = 20;
const TARIFA_NOCTURNA = 35;
const INCREMENTO_DIURNO_DOMINGO = 10;
const INCREMENTO_NOCTURNO_DOMINGO = 15;

let numHorasDiurnas: number;
let numHorasNocturnas: number;
let diaSemana: string;
let salario: number;

numHorasDiurnas = read.questionInt("¿Cuantas horas diurnas has trabajado?:");
numHorasNocturnas = read.questionInt("¿Cuantas horas nocturnas has trabajado?:");
diaSemana = read.question("¿Que día de la semana trabajaste?:");

if (diaSemana == "domingo") {
  salario = numHorasDiurnas * (TARIFA_DIURNA + INCREMENTO_DIURNO_DOMINGO) + numHorasNocturnas * (TARIFA_NOCTURNA + INCREMENTO_NOCTURNO_DOMINGO);
} else {
  salario = numHorasDiurnas * TARIFA_DIURNA + numHorasNocturnas * TARIFA_NOCTURNA;
}

console.log("Tu salario del "+ diaSemana + " es de: " + salario +"€");