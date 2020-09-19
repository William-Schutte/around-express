const User = require('../models/user');

const errorMessage = (err) => {
  let errStatus = 500;
  let errMessage = err.name;

  if (errMessage === 'ValidationError') {
    errStatus = 400;
    errMessage = err.message;
  } else if (errMessage === 'CastError') {
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
    .then((user) => res.send({ data: user }))
    .catch((err) => {
      const e = errorMessage(err);
      return res.status(e.errStatus).send({ message: e.errMessage });
    });
};

const createUser = (req, res) => {
  const { name, about, avatar } = req.body;
  User.create({ name, about, avatar })
    .then(((user) => res.send({ data: user })))
    .catch((err) => {
      const e = errorMessage(err);
      return res.status(e.errStatus).send({ message: e.errMessage });
    });
};

module.exports = { getUsers, getUserById, createUser };

/* REFERENCE NOTES
These controller functions, also called the last middleware (they do not call next() but instead
return responses), interact with the document models of the MongoDB database. The methods on the
model objects come from mongoose.
*/
