const books = require('../data/books')

const getAllBooks = (req,res) => {
    res.json(books)

}

const createABooks= (req,res)=>{
     newBook={
        'id':books[books.length-1].id+1,
        'title':req.body.title,
        'author':req.body.author
    }
    books.push(newBook)
    res.status(201).send(books)
    
    }

    const updatedBooks =(re,res)=>{
        res.status(501).send("This is not implemented")
    }

    const deleteBooks = (req,res)=>{
        res.json({})
    }

    
    const getABooks= (req,res) => {
        let theBook=books.find((item)=>{
        return item.id==req.params.id
        })
        res.json()=theBook
    
    }

    const updateABooks= (req,res)=>{
        let updatedBooks=books.map((item)=>{
            if(item.id==req.params.id){
                item.title=req.body.title,
                item.author=req.body.author
            }
            return item
        })
        res.json(updatedBooks)
        
        }

    const deleteABooks  = (req,res)=>{
        let updatedBooks=
        books.filter(item=>item.id!=req.params.id)
        res.json(updatedBooks)
    }

module.exports ={
    getAllBooks,
    createABooks,
    updatedBooks,
    deleteBooks,
    getABooks,
    updateABooks,
    deleteABooks
}