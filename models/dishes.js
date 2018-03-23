const mongoose = require('mongoose');

const Schema = mongoose.Schema;
var commentSchema = require('./comments');

require('mongoose-currency').loadType(mongoose);
var Currency = mongoose.Types.Currency;



var dishSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    label: {
        type: String,
        default: ''
    },
    price: {
        type: Currency,
        required: true,
        min: 0
    },
    featured: {
        type: Boolean,
        default:false
    },
    comments:[commentSchema]
}, {
    timestamps: true
});

var Dishes = mongoose.model('Dish', dishSchema); //use schema in app

module.exports = Dishes;