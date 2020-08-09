import React, { Component } from 'react';
import axios from 'axios'

export default class VenueLanding extends Component{

    constructor(props){
        super(props);


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
                
            </div>
        )
    }


}