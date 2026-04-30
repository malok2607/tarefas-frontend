// src/app/services/tarefa.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tarefa } from '../models/tarefa.model';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {
  // ATENÇÃO: Use a PORTA correta do seu back-end
  // (veja no terminal do back-end qual porta está rodando)
  private apiUrl = 'http://localhost:5158/api/Tarefas';

  constructor(private http: HttpClient) { }

  getTarefas(): Observable<Tarefa[]> {
    return this.http.get<Tarefa[]>(this.apiUrl);
  }

  createTarefa(tarefa: Tarefa): Observable<Tarefa> {
    console.log('📤 Enviando tarefa:', tarefa);
    return this.http.post<Tarefa>(this.apiUrl, tarefa);
  }

  updateTarefa(id: number, tarefa: Tarefa): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, tarefa);
  }

  deleteTarefa(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}