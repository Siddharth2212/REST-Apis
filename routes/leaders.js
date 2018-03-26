    const express = require('express');
    const leaderRouter = express.Router();

    const bodyParser = require('body-parser');
    leaderRouter.use(bodyParser.json());

    const mongoose = require('mongoose');
    const Leaders = require('../models/leaders');

    leaderRouter.route('/')
        .get((req, res, next) => {
            Leaders.find({})
                .then((leaders) => {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    res.json(leaders);
                }, (err) => next(err))
                .catch((err) => next(err));
        })
    .post((req, res, next) => {
        Leaders.create(req.body)
        .then((dish) => {
        console.log('Dish Created ', dish);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(dish);
    }, (err) => next(err))
    .catch((err) => next(err));
    })

    leaderRouter.route('/:leaderId')
        .get((req, res, next) => {
            Leaders.findById(req.params.leaderId)
                .then((leader) => {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    res.json(leader);
                }, (err) => next(err))
                .catch((err) => next(err));
        });

    module.exports = leaderRouter;