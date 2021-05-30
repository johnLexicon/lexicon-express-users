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

const createUser = async (req, res, next) => {
  try {
    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      avatar: req.body.avatar,
    });

    return res.status(201).json(user);
  } catch (err) {
    next(err);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const deletedUser = await User.findByIdAndDelete(userId);
    return res.status(200).json(deletedUser);
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
