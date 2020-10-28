package com.kidfriendly.backend.controllers;


import com.kidfriendly.backend.Services.VenueService;
import com.kidfriendly.backend.models.Venue;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class VenueController {

    @Autowired
    private VenueService venueService;

    @GetMapping("/venue")
    public List<Venue> get(){
        return venueService.get();
    }

    @PostMapping("/venue")
    public Venue save(@RequestBody Venue venue){
        venueService.save(venue);
        return venue;
    }

    @GetMapping("/venue/{id}")
    public Venue get(@PathVariable int id){
        return venueService.get(id);
    }

    @DeleteMapping("/venue/{id}")
    public String delete(@PathVariable int id){
        venueService.delete(id);

        return "Venue removed with id " + id;
    }
    @PutMapping("/venue/update/{id}")
    public Venue update(@RequestBody Venue venue, @PathVariable int id){

        venueService.save(venue);
        return venue;
    }
}
