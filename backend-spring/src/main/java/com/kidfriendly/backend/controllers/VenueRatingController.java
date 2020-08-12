package com.kidfriendly.backend.controllers;

import com.kidfriendly.backend.Services.VenueRatingService;
import com.kidfriendly.backend.models.VenueRating;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class VenueRatingController {

    @Autowired
    private VenueRatingService venueRatingService;

    @GetMapping("/venueRating")
    public List<VenueRating> get(){
        return venueRatingService.get();
    }

    @PostMapping("/venueRating")
    public VenueRating save(@RequestBody VenueRating venueRating){
        venueRatingService.save(venueRating);
        return venueRating;
    }

    @GetMapping("/venueRating/{id}")
    public VenueRating get(@PathVariable int id){
        return venueRatingService.get(id);
    }
    @DeleteMapping("/venueRating/{id}")
    public String delete(@PathVariable int id){
        venueRatingService.delete(id);

        return "VenueRating removed with id " + id;
    }
    @PutMapping("/venueRating")
    public VenueRating update(@RequestBody VenueRating venueRating){
        venueRatingService.save(venueRating);
        return venueRating;
    }
}
