const routes = require('express').Router();
const bodyParser = require('body-parser');

const { getCards, createCard, deleteCard } = require('../controllers/cards');

routes.get('/', getCards);
routes.post('/', bodyParser.json(), createCard);
routes.delete('/:cardId', deleteCard);

module.exports = routes;
