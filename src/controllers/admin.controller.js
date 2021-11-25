const adminControl = {}
const admin = require('../models/admin.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

adminControl.crearAdmin = async(req,res) => {
    const {nombre, username, contrasena} = req.body;
    const nuevoAdmin = new admin({
        nombre,
        username,
        contrasena
    })
    const nickAdmin = await admin.findOne({username:username});
    if(nickAdmin){
        res.json({
            mensaje:'yaexiste'
        })
    }
    else{
        nuevoAdmin.contrasena = await bcrypt.hash(contrasena, 10);
        const token = jwt.sign({_id:nuevoAdmin._id}, 'Adm1n');
        await nuevoAdmin.save();
        res.json({
            mensaje:'Cuenta Administrador Creada',
            id:nuevoAdmin._id,
            nombre:nuevoAdmin.nombre,
            token
        })
    }
}

adminControl.login = async(req, res) => {
    const {username, contrasena} = req.body;
    const Admin = await admin.findOne({username:username});
    if(!Admin){
         return res.json({
         mensaje: 'Nombre de usuario incorrecto'
        })
     }
    const match = await bcrypt.compare(contrasena,Admin.contrasena);
    if(match) {
        const token = jwt.sign({_id:Admin._id }, 'Adm1n');
        res.json({
            mensaje: 'Bienvenido',
            id:Admin._id,
            nombre:Admin.nombre,
            token
        })
    }
    else{
        res.json({
            mensaje:'Constraseña incorrecta'
        })
    }     
}

module.exports = adminControl;
