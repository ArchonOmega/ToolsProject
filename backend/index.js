var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var User = require('./models/User');

var cors = require("cors");
var db=mongoose.connect('mongodb://admin:adminpass@172.30.185.250:27017/meanAuthAngular/?directConnection=true&serverSelectionTimeoutMS=2000',function(err,response)
{
    if(err) console.log("There was an error connecting to MongoDB.");
    //console.log(err);
    else console.log("Connection was successful.");

})

app.use(cors());

app.set('port', process.env.port || 3000);
app.use(bodyparser.json());
app.get('/',(req,res)=>{
    return res.send("Route");
})
app.post('/register',(req,res)=>{
    console.log(req.body);
    var firstname = req.body.firstname;
    var lastname = req.body.lastname;
    var email = req.body.email;
    var password = req.body.password;

    var user = new User();
    user.firstname = firstname;
    user.lastname = lastname;
    user.email = email;
    user.password = password;

    user.save((err, result) => {
        if(err) {
            console.log("There was an error in adding the user to database.");
            res.send({success: "Failed to add user", status:500});
        }
        res.send({success: "Successfully added a new user", status:200});

    })
})



app.listen(app.get('port'), function(err,response){
    console.log("Server is running on port ", app.get('port'));
});