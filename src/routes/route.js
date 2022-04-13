const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

//router.post("/createUser", UserController.createUser  )

//router.get("/getUsersData", UserController.getUsersData)

// 1st  API
router.post("/createBook", BookController.createBook  )

// 2nd API for book list
router.get("/bookList", BookController.bookList  )

// 3RD API
router.get("/getBooksInYear", BookController.getBooksInYear  )

// 4TH API
router.get("/getParticularBooks", BookController.getParticularBooks  )

// 5th API
router.get("/getXINRBooks", BookController.getXINRBooks)

// 6TH API
router.get("/getRandomBooks", BookController.getRandomBooks)

module.exports = router;