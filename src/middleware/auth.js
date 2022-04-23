
const jwt=require('jsonwebtoken')
const userModel = require('../models/userModel')

//check the token in request header
    //validate this token
    const validateToken =  function(req,res,next){

        let token = req.headers['x-Auth-Token'] || req.headers['x-auth-token']
    
        if(!token){
            res.send({status:false,msg:"token must be present"})
        }
        let decodedToken = jwt.verify(token,"functionup-thorium")
        if(!decodedToken){
            res.send({status:false,msg:"token is invalid"})
        }
    
        next()
    }
    

    
const authorise = function(req, res, next) {
    // // comapre the logged in user's id and the id in request
    let token=req.headers['x-Auth-Token']||req.headers['x-auth-token'] 
   let decodedToken=jwt.verify(token,"functionup-thorium")
    let userUpdate=req.params.userId
    let userLogged=decodedToken.userId
    if(userUpdate!=userLogged){
        return res.send({status:false,msg:"logged user not allowed to modify"})
    }
     
    // let user=await usserModel.findById(req.params.userId)
    // if(!user){ return req.send({status:false,msg:"User not exist"})}
    // let userData=req.body
    // let updatedUserData= await userModel.findOneAndUpdate({_id:userId},userData)
    // req.send({status:updatedUserData,data:updatedUserData})
  
    next()
}

module.exports={validateToken,authorise}