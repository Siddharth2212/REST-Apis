const express = require('express');
const dishRouter = express.Router();

const bodyParser = require('body-parser');
dishRouter.use(bodyParser.json());

const mongoose = require('mongoose');
const Dishes = require('../models/dishes');

dishRouter.route('/')
    .get(function (req, res) { //To get a resource
        Dishes.find({})
            .then((dishes)=>{
                res.setHeader('Content-Type', 'application/json');
                res.status(200).json(dishes);
            }, (err) => next(err))
            .catch((err) => {
            })
    })
    .post(function (req, res) {    //To create new resource
        var dish = new Dishes(req.body);
        dish.save()
            .then((dish) => {
                console.log('Dish Created ', dish);
                res.setHeader('Content-Type', 'application/json');
                res.status(201).json(dish);
            }, (err)=>{

            })
    })
    .put(function (request, response) { //To update an existing resource with something new
        response.status(403).
        response.write('You cannot do PUT operation on this endpoint');
        response.end();
    })
    .delete(function (req, res) { //To delete a resource
        Dishes.remove({})
            .then((resp) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(resp);
            }, (err) => next(err))
            .catch((err) => next(err));
    });

dishRouter.route('/:dishId')
    .get((req,res,next) => {
        Dishes.findById(req.params.dishId)
            .then((dish) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(dish);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .post((req, res, next) => {
        res.statusCode = 403;
        res.end('POST operation not supported on /dishes/'+ req.params.dishId);
    })
    .put((req, res, next) => {
        Dishes.findByIdAndUpdate(req.params.dishId, {
            $set: req.body
        }, { new: true })
            .then((dish) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(dish);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .delete((req, res, next) => {
        Dishes.findByIdAndRemove(req.params.dishId)
            .then((resp) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(resp);
            }, (err) => next(err))
            .catch((err) => next(err));
    });

module.exports = dishRouter;