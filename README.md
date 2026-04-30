# Gerenciador de Tarefas - Front-end

Interface web desenvolvida em **Angular** para gerenciamento de tarefas, consumindo uma API REST. Projeto desenvolvido como parte do desafio técnico de bootcamp.

## Tecnologias utilizadas

- **Angular** (Standalone Components)
- **TypeScript**
- **HTML5 / CSS3**
- **HttpClient** (comunicação com API)
- **Reactive Forms / ngModel**

## Funcionalidades

- ✅ Listar todas as tarefas cadastradas
- ✅ Adicionar nova tarefa
- ✅ Excluir tarefa existente
- ✅ Interface responsiva e amigável

## Estrutura do Projeto
frontend-tarefas/
├── src/
│ ├── app/
│ │ ├── components/
│ │ │ └── lista-tarefas/ # Componente principal
│ │ ├── services/
│ │ │ └── tarefa.service.ts # Serviço de comunicação com API
│ │ ├── models/
│ │ │ └── tarefa.model.ts # Interface Tarefa
│ │ ├── app.config.ts # Configuração (HttpClient)
│ │ ├── app.ts # Componente raiz
│ │ └── app.html # Template principal
│ ├── assets/
│ └── index.html
├── angular.json
├── package.json
└── README.md


## Como executar o projeto

### Pré-requisitos

- [Node.js](https://nodejs.org) (versão 18 ou superior)
- [Angular CLI](https://angular.io/cli)
- Back-end rodando (API: http://localhost:5158)

### Instalação do Angular CLI
npm install -g @angular/cli

# Clone o repositório
git clone https://github.com/malok2607/tarefas-frontend.git

# Entre na pasta do projeto
cd tarefas-frontend

# Instale as dependências
npm install

# Execute o projeto
ng serve

Acesse: http://localhost:4200

O front-end consome a API REST disponível em:
http://localhost:5158/api/Tarefas

Certifique-se de que o back-end esteja rodando antes de usar o front-end.
Repositório do back-end: https://github.com/malok2607/tarefas-api

Como usar
Adicionar tarefa: Preencha os campos (Título, Descrição, Status) e clique em "+ Adicionar"
Excluir tarefa: Clique no botão "Excluir" ao lado da tarefa desejada
Visualizar tarefas: As tarefas são carregadas automaticamente ao iniciar a aplicação

A interface é simples e intuitiva, com campos para:

Título da tarefa
Descrição detalhada
Status (Pendente / Concluída)

##Autor

Fernando Rangel de Albuquerque Neto
GitHub: @malok2607
