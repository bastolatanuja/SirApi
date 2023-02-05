// const date = require('date-fns')
// const uuid = require('uuid')

// const logEvents = (message) => {
    
// }

// console.log(new Date())
// console.log(date.format(new Date(), 'yyyy/MM/dd'))
// console.log(date.format(new Date(), 'yyyy/MM/dd'))

// const logger = require ('./logger')
// logEvent("New events from index")

// const { nextDay } = require('date-fns')
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const booksRouter = require('./routes/books_router')
const categoryRouter = require('./routes/category_router')
const userRouter = require('./routes/user-router')
const profileRouter = require('./routes/profile_routes')
const auth = require('./middleware/auth')
const profile = require('./models/profile')

const app = express()

//Connect to MobgoDB
mongoose.set('strictQuery', true)
mongoose.connect('mongodb://127.0.0.1:27017/mydb')
    .then(()=>{
        console.log('connected to MongoDB database')
    }).catch((err) => console.log(err))

// 1. Application level middleware
app.use('/',(req, res, next) =>{
    console.log(`${req.method} ${req.path}`)
    next()
})
app.use(express.json())

app.use(cors())

//2. Router level middleware
app.use('/users',userRouter)
app.use(auth.verifyUser)
app.use('/books', booksRouter)
app.use('/category', categoryRouter)
app.use('/profile',profileRouter)

//3. In-built middleware
app.use(express.json())

//4.Error handling middleware
app.use((err,req, res,next) =>{
    console.log(err.stack)
   if (res.statusCode == 200) res.status(500)
    res.json({'err':err.message})
})

// app.get('/',(req, res) =>{
//     res.send('Hello world')
// })

// app.post('/books',(req, res) => {
//     res.send('Book created!')
// })

app.listen(3005, () =>{
    console.log('App is running in port 3005!')
})