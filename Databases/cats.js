var mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/cat_app", {useNewUrlParser: true});

var catSchema = new mongoose.Schema({
  name: String,
  age: Number,
  color: String
});

var Cat = mongoose.model("Cat", catSchema);

//add new cat to db

var coco = new Cat({
  name: "Coco",
  age: 12,
  color: "black"
});

coco.save(function(err, cat){
  if(err) {
    console.log("something went wrong");
  }
  else {
    console.log("cat saved to database");
    console.log(cat);
  }
});

//retrieve all cats from db
