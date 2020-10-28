const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const errorMessage = (err) => {
  let errStatus = 500;
  let errMessage = err.name;

  if (errMessage === 'CastError') {
    errStatus = 404;
    errMessage = 'User not found';
  }

  return { errStatus, errMessage };
};

const getUsers = (req, res) => {
  User.find({})
    .then((users) => res.send({ data: users }))
    .catch((err) => {
      const e = errorMessage(err);
      return res.status(e.errStatus).send({ message: e.errMessage });
    });
};

const getUserById = (req, res) => {
  User.findById(req.params.id)
    .then((user) => {
      if (user) {
        res.send({ data: user });
      } else {
        res.status(404).send({ message: 'User not found' });
      }
    })
    .catch((err) => {
      const e = errorMessage(err);
      return res.status(e.errStatus).send({ message: e.errMessage });
    });
};

const createUser = (req, res) => {
  const { name, about, avatar, email } = req.body;

  bcrypt.hash(req.body.password, 10).then((hash) => {
    User.create({ name, about, avatar, email, password: hash })
      .then(((user) => res.send({ data: user })))
      .catch((err) => {
        if (err.name === 'ValidationError') {
          res.status(400).send({ message: 'User validation failed' });
        } else {
          res.status(500).send({ message: 'Internal server error' });
        }
      });
  });
};

const login = (req, res) => {
  const { email, password } = req.body;
  User.findUserByCredentials(email, password).then((user) => {
    const token = jwt.sign(
      { _id: user._id },
      'secret_key',
      { expiresIn: '7d' },
    );

    res.cookie('token', token, { httpOnly: true });
    res.send({ token });
  }).catch((err) => {
    res.status(401).send({ message: err.message });
  });
};

const updateUser = (req, res) => {
  const { name, about } = req.body;
  User.findByIdAndUpdate(req.user._id, { name, about })
    .then(((user) => res.send({ data: user })))
    .catch((err) => {
      const e = errorMessage(err);
      return res.status(e.errStatus).send({ message: e.errMessage });
    });
};

const updateAvatar = (req, res) => {
  const { avatar } = req.body;
  User.findByIdAndUpdate(req.user._id, { avatar })
    .then(((user) => res.send({ data: user })))
    .catch((err) => {
      const e = errorMessage(err);
      return res.status(e.errStatus).send({ message: e.errMessage });
    });
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  login,
  updateUser,
  updateAvatar,
};

/* REFERENCE NOTES
These controller functions, also called the last middleware (they do not call next() but instead
return responses), interact with the document models of the MongoDB database. The methods on the
model objects come from mongoose.

Bcrypt.js is a crypto module used here for hashing passwords.

The login handler uses the static user method for verifying user by email and pass, then creates
and creates a tokenized cookie (https://expressjs.com/en/api.html#res.cookie) based on the user's
_id.
*/
