const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var leaderSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    featured: {
        type: Boolean,
        default:false
    },
    designation: {
        type: String,
        required: true
    },
    abbr: {
        type: String,
        default:false
    }
}, {
    timestamps: true
});

var Leaders = mongoose.model('Leader', leaderSchema); //use schema in app

module.exports = Leaders;