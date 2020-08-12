package com.kidfriendly.backend.Services;

import com.kidfriendly.backend.DAO.VenueDAO;
import com.kidfriendly.backend.models.Venue;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class VenueServiceImp implements VenueService{
    @Autowired
    private VenueDAO venueDAO;

    @Transactional
    @Override
    public List<Venue> get(){
        return venueDAO.get();
    }

    @Transactional
    @Override
    public  Venue get(int id) {
        return  venueDAO.get(id);
    }

    @Transactional
    @Override
    public void save(Venue venue){
        venueDAO.save(venue);
    }

    @Transactional
    @Override
    public void delete(int id) {
        venueDAO.delete(id);
    }






}
