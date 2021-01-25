const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/fruitsDB',{useNewUrlParser: true, useUnifiedTopology: true});

// for adding data without validation and necessaryment

// const fruitSchema = new mongoose.Schema({
//     name: String,
//     rating: Number,
//     review: String
// });

// for validation and necessary thing requirement

const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please check your data entry, no name specified"]
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

// const fruit = new Fruit({
//     name: "Apple",
//     rating: 7,
//     review: "Pretty solid as a fruit."
// });

// data added into database without name

const fruit = new Fruit({
    // name: "Apple",
    rating: 10,
    review: "Peaches are so yummy."
});

// fruit.save();

/// PERSON DB
const personSchema = new mongoose.Schema({
    name: "String",
    age: Number,
    favouriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);

// const pineapple = new Fruit({
//     name:"Pineapple",
//     score: 9,
//     review: "Great Fruit."
// })

// pineapple.save();

const Mango = new Fruit({
    name: "Mango",
    score: 10,
    review: "King of fruits"
});

Mango.save();

// const person = new Person({
//     name: "Amy",
//     age: 12,
//     favouriteFruit: pineapple
// });

// person.save();

// Person.updateOne({name:"JOHN"},{favouriteFruit: Mango}, function(err){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Successfully update the document.");
//     }
// });



// how to insert more items in database //

const kiwi = new Fruit({
    name: "Kiwi",
    score: 10,
    review: "weird texture"
});

const orange = new Fruit({
    name: "orange",
    score: 10,
    review: "weird texture"
});

const banana = new Fruit({
    name: "banana",
    score: 10,
    review: "weird texture"
});

// Fruit.insertMany([kiwi, orange, banana], function(err){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Successfully saved all fruits");
//     }
// });


Fruit.find(function(err, fruits){
    if(err){
        console.log(err);
    }else{
        // console.log(fruits);

        mongoose.connection.close();

        fruits.forEach(function(fruit){
            console.log(fruit.name);
        })
    }
});

// update name through the node in database

// Fruit.updateOne({_id:"600a967d0c2dc444404dd883"},{name: "Peach"},function(err){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Successfully update the document.");
//     }
// });

// delete one section from node in data base

// Fruit.deleteOne({name:"Peach"},function(err){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Successfully deleted name");
//     }
// });








