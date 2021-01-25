// using raw html in pug //
// creating a form and getting data from user and save it in a file.
// File used -- index.pug, app3.js, style.css//

const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const port = 80;

// START THE SERVER //

app.listen(port, ()=>{
    console.log(`The app started successfully on port ${port}`);
});

// EXPRESS SPECIFIC STUFF //

app.use("/static", express.static('static')); // for serving some static content or file  // // here, 1st static is url and 2nd static is a folder name //
app.use(express.urlencoded())

// PUG SPECIFIC STUFF //

app.set('view engine', 'pug'); // Set The Template Engine as Pug //
app.set("views", path.join(__dirname, 'views')); // Set the views directory //

// ENDPOINTS //

app.get('/', (req, res)=>{
    const con = "This is the best way to learn web dev from Harry"
    const params = {'title': 'Pubg is the best game', "content": con}
    res.status(200).render('index.pug', params);
});

app.post('/' , (req, res)=>{
    // console.log(req.body)
   var name = req.body.name
   var age = req.body.age
   var gender = req.body.gender
   var address = req.body.address
   var more = req.body.more

    let outputToWrite = `the name of the client is ${name}, ${age} years old, ${gender}, residing at ${address}. More about him/her: ${more}`
   fs.writeFileSync('output.txt',outputToWrite)
    const params = {'message': 'Your Form Has Been Submitted Successfully.',}
    res.status(200).render('index.pug', params);
})