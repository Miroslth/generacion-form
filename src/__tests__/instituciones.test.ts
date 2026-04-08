import {
  obtenerInstituciones,
  agregarInstitucion,
} from '../services/instintuciones';

describe('instituciones', () => {
  it('debe retornar el catálogo inicial de instituciones', () => {
    const instituciones = obtenerInstituciones();
    expect(instituciones.length).toBeGreaterThan(0);
  });

  it('debe agregar una nueva institución al catálogo', () => {
    const antes = obtenerInstituciones().length;
    agregarInstitucion('Colegio Nuevo Test');
    const despues = obtenerInstituciones().length;
    expect(despues).toBe(antes + 1);
  });

  it('debe rechazar institución duplicada', () => {
    agregarInstitucion('Colegio Duplicado');
    const resultado = agregarInstitucion('Colegio Duplicado');
    expect(resultado.exito).toBe(false);
    expect(resultado.mensaje).toBe('La institución ya existe');
  });

  it('debe rechazar institución con nombre vacío', () => {
    const resultado = agregarInstitucion('');
    expect(resultado.exito).toBe(false);
    expect(resultado.mensaje).toBe('El nombre de la institución es requerido');
  });
});