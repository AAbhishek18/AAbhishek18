const PublisherModel=require("../models/publisherModel")

// 2nd API,a POST api that creates a publisher from the details in the request body

const createPublisher=async function(req,res){
    let publisher=req.body

    //if(publisher.publisher_id){
        let createdPublisher=await PublisherModel.create(publisher)
    res.send({publisher:createdPublisher})
        }
        // else if(typeof(publisher.publisher_id)!=="object"){
        //     res.send({msg:"Enter valid Id"})
        // }
        // else {
        //     res.send({msg:"Publisher id is required"})
        // }
    
// }

const getPublisher=async function(req,res){
   
    let publisherDetails=await PublisherModel.find()
    res.send({data:publisherDetails})
}
module.exports.createPublisher=createPublisher
module.exports.getPublisher=getPublisher