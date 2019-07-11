const mongoose = require("mongoose")
const { Schema }   = mongoose
const Input = require('../models/Input')

const bookSchema = new Schema({
  image: String,
  title: String,
  author: String,
  //userInput: [ { type : Schema.Types.ObjectId, ref: 'Input' } ]
  pages: Number,
  review: String,
  rating: Number,
}, 
{
  timestamps: true,
  versionKey: false
})

const Book = mongoose.model("Book", bookSchema)

module.exports = Book