const express = require('express')

const mongoose = require('mongoose')
const app = express();

const PORT = process.env.PORT || 8080
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