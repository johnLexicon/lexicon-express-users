const bcrypt = require('bcrypt');
const User = require('../models/userModel');

const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    return res.status(200).json(users);
  } catch (err) {
    next(err);
  }
};

const ROUNDS = 10;

const createUser = async (req, res, next) => {
  try {
    console.log(req.body); //TODO: Remove this
    if (!req.body.password) {
      return res.status(400).json({
        errors: {
          message: 'Password is mandatory',
        },
      });
    }
    const hashedPassword = await bcrypt.hash(req.body.password, ROUNDS);
    const user = User.create({
      email: req.body.email,
      hashedPassword,
      avatar: req.body.avatar,
      isAdmin: req.body.isAdmin,
    });

    return res.status(201).json(user);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllUsers,
  createUser,
};
