const passport = require('passport');
const bcrypt = require("bcryptjs");
const localStrategy = require('passport-local');
const {
  getUser,
  createUser
} = require('../db/user');

// local
passport.use('local', new localStrategy({
  usernameField: 'email'
}, async (email, password, done) => {

  try {
    console.log('local')
    const user = await getUser(email);
    console.log('user passport ', email, user);
    if (!user) {
      return done({
        "message": "User not found"
      }, false, )
    }
    console.log(password, user)
    const isAuth = bcrypt.compareSync(password, user.password);

    if (!isAuth) {
      return done(true, false, {
        "message": "Invalid password"
      })
    }
    delete user.password;
    return done(null, user);

  } catch (err) {
    console.log(err);
    done(err);
  }

}));

// sign-up
passport.use('sign-up', new localStrategy({
  usernameField: 'email',
  passReqToCallback: true
}, async (req, email, password, done) => {

  try {
    const existingUser = await getUser(email);
    if (existingUser) {
      return done(true, false, {
        "message": "User already exists"
      })
    }

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    const res = await createUser({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: email,
      password: hashedPassword
    });

    console.log(res);

    const user = await getUser(email);
    delete user.password;

    return done(null, user);

  } catch (err) {
    console.log(err);
    return done(true, false, {
      "message": "Server error"
    })
  }
}));

passport.serializeUser((user, done) => {
  console.log('serializeUser...', user);
  done(null, user);
});

passport.deserializeUser((user, done) => {
  console.log('deserializeUser...', user);

  done(null, user);
});


module.exports = passport;