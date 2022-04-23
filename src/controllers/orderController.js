const orderModel=require('../models/orderModel')
const productMoldel = require('../models/productMoldel')
const userModel = require('../models/userModel')




 const createOrder= async function(req,res){
    //  let user=req.isFreeAppUser
    //  if(!req.body.userId&& !req.body.productId)
    //  return res.send({msg:"UserId and productId is mandatory"})
    //  let userBalance=await userModel.findOne({_id:req.body.userId}).select('balance')
    //  let productPrice=await productMoldel.findOne({_id:req.body.productId}).select('price')
    //  if(!user && userBalance.balance>=productPrice.price)
     let createdOrder= await orderModel.create(order)

     res.send({msg:createdOrder})
 }
 module.exports.createOrder=createOrder