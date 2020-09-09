const express = require('express');
const path = require('path');
const usersRouter = require('./routes/users.js');
const cardsRouter = require('./routes/cards.js');

const { PORT = 3000 } = process.env;
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use('/users', usersRouter);
app.use('/cards', cardsRouter);
app.get('*', (req, res) => {
  res.status(404).send({ "message": "Requested resource not found" });
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
