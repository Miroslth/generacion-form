import { COLUMNAS_REQUERIDAS } from '../types/index';

export function validarCorreo(correo: string): boolean {
  if (!correo) return false;

  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(correo);
}

export function validarColumnaExcel(columnas: string[]): boolean {
  if (columnas.length !== COLUMNAS_REQUERIDAS.length) return false;

  return COLUMNAS_REQUERIDAS.every((col, index) => col === columnas[index]);
}
