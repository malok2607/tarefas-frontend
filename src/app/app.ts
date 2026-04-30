import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaTarefasComponent } from './components/lista-tarefas/lista-tarefas';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ListaTarefasComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  title = 'frontend-tarefas';
}