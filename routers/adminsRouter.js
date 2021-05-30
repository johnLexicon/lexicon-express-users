const router = require('express').Router();
const {
  getAllAdmins,
  getAdmin,
  createAdmin,
  deleteAdmin,
} = require('../controllers/adminsController');

router.get('/', getAllAdmins);

router.get('/:id', getAdmin);

router.post('/', createAdmin);

router.delete('/:id', deleteAdmin);

module.exports = router;
