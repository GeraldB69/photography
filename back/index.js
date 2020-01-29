// Déclaration des librairies nécessaires
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const connection = require('./helpers/config.js');

// Configuration de l'application
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Test de l'api
app.get("/", (req, res) => {
  res.send("OK !");
});

// GET

// Afficher toutes les photos
app.get("/photos", (req, res) => {
  const sql = 'SELECT * FROM photos';
  connection.query(sql, (error, response) => {
    if (error) res.sendStatus(500);
    else
      console.log(response)
      res.status(200).json(response)
  })
})

// Afficher toutes les photos

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
