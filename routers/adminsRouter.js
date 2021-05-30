const router = require('express').Router();
const {
  getAllAdmins,
  getAdmin,
  createAdmin,
  deleteAdmin,
  adminLogin,
} = require('../controllers/adminsController');

router.get('/', getAllAdmins);

router.get('/:id', getAdmin);

router.post('/', createAdmin);

router.delete('/:id', deleteAdmin);

router.post('/login', adminLogin);

module.exports = router;
