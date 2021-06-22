const express = require('express');
const app = express();
const PORT = 7777;

app.get("/", (req,res)=>{
    res.send("<H1> Home Page </H1>");
});

app.listen(PORT,()=> {
    console.log ('Server is running at port ${PORT)');
});