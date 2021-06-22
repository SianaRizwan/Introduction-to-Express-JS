//will be using this file for routing so that index.js doesn't get messy

const express = require('express');
const app = express();

app.get("/", (req,res)=>{
    res.send("<H1> Home Page </H1>");
});

app.get("/about", (req,res)=>{
//storing cookie 
    res.cookie("username", "siana");
//clearing cookie
    res.clearCookie("username");
    
    res.send("<H1> About Page </H1>");
});

app.get("/contact", (req,res)=>{
    res.send("<H1> Contact Page </H1>");
});

//if navigated to any other url except the specified ones then the following error will be shown
app.use((req,res)=>{
//manually setting the status code 
    res.status(301).send("Page doesn't exist");
    //res.send("<H1> Error 404! Page doesn't exist </H1>");
});

module.exports = app;