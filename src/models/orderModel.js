const mongoose=require('mongoose');
// ORDER SCHEMA
const orderSchema=new mongoose.Schema({
userId:{
    type:String,
    ref:'User'
},
productId:{
    type:String,
    ref:'Product'
},
amount:Number,
isFreeAppUser:Boolean,
date:Date


},
{timestamps:true})

module.exports=mongoose.model('Order',orderSchema);