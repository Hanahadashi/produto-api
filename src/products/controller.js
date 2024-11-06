const pool = require('../db');
const queries = require('./queries');

const getProduct = async (req, res) => {
    try {
        const results = await pool.query(queries.getProducts);
        res.status(200).json(results.rows);
    } catch (error) {
        console.error("Erro ao buscar produtos:", error);
        res.status(500).json({ error: 'Erro ao buscar produtos' });
    }
};

const getProductById = async (req, res) => {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
        return res.status(400).json({ error: "ID inválido" });
    }
    try {
        const results = await pool.query(queries.getProductById, [id]);
        if (results.rows.length === 0) {
            return res.status(404).json({ error: 'Produto não encontrado' });
        }
        res.status(200).json(results.rows[0]);
    } catch (error) {
        console.error("Erro ao buscar produto:", error);
        res.status(500).json({ error: 'Erro ao buscar produto' });
    }
};

const createProduct = async (req, res) => {
    const { description, price, quantity } = req.body;
    if (!description || price == null || quantity == null) {
        return res.status(400).json({ error: "Todos os campos são obrigatórios" });
    }
    try {
        const results = await pool.query(queries.createProduct, [description, price, quantity]);
        res.status(201).json({ message: "Produto criado com sucesso", id: results.rows[0].id });
    } catch (error) {
        console.error("Erro ao criar produto:", error);
        res.status(500).json({ error: 'Erro ao criar produto' });
    }
};

const updateProduct = async (req, res) => {
    const id = parseInt(req.params.id);
    const { description, price, quantity } = req.body;
    if (!description || price == null || quantity == null) {
        return res.status(400).json({ error: "Todos os campos são obrigatórios" });
    }

    try {
        const results = await pool.query(queries.updateProduct, [description, price, quantity, id]);
        if (results.rowCount === 0) {
            return res.status(404).json({ error: 'Produto não encontrado' });
        }
        res.status(200).json({ message: `Produto com ID: ${id} atualizado com sucesso` });
    } catch (error) {
        console.error("Erro ao atualizar produto:", error);
        res.status(500).json({ error: 'Erro ao atualizar produto' });
    }
};

const deleteProduct = async (req, res) => {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
        return res.status(400).json({ error: "ID inválido" });
    }
    try {
        const results = await pool.query(queries.deleteProduct, [id]);
        if (results.rowCount === 0) {
            return res.status(404).json({ error: 'Produto não encontrado' });
        }
        res.status(200).json({ message: `Produto deletado com sucesso, ID: ${id}` });
    } catch (error) {
        console.error("Erro ao deletar produto:", error);
        res.status(500).json({ error: 'Erro ao deletar produto' });
    }
};

module.exports = {
    getProduct,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
};
