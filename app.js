const express = require("express");
const bodyParser = require("body-parser");

const mongoose = require("mongoose");
const app = express();
const lo = require("lodash");
var Schema = mongoose.Schema;
var collections = require("./src/collections")
var fs = require('fs');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.json())
const path = require('path');
app.use(express.static(path.join(__dirname, 'build')));




//var imgPath = "public/images/man.jpg"

mongoose.connect("mongodb+srv://davontech3:Freshman2@cluster0-07pkr.mongodb.net/commerce", {useNewUrlParser: true, useUnifiedTopology: true});


var imageS = new Schema({

      id:  Number,
      name: String,



       path: String,

       gender: String,

       type: String,
       price: 0

 }
);

var Image = mongoose.model('clothes', imageS);

var colArray =[];


for (var i = 0; i < collections.images.length; i++) {
var col = new Image;
  col.id = collections.images[i].id;
  col.name = collections.images[i].name;

  col.path = collections.images[i].path;
  col.gender = collections.images[i].gender;
  col.type = collections.images[i].type;
  col.price = collections.images[i].price;
  colArray[i]= col;


}












Image.find({}, function(err, foundImages){

if (foundImages.length < 54){

  Image.insertMany(colArray, function(err){

    console.log("success");



  })

}

}

);




app.post("/image", function(req, res){

var query = Image.where({name: req.body.name});

query.findOne(function (err, image){



var path = image.path
var type = image.type
var price = image.price






res.json ({
  type: type,
  source: path,
  price: price
})



});










});


app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'), function(err) {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    }
  });
});


let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}




app.listen(port, function() {
  console.log("Server started success");
});
