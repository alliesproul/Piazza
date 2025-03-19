// app.js

const express = require('express')
const app = express() 

const mongoose = require('mongoose')
const bodyParser = require('body-parser')

require('dotenv/config')
app.use(bodyParser.json())

const postsRoute = require('./routes/posts')
const authRoute = require('./routes/auth')

app.use('/api/user',authRoute)
app.use('/api/post',postsRoute)

app.get('/', (req,res)=>{
    res.send('Welcome to Piazza')
})

const MURL = 'mongodb+srv://alliesproul8:1234@cluster0.kkpr1.mongodb.net/Posts?retryWrites=true&w=majority&appName=Cluster0'

mongoose.connect(MURL).then(()=>{
    console.log('You mongoDB connector is on')
})

app.listen(4000, ()=>{
    console.log('Server is running')
})