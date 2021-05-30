const router = require('express').Router();
const {
  getAllUsers,
  getUser,
  createUser,
  deleteUser,
} = require('../controllers/usersController');

router.get('/', getAllUsers);

router.get('/:id', getUser);

router.post('/', createUser);

router.delete('/:id', deleteUser);

module.exports = router;
