import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';


const Venue = props =>(
    <tr>
        <td>
            <Link to={"view/"+props.venue._id}>{props.venue.venue_name}</Link>
        </td>
        <td>{props.venue.venue_address}</td>
        <td>{props.venue.venue_number}</td>
        <td>{props.venue.venue_rating}</td>
    </tr>
)

export default class VenueList extends Component{

    constructor(props){
        super(props);
        this.state ={ venues: []};
    }

    componentDidMount(){
        axios.get('http://localhost:4000/venues')
            .then(response => {
                this.setState({venues: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    venueList(){
       if(this.state.venues.length){ return this.state.venues.map(function(currentVenue, i){
            return <Venue venue={currentVenue} key={i} />;
        })
    } else return <div> loading</div>
    }
    render(){
        return (
            
            <div className="container">
                <h3>Venues</h3>
                <table className="table table-striped" style={{marginTop:20}}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Phone Number</th>
                            <th>Rating</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.venueList()}
                    </tbody>
                </table>
            </div>
        )
    }


}