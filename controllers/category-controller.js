const category = require('../models/Category')
//const book = require('../models/Books')
const books = require('../data/category')

const getAllCategory =(req, res,next)=> {
    category.find()
    .then(category => res.json(category))
        .catch(err=> next(err))
}

const createCategory = (req,res,next) => {
    category.create(req.body)
    .then(category => res.status(201).json(category))
    .catch(next)
}

const deleteAllCategory = (req,res,next) => {
    category.deleteMany()
    .then(reply=> res.json(reply))
    .catch(next)
}

const getCategoryById = (req,res,next) => {
    category.findById(req.params.category_id)
    .populate('books')
    .then(category=> res.json(category))
    .catch(next)
}

const updateCategoryById = (req,res,next) => {
    category.findByIdAndUpdate(req.params.category_id,
        {$set:req.body},{new:true})
    .then(category=> res.json(category))
    .catch(next)
}

const deleteCategoryById = (req,res,next) => {
    category.findByIdAndDelete(req.params.category_id)
    .then(reply=> res.json(reply))
    .catch(next)
}


module.exports={
getAllCategory,
createCategory,
deleteCategoryById,
updateCategoryById,
getCategoryById,
deleteAllCategory 

}