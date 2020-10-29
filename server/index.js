require("dotenv").config();
const express = require("express");
const app = express();
const session = require("express-session");
const passport = require("passport");
const { json } = require("body-parser");
const massive = require("massive");
const cors = require("cors");
const port = 3001;
const mysql = require('mysql');
const { Client } = require('pg');
const authController = require("./controllers/authController");
const {
  testMethod,
  getUser,
  createUser,
  deleteUser,
  updateUser,
 } = require('../db/db');
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

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0'

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

client.connect();
const userData = {
  firstname: 'test',
  lastname: 'tester',
  email: 'test@gmail.com',
  password: 'testpass',
  id: 12,
}
// testMethod(client);
// getUser(client, 'jmsdevx@gmail.com');
// createUser(client, userData);
// deleteUser(client, userData.email);
// updateUser(client, userData, userData.id)

//************AUTH & USER CONTROLS************//

//GET SESSION
app.get("/api/session", (req, res) => {
  if (req.session.user){
    res.status(200).send(req.session.user)
  } else {
    res.status(403).send('User is not logged in.')
  }
})

//REGISTER
app.post("/api/register", (req, res) => {
  createUser(client, req.body, req, res);
  getUser(client, req.body.email, req, res);
} );
//LOGIN
app.post("/api/login", authController.login);

//db

//server
app.listen(port, () => console.log(`Listening on ${port}`));
