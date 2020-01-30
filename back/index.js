// Déclaration des librairies nécessaires
const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const app = express();
const config = require('./helpers/config.js');
const cors = require('cors');
// const passport = require('passport');
// const authRouter = require('./auth/auth');


// Configuration de l'application
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use('/auth', authRouter);

// Traitement du token
function verifyToken(req, res, next) {
  const bearerHeader = req.headers.authorization
  if (typeof bearerHeader !== 'undefined') {
    const bearer = bearerHeader.split(' ')
    const bearerToken = bearer[1]
    req.token = bearerToken
    next()
  } else {
    res.sendStatus(403)
  }
}

// Test de l'api
app.get("/", (req, res) => {
  res.send("OK !");
});

// Identification 
app.post('/login', (req, res) => {
  console.log("body", req.body)
  const sql = 
    'SELECT id, username ' + 
    'FROM users ' + 
    'WHERE username = ? ' +
    'AND password = ?';
  config.connection.query(sql, [req.body.name, req.body.password], (error, response) => {
    if (error) console.log(error)
    else if (response.length !== 0) {
      // Générer token 
      const { id, username } = response[0]
      jwt.sign({ id, username }, config.secret, (err, token) => {
        res.status(200).json({
          id,
          username,
          token
        })
      })
    } 
    else {
      console.log(404) 
      res.status(404).send("NON")
    }  
  })
})

// Vérification des droits d'accès
app.post('/api/post', verifyToken, (req, res) => {
  jwt.verify(req.token, config.secret, (err, authData) => {
    if (err) {
      res.status(401).send()
    } else {
      res.json({
        message: 'OK',
        authData
      })
    }
  })
})


// GET

// Afficher toutes les photos
app.get("/photos", (req, res) => {
  const sql = 'SELECT * FROM photos';
  config.connection.query(sql, (error, response) => {
    if (error) res.sendStatus(500);
    else
      console.log(response)
      res.status(200).json(response)
  })
})

// Erreur 404 'Not Found'
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Lancement du serveur node
let server = app.listen( process.env.PORT || 5000, function(){
  console.log('Listening on port ' + server.address().port);
});
