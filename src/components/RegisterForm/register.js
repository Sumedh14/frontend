import React, { useState } from "react";
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
//import './register.css';

import { useHistory } from "react-router-dom";

const Register = () => {
    const history = useHistory();
    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    // const [phone, setPhone] = useState("");
    // const [address, setAddress] = useState("");
    const [userType, setRole] = useState("");
    const [allEntry, setAllEntry] = useState([]);


    // const submitForm = (e) => {
    //     e.preventDefault();
    //     const newEntry = { name: name, email: email, phone: phone, address: address };
    //     setAllEntry([...allEntry, newEntry]);
    //     console.log(allEntry);
    // }

    const handleCategoryChange = (event) => {
        console.log('e v -', event.target.value);
        setRole(event?.target?.value)

    }

    const selectOption = () => {
        console.log(userType);
        if (userType == "Customer") {
            history?.push("/customerRegister");
        }
        else if (userType == "Shop Owner") {
            history?.push("/ShopRegister");
        }

        else if (userType == "Agent") {
            history?.push("/AgentRegister");
        }
    }

    return (
        <>
            <button className="custom-nav-link"><NavLink to="/">Back</NavLink></button>
            <center>
                <center><h2 style={{ color: "cornflowerblue" }}>Registartion Form</h2></center>
                <div>
                    <br />
                    {/* <form action="" onSubmit={submitForm} > */}
                    <form>
                        <div class="btn-group btn-group-toggle" data-toggle="buttons">
                            <table>

                                <tr>
                                    <td style={{ width: "100px" }}><label class="btn btn-secondary active"><input type="radio" value="Customer" name="UserCategory" onChange={handleCategoryChange} autocomplete="off"></input>Customer</label></td>

                                    <td style={{ width: "120px" }}><label class="btn btn-secondary active"><input type="radio" value="Shop Owner" name="UserCategory" onChange={handleCategoryChange} autocomplete="off"></input>Shopkeeper</label></td>

                                    <td><label class="btn btn-secondary active"><input type="radio" value="Agent" name="UserCategory" onChange={handleCategoryChange} autocomplete="off"></input>Agent</label></td>
                                </tr>
                                <br />
                                <tr>
                                    <td></td>

                                    <td><button onClick={selectOption} className="btn btn-primary">Select</button></td>
                                </tr>


                            </table>
                        </div>
                        <p id="pid"></p>
                    </form>
                    <div>
                        {
                            allEntry.map((curElem) => {
                                return (
                                    <div className="showDataStyle">
                                        <p>{curElem.name}</p>
                                        <p>{curElem.email}</p>
                                        <p>{curElem.phone}</p>
                                        <p>{curElem.address}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </center>

        </>
    )
}


export default Register;