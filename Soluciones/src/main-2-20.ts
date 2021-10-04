import read from 'readline-sync';

// Bisiesto
let año: number;
let esBisiesto = false;
let mes: string;

año = read.questionInt('Ingrese un año: ');
mes = read.question('Ingrese un mes: ');


// Aprende las preferencias :):)
if (año % 4 == 0 && año % 100 != 0 || año % 400 == 0) {
  esBisiesto = true;
  console.log("El año "+ año + " es bisiesto"); 
} else {
  esBisiesto = false;
  console.log("El año "+ año + " no es bisiesto");
}

switch (mes) {
  case 'enero':
    console.log("El mes de enero tiene 31 días");
    break;
  case 'febrero':
    if (esBisiesto)
      console.log("El mes de febrero tiene 29 días");
    else
      console.log("El mes de febrero tiene 28 días");
    break;
  case 'marzo':
    console.log("El mes de marzo tiene 31 días");
    break;
  case 'abril':
    console.log("El mes de abril tiene 30 días");
    break;
  case 'mayo':
    console.log("El mes de mayo tiene 31 días");
    break;
  case 'junio':
    console.log("El mes de junio tiene 30 días");
    break;
  case 'julio':
    console.log("El mes de julio tiene 31 días");
    break;
  case 'agosto':
    console.log("El mes de agosto tiene 31 días");
    break;
  case 'septiembre':
    console.log("El mes de septiembre tiene 30 días");
    break;
  case 'octubre':
    console.log("El mes de octubre tiene 31 días");
    break;
  case 'noviembre':
    console.log("El mes de noviembre tiene 30 días");
    break;
  case 'diciembre':
    console.log("El mes de diciembre tiene 31 días");
    break;
  default:
    console.log("El mes ingresado no existe");
    break;
}