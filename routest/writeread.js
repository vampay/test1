'use strict';
const express = require('express');
const crypto = require('crypto');
const wrRoute = express.Router();
const connection = require('../db');
wrRoute.post('/users', function (req, res, next) {
    let mypass = crypto.createHash('md5').update(req.body.password).digest('hex');
        connection.execute(`INSERT INTO books 
     (title, author, published_year, genre,available) 
     VALUES (?, ?, ?, ?, ?, ?);`, [req.body.author, req.body.published_year, req.body.genre, mypass])
        .then(() => {
            console.log('ok');
            res.sendStatus(201).send('Insert Successful!')
        }).catch((err) => {
            console.log(err);
        });
    res.end();
});
wrRoute.get('/users', function (req, res, next) {
    connection.execute('SELECT * FROM books ;')
    .then((result) => {
       var rawData = result[0];
       res.send(JSON.stringify(rawData));
    }).catch((err) => {
       console.log(err);
       res.end();
    });

});
wrRoute.post('/check', function (req, res, next) {

    let mypass = crypto.createHash('md5').update(req.body.password).digest("hex");
 
    connection.execute('SELECT * FROM books  WHERE title=? AND author=?;',

    [req.body.author, mypass]).then((result) => {
        var data = result[0];
        if (data.length === 0) {
           res.sendStatus(200);
        } else {
           res.sendStatus(400);
        }
     }).catch((err) => {
        console.log(err);
        res.sendStatus(404);
     });
 
 });
 wrRoute.use('/', function (req, res, next) {
    res.sendStatus(404);
})

module.exports = wrRoute;

