interface ResultadoInstitucion {
  exito: boolean;
  mensaje: string;
}

const catalogo: string[] = [
  'Colegio San Simon',
  'Unidad Educativa Bolivia',
  'Colegio Nacional Sucre',
];

export function obtenerInstituciones(): string[] {
  return catalogo;
}

export function agregarInstitucion(nombre: string): ResultadoInstitucion {
  if (!nombre) {
    return { exito: false, mensaje: 'El nombre de la institución es requerido' };
  }

  if (catalogo.includes(nombre)) {
    return { exito: false, mensaje: 'La institución ya existe' };
  }

  catalogo.push(nombre);
  return { exito: true, mensaje: 'Institución agregada correctamente' };
}