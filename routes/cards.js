const routes = require('express').Router();
const fs = require('fs').promises;
const path = require('path');

const cardsPath = path.join(__dirname, '..', 'data', 'cards.json');

const getData = (dataPath) => fs.readFile(dataPath, { encoding: 'utf8' })
  .then((data) => JSON.parse(data))
  .catch((err) => console.log(err));

const getCards = (req, res) => getData(cardsPath)
  .then((cards) => res.status(200).send(cards))
  .catch((err) => res.status(400).send(err));

routes.get('/', getCards);

module.exports = routes;
