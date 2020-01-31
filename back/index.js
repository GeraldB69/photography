// Déclaration des librairies nécessaires
const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const app = express();
const config = require('./helpers/config.js');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const _ = require('lodash');
// const passport = require('passport');
// const authRouter = require('./auth/auth');


// Configuration de l'application
app.use(fileUpload({
  createParentPath: true
}));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

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

app.post('/upload', async (req, res) => {
  console.log(req.files)
  const picture = req.files.file;
  try {
    if (!req.files) {
      res.send({
        status: false,
        message: 'No file uploaded'
      }); 
    } else {
      picture.mv('./uploads/' + picture.name);
      const sql = 'INSERT INTO photos (name) VALUES (?)';
      config.connection.query(sql, picture.name, (error, results) => {
        if (error) {
          res.status(500).send(error);
        } else {
          res.send({
            status: true,
            message: 'File is uploaded',
            data: {
              name: picture.name,
              // type: picture.mimetype,
              // size: picture.size
            }
          })
        }
      })
    }
  } catch (err) {
    console.log('catch')
    res.status(500).send(err);
  }
});

// Vérification des droits d'accès
app.post('/upload_test', verifyToken, (req, res) => {
  jwt.verify(req.token, config.secret, (err, authData) => {
    if (err) {
      res.status(401).send()
    } else {
      sql = '';
      res.json({
        message: 'OK',
        //authData
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
