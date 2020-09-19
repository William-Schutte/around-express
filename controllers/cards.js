const Card = require('../models/card');

const errorMessage = (err) => {
  let errStatus = 500;
  let errMessage = err.name;

  if (errMessage === 'ValidationError') {
    errStatus = 400;
    errMessage = err.message;
  } else if (errMessage === 'CastError') {
    errStatus = 404;
    errMessage = 'Card not found';
  }

  return { errStatus, errMessage };
};

const getCards = (req, res) => {
  Card.find({})
    .then((cards) => res.send({ data: cards }))
    .catch((err) => {
      const e = errorMessage(err);
      return res.status(e.errStatus).send({ message: e.errMessage });
    });
};

const createCard = (req, res) => {
  const { name, link } = req.body;
  Card.create({ name, link, owner: req.user._id })
    .then(((card) => res.send({ data: card })))
    .catch((err) => {
      const e = errorMessage(err);
      return res.status(e.errStatus).send({ message: e.errMessage });
    });
};

const deleteCard = (req, res) => {
  Card.findByIdAndRemove(req.params.cardId)
    .then(((card) => res.send({ data: card })))
    .catch((err) => {
      const e = errorMessage(err);
      return res.status(e.errStatus).send({ message: e.errMessage });
    });
};

module.exports = { getCards, createCard, deleteCard };
