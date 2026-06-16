# 📦 Projeto Back-end — API REST com Node.js, Express e MySQL

API REST completa com operações de CRUD integradas ao banco de dados MySQL.

---

## 🛠️ Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MySQL2](https://www.npmjs.com/package/mysql2)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [CORS](https://www.npmjs.com/package/cors)

---

## 📁 Estrutura de Pastas

```
projeto-backend/
├── src/
│   ├── config/
│   │   └── database.js       # Conexão com o banco de dados
│   ├── controllers/
│   │   └── produtoController.js  # Lógica das requisições
│   ├── models/
│   │   └── produtoModel.js   # Queries SQL
│   ├── routes/
│   │   └── produtoRoutes.js  # Definição das rotas
│   └── server.js             # Ponto de entrada da aplicação
├── .env.example              # Exemplo de variáveis de ambiente
├── .gitignore
├── package.json
└── README.md
```

---

## ⚙️ Pré-requisitos

- [Node.js](https://nodejs.org/) v18 ou superior
- [MySQL](https://www.mysql.com/) instalado e rodando

---

## 🚀 Como Instalar e Executar

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure as variáveis de ambiente

Copie o arquivo `.env.example` e renomeie para `.env`:

```bash
cp .env.example .env
```

Edite o arquivo `.env` com suas credenciais do MySQL:

```env
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=sua_senha_aqui
DB_NAME=projeto_db
PORT=3000
```

### 4. Crie o banco de dados no MySQL

```sql
CREATE DATABASE projeto_db;
```

> A tabela `produtos` será criada automaticamente ao iniciar o servidor.

### 5. Inicie o servidor

```bash
# Modo produção
npm start

# Modo desenvolvimento (com auto-reload)
npm run dev
```

O servidor estará disponível em: `http://localhost:3000`

---

## 📋 Rotas da API

| Método | Rota            | Descrição                  |
|--------|-----------------|----------------------------|
| GET    | `/`             | Status da API              |
| GET    | `/produtos`     | Listar todos os produtos   |
| GET    | `/produtos/:id` | Buscar produto por ID      |
| POST   | `/produtos`     | Criar novo produto         |
| PUT    | `/produtos/:id` | Atualizar produto por ID   |
| DELETE | `/produtos/:id` | Deletar produto por ID     |

---

## 🧪 Testando com Postman ou Insomnia

### Criar produto (POST)
- **URL:** `http://localhost:3000/produtos`
- **Body (JSON):**
```json
{
  "nome": "Produto Teste",
  "descricao": "Descrição do produto",
  "preco": 29.90,
  "quantidade": 10
}
```

### Atualizar produto (PUT)
- **URL:** `http://localhost:3000/produtos/1`
- **Body (JSON):**
```json
{
  "nome": "Produto Atualizado",
  "descricao": "Nova descrição",
  "preco": 49.90,
  "quantidade": 5
}
```

---

## 👥 Equipe

- Integrante 1
- Integrante 2
- Integrante 3
