const pool = require('../db');
const queries = require('./queries');



const getProduct = (req, res) => {
    pool.query("SELECT * FROM produtos", (error, results) => {
        if (error) {
            return res.status(500).json({ error: 'Erro ao buscar produtos' });
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
            return res.status(500).json({ error: 'Erro ao buscar produto' });
        }
        if (results.rows.length === 0) {
            return res.status(404).json({ error: 'Produto não encontrado' });
        }
        res.status(200).json(results.rows[0]);
    });
};

const createProduct = (req, res) => {
    const { descrição, preço, estoque } = req.body;
    pool.query(
        "INSERT INTO produtos (descrição, preço, estoque) VALUES ($1, $2, $3) RETURNING id", 
        [descrição, preço, estoque], 
        (error, results) => {
            if (error) {
                return res.status(500).json({ error: 'Erro ao criar produto' });
            }
            res.status(201).json({ message: "Produto criado com sucesso", id: results.rows[0].id });
        }
    );
};

const updateProduct = (req, res) => {
    const id = parseInt(req.params.id);
    const { descrição, preço, estoque } = req.body;

    pool.query(
        "UPDATE produtos SET descrição = $1, preço = $2, estoque = $3 WHERE id = $4",
        [descrição, preço, estoque, id],
        (error, results) => {
            if (error) {
                console.error("Erro ao atualizar produto:", error);
                return res.status(500).json({ error: 'Erro ao atualizar produto' });
            }
            if (results.rowCount === 0) {
                return res.status(404).json({ error: 'Produto não encontrado' });
            }
            res.status(200).json({ message: `Produto com ID: ${id} atualizado com sucesso` });
        }
    );
};

const deleteProduct = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query("DELETE FROM produtos WHERE id = $1", [id], (error, results) => {
        if (error) {
            console.error("Erro ao deletar produto:", error);
            return res.status(500).json({ error: 'Erro ao deletar produto' });
        }
        if (results.rowCount === 0) {
            return res.status(404).json({ error: 'Produto não encontrado' });
        }
        res.status(200).json({ message: `Produto deletado com sucesso, ID: ${id}` });
    });
};

module.exports = {
    getProduct,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
};
