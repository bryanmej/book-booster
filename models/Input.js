const mongoose = require('mongoose')
const {Schema} = mongoose

const InputSchema = new Schema({
  pages: Number,
  review: String,
  rating: Number,
},
{
  timestamps:true,
  versionKey:false,
})

const Input = mongoose.model("Input", InputSchema)

module.exports = Input