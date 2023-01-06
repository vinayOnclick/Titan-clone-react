const express = require('express')
// import { addProduct, deleteProduct, getProductById, getProducts, updateProduct } from '../controller/productController'
const productController = require('../controller/productController')

const router = express.Router()

router.get('/', productController.getProducts)

router.get('/:id', productController.getProductById)

router.post('/', productController.addProduct)

router.patch('/:id', productController.updateProduct)

router.delete('/:id', productController.deleteProduct)

module.exports = router;
