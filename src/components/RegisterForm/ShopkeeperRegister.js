import React, { useState } from "react";
import { useHistory, NavLink } from "react-router-dom";
//import './register.css';

const ShopkeeperRegister = () => {
    const [name, setShopName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [shopType, setShopType] = useState("");
    const [shopOwner, setShopOwner] = useState("");
    const [password, setPassword] = useState("");
    const [isActive, setActive] = useState("");
    const [image, setImage] = useState("");
    const [errors, setError] = useState({});
    const history = useHistory();

    const [allEntry, setAllEntry] = useState([]);


    const submitForm = (e) => {
        e.preventDefault();
        const newEntry = { shopName: name, shopType: shopType, shopAddress: address, shopOwnerName: shopOwner, phone: phone, email: email, password: password, isActive: isActive, image: image };
        setAllEntry([...allEntry, newEntry]);
    }

    // const fileBrowseHandler = (event) => {
    //     let value = URL.createObjectURL(event.target.files[0]);
    //     this.getBase64(idCard, (result) => {
    //         idCardBase64 = result;
    //    });
    //     console.log(event.target.files[0]);
    //     setImage(value);
    // };



    const handleFileRead = async (event) => {
        const file = event.target.files[0];
        const base64 = await convertBase64(file);
        console.log(base64);
        setImage(base64);
    }

    const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = () => {
                resolve(fileReader.result);
            }
            fileReader.onerror = (error) => {
                reject(error);
            }
        })
    }


    const handleCategoryChange = (event) => {

        //console.log('shopType', event.target.value);
        setShopType(event?.target?.value)

    }

    const handleActive = (event) => {

        //console.log('isActive', event.target.value);
        setActive(event?.target?.value)

    }


    async function register () {
        //history?.push("/shopes");
        // const isValid = validate();
        // console.log(isValid);
        //console.log('errors', errors);
        // console.log('userType', userType);
        //history?.push('/dishes')
        // const userInformation = {
        //     userType: userType,
        //     userName: '',
        //     password: '',
        // }
        if (name != "" && shopType != "" && address != "" && shopOwner != "" && phone != "" && email != "" && password != "" && isActive != "" && image != "") {
            console.warn(name, shopType, address, shopOwner, phone, email, password, isActive, image);
            let item = { shopName: name, shopType: shopType, shopAddress: address, shopOwnerName: shopOwner, phone: phone, email: email, password: password, isActive: isActive, image: image };
            console.log('shopkeeper', item);
            let result = await fetch("http://localhost:8181/shopes/shop", {
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
        } else {
            alert("Please Fill All Fields Properly");
        }

    }


    return (
        <>
            <button className="custom-nav-link"><NavLink to="/register">Back</NavLink></button>
            <center>
                <center><h2 style={ { color: "cornflowerblue" } }>Shopkeeper Registartion Form</h2></center>
                <br />
                <div>

                    <form action="" onSubmit={ submitForm } >
                        <div>
                            <table>
                                <tr>
                                    <td><label htmlFor="name">Shop Name</label></td>
                                    <td>:-</td>
                                    <td><input type="text" name="name" id="name" value={ name } onChange={ (e) => setShopName(e.target.value) } required /></td>
                                </tr>
                                <br />

                                <tr>
                                    <td><label htmlFor="ownername">Shop Owner Name</label></td>
                                    <td>:-</td>
                                    <td><input type="text" name="ownername" id="ownername" value={ shopOwner } onChange={ (e) => setShopOwner(e.target.value) } required /></td>
                                </tr>
                                <br />

                                <tr>
                                    <td><label htmlFor="shoptype">Shop Type</label></td>
                                    <td>:-</td>

                                    <td><label><input type="radio" value="veg" name="shoptype" onChange={ handleCategoryChange }></input>VEG</label>
                                        <label><input type="radio" value="non-veg" name="shoptype" onChange={ handleCategoryChange }></input>NON-VEG</label></td>
                                </tr>
                                <br />

                                <tr>
                                    <td><label htmlFor="address">Address</label></td>
                                    <td>:-</td>
                                    <td><input type="text" name="address" id="address" value={ address } onChange={ (e) => setAddress(e.target.value) } required /></td>
                                </tr>
                                <br />

                                <tr>
                                    <td><label htmlFor="phone">Phone Number</label></td>
                                    <td>:-</td>
                                    <td><input type="text" name="phone" id="phone" value={ phone } onChange={ (e) => setPhone(e.target.value) } required /></td>
                                </tr>

                                <br />

                                <tr>
                                    <td><label htmlFor="email">Email</label></td>
                                    <td>:-</td>
                                    <td><input type="text" name="email" id="email" value={ email } onChange={ (e) => setEmail(e.target.value) } required /></td>
                                </tr>

                                <br />

                                <tr>
                                    <td><label htmlFor="password">Password</label></td>
                                    <td>:-</td>
                                    <td><input type="password" name="password" id="password" value={ password } onChange={ (e) => setPassword(e.target.value) } required /></td>
                                </tr>
                                <br />
                                <tr>
                                    <td><label htmlFor="image">Image</label></td>
                                    <td>:-</td>
                                    <td><input type="file" name="image" id="image" onChange={ e => handleFileRead(e) } required />
                                    </td>
                                </tr>
                                <br />
                                <tr>
                                    <td>is Active</td>
                                    <td>:-</td>
                                    <td><label><input type="radio" value="true" name="isActive" onChange={ handleActive }></input>ON</label>
                                        <label><input type="radio" value="false" name="isActive" onChange={ handleActive }></input>OFF</label></td>
                                </tr>




                            </table>
                        </div>
                        <br />
                        <div>
                            <table>
                                <tr>
                                    <td></td>

                                    <td><button type="button" name="register" onClick={ register } class="btn btn-success">Register</button></td>
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
                                        <p>{ curElem.name }</p>
                                        <p>{ curElem.email }</p>
                                        <p>{ curElem.phone }</p>
                                        <p>{ curElem.address }</p>
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


export default ShopkeeperRegister;