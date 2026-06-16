const Produto = require('../models/produtoModel');

// GET /produtos
const listarProdutos = async (req, res) => {
  try {
    const produtos = await Produto.findAll();
    res.json(produtos);
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao buscar produtos', detalhe: error.message });
  }
};

// GET /produtos/:id
const buscarProduto = async (req, res) => {
  try {
    const produto = await Produto.findById(req.params.id);
    if (!produto) return res.status(404).json({ erro: 'Produto não encontrado' });
    res.json(produto);
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao buscar produto', detalhe: error.message });
  }
};

// POST /produtos
const criarProduto = async (req, res) => {
  try {
    const { nome, descricao, preco, quantidade } = req.body;
    if (!nome || !preco) {
      return res.status(400).json({ erro: 'Nome e preço são obrigatórios' });
    }
    const id = await Produto.create({ nome, descricao, preco, quantidade });
    const novoProduto = await Produto.findById(id);
    res.status(201).json(novoProduto);
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao criar produto', detalhe: error.message });
  }
};

// PUT /produtos/:id
const atualizarProduto = async (req, res) => {
  try {
    const { nome, descricao, preco, quantidade } = req.body;
    const afetados = await Produto.update(req.params.id, { nome, descricao, preco, quantidade });
    if (!afetados) return res.status(404).json({ erro: 'Produto não encontrado' });
    const produtoAtualizado = await Produto.findById(req.params.id);
    res.json(produtoAtualizado);
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao atualizar produto', detalhe: error.message });
  }
};

// DELETE /produtos/:id
const deletarProduto = async (req, res) => {
  try {
    const afetados = await Produto.delete(req.params.id);
    if (!afetados) return res.status(404).json({ erro: 'Produto não encontrado' });
    res.json({ mensagem: 'Produto deletado com sucesso' });
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao deletar produto', detalhe: error.message });
  }
};

module.exports = { listarProdutos, buscarProduto, criarProduto, atualizarProduto, deletarProduto };
