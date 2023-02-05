const express = require('express')
const router = express.Router()
const categoryController =require('../controllers/category-controller')
const { push } = require('../data/category')

router.route('/')
.get(categoryController.getAllCategory)
.post(categoryController.createCategory)
.put((req,res) => {
    res.status(501).json({'msg':'not implemented'})
})
.delete(categoryController.deleteAllCategory)

router.route('/:category_id')
.get(categoryController.getCategoryById)
.post((req,res) => {
    res.status(501).json({'msg':'not implemented'})
})
.put(categoryController.updateCategoryById)
.delete(categoryController.deleteCategoryById)

module.exports = router