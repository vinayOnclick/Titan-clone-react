const express = require("express");
// import { addProduct, deleteProduct, getProductById, getProducts, updateProduct } from '../controller/productController'
const productController = require("../controller/productController");

const router = express.Router();

router.get("/get_products", productController.getProducts);

router.get("/single_product/:id", productController.getProductById);

router.post("/add_product", productController.addProduct);

router.patch("/update_product/:id", productController.updateProduct);

router.delete("/delete_product/:id", productController.deleteProduct);

module.exports = router;
