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

const { SESSION_SECRET, STRING } = process.env;

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

//database
massive(STRING).then((db) => {
  app.set("db", db);
  console.log("db connected");
});

//auth
app.post("/auth/register", authController.register);
app.post("/auth/login", authController.login);

//db

//server
app.listen(port, () => console.log(`Listening on ${port}`));
