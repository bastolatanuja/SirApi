const express=require('express')
const booksController =require('../controllers/books-controller')
const reviewsController =require('../controllers/reviews-controller')
const {verifyUser} = require('../middleware/auth')
const {verifyAdmin} = require('../middleware/auth')
const { push } = require('../data/books')

// const books=require('../data/books')

const router =express.Router()
router.route('/')
.get(booksController.getAllBooks)
.post(verifyUser,booksController.createABooks)
.put((req, res) => {
    res.status(501).json({'msg':"Not Implemented"})
})
.delete(verifyUser,verifyAdmin, booksController.deleteABooks)

router.use(verifyUser)
    .route('/:id')
    .get(booksController.getBookById)

.post((req,res)=>{
    res.status(501).json({'msg':"Not implemented"})
})
.put(booksController.updateBookById)

.delete(booksController.deleteBookById)

router.route('/:id/reviews')
.get(reviewsController.getAllReviews)
.post(verifyUser,reviewsController.createReviews)
.put((req,res) => res.status(500).json({'msg': 'Not implemented'}))
.delete(reviewsController.deleteAllReviews)



router.route('/:id/reviews/:review_id')
.get(reviewsController.getReviewsbyId)
.post((req,res) => res.status(501).json({ 'msg':'not implemented'}))
.put(reviewsController.updateReviewById)
.delete(reviewsController.deleteReviewById)


module.exports=router