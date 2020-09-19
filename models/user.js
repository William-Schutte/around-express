const mongoose = require('mongoose');

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
        return RegExp(/^(https?):\/\/(www\.)?[\w-@:%\+~#=]+[\.\w/\-?#=&~@:()!$\+%]*$/gm).test(v);
      },
      message: 'Invalid URL',
    },
  },
});

module.exports = mongoose.model('user', userSchema);

/* REFERENCE NOTES
Schema's are used by mongoose to validate data being sent to the database. Schemas must first
be turned into a model to be applied to entries.
*/
