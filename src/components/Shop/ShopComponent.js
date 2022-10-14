
import React, { useState, useEffect } from "react";
import Shopes from "../../Services/Shopes";
// import { useHistory } from "react-router-dom";
import DishesComponent from "../Dishes/DishesComponent";
import { Table } from "reactstrap";
import "./ShopComponent.css";
import { isValid } from "redux-form";
import { BrowserRouter, Route, Switch, useHistory, NavLink } from 'react-router-dom';


const ShopComponent = () => {
    const [shopes, setShops] = useState([]);
    const history = useHistory();
    //const [active, setActive] = useState();
    let active;

    useEffect(() => {

        Shopes.getShopes().then((response) => {
            setShops(response.data)
            console.log(shopes);
        });
    }, [])

    const onSubmit = (shopId) => {
        console.log("shopId : " + shopId);
        localStorage.setItem("shop-info", JSON.stringify(shopId))
        history?.push({ pathname: '/dish' });
        // history?.push({ pathname: '/dish', state: { currentShopId: 2 } })
    }

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

    console.log('shopes - ', shopes);

    const onLogout = () => {
        if (localStorage) {
            localStorage.clear();
        }

    }


    return (
        <div>
        <button className="custom-nav-link"><NavLink to="/PreviousOrder">Orders Info</NavLink></button>
        <button className="custom-nav-link"><NavLink to="/EditCustomerComponent">User Info</NavLink></button>
            <button className="custom-nav-link" ><NavLink to="/" onClick={onLogout}>Logout</NavLink></button>

            <center>
                <h1 style={{ color: "darkblue" }}><b>Shops List</b></h1>
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

                            shopes.map(
                                shop =>
                                    <tr key={shop.shopId} className="tr">
                                        <td className="td44"><img src={shop.image} width="300" height="250" /></td>
                                        <td><tr><b>Shop Name:-</b>{shop.shopName}</tr><br />
                                            <tr><b>Shop Type:-</b>{shop.shopType}</tr><br />
                                            <tr><b>Shop Address:-</b>{shop.shopAddress}</tr><br />
                                            <tr><b>Phone Number:-</b>{shop.phone}</tr><br />
                                            <tr><b>Email:-</b>{shop.email}</tr><br />
                                            <tr><b>is active:-</b>{shop.isActive == "true" ? 'Open' : 'Close'}</tr></td>
                                        <td className="td44"><button class="btn123" onClick={() => onSubmit(shop.shopId)}>Show Dishes</button></td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>

            </center>
        </div>
    );
}



export default ShopComponent;

