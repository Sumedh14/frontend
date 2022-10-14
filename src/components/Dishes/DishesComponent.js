import { React, useState, useEffect } from "react";
import { Table } from "reactstrap";
import Dishes from "../../Services/Dishes";
// import { useHistory } from "react-router-dom";
import "./DishComponent.css";
import { BrowserRouter, Route, Switch, useHistory, NavLink } from 'react-router-dom';
//import { mockDishes } from "../mockData/mockAPIData";


// class DishesComponent extends React.Component {

//     constructor(props) {
//         super(props)
//         this.state = {
//             dishes: []
//         }
//     }

const DishesComponent = () => {
    const [dishes, setDishes] = useState({});
    const [existingCartList, setCartList] = useState([]);
    const history = useHistory();

    //const [active, setActive] = useState();
    const [quantity, setQuantity] = useState("");
    // const [dishId, setDishId] = useState("");
    // const [dishPrice, setDishPrice] = useState("");
    const [allEntry, setAllEntry] = useState([]);

    let active;

    useEffect(() => {
        ////// 
        // setDishes with mock data when API is not running
        // setDishes(mockDishes)
        //////
        Dishes.getDishes().then((response) => {
            setDishes(response.data)
            console.log(dishes);
        });
    }, [])


    // const addDish = (id, price) => {
    //     //e.preventDefault();

    //     let shopId = localStorage.getItem('shop-info');
    //     const newEntry = { dishId: id, shopId: shopId, price: price, quantity: quantity };
    //     setAllEntry([...allEntry, newEntry]);
    //     console.log(allEntry);
    // }


    const onBack = () => {
        //let item = { email: email, password: password, role: userType };
        //console.log("shopId : " + shopId);
        //localStorage.setItem("dish-info", JSON.stringify(dishId))

        history?.push({ pathname: '/shopes' });
        // history?.push({ pathname: '/dish', state: { currentShopId: 2 } })
    }

    const handleQuantityChange = (event, dish) => {
        const enteredQuantity = event.target.value;
        dish['quantity'] = Number(enteredQuantity);
        // replacing dish object from array., when its quantity gets changed
        existingCartList.map(obj => dishes?.find(item => item?.dishId === dish?.dishId) || obj);
        setCartList([...existingCartList]);
    }

    const handleAddToCart = (dish) => {
        if (existingCartList?.findIndex(dishItem => dishItem?.dishId === dish?.dishId) === -1) {
            setCartList([...existingCartList, dish])
        } else {
            setCartList(existingCartList?.filter((dishItem) => dishItem?.dishId !== dish?.dishId))
        }
    }

    const getAddToCartButtonText = (dish) => {
        if (existingCartList?.findIndex(dishItem => dishItem?.dishId === dish?.dishId) === -1) {
            return 'Add to Cart';
        } else {
            return 'Remove from Cart';
        }
    }

    //Button disable enable code
    const isAddToCartDisabled = (dish) => {
        const isQuantity = dish?.quantity === undefined || Number(dish?.quantity) <= 0;
        // const isQuantity = dish?.quantity === undefined || Number(dish?.quantity) === 0;
        if (isQuantity === true) {
            return true;
        } else {
            return false;
        }
    }

    const handleProceed = () => {
        console.log('existingCartList - ', existingCartList);
        localStorage.setItem('cart', JSON.stringify(existingCartList));
        history?.push("/order");

    }

    const onLogout = () => {
        if (localStorage) {
            localStorage.clear();
        }

    }

    return (
        <div>
            <button className="custom-nav-link" ><NavLink to="/" onClick={onLogout}>Logout</NavLink></button>
            <center>
                <h1 style={{ color: "darkblue" }}>Dishes List</h1>

                <table /*className="table table-striped "*/ className="table32" style={{ borderCollapse: "collapse", border: "1px solid black" }}>
                    <thead class="thead-dark" style={{ color: "black", fontWeight: "bold", fontSize: "160%" }}>
                        <tr className="ttr">
                            <td className="details">Images</td>
                            <td className="details">Details</td>
                            {/* <td >Quantity</td> */}
                            <td>Select</td>
                        </tr>


                    </thead>
                    <tbody>
                        {
                            dishes.map(
                                dish =>

                                    <tr key={dish.dishId} className="tttr" >
                                        <td className="td44"><img src={dish.dishImage} width="200" height="150" /></td>
                                        <td><tr><b>Dish Name:-</b>{dish.dishName}</tr>
                                            <tr><b>Description:-</b>{dish.description}</tr>
                                            <tr><b>Price:-</b>{dish.price}</tr>
                                            <tr><b>Dish Category:-</b>{dish.dishCategory}</tr>
                                        </td>
                                        <td style={{ textAlign: "center" }} className="td44">
                                            <tr>
                                                <b>Quantity</b><input type="number" name="qty" className="input" onChange={(event) => handleQuantityChange(event, dish)}></input>
                                            </tr>
                                            <tr></tr>
                                            <tr></tr>
                                            <br />
                                            <button className="btn-app" type="button" onClick={() => handleAddToCart(dish)} disabled={isAddToCartDisabled(dish)}><b>{getAddToCartButtonText(dish)}</b></button>
                                        </td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>
                <button className="btn-app" type="button" onClick={onBack} >Back To Shop List</button>
                <input className="btn-app" type="button" value="Proceed to Buy" onClick={handleProceed} disabled={existingCartList?.length === 0} />

            </center>
        </div>
    )
}

export default DishesComponent;





