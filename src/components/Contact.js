import React from 'react';
import { BrowserRouter, Route, Switch, useHistory, NavLink } from 'react-router-dom';

const Contact = () => {
    return (

        <div>
            <button className="custom-nav-link"><NavLink to="/">Back</NavLink></button>
            <center>
                <h1>Street Food Eates</h1>
                <h1 style={{ color: "blueviolet" }}>Contact US</h1>
                <div>
                    Name :- Shashank Artani
                    <br />
                    Mobile No :- 7987565253
                </div>
                <br />
                <div>
                    Name :-Sumedh Bhowate
                    <br />
                    Mobile No :- 9405143148
                </div>
                <br />
                <div>
                    Name :- Suraj
                    <br />
                    Mobile No :- 
                </div>
                <br />
                <div>
                    Name :- Pankaj
                    <br />
                    Mobile No :- 
                </div>
                <br />
                <div>
                    Name :- Aditya somnath dase
                    <br />
                    Mobile No :- 
                </div>
               
              
            </center>
        </div>

    );
}

export default Contact;