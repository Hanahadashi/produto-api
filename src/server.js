const express = require("express")
const productRoutes = require("./products/routes")

const app = express();

app.use(express.json());
app.use('/produtos', productRoutes);

app.listen(3000, () => console.log('server running on port 3000'));