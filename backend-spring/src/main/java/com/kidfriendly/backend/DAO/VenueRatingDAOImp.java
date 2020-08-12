package com.kidfriendly.backend.DAO;

import com.kidfriendly.backend.models.VenueRating;
import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.List;

@Repository
public class VenueRatingDAOImp implements VenueRatingDAO {
    @Autowired
    private EntityManager entityManager;

    @Override
    public List<VenueRating> get(){
        Session currSession = entityManager.unwrap(Session.class);
        Query<VenueRating> query = currSession.createQuery("from VenueRating", VenueRating.class);
        List<VenueRating> list = query.getResultList();
        return list;
    }

    @Override
    public VenueRating get(int id){
        Session currSession = entityManager.unwrap(Session.class);
        VenueRating venueRating = currSession.get(VenueRating.class, id);
        return  venueRating;
    }

    @Override
    public void save(VenueRating venueRating){
        Session currSession = entityManager.unwrap(Session.class);
        currSession.saveOrUpdate(venueRating);
    }
    public void delete(int id){
        Session currSession = entityManager.unwrap(Session.class);
        VenueRating venueRating = currSession.get(VenueRating.class, id);
        currSession.delete(venueRating);
    }
}
