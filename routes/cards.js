const routes = require('express').Router();
const fs = require('fs');
const path = require('path');

let cards = '';

fs.readFile(path.join(__dirname, '../data/cards.json'), { encoding: 'utf8' }, (err, data) => {
  if (err) console.log(err);
  cards = JSON.parse(data);
});

routes.get('/', (req, res) => {
  res.send(cards);
});

routes.get('*', (req, res) => {
  res.send({ "message": "Requested resource not found" }, 404);
});

module.exports = routes;
