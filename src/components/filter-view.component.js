import React, { Component } from 'react';
import VenueList from './venue-list.component'

export default class Filter extends Component{
    render(){
        return (
            <div>
                <p>Welcome to Search!</p>
                <input type="search"></input>
                <VenueList/>

            </div>
        )
    }


}