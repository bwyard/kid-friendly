import React, { Component } from 'react';

export default class AddVenue extends Component {
    render() {
        constructor(props) {
            super(props);

            this.onChangeVenueName = this.onChangeVenueName.bind(this);
            this.onChangeVenueAddress = this.onChangeVenueAddress.bind(this);
    
            this.state = {
                venue_name: '',
                venue_address: '',
                venue_number: '',
                venue_rating: ''
            }
        }

        onChangeVenueName(e){
            this.setState({
                venue_name:e.target.value
            });
        }
        onChangeVenueNumber(e){
            this.setState({
                venue_number:e.target.value
            });
        }
        onChangeVenueAddress(e){
            this.setState({
                venue_address:e.target.value
            });
        }
        onSubmit(e) {
            e.preventDefault();
            
            console.log(`Form submitted:`);
            console.log(`Venue Name: ${this.state.venue_name}`);
            console.log(`Venue Address: ${this.state.venue_address}`);
            console.log(`Venue Phone: ${this.state.venue_number}`);
            console.log(`Venue Rating: ${this.state.venue_rating}`);
            
            this.setState({
                venue_name: '',
                venue_address: '',
                venue_number: '',
                venue_rating: ''
            })
        }



        return (
            <div style={{marginTop: 10}}>
            <h3>Create New Todo</h3>
            </div>
        )
    }
}