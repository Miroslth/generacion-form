import { Docente } from '../types';
import { validarCorreo } from './validacion';

interface ResultadoRegistro {
  exito: boolean;
  mensaje: string;
  confirmacion?: string;
}

export function registrarDocente(docente: Docente): ResultadoRegistro {
  if (!docente.nombreCompleto) {
    return { exito: false, mensaje: 'El nombre es requerido' };
  }

  if (!validarCorreo(docente.correo)) {
    return { exito: false, mensaje: 'Correo inválido' };
  }

  if (!docente.institucion) {
    return { exito: false, mensaje: 'La institución es requerida' };
  }

  return { exito: true, mensaje: 'Registro exitoso' , confirmacion: `Se ha enviado una confirmación a ${docente.correo}`,};
}