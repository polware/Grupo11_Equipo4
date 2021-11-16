const mongoose = require('mongoose');
const {Schema} = mongoose;

const adminSchema = new Schema({
    nombre: {type: String, required: [true, 'Nombre obligatorio']},
    username: {type: String, required: [true, 'Nombre de usuario obligatorio']},
    contrasena: {type: String, required: [true, 'Contraseña obligatoria']}
})

// Convertir a modelo
module.exports = mongoose.model('admin', adminSchema);
