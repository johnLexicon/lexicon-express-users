const router = require('express').Router();
const {
  getAllUsers,
  createUser,
  deleteUser,
} = require('../controllers/usersController');

const PATH = '/users';

router.get(PATH, getAllUsers);

router.post(PATH, createUser);

router.delete(`${PATH}/:id`, deleteUser);

module.exports = router;
