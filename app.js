var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("landing")
});

app.get("/campgrounds", function(req, res){
    var campgrounds = [
        {name: "Salmon Creek", image:"https://farm2.staticflickr.com/1287/4670981254_5654b5dd25.jpg"},
        {name: "Granite Hill", image:"https://farm2.staticflickr.com/1274/4670974422_ec49d65ab2.jpg"},
        {name: "Bear Pond", image:"https://pixabay.com/get/e83db40e28fd033ed1584d05fb1d4e97e07ee3d21cac104491f5c97ca6e9b2bc_340.jpg"}
        
    ]
    res.render("campgrounds");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("yelpCamp server running!!!");
});