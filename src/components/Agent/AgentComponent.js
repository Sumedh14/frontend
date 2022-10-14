
import { React, useState, useEffect } from "react";
import { BrowserRouter, Route, Switch, useHistory, NavLink } from 'react-router-dom';
import Agent from '../../Services/Agent';
import "./ShopComponent123.css";

const AgentComponent = () => {
    const [agent, setAgent] = useState([]);
    const [existingCartList, setCartList] = useState([]);
    const [status, setStatus] = useState([]);
    const history = useHistory();
    
    const [dispatchDateAndTime, setDispatchDateAndTime] = useState([]);
    const [deliveryDateAndTime, setDeliveryDateAndTime] = useState([]);
    //const [active, setActive] = useState();
    const [quantity, setQuantity] = useState("");
    // const [dishId, setDishId] = useState("");
    // const [dishPrice, setDishPrice] = useState("");
    const [allEntry, setAllEntry] = useState([]);



    useEffect(() => {

        Agent.getAgent().then((response) =>{

         setAgent(response.data)
         setStatus(response.data)
        });
      

    }, []);

 

   
    const onLogout = () => {
       
        if (localStorage) {
            localStorage.clear();
        }

    }

    const onUpdate = () => {
       alert("Ordere Delivered Successfully")
       setStatus('delivered')
        if (localStorage) {
         localStorage.clear();
     }
       history.push({ pathname: '/' });
      

    }



    {
        return (
            <div>
                <button className="custom-nav-link"><NavLink to="/" onClick={ onLogout }>Logout</NavLink></button>
                <center>
                <h1 style={{ color: "darkblue" }}><b>Order List</b></h1>
                <table /*className="table table-striped   "*/ className="table33" style={{ borderCollapse: "collapse", border: "1px solid black" }}>
                    <thead class="thead-dark" style={{ color: "black", fontWeight: "bold", fontSize: "160%" }}>
                        <tr>
                       
                            <td className="details">Details</td>
                            <td>Select</td>
                        </tr>
                    </thead>
                    <tbody className="tablebody">
                    {
                        agent.map(
                            order=>

                             
                            <tr key={order.totalAmount} className="tr">
                                  <td  >  <tr ><b>Status:-</b>{order.status}</tr><br />
                                  <tr><b>Dish Name:-</b>{order.dishName}</tr><br />
                                         <tr><b>Dish Category:-</b>{order.dishCategory}</tr><br />
                                            <tr><b>Shop Name:-</b>{order.shopName}</tr><br />
                                            <tr><b>Shop Phone No.:-</b>{order.phone}</tr><br />
                                            <tr><b>Order Received DateAndTime:-</b>{order.orderReceivedDateAndTime}</tr><br />
                                          
                                            <tr><b>Delivery DateAndTime:-</b>{order.deliveryDateAndTime}</tr><br />
                                            <tr><b>Customer  Name:-</b>{order.customerName}</tr><br />
                                            <tr><b>Customer Address:-</b>{order.customerAddress}</tr><br />                
                                   
                                    <tr><b>Total Amount :- </b>{order.totalAmount}</tr><br />      
                                </td>
                              
                                <td className="td44" ><button class="btn123" onClick={() => onUpdate()}>order delivered</button></td> 
                                </tr>                             
                                
                        )
                    }
                    </tbody>
                          </table>
                </center>
          
            </div>
        )


    }
}

export default AgentComponent;