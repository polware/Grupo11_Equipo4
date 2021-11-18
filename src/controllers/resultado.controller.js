const resultadoControl = {}
const resultado = require('../models/resultado.model');

resultadoControl.crearResultado = async(req,res)=>{
    const { identidad, name, letraintereses, letraaptitudes, ramaintereses, ramaaptitudes, preguntasafirmativas }=req.body
    const nuevoResultado= new resultado({
            identidad,
            name,
            letraintereses,
            letraaptitudes,
            ramaintereses,
            ramaaptitudes,
            preguntasafirmativas
    })

    const respuesta= await nuevoResultado.save()
    res.json({
        mensaje:'Resultado del estudiante guardado',
        respuesta
    })
}

resultadoControl.listar= async(req, res)=>{
    const respuesta = await resultado.find()
    res.json(respuesta)
}

resultadoControl.listarID = async(req,res) => {
    const id = req.params.id;
    const respuesta = await resultado.findOne({_id:id});
    res.json(respuesta)
}

resultadoControl.listarIDadmin = async(req,res) => {
    const id = req.params.id;
    const respuesta = await resultado.findOne({_id:id});
    res.json(respuesta)
}

resultadoControl.eliminar = async(req,res) => {
    const id = req.params.id;
    await resultado.findByIdAndRemove({_id:id});
    res.json({
        mensaje:'Resultado eliminado'
    })
}

module.exports = resultadoControl