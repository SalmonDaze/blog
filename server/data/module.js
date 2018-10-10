const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/badapple')

let userSchema = new mongoose.Schema({
    username: String,
    password: String,
    create_at: String,
    comment: Number,
    isAdmin: Boolean,
})
Model = {
        player: mongoose.model('player',userSchema)
}
module.exports = Model