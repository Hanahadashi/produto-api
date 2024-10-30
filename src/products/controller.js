const pool = require('../../db');
const queries = require('./queries');

const getProduct = (req, res) => {
    pool.query(queries.getProducts, (error, results) => {
        if (error) {
            return res.status(500).json({ error: "Erro ao buscar produtos" });
        }
        res.status(200).json(results.rows);
    });
};

const getProductById = (req, res) => {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
        return res.status(400).json({ error: "ID inválido" });
    }
    pool.query(queries.getProductById, [id], (error, results) => {
        if (error) {
            return res.status(500).json({ error: "Erro ao buscar produto por ID" });
        }
        if (results.rows.length === 0) {
            return res.status(404).json({ error: "Produto não encontrado" });
        }
        res.status(200).json(results.rows[0]);
    });
};

const createProduct = (req, res) => {
    const { descrição, preço, estoque } = req.body;
    if (!descrição || !preço || estoque === undefined) {
        return res.status(400).json({ error: "Dados inválidos. Preencha todos os campos corretamente." });
    }

    pool.query(queries.createProduct, [descrição, preço, estoque], (error, results) => {
        if (error) {
            return res.status(500).json({ error: "Erro ao criar produto" });
        }
        res.status(201).json({ message: "Produto criado com sucesso", id: results.insertId });
    });
};

const updateProduct = (req, res) => {
    const id = parseInt(req.params.id);
    const { descrição, preço, estoque } = req.body;

    if (isNaN(id)) {
        return res.status(400).json({ error: "ID inválido" });
    }
    if (!descrição || !preço || estoque === undefined) {
        return res.status(400).json({ error: "Dados inválidos. Preencha todos os campos corretamente." });
    }

    pool.query(queries.updateProduct, [descrição, preço, estoque, id], (error, results) => {
        if (error) {
            return res.status(500).json({ error: "Erro ao atualizar produto" });
        }
        if (results.rowCount === 0) {
            return res.status(404).json({ error: "Produto não encontrado" });
        }
        res.status(200).send(`Produto com ID: ${id} atualizado com sucesso`);
    });
};

const deleteProduct = (req, res) => {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
        return res.status(400).json({ error: "ID inválido" });
    }
    pool.query(queries.deleteProduct, [id], (error, results) => {
        if (error) {
            return res.status(500).json({ error: "Erro ao deletar produto" });
        }
        if (results.rowCount === 0) {
            return res.status(404).json({ error: "Produto não encontrado" });
        }
        res.status(200).send(`Produto deletado com sucesso, ID: ${id}`);
    });
};

module.exports = {
    getProduct,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
};
