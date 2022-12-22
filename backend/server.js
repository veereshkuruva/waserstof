const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT || 8080
const dbConnect =require('./db')
const cors = require("cors");
const userRoute = require('./routes/routes')

app.use(express.json())
app.use(cors());

app.use('/topic', userRoute)



dbConnect("mongodb://localhost:27017/addTopic",).then(data => {
  app.listen(port, () => {
      console.log(`Db connected, server is running http://localhost:${port}`)
  })
  

}).catch(error => {
  console.log("Error is connected,",error)
})


