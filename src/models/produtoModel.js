const pool = require('../config/database');

// Criar tabela se não existir
const criarTabela = async () => {
  const sql = `
    CREATE TABLE IF NOT EXISTS produtos (
      id INT AUTO_INCREMENT PRIMARY KEY,
      nome VARCHAR(100) NOT NULL,
      descricao TEXT,
      preco DECIMAL(10, 2) NOT NULL,
      quantidade INT DEFAULT 0,
      criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `;
  await pool.query(sql);
};

criarTabela();

const Produto = {
  // Listar todos
  findAll: async () => {
    const [rows] = await pool.query('SELECT * FROM produtos ORDER BY id DESC');
    return rows;
  },

  // Buscar por ID
  findById: async (id) => {
    const [rows] = await pool.query('SELECT * FROM produtos WHERE id = ?', [id]);
    return rows[0];
  },

  // Criar
  create: async ({ nome, descricao, preco, quantidade }) => {
    const [result] = await pool.query(
      'INSERT INTO produtos (nome, descricao, preco, quantidade) VALUES (?, ?, ?, ?)',
      [nome, descricao, preco, quantidade]
    );
    return result.insertId;
  },

  // Atualizar
  update: async (id, { nome, descricao, preco, quantidade }) => {
    const [result] = await pool.query(
      'UPDATE produtos SET nome = ?, descricao = ?, preco = ?, quantidade = ? WHERE id = ?',
      [nome, descricao, preco, quantidade, id]
    );
    return result.affectedRows;
  },

  // Deletar
  delete: async (id) => {
    const [result] = await pool.query('DELETE FROM produtos WHERE id = ?', [id]);
    return result.affectedRows;
  },
};

module.exports = Produto;
