const mongoose = require('mongoose');
const uri = 'mongodb://localhost:27017/DBciclo4';
//const uri = 'mongodb+srv://usuario-mongo:database2021@cluster-equipo3.k2ju0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const options = {useNewUrlParser: true, useUnifiedTopology: true};

//Conexión a la base de datos de Mongo
mongoose.connect(uri, options).then(
    () => { console.log('Conectado a la Base de Datos: ' +uri) },
    err => { console.log(err) }
    );

module.exports = mongoose;
