const userModel = require("../models/userModel")

//USER MIDDLEWARE 
const userMW=  function ( req, res, next) {
    console.log("Hi I am a middleware named commonMW")

let available=req.headers.isfreeappuser
let headers=req.headers
 console.log("Contents in header:",headers)
  if(available){
      if(available==="true")
      req['isFreeAppUser']=true
      if(available==="false")
      req['isFreeAppUser']=false
      next()
     }
else{
    res.send("Missing header is mandatory")
}
}
// ORDER MIDDLEWARE
const orderMW= function(req,res,next){
    let available=req.headers.isfreeappuser
    if(!available){
        res.send("Missing header is mandatory")
    }
    else{
        next()
    }
} 
    //counter
   

// module.exports.mid1= mid1
// module.exports.mid2= mid2
// module.exports.mid3= mid3
// module.exports.mid4= mid4
module.exports.userMW=userMW
module.exports.orderMW=orderMW
