const {Router} = require('express');
const router = Router();
const adminController = require('../controllers/admin.controller');
const Auth = require('../helper/auth.admin')

//router.post('/crear', adminController.crearAdmin);
router.post('/crear', Auth.verificarToken, adminController.crearAdmin);
router.post('/login', adminController.login);

module.exports = router;
