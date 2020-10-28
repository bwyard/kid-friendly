package com.kidfriendly.backend.models;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="tb_venue_ratings")
public class VenueRating extends AbstractEntity  {


    private int venueId;

    private String name;

    private String noiseRateComments;

    private int noiseRateNum;

    private  String menuRateComments;

    private int  menuRateNum;

    private int overallRateNum;

//    @ManyToOne
//    private final List<Venue> venues = new ArrayList<>();

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getNoiseRateComments() {
        return noiseRateComments;
    }

    public void setNoiseRateComments(String noiseRateComments) {
        this.noiseRateComments = noiseRateComments;
    }

    public int getNoiseRateNum() {
        return noiseRateNum;
    }

    public void setNoiseRateNum(int noiseRateNum) {
        this.noiseRateNum = noiseRateNum;
    }

    public String getMenuRateComments() {
        return menuRateComments;
    }

    public void setMenuRateComments(String menuRateComments) {
        this.menuRateComments = menuRateComments;
    }

    public int getMenuRateNum() {
        return menuRateNum;
    }

    public void setMenuRateNum(int menuRateNum) {
        this.menuRateNum = menuRateNum;
    }

    public int getOverallRateNum() {
        return overallRateNum;
    }

    public void setOverallRateNum(int overallRateNum) {
        this.overallRateNum = overallRateNum;
    }

    public int getVenueId() {
        return venueId;
    }

    public void setVenueId(int venueId) {
        this.venueId = venueId;
    }
}
