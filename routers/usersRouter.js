const router = require('express').Router();
const {
  getAllUsers,
  getUser,
  createUser,
  deleteUser,
} = require('../controllers/usersController');

const PATH = '/users';

router.get(PATH, getAllUsers);

router.get(`${PATH}/:id`, getUser);

router.post(PATH, createUser);

router.delete(`${PATH}/:id`, deleteUser);

module.exports = router;
