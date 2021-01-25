//jshint esversion:6 
// run nodemon server.js in hyper for saving time disable server, start server again and again//
// creating first server and browse localhost:3000 //
// shows Cannot GET //
const express = require("express");
const app =  express();

app.listen(3000, function(){
    console.log("Server get started on port 3000")
});

//  server started and getting response through server for Home page //


// app.get("/", function(req, res){
//     // console.log(request);
//     // response.send("Hello World!")
//     res.send("<h1> Hello, This is Nirdesh Kumar Saini</h1>")
// });
            // or //

app.get("/", function(request, response){
    // console.log(request);
    // response.send("Hello World!")
    response.send("<h1> Hello, This is Nirdesh Kumar Saini</h1>")
});

// server of Contact Page, getting response from server for contact page //

app.get("/contact", function(request , response){
    response.send("Contact me at : nksainiji3@gmail.com")
} );

// server of about Page, getting response from server for about page //

app.get("/about" , function(req , res){
    res.send("Hii This is Nirdesh Kumar Saini, i am a MCA student and currently learning full stack web dev course from open source")
});

// server of hobbies Page, getting response from server for hobbies page //

app.get("/hobbies", function(req, res){
    res.send("<h1>My Hobbies are</h1><br><ol><li>Singing</li></ol>")
});