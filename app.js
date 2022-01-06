const express = require("express");
const bodyParser = require("body-parser");
const moment = require('moment');
const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


const newTasks = ["Plan", "Study", "Eat Food"];
const workTasks = [];



app.get("/",function(req, res){

  const date = moment().format('D/MM/YYYY');
  res.render("list", {listTitle: date, newTasks: newTasks});


});

app.post("/", function(req, res){

  newTask = req.body.newTask;
  if(newTask == "") res.redirect("/"); return;



  newTasks.push(newTask);
  res.redirect("/")
});




app.listen(process.env.PORT || 3000, function(){
  console.log("server running w kda");
})
