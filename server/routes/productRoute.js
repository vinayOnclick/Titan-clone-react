const express = require('express')
const Product = require('../models/Product')

const router = new express.Router()

router.get('/product', async (req, res) => {
    try {
        const products = await Product.find({})
        res.status(200).send(products)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.get('/product/:id', async (req, res) => {
    try {
        const product = await Product.findOne({_id: req.params.id})
        if(!product) {
            res.status(404).send({ error: 'Product not found'})
        }
        res.status(200).send(product)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.post('/product', async (req, res) => {
    try {
        const newProduct = new Product({
            ...req.body,
            owner: req.user._id,
        })
        await newProduct.save()
        res.status(201).send(newProduct)
    } catch(error) {
        console.log(error)
        res.status(400).send(error)
    }
})

router.delete('/product/:id', async (req, res) => {
    try {
        const deleteProduct = await Product.findOneAndDelete({_id: req.params.id})
        if(!deleteProduct) {
            res.status(404).send({ error: 'Product not found'})
        }
        res.send(deleteProduct)
    } catch (error) {
        res.status(400).send(error)
    }
})

module.exports = router;