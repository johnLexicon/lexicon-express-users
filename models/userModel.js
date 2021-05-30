const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    hashedPassword: { type: String, required: true, select: false },
    avatar: { type: String },
    isAdmin: { type: Boolean },
  },
  { collection: 'users' }
);

module.exports = mongoose.model('User', userSchema);
