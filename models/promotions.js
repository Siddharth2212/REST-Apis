const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var promotionSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    }
    ,image: {
        type: String,
        required: true
    },
    featured: {
        type: Boolean,
        default:false
    },
    price: {
        type: String,
        default:false
    }
}, {
    timestamps: true
});

var Promotions = mongoose.model('Promotion', promotionSchema); //use schema in app

module.exports = Promotions;