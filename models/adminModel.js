const mongoose = require('mongoose');

const adminSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    hashedPassword: { type: String, required: true },
    avatar: { type: String },
  },
  { collection: 'admins' }
);

module.exports = mongoose.model('Admin', adminSchema);
