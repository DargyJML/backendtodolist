const mongoose = require("mongoose");

const todolistSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Todolist', todolistSchema);