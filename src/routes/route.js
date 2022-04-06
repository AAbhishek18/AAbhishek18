
const express = require('express');
const logger=require('../logger/logger')
const helper=require('../util/helper')
const formatter=require('../validator/formatter')
const router = express.Router();

router.get('/test-me', function(req, res) {
    // console.log('I am learning Nodejs')
    // console.log('AB hoja dost',logger.abh)
     logger.welcome()
    console.log(' Current Date:',helper.current_date)
   console.log('Current Month:',helper.month)
   helper.getBatchInfo()
  console.log('After trim operation:',formatter.trim)
  
   console.log('Change to lower case:',formatter.lc)
   console.log('Change to upper case:',formatter.uc)
   

    res.send('My first ever api!')
});


module.exports = router;
// adding this comment for no reason