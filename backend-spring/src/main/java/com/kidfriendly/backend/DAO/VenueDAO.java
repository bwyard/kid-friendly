package com.kidfriendly.backend.DAO;

import com.kidfriendly.backend.models.Venue;

import java.util.List;

public interface VenueDAO {

    List<Venue> get();

    Venue get(int id);

    void save(Venue venue);

    void delete(int id);
}
