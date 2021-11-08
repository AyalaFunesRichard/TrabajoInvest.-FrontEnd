export class Cronograma {
  Id_Cronograma: string;
  Nombre_Tarea: string;
  Fecha_Inicio: string;
  Fecha_Fin: string;
  Duracion: string;
  Completado: string;
  Actividades_Previa: string;
  Responsable: string;
  Presupuesto: string;
  Semaforo: string;
  Estado: string;

  constructor(
    id: string,
    nombre: string,
    responsable: string,
    previa: string,
    inicio: string,
    fin: string,
    presupuesto: string,
    completado: string,
    duracion: string,
  ){
  this.Id_Cronograma = id;
  this.Nombre_Tarea = nombre;
  this.Fecha_Inicio = inicio;
  this.Fecha_Fin = fin;
  this.Duracion = duracion;
  this.Completado = completado;
  this.Actividades_Previa = previa;
  this.Responsable = responsable;
  this.Presupuesto = presupuesto;
  this.Semaforo = "VERDE";
  this.Estado = "PROCESO";
  }
}
