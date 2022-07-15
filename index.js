const express = require('express')

const mongoose = require('mongoose')
const app = express();
const booksRoute = require('./routes/books')
const PORT = process.env.PORT || 8080


//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//routes
app.use('/api/books',booksRoute)

//connect to db
mongoose.connect(process.env['MONGO_URL'], { useNewUrlParser: true }).then(() => {
  mySecret =
    console.log('connected to mongodb atlas')
}).catch(error=>{
  console.log('error occured',error)
})



app.listen(PORT, () => {
  console.log('Server running at ', PORT)
})