const {Router} = require('express');
const router = Router();
const estudianteController = require('../controllers/estudiante.controller');
const Auth = require('../helper/auth')

//router.post('/crear', Auth.verificarToken, estudianteController.crear);
router.post('/crear', estudianteController.crear);
router.post('/login', estudianteController.login);
router.delete('/eliminar/:id', Auth.verificarToken, estudianteController.eliminar);
router.put('/actualizar/:id', Auth.verificarToken, estudianteController.actualizar);

// Administrador
//router.get('/listar', Auth.verificarToken, estudianteController.listar);
router.get('/listar', estudianteController.listar);
//router.get('/listar/:id', Auth.verificarToken, estudianteController.listarID);
router.get('/buscar/:nombres', Auth.verificarToken, estudianteController.buscarEstudiante);

module.exports = router;
