import React, { Component, useState, useEffect } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';


const VenueLanding = (props) => {
    const [venue, setVenue] = useState('');
    

    useEffect(() =>{
    
    axios.get('http://localhost:4000/venues/'+props.match.params.id)
            .then(response => {
                setVenue(response.data)
            })
            .catch(function (error) {
                console.log(error);
            })
        },[]);



    return (
        <div className="container">
            <p>Welcome to view venue Component!</p>
            <div style={{marginTop:25}}>
           <h3>{venue.venue_name}</h3>
               
               
                   <label>Address</label>
                   {venue.venue_address}
              
                   <label>Phone</label>
                    {venue.venue_number}
               
                   <label>Rating</label>
                   {venue.venue_rating}
               
           

       </div>
       <Link to={"/edit/"+props.match.params.id}>Edit</Link>
        </div>
    )



}

export default VenueLanding;




// export default class VenueLanding extends Component{

//     constructor(props){
//         super(props);


//         this.state = {
//             venue_name: '',
//             venue_address: '',
//             venue_number: '',
//             venue_rating: '',
//             venue_address:''
//         }
//     }
//     componentDidMount() {
//         axios.get('http://localhost:4000/venues/'+this.props.match.params.id)
//             .then(response => {
//                 this.setState({
//                     venue_name: response.data.venue_name,
//                     venue_address: response.data.venue_address,
//                     venue_number: response.data.venue_number,
//                     venue_rating: response.data.venue_rating,
//                     venue_id: response.data.venue_id
//                 })   
//             })
//             .catch(function (error) {
//                 console.log(error);
//             })
//     }


//     render(){
//         return (
//             <div className="container">
//                 <p>Welcome to view venue Component!</p>
//                 <div style={{marginTop:25}}>
//                <h3>{this.state.venue_name}</h3>
                   
                   
//                        <label>Address</label>
//                        {this.state.venue_address}
                  
//                        <label>Phone</label>
//                     {this.state.venue_number}
                   
//                        <label>Rating</label>
//                        {this.state.venue_rating}
                   
               

//            </div>
//            <Link to={"/edit/"+this.props.match.params.id}>Edit</Link>
//             </div>
//         )
//     }


// }