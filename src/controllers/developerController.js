const developerModel= require("../models/developerModel")

const createDeveloper= async function (req, res) {
    let developer = req.body
    let developerCreated = await developerModel.create(developer)
    res.send({data: developerCreated})
}
const getscholarshipDeveloper=async function(req,res){
    let getscholarship= await developerModel.find({percentage:{$gte:70}})
    res.send({data:getscholarship})
}
const getDeveloperOnValue=async function(req,res){
    let percentage=req.params.percentage
    console.log(percentage)
    let program=req.params.program
    let getDevelopersByValue=await developerModel.find({percentage},{program})
    res.send({msg:getDevelopersByValue})
}


const getAllDeveloper=async function(req,res){

    let getDeveloper=await developerModel.find().populate('batch_id')
    res.send({msg:getDeveloper})
}

// const getAuthorsData= async function (req, res) {
//     let authors = await AuthorModel.find()
//     res.send({data: authors})
//}

module.exports.createDeveloper= createDeveloper
module.exports.getscholarshipDeveloper=getscholarshipDeveloper
module.exports.getDeveloperOnValue=getDeveloperOnValue
module.exports.getAllDeveloper=getAllDeveloper
//module.exports.getAuthorsData= getAuthorsData