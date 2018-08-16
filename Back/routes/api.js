const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/user');

// CONEXIÓN CON LA BASE DE DATOS
const db = "mongodb://localhost/prueba-angular-database";
mongoose.connect(db)
    .then(db => console.log('Base de datos conectada'))
    .catch(err => console.log('Error:' + err));

// RUTAS

// PRINCIPAL DE LA API
router.get('/', (req, res) => {
    res.send('Desde la ruta API');
});

// Guardar
router.post('/save', (req, res) => {

    let userData = req.body;

    /*let user = new User(userData);
    user.save((err, registeredUser) => {
        if (err) {
            console.log(err);            
        }
        else {
            res.status(200).send(registeredUser);
        }
    });*/

    let user = new User({
        name: userData.name,
        email: userData.email,
        password: userData.number
    });

    user.save((err, registeredUser) => {
        if (err) {
            console.log(err);
        }
        else {
            //res.status(200).send({ email, password });
            res.status(200).send(registeredUser);
        }
    });

});

router.get('/events', (req, res) => {
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

module.exports = router;
