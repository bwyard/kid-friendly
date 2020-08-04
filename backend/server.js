const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const venueRoutes = express.Router();
const PORT = 4000;

let Venue = require('./venue.model');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/venues', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

venueRoutes.route('/').get(function(req, res){
    Venue.find(function(err,venues){
        if (err){
            console.log(err);
        } else {
            res.json(venues);
        }
    });
});

venueRoutes.route('/:id').get(function(req,res){
    let id = req.params.id;
    Venue.findById(id, function(err, venue){
        res.json(venue);
    });
});

venueRoutes.route('/add').post(function(req, res){
    let venue = new Venue(req.body);
    venue.save()
        .then(venue => {
            res.status(200).json({'venue': 'Venue added successfully'});
            })
        .catch(err => {
            res.status(400).send('adding new venue failed');
        });
});

venueRoutes.route('/update/:id').post(function(req,res){
    Venue.findById(req.params.id, function(err, venue){
        if (!venue)
            res.status(404).send("data is not found");
        else
            venue.venue_name = req.body.venue_name;
            venue.venue_address = req.body.venue_address;
            venue.venue_number = req.body.venue_number;
            venue.venue_rating = req.body.venue_rating;

            venue.save().then(venue => {
                res.json('Venue updated!')
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});


app.use('/venues', venueRoutes);




app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});