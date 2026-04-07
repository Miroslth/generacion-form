import { validarCorreo, validarColumnaExcel } from '../services/validacion';
import { COLUMNAS_REQUERIDAS } from '../types/types';

describe('validarCorreo', () => {
  it('debe aceptar un correo válido', () => {
    expect(validarCorreo('profesor@gmail.com')).toBe(true);
  });

  it('debe rechazar un correo sin @', () => {
    expect(validarCorreo('profesorgmail.com')).toBe(false);
  });

  it('debe rechazar un correo vacío', () => {
    expect(validarCorreo('')).toBe(false);
  });

  it('debe rechazar correo sin dominio', () => {
    expect(validarCorreo('profesor@')).toBe(false);
  });
});

describe('validarColumnaExcel', () => {
  it('debe aceptar columnas correctas', () => {
    expect(validarColumnaExcel(COLUMNAS_REQUERIDAS)).toBe(true);
  });

  it('debe rechazar si falta una columna', () => {
    const columnas = ['Nombres estudiante', 'Apellidos estudiante'];
    expect(validarColumnaExcel(columnas)).toBe(false);
  });

  it('debe rechazar columnas incorrectas', () => {
    const columnas = ['Nombre', 'Apellido', 'Nivel', 'Curso', 'Nacimiento'];
    expect(validarColumnaExcel(columnas)).toBe(false);
  });

  it('debe rechazar columnas en diferente orden', () => {
    const columnas = [...COLUMNAS_REQUERIDAS].reverse();
    expect(validarColumnaExcel(columnas)).toBe(false);
  });
});