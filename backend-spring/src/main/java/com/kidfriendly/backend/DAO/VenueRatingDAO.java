package com.kidfriendly.backend.DAO;

import com.kidfriendly.backend.models.Venue;
import com.kidfriendly.backend.models.VenueRating;

import java.util.List;

public interface VenueRatingDAO {
    List<VenueRating> get();

    VenueRating get(int id);

    void save(VenueRating venueRating);

    void delete(int id);

}
