const contactoControl = {}
const contacto = require('../models/contacto.model');

contactoControl.crearContacto = async(req,res)=>{
    const { nombreapellido, correo, institucion, mensaje }=req.body
    const nuevoContacto= new contacto({
            nombreapellido,
            correo,
            institucion,
            mensaje
    })

    const respuesta= await nuevoContacto.save()
    res.json({
        mensaje:'Formulario de Contacto guardado',
        respuesta
    })
}

contactoControl.listar= async(req, res)=>{
    const respuesta = await contacto.find()
    res.json(respuesta)
}

module.exports=contactoControl
