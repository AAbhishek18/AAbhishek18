
const deleteMW=function(req,res, next){

    // is token comming in [x-auth-geaders] or not
  let token=req.headers["ax-Auth-token"];
  if(!token) token=req.headers["ax-auth-token"];

  if(!token)
  {
    return res.send({status:false,msg:"Token must be present"})
  }
  // token validation
  let decodedToken=jwt.verify(token,"functionup-thorium");
  if(!decodedToken)
  {
   return res.send({status:false,msg:"Token not valid"})
  }
  next()
}
const getUseDateMW=function(req,res,next){
    let token = req.headers["x-Auth-token"];
  // console.log(token)
  if (!token) token = req.headers["x-auth-token"];
   

  //If no token is present in the request header return error
  if (!token) return res.send({ status: false, msg: "token must be present" });

//  console.log(token);
  
  // If a token is present then decode the token with verify function
  // verify takes two inputs:
  // Input 1 is the token to be decoded
  // Input 2 is the same secret with which the token was generated
  // Check the value of the decoded token yourself
  let decodedToken = jwt.verify(token, "functionup-thorium");
  console.log(decodedToken)
  if (!decodedToken){
    return res.send({ status: false, msg: "token is invalid" });
  }

}
module.exports.deleteMW=deleteMW
module.exports.getUseDateMW=getUseDateMW