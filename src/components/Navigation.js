import React from 'react';
import { BrowserRouter, Route, Switch, useHistory, NavLink } from 'react-router-dom';
import '../../src/App.css';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Error from './Error';

import Login from './LoginForm/Login';
import Register from './RegisterForm/register';
import DishesComponent from './Dishes/DishesComponent';
import Dashboard from './Dashboard/dashboard';
// import vegComponent from './components/FoodCategories/vegComponent';
// import nonVegComponent from './components/FoodCategories/nonVegComponent';
import ShopComponent from './Shop/ShopComponent';

// import { NavLink } from 'react-router-dom';

const Navigation = () => {
    const history = useHistory();
    return (
        <div>
            <button className="custom-nav-link"><NavLink to="/">Home</NavLink></button>
            <button className="custom-nav-link"><NavLink to="/register">Register</NavLink></button>
            <button className="custom-nav-link" ><NavLink to="/login">Login</NavLink></button>
    
            {/* <button className="custom-nav-link" onClick={() => handleLogin(dish)} disabled={isLoginDisabled(dish)}><NavLink to="/login">Login</NavLink></button> */}
            <button className="custom-nav-link"><NavLink to="/contact">Contact</NavLink></button>
            <button className="custom-nav-link"><NavLink to="/about">About</NavLink></button>




        </div>


    );
}

export default Navigation;