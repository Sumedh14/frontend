import React, { useState } from "react";
import { useHistory, NavLink } from "react-router-dom";
//import './register.css';

const CustomerRegister = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [address, setAddress] = useState("");
    const history = useHistory();
    const [errors, setError] = useState({});
    const [allEntry, setAllEntry] = useState([]);


    const submitForm = (e) => {
        e.preventDefault();
        const newEntry = { customerName: name, customerEmail: email, customerPassword: password, customerAddress: address, customerPhoneNo: phone };
        setAllEntry([...allEntry, newEntry]);
        console.log(allEntry);
    }

    async function register() {

        console.log('errors', errors);

        if (name != "" && email != "" && password != "" && address != "" && phone != "") {
            console.warn(name, email, password, address, phone);
            let item = { customerName: name, customerEmail: email, customerPassword: password, customerAddress: address, customerPhoneNo: phone };
            console.log(item);
            let result = await fetch("http://localhost:8181/customer/customers", {
                method: 'post',
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(item)
            });
            result = await result.json();
            alert("Register Sucessfully");
            history?.push({ pathname: '/login' });
        }
        else {
            alert("Please Fill All Fields Properly");
        }

    }



    return (
        <>
         <button className="custom-nav-link"><NavLink to="/register">Back</NavLink></button>  
            <center>
                <center><h2 style={{ color: "cornflowerblue" }}>Customer Registartion Form</h2></center>
                <br />
                <div>
                    <form  >
                        <div>
                            <table>
                                <tr>
                                    <td><label htmlFor="name">Full Name</label></td>
                                    <td>:-</td>
                                    <td><input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} required /></td>
                                </tr>
                                <br />

                                <tr>
                                    <td><label htmlFor="address">Address</label></td>
                                    <td>:-</td>
                                    <td><input type="text" name="address" id="address" value={address} onChange={(e) => setAddress(e.target.value)} required /></td>
                                </tr>
                                <br />

                                <tr>
                                    <td><label htmlFor="phone">Phone no.</label></td>
                                    <td>:-</td>
                                    <td><input type="text" name="phone" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required /></td>
                                </tr>

                                <br />

                                <tr>
                                    <td><label htmlFor="email">Email</label></td>
                                    <td>:-</td>
                                    <td><input type="text" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required /></td>
                                </tr>

                                <br />
                                <tr>
                                    <td><label htmlFor="password">Password</label></td>
                                    <td>:-</td>
                                    <td><input type="text" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required /></td>
                                </tr>
                            </table>
                        </div>
                        <br />
                        <div>
                            <table>
                                <tr>
                                    <td></td>
                                    <td><button type="button" name="register" onClick={register} class="btn btn-success" >Register</button></td>
                                </tr>


                            </table>
                        </div>
                    </form>
                </div>
            </center>

        </>
    )
}


export default CustomerRegister;