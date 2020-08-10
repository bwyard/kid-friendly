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
        onChangeVenueRating(e){
            this.setState({
                venue_rating:e.target.value
            });
        }
        onSubmit(e) {
            e.preventDefault();
            
            console.log(`Form submitted:`);
            console.log(`Venue Name: ${this.state.venue_name}`);
            console.log(`Venue Address: ${this.state.venue_address}`);
            console.log(`Venue Phone: ${this.state.venue_number}`);
            console.log(`Venue Rating: ${this.state.venue_rating}`);

            const newVenue ={
                venue_name:this.state.venue_name,
                venue_address:this.state.venue_address,
                venue_number:this.state.venue_number,
                venue_rating:this.state.venue_rating
            };

            axios.post('http://localhost:4000/venues/update'+ this.props.match.params.id, newVenue)
                .then(res => console.log(res.data));
            
            this.setState({
                venue_name: '',
                venue_address: '',
                venue_number: '',
                venue_rating: ''
            })
        }

    render(){
        return (
            <div className="container">
                <p>Welcome to Edit venue Component!</p>
                <div style={{marginTop:25}}>
               <h3>Add New Venues!</h3>
               <form onSubmit={this.onSubmit}>
                   <div className="form-group">
                       <label>Name</label>
                       <input type="text"
                       className="form-control"
                       value={this.state.venue_name}
                       onChange={this.onChangeVenueName}
                       />
                   </div>
                   <div className="form-group">
                       <label>Address</label>
                       <input type="text"
                       className="form-control"
                       value={this.state.venue_address}
                       onChange={this.onChangeVenueAddress}
                       />
                   </div>
                   <div className="form-group">
                       <label>Phone</label>
                       <input type="tel"
                       className="form-control"
                       value={this.state.venue_number}
                       onChange={this.onChangeVenueNumber}
                       />
                   </div>
                   <div className="form-group">
                       <label>Rating</label>
                       <input type="number"
                       min="0" max="5"
                       className="form-control"
                       value={this.state.venue_rating}
                       onChange={this.onChangeVenueRating}
                       />
                   </div>
                   <div className="form-group">
                        <input type="submit" value="Add Venue" className="btn btn-primary" />
                   </div>
               </form>

           </div>
            </div>
        )
    }


}