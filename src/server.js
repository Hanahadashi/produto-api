const express = require("express");
const cors = require("cors"); // Importe o pacote CORS
const productRoutes = require("./products/routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use('/produtos', productRoutes);

app.listen(3000, () => console.log('server running on port 3000'));
