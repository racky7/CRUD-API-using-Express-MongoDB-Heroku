const express = require('express')
const router = express.Router()
const {Book, validateBook} = require('../models/books')

//POST : CREATE A NEW BOOK
router.post('/', async (req,res)=>{
  const error = await validateBook(req.body);
  if(error.message) res.status(400).send(error.message)
  book = new Book({
    name:req.body.bookName,
    author:{
      name:req.body.authorName,
      age:req.body.authorAge
    },
    genre:req.body.genre
  })
  book.save().then(book=>{
    res.send(book)
    console.log('book added')
  }).catch(error=>{
    res.status(500).send("Book was not stored in db")
  })
})

//GET All boos

router.get("/",(req,res)=>{
  Book.find().then(books => res.send(books)).catch((error)=>{
    res.status(500).send("Something went wrong")
  })
})

// GET The Book by ID

//method 1

// router.get("/:bookId", (req,res)=>{
//   Book.findById(req.params.bookId).then(book=>{
//     if(book) res.send(book);
//     res.status(404).send("Book not found")
//   }).catch((error)=>{
//     res.status(500).send(error.message);
//   })
// })

//method 2 - with async await - easy one

router.get("/:bookId", async (req,res)=>{
  const book = await Book.findById(req.params.bookId)
  if(!book) res.status(404).send("Book not found")
  res.send(book)
})



module.exports = router;