export interface Docente {
  nombreCompleto: string;
  correo: string;
  institucion: string;
}

export interface EstudianteExcel {
  'Nombres estudiante': string;
  'Apellidos estudiante': string;
  'Primaria/secundaria': string;
  Curso: number;
  'Fecha de nacimiento': string;
}

export const COLUMNAS_REQUERIDAS: (keyof EstudianteExcel)[] = [
  'Nombres estudiante',
  'Apellidos estudiante',
  'Primaria/secundaria',
  'Curso',
  'Fecha de nacimiento',
];
