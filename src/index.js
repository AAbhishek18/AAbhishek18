const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');

const moment=require('moment')
const today= new moment()
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://AAbhishek2022:1ESrG6kzyaqzUE3p@cluster0.am17a.mongodb.net/aabhishekDB-W4D2", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

const middleWare=function(req,res,next){

     
        console.log ("inside GLOBAL MW");

        console.log(today.format('DD-MM-YYYY'))//DATE will print everytime on hitting any API 
        console.log(new Date())
        console.log("Time,ip and url:")
        console.log(`${new Date()}+",  "+${req.ip}+",  "+${req.url}`)//todays task done

        next();
}

app.use (middleWare)
    

  
       
        

app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
