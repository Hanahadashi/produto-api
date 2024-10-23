const pool = require('../../db');
const queries = require('./queries');

const getProduct = (req, res) => {
    pool.query("SELECT * FROM produto", (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const getProductById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getProductById, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const createProduct = (req, res) => {
    const { descrição, preço, estoque } = req.body;
    pool.query(
        "INSERT INTO produto (descrição, preço, estoque) VALUES ($1, $2, $3)", 
        [descrição, preço, estoque], 
        (error, results) => {
            if (error) throw error;
            res.status(201).send("Produto criado com sucesso");
        }
    );
};

const updateProduct = (req, res) => {
    const id = parseInt(req.params.id);
    const { descrição, preço, estoque } = req.body;

    pool.query(
        "UPDATE produto SET descrição = $1, preço = $2, estoque = $3 WHERE id = $4",
        [descrição, preço, estoque, id],
        (error, results) =>{
            if (error) throw error;
            res.status(200).send(`Produto com ID: ${id} atualizado com sucesso`);
        }
    );
};

const deleteProduct = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query("DELETE FROM produto WHERE id = $1", [id], (error, results) => {
        if (error) throw error;
        res.status(200).send(`Produto deletado com sucesso, ID: ${id}`);
    });
};

module.exports = {
    getProduct,
    getProductById,
    updateProduct,
    createProduct,
    deleteProduct,
};
