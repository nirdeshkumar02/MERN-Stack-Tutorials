const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/personDB", {useNewUrlParser: true, useUnifiedTopology: true});

const personSchema = new mongoose.Schema({
    name: "String",
    age: Number,
    favouriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);

const pineapple = new Fruit({
    name:"Pineapple",
    score: 9,
    review: "Great Fruit."
})

pineapple.save();

const person = new Person({
    name: "Amy",
    age: 12,
    favouriteFruit: pineapple
});

person.save();