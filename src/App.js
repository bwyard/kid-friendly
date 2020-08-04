import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import LandingPage from "./components/landing-page.component";
import VenueLanding from "./components/venue-landing.component";
import VenueRating from "./components/venue-rating.component";
import EditVenue from "./components/edit-venue.component";
import AddVenue from "./components/add-venue.component";
import FilterView from "./components/filter-view.component";


function App() {
  return (
    <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand">Kid Friendly</Link>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/">Home</Link>&nbsp;&nbsp;&nbsp;&nbsp;
                </li>
                <li className="navbar-item">
                  <Link to="/add">Add Venue</Link>&nbsp;&nbsp;&nbsp;&nbsp;
                </li>
                <li className="navbar-item">
                  <Link to="/search">Search</Link>
                </li>

              </ul>

            </div>
          </nav>
          <br/>

      


      <Route path="/" exact component={LandingPage} />
      <Route path="/view/:id" component={VenueLanding} />
      <Route path="/rate/:id" component={VenueRating} />
      <Router path="/edit/:id" component={EditVenue} />
      <Router path="/add" component={AddVenue} />
      <Router path="/search" component={FilterView} />
      </div>
    </Router>
  );
}

export default App;
