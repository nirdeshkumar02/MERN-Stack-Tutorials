//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
// it allow to pass http request //
// by urlencoded : pass form data //
app.use(bodyParser.urlencoded({extended: true}));


//define port on which server start//

app.listen(3000, () =>{
    console.log("server is running on port 3000");
});

//  getting response from server for Home Page //

app.get("/", function(req, res){
//    res.sendFile("index.html") // use when you hosted file from own server .//

 // use when you hosted from remote and it will take directory name, no matter where your file stored //
    res.sendFile(__dirname + "/index.html");  
});

// Handling Post request send by HTML 

app.post("/", function(req, res){
    // console.log(req.body); or console.log(req.body.num1); //

    // var num1 = req.body.num1; // now as like it will pass no. as a string //
    // var num2 = req.body.num2;

    var num1 = Number(req.body.num1); // now as like it will paaas as a number //
    var num2 = Number(req.body.num2);

    var result = num1 + num2;
    
    res.send("The Calculation Result = "+ result);
});


