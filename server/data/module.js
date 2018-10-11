const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/badapple')

let userSchema = new mongoose.Schema({
    username: String,
    password: String,
    create_at: String,
    comment: Number,
    isAdmin: Boolean,
})
let article = new mongoose.Schema({
    title: String,
    content: String,
    category: String,
    author: {
        type: String,
        default:'admin',
    },
    create_at: {
        type: String,
        default: Date.now()
    },
    comment: {
        type: Array,
        default: []
    },
    views: {
        type: Number,
        default: 0,
    },
    like: {
        type: Number,
        default: 0,
    }
})
let category = new mongoose.Schema({
    title: String,
})
Model = {
        player: mongoose.model('player',userSchema),
        article: mongoose.model('article',article),
        category: mongoose.model('category',category),
}
module.exports = Model