import { registrarDocente } from '../services/registro';
import { Docente } from '../types';

describe('registrarDocente', () => {
  it('debe registrar un docente válido', () => {
    const docente: Docente = {
      nombreCompleto: 'Juan Perez',
      correo: 'juan@gmail.com',
      institucion: 'Colegio San Simon',
    };
    const resultado = registrarDocente(docente);
    expect(resultado.exito).toBe(true);
    expect(resultado.mensaje).toBe('Registro exitoso');
  });

  it('debe rechazar docente sin nombre', () => {
    const docente: Docente = {
      nombreCompleto: '',
      correo: 'juan@gmail.com',
      institucion: 'Colegio San Simon',
    };
    const resultado = registrarDocente(docente);
    expect(resultado.exito).toBe(false);
    expect(resultado.mensaje).toBe('El nombre es requerido');
  });

  it('debe rechazar correo inválido', () => {
    const docente: Docente = {
      nombreCompleto: 'Juan Perez',
      correo: 'correo-invalido',
      institucion: 'Colegio San Simon',
    };
    const resultado = registrarDocente(docente);
    expect(resultado.exito).toBe(false);
    expect(resultado.mensaje).toBe('Correo inválido');
  });

  it('debe rechazar docente sin institución', () => {
    const docente: Docente = {
      nombreCompleto: 'Juan Perez',
      correo: 'juan@gmail.com',
      institucion: '',
    };
    const resultado = registrarDocente(docente);
    expect(resultado.exito).toBe(false);
    expect(resultado.mensaje).toBe('La institución es requerida');
  });
});

  it('debe retornar mensaje de confirmación al registrar', () => {
    const docente: Docente = {
      nombreCompleto: 'Maria Lopez',
      correo: 'maria@gmail.com',
      institucion: 'Colegio San Simon',
    };
    const resultado = registrarDocente(docente);
    expect(resultado.confirmacion).toBe(
      'Se ha enviado una confirmación a maria@gmail.com',
    );
  });