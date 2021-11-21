const {Router} = require('express');
const router = Router();
const estudianteController = require('../controllers/estudiante.controller');
const Auth = require('../helper/auth.admin');
const Authest = require('../helper/auth.est');

// Estudiante
router.post('/crear', estudianteController.crear);
router.post('/login', estudianteController.login);
router.delete('/eliminar/:id', Authest.verificarToken, estudianteController.eliminar);
router.put('/actualizar/:id', Authest.verificarToken, estudianteController.actualizarEstudiante);

// Administrador
router.get('/listar', Auth.verificarToken, estudianteController.listar);
router.get('/listar/:id', Auth.verificarToken, estudianteController.listarID);
router.put('/actualizarAdmin/:id', Auth.verificarToken, estudianteController.actualizarAdmin);
router.delete('/eliminarAdmin/:id', Auth.verificarToken, estudianteController.eliminarAdmin);
router.get('/buscar/:nombres', Auth.verificarToken, estudianteController.buscarEstudiante);

module.exports = router;
