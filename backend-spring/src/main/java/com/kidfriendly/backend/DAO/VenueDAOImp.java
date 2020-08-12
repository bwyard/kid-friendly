package com.kidfriendly.backend.DAO;


import com.kidfriendly.backend.models.Venue;
import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.List;

@Repository
public class VenueDAOImp implements VenueDAO {

    @Autowired
    private EntityManager entityManager;

    @Override
    public List<Venue> get(){
        Session currSession = entityManager.unwrap(Session.class);
        Query<Venue> query = currSession.createQuery("from Venue", Venue.class);
        List<Venue> list = query.getResultList();
        return list;
    }

    @Override
    public Venue get(int id){
        Session currSession = entityManager.unwrap(Session.class);
        Venue venue = currSession.get(Venue.class, id);
        return  venue;
    }

    @Override
    public void save(Venue venue){
        Session currSession = entityManager.unwrap(Session.class);
        currSession.saveOrUpdate(venue);
    }
    public void delete(int id){
        Session currSession = entityManager.unwrap(Session.class);
        Venue venue = currSession.get(Venue.class, id);
        currSession.delete(venue);
    }



}
