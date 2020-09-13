const routes = require('express').Router();
const fs = require('fs').promises;
const path = require('path');

const usersPath = path.join(__dirname, '..', 'data', 'users.json');

const getUsers = (req, res) => fs.readFile(usersPath, { encoding: 'utf8' })
  .then((users) => res.status(200).send(JSON.parse(users)))
  .catch((err) => res.status(500).send({ "message": 'Error reading data', "serverError": err }));

const getUserById = (req, res) => {
  fs.readFile(usersPath, { encoding: 'utf8' })
    .then((users) => {
      const userData = JSON.parse(users);
      if (!userData.some((user) => user._id === req.params.id)) {
        res.status(404).send({ "message": 'User ID not found' });
      } else {
        res.status(200).send(userData.filter((user) => user._id === req.params.id)[0]);
      }
    })
    .catch((err) => res.status(404).send({ "message": 'Error reading data', "serverError": err }));
};

routes.get('/', getUsers);

routes.get('/:id', getUserById);

module.exports = routes;
