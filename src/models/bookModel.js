const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
     bookName:{
         type:String,
         required:true
     },
     authorName:String,
     categoriy:String,
     year:String
  
}, { timestamps: true });

module.exports = mongoose.model('Book', bookSchema) //book



// String, Number
// Boolean, Object/json, array