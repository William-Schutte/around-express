const routes = require('express').Router();
const bodyParser = require('body-parser');

const { getUsers, getUserById, createUser } = require('../controllers/users');

routes.get('/', getUsers);
routes.get('/:id', getUserById);
routes.post('/', bodyParser.json(), createUser);

module.exports = routes;

/* REFERENCE NOTES
routes = A mini-application capable of performing middleware and routing functions
fs = A node.js module that enables interacting with files. Was initially using this module
  to read static data files to test Express.js functionality. Since removed.
bodyParser = A node.js module for parsing data from request bodies, JSON in this case
routes.get = Executes the given middleware function when an HTTP GET request is sent to path
*/
