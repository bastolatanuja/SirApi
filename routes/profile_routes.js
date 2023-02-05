const express = require('express')
const uploadImage = require('../middleware/upload')
const Profile = require('../models/profile')

const router = express.Router()

router.route('/')
.get()
.post(uploadImage.single('profile'),(req,res,next) =>{
    Profile.create({
        ...req.body,
        image: req.file.filename,
        user:req.user.userId
    }).then(profile => {
        res.status(201).json(profile)
    }).catch(next)
    
})
    //create profile

.delete()

router.route('/:profile_id')
.get()
.put()
.delete()
module.exports = router