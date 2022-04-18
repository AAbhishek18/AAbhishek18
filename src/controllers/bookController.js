const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")

// 3rd API, a POST api that creates a book from the details in the request body.
// The api takes both the author and publisher from the request body
const createBook= async function (req, res) {
    let book = req.body

    if(book.author_id){
   let bookCreated = await bookModel.create(book)
    res.send({data: bookCreated})
    }
    else if(typeof(book.author_id)!=="object"){

        res.send({msg:"Enter a Valid ID" })
       
    }
    else{
        res.send({msg:"AuthorID is required"})
    }
    
}
// 5-a,
const updateBook=async function(req,res){
  //  let bookDetails=req.body
    let updateDetails=await bookModel.updateMany({$or:[{"publisher":"625b481d19dcf444a8abe380"},{"publisher":"625c761566da3c2a5a74ac14"}]},
    {"isHardCover": true});
    res.send({msg:updateDetails})
}

const updateBookPrice=async function(req,res){
    let bookDetails=req.body
    let updateBookPrice= await bookModel.updateMany({ratings:{$gte:3.5}},{$inc:{price:+10}})
    res.send({msg:updateBookPrice})
}




const getBooksData= async function (req, res) {
    let books = await bookModel.find()
    res.send({data: books})
}

// 4th API, GET api that fetches all the books along with their author details
const getBooksWithAuthorDetails = async function (req, res) {
    let author_body=req.body
    let specificBook = await bookModel.find(author_body.author_id).populate('author_id')
    res.send({data: specificBook})

}

module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
module.exports.updateBook=updateBook
module.exports.updateBookPrice=updateBookPrice