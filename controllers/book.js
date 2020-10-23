const BookModel = require('../models/book')

exports.create = (req, res) => {
    if (Object.entries(req, res).length == 0) {
        return res.status(400).send({
            message: 'Los campos no pueden estar vacios'
        })
    }
    const book = new BookModel({
        name: req.body.name,
        author: req.body.author,
        pageNumber: req.body.pageNumber,
        publisher: req.body.publisher,
        publicationDate: req.body.publicationDate,
        genre: req.body.genre
    })
    book.save()

    .then((dataBook) => {
            res.send(dataBook)
        }
    ).catch((error) => {
            return res.status(500).send({
                message: error.message
            })
        }
    )
}

exports.update = (req, res) => {
    if (Object.entries(req, res).length == 0) {
        return res.status(400).send({
            message: 'Los campos no pueden estar vacios'
        })
    }
    
    const book = {
        name: req.body.name,
        author: req.body.author,
        pageNumber: req.body.pageNumber,
        publisher: req.body.publisher,
        publicationDate: req.body.publicationDate,
        genre: req.body.genre
    }
    BookModel.findByIdAndUpdate(req.params.id, book, {new: true})
    .then(
        (bookUpdated) => {
            res.send(bookUpdated)
        }
    ).catch(
        (error) => {
            return res.status(500).send({
                message: error.message
            })
        }
    )

    
}
