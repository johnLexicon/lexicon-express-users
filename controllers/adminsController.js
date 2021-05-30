const bcrypt = require('bcrypt');
const Admin = require('../models/adminModel');

const getAllAdmins = async (req, res, next) => {
  try {
    const admins = await Admin.find();
    return res.status(200).json(admins);
  } catch (err) {
    next(err);
  }
};

const getAdmin = async (req, res, next) => {
  try {
    adminId = req.params.id;
    const admin = await Admin.findById(adminId);
    if (!admin) {
      return res
        .status(400)
        .json({ errors: { message: `Admin with id: ${adminId} no found` } });
    }
    return res.status(200).json(admin);
  } catch (err) {
    next(err);
  }
};

const ROUNDS = 10;

const createAdmin = async (req, res, next) => {
  try {
    if (!req.body.password) {
      return res.status(400).json({
        errors: {
          message: 'Password is mandatory for admin creation',
        },
      });
    }

    const hashedPassword = await bcrypt.hash(req.body.password, ROUNDS);

    const admin = await Admin.create({
      name: req.body.name,
      email: req.body.email,
      hashedPassword,
      avatar: req.body.avatar,
    });

    return res.status(201).json({
      _id: admin._id,
      name: admin.name,
      email: admin.email,
      avatar: admin.avatar,
    });
  } catch (err) {
    next(err);
  }
};

const deleteAdmin = async (req, res, next) => {
  try {
    const adminId = req.params.id;
    const deletedAdmin = await Admin.findByIdAndDelete(adminId);
    return res.status(200).json(deletedAdmin);
  } catch (err) {
    next(err);
  }
};

const adminLogin = async (req, res, next) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const admin = await Admin.findOne({ email: email });
    if (!admin) {
      return res
        .status(400)
        .json({ errors: { message: `Admin with email: ${email} not found.` } });
    }

    const isValid = await bcrypt.compare(password, admin.hashedPassword);
    if (isValid) {
      return res
        .status(200)
        .json({ _id: admin._id, name: admin.name, email: admin.email });
    } else {
      return res
        .status(401)
        .json({ errors: { message: 'Authentication failed' } });
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllAdmins,
  getAdmin,
  createAdmin,
  deleteAdmin,
  adminLogin,
};
