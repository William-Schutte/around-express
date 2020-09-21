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
  const { name, about, avatar } = req.body;
  User.create({ name, about, avatar })
    .then(((user) => res.send({ data: user })))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        res.status(400).send({ message: 'User validation failed' });
      } else {
        res.status(500).send({ message: 'Internal server error' });
      }
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
  updateUser,
  updateAvatar,
};

/* REFERENCE NOTES
These controller functions, also called the last middleware (they do not call next() but instead
return responses), interact with the document models of the MongoDB database. The methods on the
model objects come from mongoose.
*/
