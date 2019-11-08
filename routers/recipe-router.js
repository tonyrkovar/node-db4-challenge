const express = require('express')

const db = require('../models/recipe-model')

const router = express.Router()

router.get('/', (req, res) => {
    db.find()
        .then(recipes => {
            res.status(200).json(recipes)
        })
        .catch(err => {
            res.status(400).json({ Error: "Could not retrieve recipes" })
        })
})

router.get('/:id', (req, res) => {
    db.findShoppingList(req.params.id)
        .then(list => {
            res.status(200).json(list)
        })
        .catch(err => {
            res.status(400).json({ ERROR: `Could not return shopping list ${err}` })
        })
})

router.get('/:id/instructions', (req, res) => {
    db.getInstructions(req.params.id)
        .then(instructions => {
            res.status(200).json(instructions)
        })
        .catch(err => {
            res.status(400).json({ ERROR: `Could not return shopping list ${err}` })
        })
})

module.exports = router;