// Express and Application Entry Point File

const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const usersRouter = require('./routes/users.js');
const cardsRouter = require('./routes/cards.js');

const { PORT = 3000 } = process.env;
const app = express();

mongoose.connect('mongodb://localhost:27017/aroundb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.use((req, res, next) => {
  req.user = {
    _id: '5f6640d464c43c68ed325583',
  };
  next();
});

app.use(express.static(path.join(__dirname, 'public')));
app.use('/users', usersRouter);
app.use('/cards', cardsRouter);
app.get('*', (req, res) => {
  res.status(404).send({ message: 'Requested resource not found' });
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

/* REFERENCE NOTES
express = The Express web framework for Node.js
path = A Node.js module for working with file/directory paths
mongoose = An Object Data Modeling (ODM) library for MongoDB and Node.js
app = An instance of Express giving access to methods for the server. This is a function designed
  to be passed to Node's HTTP servers as a callback to handle requests.
app.use = Mounts the specified middleware function at the given path
app.get = Routes an HTTP GET request to path with the given callback function
app.listen = Binds and listens for connections on the specified port (and host if given). Returns
  an http.Server object. Essentially 'turns on' the server.
*/
