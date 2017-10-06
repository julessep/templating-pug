'use strict';

const express = require('express');
const app = express();

app.set('view engine', 'pug');

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res, next) => {
  res.render('index', {
    loggedIn: false,
    url: `${req.url}`
  });
});

app.get('/about', (req, res, next) => {
  res.render('about', {
    loggedIn: false,
    url: `${req.url}`
  });
});

let food = ["Blueberry Muffin: $4.00 each", "Chocolate Chip Scone: $3.50 each", "Glazed Donut: $1.00 each", "Sprinkle Donut: $1.00 each"]

app.get('/inventory', (req, res, next) => {
  res.render('inventory', {
    food,
    loggedIn: false,
    url: `${req.url}`
  })
});

app.listen(3000, () => {
  console.log('listening on port 3000');
});