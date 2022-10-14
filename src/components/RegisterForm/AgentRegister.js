import React, { useState } from "react";
import { useHistory , NavLink } from "react-router-dom";
//import './register.css';

const AgentRegister = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [password, setPassword] = useState("");

    const [allEntry, setAllEntry] = useState([]);
    const [errors, setError] = useState({});
    const history = useHistory();

    const submitForm = (e) => {
        e.preventDefault();
        const newEntry = { deliveryAgentName: name, deliveryAgentEmail: email, deliveryAgentPassword: password, deliveryAgentAddress: address, deliveryAgentPhoneNo: phone };
        setAllEntry([...allEntry, newEntry]);
        console.log(allEntry);
    }


    async function register() {
        //history?.push("/shopes");
        // const isValid = validate();
        // console.log(isValid);
        console.log('errors', errors);
        // console.log('userType', userType);
        //history?.push('/dishes')
        // const userInformation = {
        //     userType: userType,
        //     userName: '',
        //     password: '',
        // }
        if (name != "" && email != "" && password != "" && address != "" && phone) {
            console.warn(name, email, password, address, phone);
            let item = { deliveryAgentName: name, deliveryAgentEmail: email, deliveryAgentPassword: password, deliveryAgentAddress: address, deliveryAgentPhoneNo: phone };
            console.log(item);
            let result = await fetch("http://localhost:8181/deliveryAgent/agent", {
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
                <center><h2 style={{ color: "cornflowerblue" }}>Agent Registartion Form</h2></center>
                <br />
                <div>

                    <form action="" onSubmit={submitForm} >
                        <div>
                            <table>
                                <tr>
                                    <td><label htmlFor="name">Full Name</label></td>
                                    <td>:-</td>
                                    <td><input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} required /></td>
                                </tr>
                                <br />

                                <tr>
                                    <td><label htmlFor="email">Email</label></td>
                                    <td>:-</td>
                                    <td><input type="text" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required /></td>
                                </tr>

                                <br />

                                <tr>
                                    <td><label htmlFor="phone">Phone no.</label></td>
                                    <td>:-</td>
                                    <td><input type="text" name="phone" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required /></td>
                                </tr>

                                <br />

                                <tr>
                                    <td><label htmlFor="address">Address</label></td>
                                    <td>:-</td>
                                    <td><input type="text" name="address" id="address" value={address} onChange={(e) => setAddress(e.target.value)} required /></td>
                                </tr>
                                <br />
                                <tr>
                                    <td><label htmlFor="password">Password</label></td>
                                    <td>:-</td>
                                    <td><input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required /></td>
                                </tr>

                            </table>
                        </div>
                        <br />
                        <div>
                            <table>

                                <tr>
                                    <td></td>

                                    <td><button type="button" name="register" onClick={register} class="btn btn-success">Register</button></td>
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


export default AgentRegister;