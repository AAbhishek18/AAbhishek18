const { count } = require("console")
const bookModel = require("../models/bookModel")
const BookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const bookList= async function (req, res) {
     //let bookName=req.body
    let allBooks= await BookModel.find( ) 
    res.send({msg: allBooks})

}
const getBooksInYear=async function(req,res){
    let getYear=req.body.year 
    let bookInYear=await BookModel.find({year:getYear})
    
    res.send({msg:bookInYear})
}
const getParticularBooks=async function(req,res){
    let inputObj=req.body
    let particularBook=await BookModel.find(inputObj);
    res.send({data:particularBook})
}
const getXINRBooks=async function(req,res){
   // let gettPrice=req.body.price 
    let getXINRBooks=await BookModel.find({"price.indianPrice":{$in:["100INR","200","500"]}})
    res.send({msg:getXINRBooks})
}
const getRandomBooks=async function(res,req){
let randomBook=await BookModel.find()
res.send({bata:randomBook})
}

module.exports.createBook= createBook
module.exports.bookList= bookList
module.exports.getBooksInYear=getBooksInYear
module.exports.getParticularBooks=getParticularBooks
module.exports.getXINRBooks=getXINRBooks
module.exports.getRandomBooks=getRandomBooks