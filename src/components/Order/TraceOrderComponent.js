import { React, useState, useEffect } from "react";
import Trace from "../../Services/Trace";
import { BrowserRouter, Route, Switch, useHistory, NavLink } from 'react-router-dom';

const TraceOrderComponent = () => {


    const [live, setLive] = useState([]);
    const [received, setReceived] = useState("");

    useEffect(() => {
        Trace.getLive().then((response) => {
            setLive(response.data);
            setLive(response);
            console.log("Live - ", live);
        });
    }, [])


    const onLogout = () => {
        if (localStorage) {
            localStorage.clear();
        }

    }


    return (
        <div>
             <button className="custom-nav-link"><NavLink to="/shopes" >back</NavLink></button>
            <button className="custom-nav-link"><NavLink to="/" onClick={onLogout}>Logout</NavLink></button>
            <center>
                <br />
                <br />

                <h1><b>Thank You For Ordering.......</b></h1><br />
               
                <br />
                <br />
            </center>
        </div>
    )


}


export default TraceOrderComponent;