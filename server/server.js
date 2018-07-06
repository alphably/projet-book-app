var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var urlServer = 'http://localhost:5000';

var app = express();



var books = [
  {
    id: 1 ,
    author: 'Hornoré de Balzac',
    title: "Le père Gariot",
    publicationDate: 1832,
    available: 'Dispo',
    nbPages: 324,
    nbRent: 512
  },
  {
    id: 2 ,
    author: 'Italo Calvino',
    title: 'Marcovaldo',
    publicationDate: 1963,
    available: 'Non dispo',
    nbPages: 136 ,
    nbRent: 164
  },
  {
    id: 3 ,
    author: 'J. R. R. Tolkien',
    title: 'Le seigneur des anneaux',
    publicationDate: 1973,
    available: 'Dispo',
    nbPages: 156 ,
    nbRent: 421
  },
  {
    id: 4,
    author: 'Adam Freeman',
    title: 'Angular 6 pour les pro',
    publicationDate: 2018,
    available: 'Non dispo',
    nbPages: 780 ,
    nbRent: 927
  },
];


// Middlewares
app.use(bodyParser.json());
//app.use(express.static('public'));

// Permet les requêtes cross-domain
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "PUT, DELETE");
  next();
});

// Routes
app.get('/books', (req, res) => res.json(books));
app.get('/authors', (req, res) => res.json(authors));





app.listen(5000, () => console.log('Serveur écoute le port 5000...'));
