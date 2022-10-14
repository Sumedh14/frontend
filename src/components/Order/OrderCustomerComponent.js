import { React, useState, useEffect } from "react";
import { Table } from "reactstrap";
import Dishes from "../../Services/Dishes";
import { BrowserRouter, Route, Switch, useHistory, NavLink } from 'react-router-dom';


const OrderCustomerComponent = () => {
    const [dishes, setDishes] = useState([]);
    const history = useHistory();

    //const [active, setActive] = useState();
    const [totalPrice, setTotalPrice] = useState("");
    // const [dishId, setDishId] = useState("");
    // const [dishPrice, setDishPrice] = useState("");
    const [allCartEntry, setAllCartEntry] = useState([]);
    // const [quantity, setQuantity] = useState("");
    // const [shopId, setShopId] = useState("");
    // const [dishId, setDishId] = useState("");
    const [custId, setCustId] = useState("");
    // const [price, setPrice] = useState("");
    // const [allItems, setAllItems] = useState([]);



    useEffect(() => {
        const json = localStorage.getItem("cart");
        const savedNotes = JSON.parse(json);
        const user = JSON.parse(localStorage.getItem("user-info"));
        setCustId(user.userId);
        if (savedNotes) {

            setAllCartEntry(savedNotes);

            console.log(totalPrice);
        }
    }, []);


    const onBackClick = () => {

        history?.push({ pathname: '/dish' });
        // history?.push({ pathname: '/dish', state: { currentShopId: 2 } })
    }

    const calculateTotal = () => {

        let initialValue = 0
        let total = allCartEntry.reduce(
            (previousValue, currentValue) => previousValue + (currentValue.price * currentValue.quantity)
            , initialValue)
        console.log("Total" + total);
        return total;
    }

    async function onPayment() {

        if (true) {
            const requestData = allCartEntry.map((item) => ({
                dishId: item.dishId, shopId: item.shop.shopId, price: item.price, quantity: item.quantity
            }))
            console.log('requestData - ', requestData);

            let url = "http://localhost:8181/order/placeorder/" + custId;

            let result = await fetch(url, {
                method: 'post',
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(requestData)
            });
            result = await result.json();
            console.log(result);
            alert("Order Placed");
            history?.push({ pathname: '/trace' });
        }
    }

    const onLogout = () => {
        if (localStorage) {
            localStorage.clear();
        }

    }


    {
        return (
            <div>
                <button className="custom-nav-link" ><NavLink to="/" onClick={onLogout}>Logout</NavLink></button>
                <center>
                    <h1 className="text-center">Order List</h1>

                    <table className="table table-striped" style={{ borderCollapse: "collapse", border: "1px solid black", width: "40%" }}>
                        <thead className="thead-dark" style={{ color: "black", fontWeight: "bold", fontSize: "100%" }}>
                            <tr>
                                <td >Dish</td>
                                <td>Unit Price</td>
                                <td >Quantity</td>
                                <td >Price</td>
                            </tr>

                        </thead>
                        <tbody>
                            {
                                allCartEntry.map(
                                    dish =>

                                        <tr key={dish.dishId}  >
                                            <td>{dish.dishName}</td>
                                            <td>{dish.price}</td>
                                            <td>{dish.quantity}</td>
                                            <td>{dish.price * dish.quantity}</td>
                                        </tr>
                                )
                            }
                            <tr><td><b>Total Price</b></td>
                                <td></td>
                                <td></td>
                                <td><b>{calculateTotal()}</b></td>
                            </tr>
                        </tbody>
                    </table>
                    <br />
                    <button type="button" onClick={onBackClick} className="btn-app"><b>Back To Dish List</b></button>
                    <button type="button" className="btn-app" onClick={onPayment}><b>Pay</b></button>
                </center>
            </div>
        )


    }

}

export default OrderCustomerComponent;