const estudianteControl = {}
const estudiante = require('../models/estudiante.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

estudianteControl.crear = async(req,res) => {
    const {nombres, apellidos, identificacion, contrasena, correo} = req.body;
    const nuevoEstudiante = new estudiante({
        nombres,
        apellidos,
        identificacion,
        contrasena,
        correo
    })
    const identEstudiante = await estudiante.findOne({identificacion:identificacion});
    if(identEstudiante){
        res.json({
            mensaje:'El No. identificación ya existe'
        })
    }
    else {
        nuevoEstudiante.contrasena = await bcrypt.hash(contrasena, 10);
        const token = jwt.sign({_id:nuevoEstudiante._id}, 'Student');
        const respuesta = await nuevoEstudiante.save();
        res.json({
            mensaje:'Cuenta de estudiante creada',
            respuesta
        })
    }
}

estudianteControl.login = async(req, res) => {
    const {identificacion, contrasena} = req.body;
    const Estudiante = await estudiante.findOne({identificacion:identificacion});
    if(!Estudiante){
         return res.json({
         mensaje: 'No. Identificación incorrecta'
        })
     }
    const match = await bcrypt.compare(contrasena,Estudiante.contrasena);
    if(match) {
        const token = jwt.sign({_id:Estudiante._id }, 'Student');
        res.json({
            mensaje: 'Bienvenido',
            id:Estudiante._id,
            //id:Estudiante.identificacion,
            identificacion:Estudiante.identificacion,
            nombre:Estudiante.nombres,
            token
        })
    }
    else{
        res.json({
            mensaje:'Constraseña incorrecta'
        })
    }     
}

estudianteControl.listar = async(req,res) => {
    const respuesta = await estudiante.find();
    res.json(respuesta)
}

estudianteControl.listarIDAdmin = async(req,res) => {
    const id = req.params.id;
    const respuesta = await estudiante.findOne({_id:id});
    res.json(respuesta)
}

estudianteControl.listarID = async(req,res) => {
    const id = req.params.id;
    const respuesta = await estudiante.findOne({_id:id});
    res.json(respuesta)
}

estudianteControl.eliminarAdmin = async(req,res) => {
    const id = req.params.id;
    await estudiante.findByIdAndRemove({_id:id});
    res.json({
        mensaje:'Estudiante eliminado'
    })
}

estudianteControl.eliminar = async(req,res) => {
    const id = req.params.id;
    await estudiante.findByIdAndRemove({_id:id});
    res.json({
        mensaje:'Su cuenta ha sido eliminada'
    })
}

estudianteControl.actualizarAdmin = async(req,res) => {
    const id = req.params.id;
    await estudiante.findByIdAndUpdate({_id:id}, req.body)
    res.json({
        mensaje:'Estudiante actualizado'
    })
}

estudianteControl.actualizar = async(req,res) => {
    const id = req.params.id;
    await estudiante.findByIdAndUpdate({_id:id}, req.body)
    res.json({
        mensaje:'Datos del estudiante actualizados'
    })
}

estudianteControl.buscarEstudiante = async(req,res) => {
    const nombres = req.params.nombres;
    const respuesta = await estudiante.findOne({nombres:{$regex:".*"+nombres+".*"}})
    res.json(respuesta)
}

module.exports = estudianteControl;