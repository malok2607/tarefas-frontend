// src/app/models/tarefa.model.ts
export interface Tarefa {
  id?: number;
  titulo: string;
  descricao: string;
  status: string;
  dataCriacao?: Date;
}