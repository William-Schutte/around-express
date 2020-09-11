const routes = require('express').Router();
const fs = require('fs').promises;
const path = require('path');

const cardsPath = path.join(__dirname, '..', 'data', 'cards.json');

const getCards = (req, res) => fs.readFile(cardsPath, { encoding: 'utf8' })
  .then((cards) => res.status(200).send(JSON.parse(cards)))
  .catch((err) => res.status(404).send({ "message": 'Error reading data', "serverError": err }));

routes.get('/', getCards);

module.exports = routes;
