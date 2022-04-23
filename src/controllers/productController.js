const productModel=require('../models/productMoldel')

// 1 PROBLEM
const createProduct=async function(req,res){
    let product=req.body
    let createdProduct=await productModel.create(product)
    res.send({msg:createdProduct})
}
module.exports.createProduct=createProduct