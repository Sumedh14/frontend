import React from 'react';
import { BrowserRouter, Route, Switch, useHistory, NavLink } from 'react-router-dom';


const About = () => {
    return (

        <div>
            <button className="custom-nav-link"><NavLink to="/">Back</NavLink></button>
            <center>
                <h1>Street Food Eates</h1>
                <h2 style={{ color: "red" }}>About US</h2>
                <p>You may visit countries and try their prominent street foods, but we bet the taste won't match the one you'll have in the Street food of India.From mouth-watering Paani Puri, the Dahi Bhallas to the Chaat Papdi Indian Street foods are delicious.As diverse as is the country, it experiences a manifold of cuisines, each having at least one speciality of Street Food.</p>
            </center >
        </div>


    );
}

export default About;