const mongoose = require('mongoose');

//URI=('mongodb://localhost:27017/DBciclo4')
URI=('mongodb+srv://usuario-mongo:database2021@cluster-equipo3.k2ju0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')

//Conexión a base de datos MongoDB
mongoose.connect(URI,{ useNewUrlParser: true, useUnifiedTopology:true, })
.then (db => console.log('Conectado a Base de Datos:', db.connection.name))
.catch(error => console.log(error))


module.exports = mongoose;
