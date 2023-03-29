const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.sendFile(__dirname + "/signup.html");
});
app.post("/",function(req,res){
   var firstName = req.body.fname;
   var lastName = req.body.lname;
   var email = req.body.email;

   res.sendFile(__dirname + "/success.html");
//    if(err){
//     res.sendFile(__dirname + "/failure.html");
//    }



});
app.listen(3000,function(){
    console.log("server started at port 3000");
});