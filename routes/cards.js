const routes = require('express').Router();
const cards = require('../data/cards.json');

routes.get('/', (req, res) => {
  res.send(cards);
});

routes.get('*', (req, res) => {
  res.send({ "message": "Requested resource not found" }, 404);
});

module.exports = routes;
