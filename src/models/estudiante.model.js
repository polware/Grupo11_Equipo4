const mongoose = require('mongoose');
const {Schema} = mongoose;

const estudianteSchema = new Schema({
    nombres: {type: String, required: [true, 'Nombre obligatorio']},
    apellidos: {type: String, required: [true, 'Apellido obligatorio']},
    identificacion: {type: String, required: [true, 'Identificación obligatoria']},
    contrasena: {type: String, required: [true, 'Contraseña obligatoria']},
    correo: {type: String, required: [true, 'Correo electrónico obligatorio']},
    fechanac: String,
    colegio: String,
    ciudad: String,
    intereses: String,
    aptitudes: String,
})

// Convertir a modelo
module.exports = mongoose.model('estudiante', estudianteSchema);
