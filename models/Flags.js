const { default: mongoose } = require("mongoose");

const flagScheme = new mongoose.Schema({
    imageURL: String,
    options: Array,
    correctAnswer: String,
})

const Flags = mongoose.model('flags', flagScheme);

module.exports = Flags;