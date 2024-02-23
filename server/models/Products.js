const mongoose = require('mongoose')




const productSchema = new mongoose.Schema({ 
  //define data schema
  title: {
   type: String,
   required: true
  },
  description: {
   type: String,
   required: true
  },
  category: {
    type: String,
    required: true
  },
  ownner: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  price: {
   type: Number,
   required: true
  },
  promo: {
   type: Number,
   required: true
  },
})

const ProductModel = mongoose.model("products", productSchema)
module.exports = ProductModel