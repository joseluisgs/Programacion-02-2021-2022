import read from 'readline-sync';
import aux from './mod-2-19';

// Bisiesto
let año: number;
let esBisiesto = false;
let mes: string;

año = read.questionInt('Ingrese un año: ');
mes = read.question('Ingrese un mes: ');


esBisiesto = aux.esBisiesto(año);

if (esBisiesto)
  console.log("El año: " + año + " es bisiesto")
else
  console.log("El año: " + año + " no es bisiesto")

aux.imprimirDias(mes, esBisiesto);