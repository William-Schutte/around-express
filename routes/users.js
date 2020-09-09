const routes = require('express').Router();
const users = require('../data/users.json');

const doesUserExist = (req, res) => {
  if (!users.some((user) => user._id === req.params.id)) {
    res.status(404).send({ "message": 'User ID not found' });
  } else {
    res.send(users.filter((user) => user._id === req.params.id)[0]);
  }
};

routes.get('/', (req, res) => {
  res.send(users);
});

routes.get('/:id', doesUserExist);

routes.get('*', (req, res) => {
  res.send({ "message": "Requested resource not found" }, 404);
});

module.exports = routes;
