import React, { Component } from 'react';
import axios from 'axios';

export default class EditVenue extends Component{

    constructor(props) {
        super(props);

        this.onChangeVenueAddress = this.onChangeVenueAddress.bind(this);
        this.onChangeVenueNumber = this.onChangeVenueNumber.bind(this);
        this.onChangeVenueRating = this.onChangeVenueRating.bind(this);
        this.onSubmit=this.onSubmit.bind(this);

        this.state = {
            name: '',
            address: '',
            number: '',
            rating: ''
        }
    }
    componentDidMount() {
        axios.get('http://localhost:8080/api/venue/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    name: response.data.name,
                    address: response.data.address,
                    number: response.data.number,
                    rating: response.data.rating
                })   
            })
            .catch(function (error) {
                console.log(error);
            })
    }
       onChangeVenueName = (e) => {
            this.setState({
                name:e.target.value
            });
        }
        onChangeVenueNumber(e){
            this.setState({
                number:e.target.value
            });
        }
        onChangeVenueAddress(e){
            this.setState({
                address:e.target.value
            });
        }
        onChangeVenueRating(e){
            this.setState({
                rating:e.target.value
            });
        }
        onSubmit(e) {
            e.preventDefault();
            
            console.log(`Form submitted:`);
            console.log(`Venue Name: ${this.state.name}`);
            console.log(`Venue Address: ${this.state.address}`);
            console.log(`Venue Phone: ${this.state.number}`);
            console.log(`Venue Rating: ${this.state.rating}`);

            const newVenue ={
                name:this.state.name,
                address:this.state.address,
                number:this.state.number,
                rating:this.state.rating
            };

            axios.post('http://localhost:8080/venue'+ this.props.match.params.id, newVenue)
                .then(res => console.log(res.data));
            
            this.setState({
                name: '',
                address: '',
                number: '',
                rating: ''
            })
        }

    render(){
        return (
            <div className="container">
                <p>Welcome to Edit venue Component!</p>
                <div style={{marginTop:25}}>
               <h3>Edit Venue {this.state.name}</h3>
               <form onSubmit={this.onSubmit}>
                   <div className="form-group">
                       <label>Name</label>
                       <input type="text"
                       className="form-control"
                       value={this.state.name}
                       onChange={this.onChangeVenueName}
                       />
                   </div>
                   <div className="form-group">
                       <label>Address</label>
                       <input type="text"
                       className="form-control"
                       value={this.state.address}
                       onChange={this.onChangeVenueAddress}
                       />
                   </div>
                   <div className="form-group">
                       <label>Phone</label>
                       <input type="tel"
                       className="form-control"
                       value={this.state.number}
                       onChange={this.onChangeVenueNumber}
                       />
                   </div>
                   <div className="form-group">
                       <label>Rating</label>
                       <input type="number"
                       min="0" max="5"
                       className="form-control"
                       value={this.state.rating}
                       onChange={this.onChangeVenueRating}
                       />
                   </div>
                   <div className="form-group">
                        <input type="submit" value="Edit Venue" className="btn btn-primary" />
                   </div>
               </form>

           </div>
            </div>
        )
    }


}