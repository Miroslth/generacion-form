import { procesarExcel } from '../services/excel';
import { COLUMNAS_REQUERIDAS } from '../types';

describe('procesarExcel', () => {
  it('debe rechazar si faltan columnas requeridas', () => {
    const columnasIncorrectas = ['Nombre', 'Apellido', 'Nivel'];
    const resultado = procesarExcel(columnasIncorrectas, []);
    expect(resultado.exito).toBe(false);
    expect(resultado.mensaje).toBe('Estructura de archivo incorrecta');
  });

  it('debe aceptar columnas correctas con datos', () => {
    const columnas = COLUMNAS_REQUERIDAS as string[];
    const datos = [
      {
        'Nombres estudiante': 'Juan',
        'Apellidos estudiante': 'Perez',
        'Primaria/secundaria': 'Primaria',
        'Curso': 3,
        'Fecha de nacimiento': '2015-01-01',
      },
    ];
    const resultado = procesarExcel(columnas, datos);
    expect(resultado.exito).toBe(true);
    expect(resultado.mensaje).toBe('Archivo procesado correctamente');
  });

  it('debe rechazar si no hay datos', () => {
    const columnas = COLUMNAS_REQUERIDAS as string[];
    const resultado = procesarExcel(columnas, []);
    expect(resultado.exito).toBe(false);
    expect(resultado.mensaje).toBe('El archivo no contiene datos');
  });
});

it('debe rechazar curso fuera de rango', () => {
    const columnas = COLUMNAS_REQUERIDAS as string[];
    const datos = [
      {
        'Nombres estudiante': 'Juan',
        'Apellidos estudiante': 'Perez',
        'Primaria/secundaria': 'Primaria',
        'Curso': 7,
        'Fecha de nacimiento': '2015-01-01',
      },
    ];
    const resultado = procesarExcel(columnas, datos);
    expect(resultado.exito).toBe(false);
    expect(resultado.mensaje).toBe('Curso debe ser un numeral entre 1 y 6');
  });

  it('debe rechazar curso 0', () => {
    const columnas = COLUMNAS_REQUERIDAS as string[];
    const datos = [
      {
        'Nombres estudiante': 'Juan',
        'Apellidos estudiante': 'Perez',
        'Primaria/secundaria': 'Primaria',
        'Curso': 0,
        'Fecha de nacimiento': '2015-01-01',
      },
    ];
    const resultado = procesarExcel(columnas, datos);
    expect(resultado.exito).toBe(false);
    expect(resultado.mensaje).toBe('Curso debe ser un numeral entre 1 y 6');
  });