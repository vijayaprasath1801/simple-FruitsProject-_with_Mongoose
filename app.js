const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true});

const fruitSchema = new mongoose.Schema({
 name : {
    type :"string",
    unique : true,
    required : true
},
rating : {
    type : Number,
    min : 1,
    max : 10,
    required : true
},
review : {
    type : "string",
    required : true
}
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const apple = new Fruit({
  name : "Apple",
  rating : 6 ,
  review : "super red"
});

const personSchema = new mongoose.Schema({
    name : "string",
    age : Number,
    favouriteFruit : fruitSchema
});
const Person = mongoose.model("Person", personSchema);

const grape = new Fruit({
    name : "Grape",
    rating : 3 ,
    review : "super lengthy"
  });
const person = new Person({
    name : "jack",
    age : 35,
    favouriteFruit : grape
});
person.save();

const kiwi = new Fruit({
    name : "Kiwi",
    rating : 4 ,
    review : "super tasty"
  });
  const mango = new Fruit({
    name : "Mango",
    rating : 9 ,
    review : "super juicy"
  });
  const orange = new Fruit({
    name : "Orange",
    rating : 8 ,
    review : "super pulpy"
  });
  
  Fruit.find(function(err, fruits){
    if (err){
        console.log(error);
    }
    else{
        console.log(fruits);
    }
  });