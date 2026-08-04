const express = require("express");
const app = express();
const path = require("path");
let port = 8080;

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

app.listen(port,()=>{
    console.log(`listening at port ${port}`);
});

app.get("/",(req,res)=>{
   res.render("home.ejs");
});
app.get("/rolldice",(req,res)=>{
    let diceVal = Math.floor(Math.random()*6)+1
    res.render("rolldice.ejs",{diceVal});
});

//ig
app.get("/ig/:username",(req,res)=>{
    let {username} = req.params;
    // const followers = ["adam","bob","breej","akshh","xyz"];
    // res.render("instagram.ejs",{username,followers});

    //using data.json
    
    const instaData = require("./views/data.json");
    const data = instaData[username];
    // console.log(instaData);
    if(data){
        res.render("instagram.ejs",{data});
    }
    else{
        res.render("error.ejs");
    }
    
})