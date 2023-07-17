//jshint esversion:6
const express=require("express");
const bodyParser=require("body-parser");
const app=express();
var items=["buy","cook","eat"];
var workItem=[];
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("Public"));
app.get("/",function(req,res){
   var today =new Date();
   var options={
    weekday:"long",
    day:"numeric",
    month: "long"
   };
   var day=today.toLocaleDateString("en-us",options);
  
   
   
   res.render("list",{listTitle:day,newListitem:items });
});
app.post("/",function(req,res){
  var item=  req.body.newItem;
  if(req.body.list==="work"){
    workItem.push(item);
    res.redirect("/work");

  }else{
    items.push(item);
    res.redirect("/");

  }
 
 

});
app.get("/work",function(req,res){
  res.render("list",{listTitle:"work List",newListitem:workItem});
});
app.post("/work",function(req,res){
  let item=req.body.newItem;
  workItem.push(item);
  res.redirect("/work");
});


app.listen(3000,function(){
    console.log("server started on port 3000");
});
