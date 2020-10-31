const mongoose = require('mongoose')
const express = require('express')

const app = express()

//Middleware
app.use(express.json())

const db = 'mongodb://localhost/todo'

mongoose
    .connect(db, {
        useCreateIndex: true,
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
    .then(() => console.log('Connected to MongoDB Database...'))
    .catch(err => console.log('Database connection error :' + err))
//Use router

app.use('/api/todo',require('./routes/todo'))
    


//Listen to port

const port = 5000;

app.listen(port, () => {
    console.log('Server is started on port'+port)
})