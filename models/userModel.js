const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    hashedPassword: { type: String, required: true, select: false },
    avatar: { type: String },
    isAdmin: { type: Boolean },
  },
  { collection: 'users' }
);

module.exports = mongoose.model('User', userSchema);
