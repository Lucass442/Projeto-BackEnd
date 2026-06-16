# Projeto Back-end — API REST

API com Node.js, Express e MySQL.

## Requisitos

- Node.js
- MySQL

## Como rodar

1. Clone o repositório e entre na pasta
2. Instale as dependências:
```bash
npm install
```
3. Renomeie `.env.example` para `.env` e coloque sua senha do MySQL
4. Crie o banco de dados no MySQL:
```sql
CREATE DATABASE projeto_db;
```
5. Inicie o servidor:
```bash
npm start
```

Acesse: `http://localhost:3000`

## Rotas

| Método | Rota | Descrição |
|--------|------|-----------|
| GET | `/produtos` | Listar todos |
| GET | `/produtos/:id` | Buscar por ID |
| POST | `/produtos` | Criar |
| PUT | `/produtos/:id` | Atualizar |
| DELETE | `/produtos/:id` | Deletar |

## Equipe

- Esdras
- Lucas
- Luiz D.
- Matheus F.
