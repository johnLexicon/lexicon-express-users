const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    avatar: { type: String },
  },
  { collection: 'users' }
);

module.exports = mongoose.model('User', userSchema);
