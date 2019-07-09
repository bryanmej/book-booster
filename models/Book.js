const mongoose = require("mongoose")
const { Schema }   = mongoose

const bookSchema = new Schema({
  image: String,
  title: String,
  review: String,
  author: String,
  rating: Number
}, 
{
  timestamps: true,
  versionKey: false
})

const Book = mongoose.model("Book", bookSchema)

module.exports = Book