// import { React, useState, useEffect } from "react";
// import { Container, Table } from "reactstrap";
// import Customers from "../../Services/CustomerList";
//  import { useHistory } from "react-router-dom";
// import "./DishComponent.css";
// import 'react-bootstrap/Container'
// import Col from 'react-bootstrap/Col'
// import Row from 'react-bootstrap/Row'
// import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
// //import {useHistory} from 'react-router-dom';


//  //class DishesComponent extends React.Component {

// //     constructor(props) {
// //         super(props)
// //         this.state = {
// //             dishes: []
// //         }
// //     }

// const EditCustomerComponent = () => {
//      const [customers, setCustomers] = useState([]);
//        const history = useHistory();

// //     //const [active, setActive] = useState();
// //     const [quantity, setQuantity] = useState("");
// //     // const [dishId, setDishId] = useState("");
// //     // const [dishPrice, setDishPrice] = useState("");
// //     const [allEntry, setAllEntry] = useState([]);

// //     let active;

//     useEffect(() => {

//         Customers.getCustomers().then((response) => {
//             setCustomers(response.data)
//             console.log(customers);
//         });
//      }, [])


import React, { useState, useEffect } from "react";
import { useHistory , NavLink } from "react-router-dom";
//import Shopes from "../../Services/Shopes";
//import './register.css';
import Customers from "../../Services/Customer";
import "./DishComponent1.css";
const EditCustomerComponent = () => {
    const [customer, setCustomer] = useState([]);
    const [customerName, setCustomerName] = useState("");
    const [customerPhoneNo, setCustomerPhoneNo] = useState("");
    const [customerEmail, setCustomerEmail] = useState("");
    const [customerAddress, setCustomerAddress] = useState("");
    const history = useHistory();
    const [errors, setError] = useState({});
    const [allEntry, setAllEntry] = useState([]);
    const [customerId, setCustomerId] = useState("");


    useEffect(() => {

        Customers.getCustomer().then((response) => {
            setCustomer(response.data)
            console.log("*********************");
            console.log(JSON.stringify(response.data));
            setCustomerId(response.data.customerId);
            setCustomerName(response.data.customerName);
          //  setCustomerPassword(response.data.dishCategory.customerPassword);
            setCustomerPhoneNo(response.data.customerPhoneNo);
            setCustomerEmail(response.data.customerEmail);
            setCustomerAddress(response.data.customerAddress);
        });
    }, [])


    const onUpdateDish = (customerId) => {
   
        localStorage.setItem("cust-info", JSON.stringify(customerId));
       history?.push({ pathname:'/UpdateCustomer' });
     
    }



    // async function onRemoveDish(dishId) {
    //     console.log("dishId : " + dishId);
    //     if (true) {
    //         //     console.warn(dishname, description, price, dishImage, category);
    //         //     let item = { dishName: dishname, description: description, price: price, dishImage: dishImage, shop: { shopId: shopId1 }, dishCategory: { dishCategoryId: category } };
    //         //     console.log(item);
    //         await fetch("http://localhost:8181/dish/" + dishId, {
    //             method: 'delete',
    //             headers: {
    //                 "Content-Type": "application/json",
    //                 "Accept": "application/json"
    //             }
    //         });
    //         //result = await result.json();
    //         //alert("Dish delete sucessfully");
    //         window.location.reload();
    //         //history?.push({ pathname: '/editDish' });
    //     }
    // }




  

    const onLogout = () => {
        if (localStorage) {
            localStorage.clear();
        }

    }

    {
        return (
            <div>
                      <button className="custom-nav-link"><NavLink to="/shopes">back</NavLink></button>
                <button className="custom-nav-link"><NavLink to="/" onClick={onLogout}>Logout</NavLink></button>
              
                <center>
                    <h1 className="text-center">Customer Info</h1>
                    {/* <Container>
                        <Row className="justify-content-md-right">
                            <Col></Col>
                            <Col></Col>
                            <Col></Col>
                            <Col md={{ span: 4, offset: 4 }}><button>Add New Dish</button></Col>
                        </Row>
                    </Container> */}

                    <br />

                    <br />
                    <br />

                    <table  className="table32"  style={{ borderCollapse: "collapse", border: "1px solid black" }}>
                        <thead class="thead-dark" style={{ color: "black", fontWeight: "bold", fontSize: "160%" }}>
                            <tr className="ttr">
                                <td style={{ width: "70%" }} className="details">Details</td>
                                {/* <td >Quantity</td> */}
                                <td>Select</td>
                            </tr>

                        </thead>
                        <tbody>
                           

                                        <tr key={customer.customerId} className="tttr" >
                                            <td><tr><b>customer Name:-</b>{customer.customerName}</tr>
                                            <br></br>
                                            <tr><b>customer Email:-</b>{customer.customerEmail}</tr>
                                            <br></br>
                                            <tr><b>customer Address:-</b>{customer.customerAddress}</tr>
                                            <br></br>
                                            
                                            <tr><b>customer PhoneNo:-</b>{customer.customerPhoneNo}</tr>
                                            </td>  
                                                
                                            <td>
                                                <tr><button type="submit" style={{ textAlign: "center", width: "100px", height: "30px", fontWeight: "bolder" }} onClick={() => onUpdateDish(customer.customerId)}><b>Edit</b></button></tr><br />
                                                {/* <tr><button type="submit" style={{ textAlign: "center", width: "100px", height: "30px", fontWeight: "bolder" }} onClick={() => onRemoveDish(customer.customerId)}><b>Remove</b></button></tr> */}
                                            </td>

                                        </tr>

                                
                        </tbody>
                    </table>
                    <br />
                </center>
            </div>
        )


    }

}

export default EditCustomerComponent ;
