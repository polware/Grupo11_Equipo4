// Para correr el servidor: npm run dev

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

//Llamamos conexión a la DB Mongo
require('./database');

// Middlewares
// Usamos el estado desarrollador
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//Rutas
app.use('/administrador', require('./routes/admin.route'))
app.use('/estudiante', require('./routes/estudiante.route'))
app.use('/contactos', require('./routes/contacto.route'))
app.use('/resultados', require('./routes/resultado.route'))

//Configuramos el Puerto
app.set('puerto', process.env.PORT || 4000);
app.listen(app.get('puerto'), function () {
    console.log('Servidor escuchando en el puerto: '+ app.get('puerto'));
});
