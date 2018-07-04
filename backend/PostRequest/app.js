var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res) {
  res.render("home");
});

app.get("/friends", function(req, res) {
  var friends = ["Tony", "Sophia", "Tom", "Greg", "Sarita"];
  res.render("friends",{friends: friends});
});

//Tell express to listen for requests
app.listen(3000, function(){
  console.log("Server started.");
});
