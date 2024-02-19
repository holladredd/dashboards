const express = require('express')
const mongoose = require('mongoose') 
const cors = require('cors') 
const UserModel = require('./models/Users')
const app = express()
app.use(cors())
app.use(express.json())


// mongoose.connect("mongodb+srv://holladred:<password>@cluster0.ktzkx0h.mongodb.net/holladredd?retryWrites=true&w=majority")
mongoose.connect("mongodb://127.0.0.1:27017")

app.post("./Signup", (req, res) =>{
    UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.listen(3001, () =>{
    console.log("server is running")
})