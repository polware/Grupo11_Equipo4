const {Router} = require('express');
const router = Router();
const contacController = require('../controllers/contacto.controller');
const Auth = require('../helper/auth.admin')

router.post('/crear', contacController.crearContacto);
router.get('/listar', Auth.verificarToken, contacController.listar);
router.delete('/eliminar/:id', Auth.verificarToken, contacController.eliminar);

module.exports = router;
