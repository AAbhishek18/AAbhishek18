const express = require('express');
const router = express.Router();
 const USerModel= require("../models/userModel.js")
const userController= require("../controllers/userController")
const productController=require("../controllers/productController")
const commonMiddlewares=require('../middlewares/commonMiddlewares')
const orderController=require("../controllers/orderController")




router.post("/createProduct",productController.createProduct)
router.post("/createUser", commonMiddlewares.userMW,userController.createUser  )
 router.get("/getUsersData", userController.getUsersData)
 router.post("/createOrder",commonMiddlewares.orderMW,orderController.createOrder)
 

// router.get("/test-me", function (req, res) {
//     res.send("My first ever api!")
// })


 

// const mid1= function ( req, res, next) {
//     console.log("Hi I am a middleware named Mid1")
//     // logic
//     let loggedIn = false

//     if (loggedIn== true) { 
//         console.log( "OK LOGGED IS IS TRUE NOW")
//         next ()
//     }
//     else {
//         res.send ("Please login or register")
//     }
// }

// // e.g. restricted and open-to-all API's can be handled like below now:
// router.get('/homePage', mid1, UserController.feeds)
// router.get('/profileDetails', mid1, UserController.profileDetails)
// router.get('/friendList', mid1, UserController.friendList)
// router.get('/changePassword', mid1, UserController.changePassword)

// router.get('/termsAndConditions',  UserController.termsAndConditions)
// router.get('/register',  UserController.register)

// router.get("/basicRoute", UserController.basicCode)
//router.post('/create-a-user', userController.createAUser)



// router.get("/basicRoute2", commonMW.mid1, UserController.basicCode2)
// router.get("/basicRoute3", commonMW.mid2, UserController.basicCode3)
// router.get("/basicRoute4", commonMW.mid1, commonMW.mid4, UserController.basicCode4)




module.exports = router;