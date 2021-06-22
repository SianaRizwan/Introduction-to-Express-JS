const express = require("express");
const router = express.Router();

router.get("/login", (req,res)=>{
    const id = req.query.id;
    res.send(`User with ID - ${id} is requesting to login`);

    //res.send("<H1> This is Login Page </H1>");
});

router.get("/register", (req,res)=>{
    //res.send("<H1> This is Register Page </H1>");
    res.sendFile("register.html", {
        root: "./views/users"
    });
});

module.exports = router;