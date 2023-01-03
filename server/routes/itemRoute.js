const express = require('express')
const Item = require('../models/Item')

const router = new express.Router()

router.get('/item', async (req, res) => {
    try {
        const items = await Item.find({})
        res.status(200).send(items)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.get('/item/:id', async (req, res) => {
    try {
        const item = await Item.findOne({_id: req.params.id})
        if(!item) {
            res.status(404).send({ error: 'Item not found'})
        }
        res.status(200).send(item)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.post('/item', async (req, res) => {
    try {
        const newItem = new Item({
            ...req.body,
            owner: req.user._id,
        })
        await newItem.save()
        res.status(201).send(newItem)
    } catch(error) {
        res.status(400).send(error)
    }
})

router.delete('/item/:id', async (req, res) => {
    try {
        const deleteItem = await Item.findOneAndDelete({_id: req.params.id})
        if(!deleteItem) {
            res.status(404).send({ error: 'Item not found'})
        }
        res.send(deleteItem)
    } catch (error) {
        res.status(400).send(error)
    }
})

module.exports = router;