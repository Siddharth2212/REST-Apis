const express = require('express');
const promotionRouter = express.Router();

const bodyParser = require('body-parser');
promotionRouter.use(bodyParser.json());

const mongoose = require('mongoose');
const Promotions = require('../models/promotions');

promotionRouter.route('/')
    .get((req, res, next) => {
    Promotions.find({})
    .then((promotions) => {
    res.statusCode = 200;
res.setHeader('Content-Type', 'application/json');
res.json(promotions);
}, (err) => next(err))
.catch((err) => next(err));
})
.post((req, res, next) => {
    Promotions.create(req.body)
    .then((dish) => {
    console.log('Dish Created ', dish);
res.statusCode = 200;
res.setHeader('Content-Type', 'application/json');
res.json(dish);
}, (err) => next(err))
.catch((err) => next(err));
})

promotionRouter.route('/:promotionId')
    .get((req, res, next) => {
    Promotions.findById(req.params.promotionId)
    .then((promotion) => {
    res.statusCode = 200;
res.setHeader('Content-Type', 'application/json');
res.json(promotion);
}, (err) => next(err))
.catch((err) => next(err));
});

module.exports = promotionRouter;