const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Venue = new Schema({
    venue_name:{
        type:String
    },
    venue_address:{
        type:String
    },
    venue_number:{
        type:String
    },
    venue_rating:{
        type: Number
    }
});


module.exports = mongoose.model('Venue', Venue)