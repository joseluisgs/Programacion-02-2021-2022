import read from 'readline-sync';
// Mis funciones

/**
 * Función que devuelve V/F si queremos continuar
 * @param mensaje Mensaje a mostrar
 * @returns true si continuamos, false si no
 */
function confirmacion(mensaje: string): boolean {
  let opcion = read.question(mensaje + ' (s/n): ');
  let continuar = false;
  if (opcion == 's' || opcion == 'S')
    continuar = true;
  else
    continuar = false;
  // Devolvemos porque somos una funcion
  return continuar;
}


// Exportamos las funciones que queramos que sea publicas
export default { confirmacion};