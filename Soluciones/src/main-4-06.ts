import read from 'readline-sync';
import chalk from 'chalk';

let precio: number = 0;
let distancia: number = 0;
let dias: number = 0;
const PRECIO_KM = 2.5;
const LIMITE_KM = 800;
const LIMITE_DIA = 7;
const REDUCION = 0.3;

distancia = read.questionInt('Ingrese la distancia a recorrer: ');
dias = read.questionInt('Introduce el número dias: ');

if (distancia < LIMITE_KM && dias < LIMITE_DIA)
  precio = (distancia * PRECIO_KM) * (1 - REDUCION);
else
  precio = distancia * PRECIO_KM;

console.log("EL precio del billete es: " + precio);


