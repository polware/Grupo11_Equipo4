const {Router} = require('express');
const router = Router();
const estudianteController = require('../controllers/estudiante.controller');
const Auth = require('../helper/auth.admin');
const Authest = require('../helper/auth.est');

// Estudiante
router.post('/crear', estudianteController.crear);
router.post('/login', estudianteController.login);
router.get('/listarID/:id', Authest.verificarToken, estudianteController.listarID);
router.delete('/eliminar/:id', Authest.verificarToken, estudianteController.eliminar);
router.put('/actualizar/:id', Authest.verificarToken, estudianteController.actualizar);
router.get('/buscarCorreo/:correo', estudianteController.buscarCorreo);
router.put('/passwordUpdate/:id', estudianteController.passwordUpdate);

// Administrador
router.get('/listar', Auth.verificarToken, estudianteController.listar);
router.get('/listarIDAdmin/:id', Auth.verificarToken, estudianteController.listarIDAdmin);
router.put('/actualizarAdmin/:id', Auth.verificarToken, estudianteController.actualizarAdmin);
router.delete('/eliminarAdmin/:id', Auth.verificarToken, estudianteController.eliminarAdmin);
router.get('/buscar/:nombres', Auth.verificarToken, estudianteController.buscarEstudiante);

module.exports = router;
