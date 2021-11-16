const {Router} = require('express');
const router = Router();
const contacController = require('../controllers/contacto.controller');

router.post('/crear', contacController.crearContacto);
router.get('/listar', contacController.listar);

module.exports = router;
