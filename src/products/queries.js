const getProducts = "SELECT * FROM produtos";
const getProductById = "SELECT * FROM produtos WHERE id = $1";
const createProduct = "INSERT INTO produtos (descricao, preco, estoque) VALUES ($1, $2, $3) RETURNING *";
const updateProduct = "UPDATE produtos SET descricao = $1, preco = $2, estoque = $3 WHERE id = $4 RETURNING *";
const deleteProduct = "DELETE FROM produtos WHERE id = $1 RETURNING *";

module.exports = {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
};
