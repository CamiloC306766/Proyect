const express = require('express');
const corse = require('cors');
const dotenv = require('dotenv');
const sequelize = require('./config/db.config');
const clientRoutes = require('./Client/routes');
const productRoutes = require('./Product/routes');
const mailerRoutes = require('./nodeMailer/routes');
const valorantRoutes = require('./Valorant/routes');
const csvRoutes = require("./csvtoJson/routes")
//const { FORCE } = require('sequelize/lib/app-hints');


dotenv.config();
const app = express();

//Middlewares
app.use(corse());
app.use(express.json());


//Rutes
app.use('/api/clients', clientRoutes);
app.use('/api/products', productRoutes);
app.use('/api/mailer', mailerRoutes);
app.use('/api/valorant',valorantRoutes);
app.use("/csv", csvRoutes);

//Conectar a MySQL y sincronizar modelos
sequelize.sync({ alter: true }) //  ajusta las columnas automáticamente
  .then(() => console.log(' Base de datos sincronizada con el modelo'))
  .catch(err => console.error(' Error al sincronizar:', err));


//Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);

});

module.exports = app