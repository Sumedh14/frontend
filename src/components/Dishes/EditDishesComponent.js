import { React, useState, useEffect } from "react";
import { Container, Table } from "reactstrap";
import Dishes from "../../Services/DishShopkeeper";
// import { useHistory } from "react-router-dom";
import "./DishComponent.css";
import 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { BrowserRouter, Route, Switch, useHistory, NavLink } from 'react-router-dom';


// class DishesComponent extends React.Component {

//     constructor(props) {
//         super(props)
//         this.state = {
//             dishes: []
//         }
//     }

const EditDishesComponent = () => {
    const [dishes, setDishes] = useState([]);
    const history = useHistory();

    //const [active, setActive] = useState();
    const [quantity, setQuantity] = useState("");
    // const [dishId, setDishId] = useState("");
    // const [dishPrice, setDishPrice] = useState("");
    const [allEntry, setAllEntry] = useState([]);

    let active;

    useEffect(() => {

        Dishes.getDishes().then((response) => {
            setDishes(response.data)
            console.log(dishes);
        });
    }, [])








    const onAddDish = () => {

        history?.push({ pathname: '/addDish' });
        // history?.push({ pathname: '/dish', state: { currentShopId: 2 } })
    }

    const onUpdateDish = (dishId) => {
        localStorage.setItem("dish-info", JSON.stringify(dishId));
        history?.push({ pathname: '/updateDish' });
    }



    async function onRemoveDish(dishId) {
        console.log("dishId : " + dishId);
        if (true) {
            //     console.warn(dishname, description, price, dishImage, category);
            //     let item = { dishName: dishname, description: description, price: price, dishImage: dishImage, shop: { shopId: shopId1 }, dishCategory: { dishCategoryId: category } };
            //     console.log(item);
            await fetch("http://localhost:8181/dish/" + dishId, {
                method: 'delete',
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                }
            });
            //result = await result.json();
            //alert("Dish delete sucessfully");
            window.location.reload();
            //history?.push({ pathname: '/editDish' });
        }
    }




    const handleQuantityChange = (event) => {
        console.log('qty', event.target.value);
        if (event.target.value >= 0) {
            setQuantity(event?.target?.value)
        }
        else {
            alert("Add Quantity, Quantity can't be less than zero");
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
               <button className="custom-nav-link"><NavLink to="/UpdateShop" >User Info</NavLink></button>
                <button className="custom-nav-link"><NavLink to="/" onClick={onLogout}>Logout</NavLink></button>
              
                <center>
                    <h1 className="text-center">Dishes List</h1>
                    {/* <Container>
                        <Row className="justify-content-md-right">
                            <Col></Col>
                            <Col></Col>
                            <Col></Col>
                            <Col md={{ span: 4, offset: 4 }}><button>Add New Dish</button></Col>
                        </Row>
                    </Container> */}

                    <br />

                    <button type="button" style={{ textAlign: "center", width: "200px", height: "50px", fontWeight: "bolder" }} onClick={onAddDish}><b>Add New Dish</b></button>
                    <br />
                    <br />

                    <table className="table" className="table33" className="table table-striped" style={{ borderCollapse: "collapse", border: "1px solid black" }}>
                        <thead class="thead-dark" style={{ color: "black", fontWeight: "bold", fontSize: "160%" }}>
                            <tr className="ttr">
                                <td style={{ width: "70%" }}>Images</td>
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
                                            <td><img src={dish.dishImage} width="200" height="150" /></td>
                                            <td><tr><b>Dish Name:-</b>{dish.dishName}</tr>
                                                <tr><b>Description:-</b>{dish.description}</tr>
                                                <tr><b>Price:-</b>{dish.price}</tr>
                                                <tr><b>Dish Category:-</b>{dish.dishCategory}</tr></td>
                                            <td>
                                                <tr><button type="submit" style={{ textAlign: "center", width: "100px", height: "30px", fontWeight: "bolder" }} onClick={() => onUpdateDish(dish.dishId)}><b>Edit</b></button></tr><br />
                                                <tr><button type="submit" style={{ textAlign: "center", width: "100px", height: "30px", fontWeight: "bolder" }} onClick={() => onRemoveDish(dish.dishId)}><b>Remove</b></button></tr>
                                            </td>

                                        </tr>

                                )
                            }
                        </tbody>
                    </table>
                    <br />
                </center>
            </div>
        )


    }

}

export default EditDishesComponent;
