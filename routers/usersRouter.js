const router = require('express').Router();
const { getAllUsers, createUser } = require('../controllers/usersController');

const PATH = '/users';

router.get(PATH, getAllUsers);

router.post(PATH, createUser);

module.exports = router;
