const express = require('express')



const blogRoute = require('./routes/blogRoute')




const app = express()

app.use(express.json())

app.use('/blog', blogRoute)


module.exports = app

