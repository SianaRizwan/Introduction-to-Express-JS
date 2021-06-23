const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const isLoggedIn = require("./../middlewares/auth.middlewares")

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

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
router.get("/dashboard", (req,res)=>{
    res.send("User Dashboard");
})
router.post("/register", isLoggedIn, (req,res)=>{
    // const username = req.body.username;
    // const email = req.body.email;
    // res.send(
    //          `<H1>user with Email - ${email} and Username - ${username} is requesting to login.</H1>`
    //        );
    // res.sendFile("register.html", {
    //     root: "./views/users"
    // });

    res.redirect("/dashboard");
});

module.exports = router;