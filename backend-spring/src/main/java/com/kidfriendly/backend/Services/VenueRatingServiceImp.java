package com.kidfriendly.backend.Services;


import com.kidfriendly.backend.DAO.VenueRatingDAO;
import com.kidfriendly.backend.models.VenueRating;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
@Service
public class VenueRatingServiceImp implements  VenueRatingService {
    @Autowired
    private VenueRatingDAO venueRatingDAO;

    @Transactional
    @Override
    public List<VenueRating> get(){
        return venueRatingDAO.get();
    }

    @Transactional
    @Override
    public  VenueRating get(int id) {
        return  venueRatingDAO.get(id);
    }

    @Transactional
    @Override
    public void save(VenueRating venueRating){
        venueRatingDAO.save(venueRating);
    }

    @Transactional
    @Override
    public void delete(int id) {
        venueRatingDAO.delete(id);
    }

}
