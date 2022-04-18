const express = require('express');
const router = express.Router();

const developerController= require("../controllers/developerController")
const batchController= require("../controllers/batchController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createBatch", batchController.createBatch )

router.get("/getAllDeveloper", developerController.getAllDeveloper)

router.post("/createDeveloper", developerController.createDeveloper  )

router.get("/getscholarship-developers", developerController.getscholarshipDeveloper)

router.get("/getDeveloperOnValue", developerController.getDeveloperOnValue)

module.exports = router;