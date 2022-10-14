import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom';
import '../src/App.css'


import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import Navigation from './components/Navigation';
import Login from './components/LoginForm/Login';
import Register from './components/RegisterForm/register';
//import DemoForm from './components/LoginForm/DemoForm';
//import Loginvalidation from './components/LoginForm/Loginvalidation';
import DishesComponent from './components/Dishes/DishesComponent';
import Dashboard from './components/Dashboard/dashboard';
import vegComponent from './components/FoodCategories/vegComponent';
import nonVegComponent from './components/FoodCategories/nonVegComponent';
import ShopComponent from './components/Shop/ShopComponent';
import AgentComponent from './components/Agent/AgentComponent';
//import Header from './components/SharedComponent/Header';
import CustomerRegister from './components/RegisterForm/CustomerRegister';
import ShopkeeperRegister from './components/RegisterForm/ShopkeeperRegister';
import AgentRegister from './components/RegisterForm/AgentRegister';
import EditDishesComponent from './components/Dishes/EditDishesComponent';
import AddDishComponent from './components/Dishes/AddDishComponent';
import UpdateDishComponent from './components/Dishes/UpdateDishComponent';
import OrderCustomerComponent from './components/Order/OrderCustomerComponent';
import PreviousOrder from './components/Order/PreviousOrder';
import TraceOrderComponent from './components/Order/TraceOrderComponent';
import Update from './components/update/ShopList';
import UpdateShop from './components/update/UpdateShop';
import UpdateCustomer from './components/update/UpdateCustomer';
// import AgentOrders from './components/Agent/AgentOrders';
import EditCustomerComponent from './components/update/CustomerList';

const App = ({ history }) => {
  // const history = useHistory();
  return (
    <BrowserRouter history={history}>

      <div className="App">


        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/login" component={Login} />
          <Route path="/Update" component={Update} />
          { <Route path="/UpdateShop" component={UpdateShop} /> }
          { <Route path="/UpdateCustomer" component={UpdateCustomer} /> }
          <Route path="/EditCustomerComponent" component={EditCustomerComponent} /> 
          <Route path="/register" component={Register} />
          <Route path="/dishes" component={DishesComponent} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/shopes" component={() => (<ShopComponent history={history} />)} />
          {/* <Route path="/shopes" render={() => <ShopComponent history={history} />} /> */}
          <Route path="/dish" render={() => <DishesComponent history={history} />} />
          <Route path="/AgentComponent" component={AgentComponent} />
          <Route path="/customerRegister" component={CustomerRegister} />
          <Route path="/ShopRegister" component={ShopkeeperRegister} />
          <Route path="/AgentRegister" component={AgentRegister} />
          <Route path="/editDish" component={EditDishesComponent} />
          <Route path="/addDish" component={AddDishComponent} />
          <Route path="/updateDish" component={UpdateDishComponent} />
          <Route path="/order" component={OrderCustomerComponent} />
          <Route path="/PreviousOrder" component={PreviousOrder} />
          <Route path="/trace" component={TraceOrderComponent} />
          {/* <Route path="/agentOrder" component={AgentOrders} /> */}
          <Route component={Error} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
