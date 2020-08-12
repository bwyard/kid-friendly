package com.kidfriendly.backend.Services;

import com.kidfriendly.backend.models.Venue;

import java.util.List;

public interface VenueService {

    List<Venue> get();

        Venue get(int id);

        void save(Venue venue);

        void delete(int id);
}
