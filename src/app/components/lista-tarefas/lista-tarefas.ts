import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

interface Tarefa {
  id?: number;
  titulo: string;
  descricao: string;
  status: string;
  dataCriacao?: Date;
}

@Component({
  selector: 'app-lista-tarefas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './lista-tarefas.html',
  styleUrls: ['./lista-tarefas.css']
})
export class ListaTarefasComponent implements OnInit {
  tarefas: Tarefa[] = [];
  novaTarefa: Tarefa = {
    titulo: '',
    descricao: '',
    status: 'Pendente'
  };
  private apiUrl = 'http://localhost:5158/api/Tarefas';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.carregarTarefas();
  }

  carregarTarefas(): void {
    this.http.get<Tarefa[]>(this.apiUrl).subscribe({
      next: (dados) => {
        this.tarefas = dados;
        console.log('Tarefas carregadas:', this.tarefas);
      },
      error: (erro) => {
        console.error('Erro:', erro);
      }
    });
  }

  adicionarTarefa(): void {
    if (!this.novaTarefa.titulo) {
      alert('Digite um título');
      return;
    }

    this.http.post<Tarefa>(this.apiUrl, this.novaTarefa).subscribe({
      next: () => {
        this.carregarTarefas();
        this.novaTarefa = { titulo: '', descricao: '', status: 'Pendente' };
        alert('Tarefa adicionada!');
      },
      error: (erro) => {
        console.error('Erro:', erro);
        alert('Erro ao adicionar');
      }
    });
  }

  excluirTarefa(id: number): void {
    if (confirm('Tem certeza?')) {
      this.http.delete(`${this.apiUrl}/${id}`).subscribe({
        next: () => {
          this.carregarTarefas();
          alert('Tarefa excluída!');
        },
        error: (erro) => console.error('Erro:', erro)
      });
    }
  }
}