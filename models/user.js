const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
    minlength: 2,
    maxlength: 30,
  },
  about: {
    required: true,
    type: String,
    minlength: 2,
    maxlength: 30,
  },
  avatar: {
    required: true,
    type: String,
    validate: {
      validator(v) {
        return RegExp(/^(https?):\/\/(www\.)?[\w-@:%\+~#=]+[.][\.\w/\-?#=&~@:()!$\+%]*$/gm).test(v);
      },
      message: 'Invalid URL',
    },
  },
  email: {
    required: true,
    type: String,
    unique: true,
    validate: {
      validator(v) {
        return validator.isEmail(v);
      },
      message: 'Invalid email',
    },
  },
  password: {
    required: true,
    type: String,
  },
});

userSchema.statics.findUserByCredentials = function (email, password) {
  return this.findOne({ email }).then((user) => {
    if (!user) {
      return Promise.reject(new Error('Incorrect email/password'));
    }
    return bcrypt.compare(password, user.password).then((matched) => {
      if (!matched) {
        return Promise.reject(new Error('Incorrect email/password'));
      }
      return user;
    });
  });
};

module.exports = mongoose.model('user', userSchema);

/* REFERENCE NOTES
Schema's are used by mongoose to validate data being sent to the database. Schemas must first
be turned into a model to be applied to entries.

The statics property allows a function/method that exists directly on the user model instead
of just on the schema to which it belongs.
*/
