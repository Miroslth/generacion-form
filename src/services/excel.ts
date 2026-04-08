import { EstudianteExcel } from '../types';
import { validarColumnaExcel } from './validacion';

interface ResultadoExcel {
  exito: boolean;
  mensaje: string;
  datos?: EstudianteExcel[];
}

export function procesarExcel(
  columnas: string[],
  datos: EstudianteExcel[],
): ResultadoExcel {
  if (!validarColumnaExcel(columnas)) {
    return { exito: false, mensaje: 'Estructura de archivo incorrecta' };
  }

  if (datos.length === 0) {
    return { exito: false, mensaje: 'El archivo no contiene datos' };
  }
  const cursoInvalido = datos.some((e) => e['Curso'] < 1 || e['Curso'] > 6);
  
  if (cursoInvalido) {
    return { exito: false, mensaje: 'Curso debe ser un numeral entre 1 y 6' };
  }

  return { exito: true, mensaje: 'Archivo procesado correctamente', datos };
}