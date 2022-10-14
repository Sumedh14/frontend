
import React, { useState, useEffect } from "react";
import Orders from "../../Services/OrderList";
// import { useHistory } from "react-router-dom";
import DishesComponent from "../Dishes/DishesComponent";
import { Table } from "reactstrap";
import "./ShopComponent.css";
import { isValid } from "redux-form";
import { BrowserRouter, Route, Switch, useHistory, NavLink } from 'react-router-dom';


const PreviousOrder = () => {
    const [orders, setOrders] = useState([]);
    const history = useHistory();
    //const [active, setActive] = useState();
    let active;

    useEffect(() => {

        Orders.getOrders().then((response) => {
            console.log('page loaded');
            setOrders(response.data)
            console.log(orders);
        });
    }, [])

    // const onSubmit = (shopId) => {
    //     console.log("shopId : " + shopId);
    //     localStorage.setItem("shop-info", JSON.stringify(shopId))
    //     history?.push({ pathname: '/dish' });
    //     // history?.push({ pathname: '/dish', state: { currentShopId: 2 } })
    // }

//     const check = (isActive) => {
//         console.log('shop status',isActive);
//         let action = JSON.stringify(isActive);
//    /*     if (action == true) {
//             return "Open";
//         }
//         else if (isActive == false) {
//             return "Close";
//         }*/
        
//         if (action=="true") {
//             return "Open";
//         }
//         else if (action=="false") {
//             return "Close";
//         }

//     }

    // console.log('shopes - ', shopes);

    const onLogout = () => {
        if (localStorage) {
            localStorage.clear();
        }

    }


    return (
        <div>
        { <button className="custom-nav-link"><NavLink to="/Shopes">back</NavLink></button> }
            <button className="custom-nav-link" ><NavLink to="/" onClick={onLogout}>Logout</NavLink></button>

            <center>
                <h1 style={{ color: "darkblue" }}><b>Previous order List</b></h1>
                <table /*className="table table-striped   "*/ className="table33" style={{ borderCollapse: "collapse", border: "1px solid black" }}>
                    <thead class="thead-dark" style={{ color: "black", fontWeight: "bold", fontSize: "160%" }}>
                        <tr>
                            <td className="details" style={{ textAlign: "center" }}>Images</td>
                            <td className="details">Details</td>
                            <td>Select</td>
                        </tr>
                    </thead>
                    <tbody>
                        {

                            orders.map(
                                order  =>
                                    <tr key={orders.orderId} className="tr">
                                         <td><tr><b>order Id:-</b>{order.orderId}</tr><br />
                                        <tr><b>Order Received DateAndTime:-</b>{order.orderReceivedDateAndTime}</tr><br />
                                            <tr><b>Dispatch DateAndTime:-</b>{order.dispatchDateAndTime}</tr><br />
                                            <tr><b>Delivery DateAndTime:-</b>{order.deliveryDateAndTime}</tr><br />
                                            <tr><b>Total Amount:-</b>{order.totalAmount}</tr><br />
                                           </td>
                                        
                                        {/* <td className="td44"><button class="btn123" onClick={() => onSubmit(shop.shopId)}>Show Dishes</button></td> */}

                                        {/* int orderId;
	String status;
	Date orderReceivedDateAndTime;
	Date dispatchDateAndTime;
	Date deliveryDateAndTime;
	double totalAmount; */}
                                    </tr>
                            )
                        }
                    </tbody>
                </table>

            </center>
        </div>
    );
}



export default PreviousOrder;

