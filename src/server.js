const express = require('express');
const cors = require('cors');
require('dotenv').config();

const produtoRoutes = require('./routes/produtoRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Rota de status
app.get('/', (req, res) => {
  res.json({ mensagem: 'API funcionando!', versao: '1.0.0' });
});

// Rotas
app.use('/produtos', produtoRoutes);

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
