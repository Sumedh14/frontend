import React, { useState, useEffect } from "react";
import { useHistory , NavLink } from "react-router-dom";
//import Shopes from "../../Services/Shopes";
//import './register.css';
import Customers from "../../Services/Customer";

const UpdateCustomer = () => {
    const [Customer, setCustomer] = useState([]);
    const [customerName, setCustomerName] = useState("");
    const [customerPhoneNo, setCustomerPhoneNo] = useState("");
    const [customerEmail, setCustomerEmail] = useState("");
    const [customerAddress, setCustomerAddress] = useState("");
    const [customerPassword, setCustomerPassword] = useState("");
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
            setCustomerPassword(response.data.customerPassword);
            setCustomerPhoneNo(response.data.customerPhoneNo);
            setCustomerEmail(response.data.customerEmail);
            setCustomerAddress(response.data.customerAddress);
        });
    }, [])

    // private String customerName;
	
	// private String customerEmail;

	// private String customerPassword;
	
	// private String customerAddress;
	
	// private String customerPhoneNo;

    // const submitForm = (e) => {
    //     e.preventDefault();


    //     const newEntry = {
    //         dishName: dishname, description: description, price: price, dishImage: dishImage, shop: { shopId: shopId1 }, dishCategory: { dishCategoryId: category }
    //     };
    //     setAllEntry([...allEntry, newEntry]);
    //     console.log(allEntry);
    // }


    const onLogout = () => {
        if (localStorage) {
            localStorage.clear();
        }

    }

    async function updateCustomer() {
        let shopId1 = localStorage.getItem("shop-info");
        let item = { customerId: customerId, customerName: customerName, customerEmail: customerEmail, customerPassword :customerPassword,customerAddress: customerAddress, customerPhoneNo: customerPhoneNo };
        console.log("new info " + item);
        if (customerEmail != "" && customerAddress != "" && customerName != "" && customerPhoneNo != "" ) {
            //console.warn(dishId, dishname, description, price, dishImage, category);
            let item = {customerId: customerId, customerName: customerName, customerEmail: customerEmail,customerPassword: customerPassword , customerAddress: customerAddress, customerPhoneNo: customerPhoneNo };
            console.log(item);
            let result = await fetch("http://localhost:8181/customer/" + customerId, {
                method: 'put',
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(item)
            });
            result = await result.json();
            alert("Customer Update sucessfully");
             history?.push({ pathname: '/EditCustomerComponent' });
        }
        else {
            alert("Please Fill All Fields Properly");
        }

    }



    return (
        <>
        {/* <button className="custom-nav-link"><NavLink to="/editDish">Back</NavLink></button>        */}
        <button className="custom-nav-link"><NavLink to="/EditCustomerComponent">back</NavLink></button>
              <button className="custom-nav-link"><NavLink to="/" onClick={onLogout}>Logout</NavLink></button>
            <center>
                <center><h2 style={{ color: "cornflowerblue" }}>Update Customer</h2></center>
                <div>
                    <form  >
                        {/* <form action="" onSubmit={submitForm} > */}
                        <div>
                            <table>
                                <tr>
                                    <td><label htmlFor="customerName">Customer Name</label></td>
                                    <td>:-</td>
                                    <td><input type="text" name="customerName" id="customerName" value={customerName} onChange={(e) => setCustomerName(e.target.value)} required /></td>
                                </tr>
                                <br />

                                <tr>
                                    <td><label htmlFor="customerEmail">Customer Email</label></td>
                                    <td>:-</td>
                                    <td><input type="text" name="customerEmail" id="customerEmail" value={customerEmail} onChange={(e) => setCustomerEmail(e.target.value)} required /></td>
                                </tr>
                                <br />

                                <tr>
                                    <td><label htmlFor="customerPassword">Customer Password</label></td>
                                    <td>:-</td>
                                    <td><input type="text" name="customerPassword" id="customerPassword" value={customerPassword} onChange={(e) => setCustomerPassword(e.target.value)} required /></td>
                                </tr>
                                <br />

                                <tr>
                                    <td><label htmlFor="customerAddress">customer Address</label></td>
                                    <td>:-</td>
                                    <td><input type="text" name="customerAddress" id="customerAddress" value={customerAddress} onChange={(e) => setCustomerAddress(e.target.value)} required /></td>
                                    </tr>
                                    <br />
                                    <tr>
                                    <td><label htmlFor="customerPhoneNo">customer PhoneNo </label></td>
                                    <td>:-</td>
                                    <td><input type="text" name="customerPhoneNo" id="customerPhoneNo" value={customerPhoneNo} onChange={(e) => setCustomerPhoneNo(e.target.value)} required /></td>
                                </tr>

                            </table>
                        </div>
                        <br />
                        <div>
                            <table>
                                <tr>
                                    <td></td>
                                    <td><button type="button" name="register" onClick={updateCustomer} >Update Customer</button></td>
                                </tr>


                            </table>
                        </div>

                    </form>

                </div>
            </center>

        </>
    )
}


export default UpdateCustomer;