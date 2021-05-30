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

const getUser = async (req, res, next) => {
  try {
    userId = req.params.id;
    const user = await User.findById(userId);
    if (!user) {
      return res
        .status(400)
        .json({ errors: { message: `User with id: ${userId} no found` } });
    }
    return res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

const ROUNDS = 10;

const createUser = async (req, res, next) => {
  try {
    if (!req.body.password) {
      return res.status(400).json({
        errors: {
          message: 'Password is mandatory',
        },
      });
    }
    const hashedPassword = await bcrypt.hash(req.body.password, ROUNDS);
    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      hashedPassword,
      avatar: req.body.avatar,
      isAdmin: req.body.isAdmin,
    });

    return res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      avatar: user.avatar,
      isAdmin: user.isAdmin,
    });
  } catch (err) {
    next(err);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const userId = req.params.id;
    await User.findByIdAndDelete(userId);
    return res.status(200).send();
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllUsers,
  getUser,
  createUser,
  deleteUser,
};
