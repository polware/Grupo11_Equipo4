const mongoose = require('mongoose');
const {Schema} = mongoose;

const contactoSchema = new Schema({
    nombreapellido: {type: String, required: [true, 'Nombre y apellido obligatorio']},
    correo: {type: String, required: [true, 'Correo electrónico obligatorio']},
    institucion: String,
    mensaje: String
})

// Convertir a modelo
module.exports = mongoose.model('contacto', contactoSchema);