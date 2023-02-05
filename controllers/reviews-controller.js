const Book = require('../models/Books')

const { nextDay } = require('date-fns')

const getAllReviews = (req,res, next) =>{
    Book.findById(req.params.id)
    .then((book) => {
        res.json(book.reviews)
    }).catch(next)

}

const createReviews = (req,res, next) =>{

    req.body.reviewer = req.user.userId
    Book.findById(req.params.id)
    .then((book) => {
        book.reviews.push(req.body)
        book.save().then(b => res.json(b.reviews))
    }).catch(next)
}

const deleteAllReviews = (req,res, next) =>{
    Book.findById(req.params.id)
    .then((book) => {
        book.reviews= []
        book.save().then(b => res.json(b.reviews))
    }).catch(next)
    
}

const getReviewsbyId = (req,res,next) => {
    Book.findById(req.params.id)
    .then(book => {
        res.json(book.reviews.id(req.params.review_id))
    }).catch(next)
}

const updateReviewById =(req,res,next) => {
    Book.findById(req.params.id)
    .then(book => {
    let updated_reviews = book.reviews.map((item) => {
            if(item.id == req.params.review_id  &&  item.reviewer == req.user.userId){
            item.body = req.body.body
           
            }
            return item
        })
        book.review = updated_reviews
        book.save().then(book => res.json(book.reviews))
    }).catch(next)
}

const deleteReviewById = (req,res,next) => {
    Book.findById(req.params.id)
        .then(book => {
            let updated_reviews = book.reviews.filter((item) =>{
                return item.id != req.params.review_id
            
            })
            book.reviews = updated_reviews
            book.save().then( book => res.json(book.reviews))

        }).catch(next)
    }


module.exports={
    getAllReviews,
    createReviews,
    deleteAllReviews,
    getReviewsbyId,
    updateReviewById,
    deleteReviewById
}