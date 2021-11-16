const mongoose = require('mongoose');
const uri = 'mongodb://localhost:27017/DBciclo4';
const options = {useNewUrlParser: true, useUnifiedTopology: true};

//Conexión a la base de datos de Mongo
mongoose.connect(uri, options).then(
    () => { console.log('Conectado a la Base de Datos: ' +uri) },
    err => { console.log(err) }
    );

module.exports = mongoose;
