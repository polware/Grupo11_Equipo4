const mongoose = require('mongoose');
const {Schema} = mongoose;

const resultadoSchema = new Schema({
    identidad: String,
    name: String,
    letraintereses: String,
    letraaptitudes: String,
	ramaintereses: String,
    ramaaptitudes: String,
    preguntasafirmativas: String
})

// Convertir a modelo
module.exports = mongoose.model('resultado', resultadoSchema);