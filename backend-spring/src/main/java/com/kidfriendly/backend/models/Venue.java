package com.kidfriendly.backend.models;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name="tb_venue")
public class Venue extends AbstractEntity {




    @Column
    private String name;

    @Column
    private  String address;

    @Column
    private String phoneNumber;

    @Column
    private Number rating;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public Number getRating() {
        return rating;
    }

    public void setRating(Number rating) {
        this.rating = rating;
    }


    @Override
    public String toString() {
        return "venue{" +
                "name='" + name + '\'' +
                ", address='" + address + '\'' +
                ", rating=" + rating +
                '}';
    }
}
