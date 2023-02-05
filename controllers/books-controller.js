const books = require('../data/books')
const Book = require('../models/Books')

const getAllBooks =(req, res,next)=> {
    Book.find()
    .then(books => res.json(books))
        .catch(err=> next(err))
}

const createABooks= (req, res,next) =>{
    Book.create(req.body)
    .then(book => res.status(201).json(book))
    .catch(err => next(err))
}

const deleteABooks =(req, res,next) =>{
    Book.deleteMany()
    .then(reply => res.json(reply))
    .catch(err=> next(err))
}

const getBookById= (req, res,next)=>{
    Book.findById(req.params.id)
    .populate('category')
    .then(reply => res.json(reply))
    .catch(next)
}
const updateBookById= (req, res,next) => {
    Book.findByIdAndUpdate(req.params.id,{$set: req.body})
    .then(book => res.json(book))
    .catch(next)
}

const deleteBookById= (req, res,next) =>{
    Book.findByIdAndDelete(req.params.id)
    .then(book => res.json(book))
    .catch(next)
}
module.exports = {
    getAllBooks,
    createABooks,
    deleteABooks,
    getBookById,
    updateBookById,
    deleteBookById
}