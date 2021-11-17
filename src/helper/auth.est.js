const Authest = {}
const jwt = require('jsonwebtoken');

Authest.verificarToken = (req, res, next) =>{
    if(!req.headers.autorizacion){
        return res.json({
            mensaje:'No está autorizado'
        })
    }
    const token = req.headers.autorizacion;
    if(token === 'null'){
        return res.json({
            mensaje:'No está autorizado'
        })
    }
    
    jwt.verify(token,'Student',(error, resultado) =>{
        if(error){
            return res.json({
                mensaje:'No está autorizado'
            })            
        }
        next()
    })
    
}

module.exports = Authest;