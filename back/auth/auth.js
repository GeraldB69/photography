const express = require('express');
const router = express.Router();
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const connection = require('../helpers/config.js');

passport.use(new LocalStrategy(
  { 
    usernameField: 'username', 
    passwordField: 'password',
    session: false
  }, 
  function (username, password, cb) {
    let sql = 'SELECT * FROM users WHERE user = ?';
    connection.query(sql, [username], (err, response) => {
      if (err) {
        // Erreur de connexion
        return cb(err);
      }
      if (response.length !== 0 && email != response[0].email) {
        // utile ?
        return cb(null, false);
      }
      if (response.length !== 0 && !bcrypt.compareSync(password, response[0].password)) {
        // bad mail et/ou bad pwd 
        return cb(null, false);
      }
      // mail et pwd OK
      return cb(null, response[0]);
    })
  }
));

module.exports = router;
