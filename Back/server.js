// DEPENDENCIAS
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');

// ASIGNACIÓN DEL PUERTO DEL SISTEMA OPERATIVO Ó EL QUE SE INDICA
const port = process.env.PORT || 9000;

const api = require('./routes/api');

// ASIGNACIÓN DE LOS MÉTODOS DE EXPRESS A UNA CONSTANTE APP
const app = express();

app.use(cors());

// MIDDLEWARES
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// RUTAS
app.get('/', (req, res) => {
    res.send('Hola desde el Servidor')
});

app.get('/events', (req, res) => {
    let events = [
        {
            "_id": "1",
            "name": "Auto Expo",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z"
        },
        {
            "_id": "2",
            "name": "Auto Expo",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z"
        },
        {
            "_id": "3",
            "name": "Auto Expo",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z"
        },
        {
            "_id": "4",
            "name": "Auto Expo",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z"
        },
        {
            "_id": "5",
            "name": "Auto Expo",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z"
        },
        {
            "_id": "6",
            "name": "Auto Expo",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z"
        }
    ];

    res.json(events);
});

app.use('/api', api);

// INICIANDO EL SERVIDOR
app.listen(port, () => {
    console.log(`Corriendo en http://localhost:${port}`);
});
