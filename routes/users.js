const routes = require('express').Router();
const fs = require('fs').promises;
const path = require('path');

const usersPath = path.join(__dirname, '..', 'data', 'users.json');

const getData = (dataPath) => fs.readFile(dataPath, { encoding: 'utf8' })
  .then((data) => JSON.parse(data))
  .catch((err) => console.log(err));

const getUsers = (req, res) => getData(usersPath)
  .then((users) => res.status(200).send(users))
  .catch((err) => res.status(400).send(err));

const getUserById = (req, res) => {
  getData(usersPath)
    .then((users) => {
      if (!users.some((user) => user._id === req.params.id)) {
        res.status(404).send({ "message": 'User ID not found' });
      } else {
        res.status(200).send(users.filter((user) => user._id === req.params.id)[0]);
      }
    })
    .catch((err) => res.status(400).send(err));
};

routes.get('/', getUsers);

routes.get('/:id', getUserById);

module.exports = routes;
