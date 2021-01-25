// blocking and non blocking // -------------------

// synchoronus or blocking - line by line execution //
    // normal programming 

// Asynchoronus or non blocking = line by line execution not guaranteed callbacks will fire. //
const fs = require("fs");
 fs.readFile("love.txt", "utf-8", (err, data)=>{
    console.log(data);
});
console.log("This is a message");