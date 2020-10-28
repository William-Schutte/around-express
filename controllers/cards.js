const Card = require('../models/card');

const errorMessage = (err) => {
  let errStatus = 500;
  let errMessage = 'Internal server error';

  if (err.name === 'CastError') {
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
      if (err.name === 'ValidationError') {
        res.status(400).send({ message: 'Card validation failed' });
      } else {
        res.status(500).send({ message: 'Internal server error' });
      }
    });
};

const deleteCard = (req, res) => {
  Card.findOneAndRemove({ _id: req.params.cardId, owner: req.user._id })
    .then(((card) => res.send({ data: card })))
    .catch((err) => {
      const e = errorMessage(err);
      return res.status(e.errStatus).send({ message: e.errMessage });
    });
};

const likeCard = (req, res) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $addToSet: { likes: req.user._id } },
    { new: true },
  )
    .then(((card) => res.send({ data: card })))
    .catch((err) => {
      const e = errorMessage(err);
      return res.status(e.errStatus).send({ message: e.errMessage });
    });
};

const unlikeCard = (req, res) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $pull: { likes: req.user._id } },
    { new: true },
  )
    .then(((card) => res.send({ data: card })))
    .catch((err) => {
      const e = errorMessage(err);
      return res.status(e.errStatus).send({ message: e.errMessage });
    });
};

module.exports = {
  getCards,
  createCard,
  deleteCard,
  likeCard,
  unlikeCard,
};
