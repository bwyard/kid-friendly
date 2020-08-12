package com.kidfriendly.backend.Services;

import com.kidfriendly.backend.models.VenueRating;

import java.util.List;

public interface VenueRatingService {
    List<VenueRating> get();

    VenueRating get(int id);

    void save(VenueRating venueRating);

    void delete(int id);
}
