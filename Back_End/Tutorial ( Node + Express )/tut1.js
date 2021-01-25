//  Node js - Built In Module - for more Go To Node Documentation //
const fs = require("fs");
let text = fs.readFileSync("love.txt", "utf-8");
text = text.replace("you", "Rohan");
console.log("the content file of = ");
console.log(text);

console.log("creating a new file");
fs.writeFileSync("rohan.txt", text);


