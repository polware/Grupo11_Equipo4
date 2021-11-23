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
        mensaje:'Sus datos se han guardado con éxito.\nPronto lo contactaremos',
        respuesta
    })
}

contactoControl.listar= async(req, res)=>{
    const respuesta = await contacto.find()
    res.json(respuesta)
}

contactoControl.eliminar = async(req,res) => {
    const id = req.params.id;
    await contacto.findByIdAndRemove({_id:id});
    res.json({
        mensaje:'Contacto eliminado'
    })
}

module.exports=contactoControl
