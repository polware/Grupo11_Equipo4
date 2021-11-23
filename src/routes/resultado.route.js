const {Router} = require('express');
const router = Router();
const resultadoController = require('../controllers/resultado.controller');
const Auth = require('../helper/auth.admin')
const Authest = require('../helper/auth.est');

router.post('/crear', resultadoController.crearResultado);
router.get('/listar', Auth.verificarToken, resultadoController.listar);
router.get('/listarID/:id', Authest.verificarToken, resultadoController.listarID);
router.get('/listarIDadmin', Auth.verificarToken, resultadoController.listarIDadmin);
router.delete('/eliminar/:id', Auth.verificarToken, resultadoController.eliminar);

module.exports = router;