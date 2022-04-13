const mongoose=require('mongoose');

const authorSchema= new mongoose.Schema({
    author_id:{
        type:String,
        required:true
    },
    author_name:String,
    age:Number,
    address:String

})
module.exports=mongoose.model('Authors',authorSchema)//authors