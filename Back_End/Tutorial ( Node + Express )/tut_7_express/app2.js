// adding and serving static file //
// installing pug template engine and learn//

const express = require("express");
const path = require("path");

const app = express();
const port = 80;

app.listen(port, ()=>{
    console.log(`The app started successfully on port ${port}`);
});

// for serving some static content or file  //

app.use("/static", express.static('static')); // here, 1st static is url and 2nd static is a folder name //

// Set The Template Engine as Pug //

app.set('view engine', 'pug');

// Set the views directory //

app.set("views", path.join(__dirname, 'views'));

// Our Pug Demo endpoint//

app.get("/demo", (req, res)=>{
    res.status(200).render('demo', {title: 'Hey Nirdesh', message: 'Hello There! and thanks for telling me how to use PUBG!'})
})

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
 
