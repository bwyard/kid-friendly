import React, { Component, Suspense } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

import VenueList from "./venue-list.component";

export default class LandingPage extends Component{

    constructor(props){
        super(props);
    }

    // componentDidMount(){
    //     axios.get('http://localhost:4000/venues')
    //         .then(response => {
    //             this.setState({venues: response.data });
    //         })
    //         .catch(function (error){
    //             console.log(error);
    //         })
    // }


    render(){
        return (
            
            <div className="container">
                <h1>Kid Friendly Landing page</h1>
                
                    <VenueList />
                
            </div>
        )
    }


}