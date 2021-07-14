const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const { API_VERSION } = require('./config');

//Carga de rutas
const userRoutes = require('./routers/user');
const authRoutes = require('./routers/auth');
const menuRoutes = require('./routers/menu');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// configuracion del header de HTTP;
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
    res.setHeader('Access-Control-Allow-Headers', '*')
    res.setHeader('Access-Control-Allow-Credentials', true)
    next();
});


//Rutas basicas
app.use(`/api/${API_VERSION}`, userRoutes);
app.use(`/api/${API_VERSION}`, authRoutes);
app.use(`/api/${API_VERSION}`, menuRoutes);

module.exports = app;