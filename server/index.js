require("dotenv").config();
const express = require("express");
const app = express();
const session = require("express-session");
const passport = require("passport");
const { json } = require("body-parser");
const massive = require("massive");
const cors = require("cors");
const port = 3001;
const authController = require("./controllers/authController");

//setup
app.use(json());
app.use(cors());

//session
app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: process.env.SESSION_SECRET,
    cookie: {
      maxAge: 1000 * 600 * 60 * 24 * 7,
    },
  })
);

//auth
app.use(passport.initialize());
app.use(passport.session());
authController(app);

//db

//server
app.listen(port, () => console.log(`Listening on ${port}`));
