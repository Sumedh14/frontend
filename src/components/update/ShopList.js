import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
//import { Router, Route, Switch } from 'react-router-dom';
//import RegistrationForm from "../RegistrationPage/registrationForm";
import './Login.css';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import { getRoles } from "@testing-library/dom";
//import LoginValid from "../../Services/LoginValid";



const Update = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userType, setRole] = useState("");
    const [errors, setError] = useState({});

    const [allEntry, setAllEntry] = useState([]);
    const history = useHistory();
    useEffect(() => {
        if (localStorage.getItem('user-info')) {
            history.push("/login");
        }
    }, [])

    const submitForm = (e) => {
        e.preventDefault();


        if (email && password) {

            const newEntry = { id: new Date().getTime().toString(), email: email, password: password };
            setAllEntry([...allEntry, newEntry]);
            console.log(allEntry);

            setEmail("");
            setPassword("");

        }
        else {
            alert("Please Fill the Data");
        }


    }

    const validate = () => {
        let errors = {};
        let isValid = true;

        if (!email) {
            isValid = false;
            errors["email"] = "Please enter your email.";
        }
        if (!password) {

            isValid = false;
            errors["password"] = "Please enter your password.";
        }
        if (password?.length < 4) {
            isValid = false;
            errors["password"] = "Please Insert valid Username and Password";
        }
        console.log('errors --', errors);
        setError(errors)

        return isValid;
    }


    async function login() {
        //history?.push("/shopes");
        const isValid = validate();
        console.log(isValid);
        console.log('errors', errors);
        console.log('userType', userType);

        if (isValid) {
            console.warn(email, password)
            let item = { userEmail: email, password: password, role: userType };
            console.log(item);
            let result = await fetch("http://localhost:8181/login/validate", {
                method: 'post',
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(item)
            });
            result = await result.json();
            console.log("result" + result);
            if (result.roleId == 0) {
                alert("Enter Correct Username and Password");
                history?.push("/login");
            }
            else if (result.roleId == 1) {
                localStorage.setItem("user-info", JSON.stringify(result))
                history?.push("/EditCustomerComponent");

                // const onUpdateDish = (dishId) => {
                //     localStorage.setItem("dish-info", JSON.stringify(dishId));
                //     history?.push({ pathname: '/updateDish' });
                // }
            }
            else if (result.roleId == 2) {
                localStorage.setItem("user-info", JSON.stringify(result))
                history?.push("/EditCustomerComponent");
            }
            else if (result.roleId == 3) {
                localStorage.setItem("user-info", JSON.stringify(result))
                history?.push("/agent");
            }
        }
    }

    const handleCategoryChange = (event) => {
        console.log('e v -', event.target.value);
        setRole(event?.target?.value)

    }

    return (
        <>


            <div>
                <button className="custom-nav-link"><NavLink to="/">Back</NavLink></button>
                <center>
                    <center><h2 style={{ color: "darkslateblue" }}>Login Here</h2></center>
                    <form action="" onSubmit={submitForm} >
                        <div>
                            <table className="table">
                                <tr>
                                    <td><label htmlFor="email">Email</label></td>
                                    <td>: -</td>
                                    <td>
                                        <input type="text" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                        <tr>
                                            {
                                                errors?.email && (
                                                    <p className="error-text">{errors?.email}</p>
                                                )
                                            }
                                        </tr>
                                    </td>
                                </tr>
                                <tr>
                                    <td><label htmlFor="password">Password</label></td>
                                    <td>: -</td>
                                    <td>
                                        <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                        <tr>
                                            {
                                                errors?.password && (
                                                    <p className="error-text">{errors?.password}</p>
                                                )
                                            }
                                        </tr>
                                    </td>
                                </tr>

                            </table>
                        </div>


                        <div>
                            <table className="table">
                                <tr>
                                    <td><label><input type="radio" value="Customer" name="category" onChange={handleCategoryChange}></input>Customer</label></td>
                                    <td><label><input type="radio" value="Shop Owner" name="category" onChange={handleCategoryChange}></input>Shopkeeper</label></td>
                                  
                                </tr>
                                <tr>
                                    <td></td>
                                    <td><button  onClick={login} type="submit" name="login" className="btn124" >Login</button></td>
                                    <td></td>
                                </tr>
                            </table>

                        </div>

                    </form>
                </center >
            </div>


        </>
    )
}


export default Update;