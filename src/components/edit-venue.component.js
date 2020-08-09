import React, { Component } from 'react';

export default class EditVenue extends Component{

    constructor(props) {
        super(props);

        this.onChangeVenueName = this.onChangeVenueName.bind(this);
        this.onChangeVenueAddress = this.onChangeVenueAddress.bind(this);
        this.onChangeVenueNumber = this.onChangeVenueNumber.bind(this);
        this.onChangeVenueRating = this.onChangeVenueRating.bind(this);
        this.onSubmit=this.onSubmit.bind(this);

        this.state = {
            venue_name: '',
            venue_address: '',
            venue_number: '',
            venue_rating: ''
        }
    }

    render(){
        return (
            <div className="container">
                <p>Welcome to Edit venue Component!</p>

            </div>
        )
    }


}