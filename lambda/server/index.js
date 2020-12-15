require("dotenv").config();
const express = require("express");
const app = express();
const session = require("express-session");
const passport = require("passport");
const cors = require("cors");

//setup
app.use(express.json());
app.use(cors());

// //session
// app.use(
//   session({
//     resave: false,
//     saveUninitialized: true,
//     secret: process.env.SESSION_SECRET,
//     cookie: {
//       maxAge: 1000 * 60 * 60 * 24 * 7,
//     },
//   })
// );

// changes for saving express session in postgres db

const pgSession = require('connect-pg-simple')(session);

const {
  pool
} = require('./db/index');

app.use(session({
  store: new pgSession({
    pool: pool,
    tableName: 'session'
  }),
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 30 * 24 * 60 * 60 * 1000
  } // 30 days
}));

app.use(passport.initialize());
app.use(passport.session());

// password config
require('./config/passport');

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0'


app.use((req, res, next) => {
  let _end = res.end;

  res.end = function (chunk) {
    console.log(`Req: ${req.path} res: ${res.statusCode}`);
    _end.apply(res, arguments);
  };
  next();
});

const authRoute = require('./routes/auth');
const profileRoute = require('./routes/profile');
const tripsRoute = require('./routes/trips');
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    hello: "hi!"
  });
});

app.get('/api', (req, res) => {
  res.send('working...');
});

// added /.netlify/functions/ before route for lembda functions to get it

app.get('/.netlify/functions/api', (req, res) => {
  res.send('Travel Voy Api server...');
});

app.use('/.netlify/functions/api/auth', authRoute);
app.use('/.netlify/functions/api/profile', profileRoute);
app.use('/.netlify/functions/api/trip', tripsRoute);

app.use((req, res, next) => {
  console.log(req.url);
  const error = new Error('route not found.');
  error.statusCode = 404;
  next(error);
});

// error handling
app.use((err, req, res, next) => {
  if (err) {
    console.log('Error catched...', err.statusCode);
    if (err.statusCode && err.statusCode !== 500) {
      console.log(err);
      return res.status(err.statusCode).json({
        message: err.message
      });
    } else {
      console.log(err);
      return res.status(500).json({
        message: "Something went wrong..."
      });
    }
  }
  next()
});

// const port = 3001;

// //server
// app.listen(port, () => console.log(`Listening on ${port}`));

// app.use(`/.netlify/functions/api`, router);


module.exports = app;