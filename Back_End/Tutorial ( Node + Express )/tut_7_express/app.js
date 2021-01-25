// creating first express app // 
// and also custom backend for diff pages //
const express = require("express");

const app = express();
const port = 80;

app.listen(port, ()=>{
    console.log(`The app started successfully on port ${port}`);
});

// Get Request //

app.get("/",function(req, res){
    res.send("This is the Home page of express app");
});
app.get("/about",function(req, res){
    res.send("This is the about page of express app");
});
app.get("/contact",function(req, res){
    res.send("This is the contact page of express app");
});

// if you want to request with status //

app.get("/",function(req, res){
    res.status(200).send("This is the Home page of express app");
});
app.get("/about",function(req, res){
    res.status(200).send("This is the about page of express app");
});
app.get("/contact",function(req, res){
    res.status(200).send("This is the contact page of express app");
});

// post requepost//

app.post("/",function(req, res){
    res.send("This is the post request for Home page of express app");
});
app.post("/about",function(req, res){
    res.send("This is the post request for about page of express app");
});
app.post("/contact",function(req, res){
    res.send("This is the post request for contact page of express app");
});
 
