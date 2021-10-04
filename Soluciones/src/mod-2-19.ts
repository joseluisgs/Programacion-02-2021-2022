/**
 * Función que calcula si un año es bisiesto
 * @param año Año a calcular si es bisiesto
 * @returns Bisiesto es true
 */
function esBisiesto(año: number): boolean {
  let esBisiesto: boolean;
  if (año % 4 == 0 && año % 100 != 0 || año % 400 == 0) {
    esBisiesto = true;
  } else {
    esBisiesto = false;
  }
  // Devuelvo porque soy funcion
  return esBisiesto;
}

/**
 * Procedimiento que imprime los dias de un mes sabiendo si el año es bisioesto o no
 * @param mes mes como cadena. Ejem: enero, febrero, marzo, etc.
 * @param esBisiesto True si es bisiesto
 */
function imprimirDias(mes: string, esBisiesto: boolean) {
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
}

export default { esBisiesto, imprimirDias };