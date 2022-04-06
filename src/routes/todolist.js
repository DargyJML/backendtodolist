
const express = require("express");
const todolistSchema = require("../models/todolist");

const router = express.Router();

// create todolist 
router.post('/todolists', (req, res) => {
    const todolist = todolistSchema(req.body);
    todolist
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});


// get all todolist - editar
router.get('/todolists', (req, res) => {
    todolistSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get a todolist - buscar por id

router.get('/todolists/:id', (req, res) => {
    const { id } = req.params;
    todolistSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// update a todolist

router.put('/todolists/:id', (req, res) => {
    const { id } = req.params;
    const { title } = req.body;
    todolistSchema
    .updateOne({ _id: id }, { $set: {title} })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// delete a todolist

router.delete('/todolists/:id', (req, res) => {
    const { id } = req.params;
    todolistSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;