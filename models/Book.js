const mongoose = require("mongoose")
const { Schema }   = mongoose

const bookSchema = new Schema({
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