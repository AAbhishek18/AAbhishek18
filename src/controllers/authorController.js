const AuthorModel= require("../models/authorModel")
//1st API,  a POST api that creates an author from the details in request body

const createAuthor= async function (req, res) {
    let author = req.body
    // if(author.author_id){
        let authorCreated = await AuthorModel.create(author)
    res.send({data: authorCreated})
// }
// else{
//     res.send({msg:'author_id must be present'})
// }
    
}

const getAuthorsData= async function (req, res) {
    let authors = await AuthorModel.find()
    res.send({data: authors})
}

module.exports.createAuthor= createAuthor
module.exports.getAuthorsData= getAuthorsData