const mongoose = require('mongoose')


const UserSchema = new mongoose.Schema({
  username: {
    type:String,
    unique:true,
  },
  email: {
    type:String,
    unique:true,
  },
  password:{
    type:String,
    unique:false,
  },
  fname: {
    type:String,
    unique:false,
  },
  lname: {
    type:String,
    unique:false,
  }
})

const UserModel = mongoose.model("users", UserSchema)
module.exports = UserModel