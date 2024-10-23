const { Router } = require('express');
const controller = require('./controller')

const router = Router();

router.get("/", controller.getProduct);
router.get("/:id", controller.getProductById);
router.put("/:id", controller.updateProduct);
router.delete("/:id", controller.deleteProduct);
router.post("/", controller.createProduct);

module.exports = router;