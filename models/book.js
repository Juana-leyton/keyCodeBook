const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    name: { type: String, required: true },
    author: { type: String, required: true },
    pageNumber: { type: Number },
    publisher: { type: String, required: true },
    publicationDate: { type: Date },
    genre: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Genre' }]
})

module.exports = mongoose.model('Book', bookSchema)