const { count } = require("console")
const { create } = require("domain")
const BookModel= require("../models/bookModel")
const AuthorModel=require("../models/authorModel")


const createBook= async function (req, res) {
    let data= req.body
   let savedData= await BookModel.create(data)
     res.send({msg: savedData})
}

const createAutor=async function(req,res){
    let author=req.body
    let savedAuthor=await AuthorModel.create(author)
    res.send({msg:savedAuthor})
}


const getBooksByAuthorName= async function (req, res) {
    let authorName= await BookModel.find( {author_name: "Chetan Bhagat" } )
    let id=authorName[0].author_id
    console.log(id)
let bookName=await BookModel.find({ahthor_id:id}).select(({name:1}))
res.send({msg:bookName})
    //if (allBooks.length > 0 )  res.send({msg: allBooks, condition: true})
   // else res.send({msg: "No books found" , condition: false})
  
}


const updateBooksPrice= async function (req, res) {
    const booksName=await BookModel.find({name:"Two State"})
    const id= booksName[0].author_id
    let authorName=await AuthorModel.find({author_id:id}).select({author_name:1,id:0})
    
    let book_name=booksName[0].name
    let updatedBooksPrice=await BookModel.findOneAndUpdate({name:book_name},{price:100},{new:true}).select({price:1,_id:0})
    res.send({msg:updatedBooksPrice})
   // let data = req.body // {sales: "1200"}
    // let allBooks= await BookModel.updateMany( 
    //     { author: "SK"} , //condition
    //     { $set: data } //update in data
    // )
    // let allBooks= await BookModel.findOneAndUpdate( 
    //     { authorName: "ABC"} , //condition
    //     { $set: data }, //update in data
    //     { new: true , upsert: true} ,// new: true - will give you back the updated document // Upsert: it finds and updates the document but if the doc is not found(i.e it does not exist) then it creates a new document i.e UPdate Or inSERT  
    //)
     
   //deleteBooks= async function (req, res) {
    // let data = req.body //let allBooks= await BookModel.updateMany( 
       // { authorName: "FI"} , //condition
        ////{ $set: {isDeleted: true} }, //update in data
       // { new: true } ,
    //  )
     
    //  r
   
}
const authorName=async function(req,res){
let book_id=await BookModel.find({price:{$gte:50,$lte:100}}).select({author_name:1,_id:0})
let id=book_id.map(inp =>inp.author_id)
let temp=[]
for(let i=0;i<id;i++){
    let a=id[i]
    let author=await AuthorModel.find({author_id:a}).select(({author_name:1,_id:0}))
    temp.push(author)
}
const authorName=temp.flat()
res.send({msg:authorName})
}
module.exports.createBook= createBook
module.exports.createAutor=createAutor
module.exports.getBooksByAuthorName= getBooksByAuthorName
module.exports.updateBooksPrice= updateBooksPrice
module.exports.authorName=authorName
//module.exports.deleteBooks= deleteBooks
// CRUD OPERATIONS:
// CREATE
// READ
// UPDATE
// DELETE