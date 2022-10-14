import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Shopes from "../../Services/Shopes";
//import './register.css';
import { NavLink } from 'react-router-dom';


const AddDishComponent = () => {
    const [dishname, setDishName] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [dishImage, setDishImage] = useState("");
    const [description, setDescription] = useState("");
    const history = useHistory();
    const [errors, setError] = useState({});
    const [allEntry, setAllEntry] = useState([]);


    const onLogout = () => {
        if (localStorage) {
            localStorage.clear();
        }

    }

    const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
          const fileReader = new FileReader();
          fileReader.readAsDataURL(file)
          fileReader.onload = () => {
            resolve(fileReader.result);
          }
          fileReader.onerror = (error) => {
            reject(error);
          }
        })
      }

    const handleFileRead = async (event) => {
        const file = event.target.files[0];
        const base64 = await convertBase64(file);
        console.log(base64);
        setDishImage(base64);
    }
    // const submitForm = (e) => {
    //     e.preventDefault();


    //     const newEntry = {
    //         dishName: dishname, description: description, price: price, dishImage: dishImage, shop: { shopId: shopId1 }, dishCategory: { dishCategoryId: category }
    //     };
    //     setAllEntry([...allEntry, newEntry]);
    //     console.log(allEntry);
    // }

    async function addDish() {
        const user = localStorage.getItem("user-info");
        let user1 = JSON.parse(user);
        let shopId1 = user1.userId;
        let item = { dishName: dishname, description: description, price: price, dishImage: dishImage, shop: { shopId: shopId1 }, dishCategory: category };
        if (dishname != "" && description != "" && price != "" && dishImage != "" && category) {
            console.warn(dishname, description, price, dishImage, category);
            let item = { dishName: dishname, description: description, price: price, dishImage: dishImage, shop: { shopId: shopId1 }, dishCategory: category };
            console.log(item);
            let result = await fetch("http://localhost:8181/dish/add", {
                method: 'post',
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(item)
            });
            result = await result.json();
            alert("Dish Added sucessfully");
            history?.push({ pathname: '/editDish' });
        }
        else {
            alert("Please Fill All Fields Properly");
        }

    }



    return (
        <>
              <button className="custom-nav-link"><NavLink to="/editDish">Back</NavLink></button>       
              <button className="custom-nav-link"><NavLink to="/" onClick={onLogout}>Logout</NavLink></button>
            <center>
                <center><h2 style={{ color: "cornflowerblue" }}>Add New Dish</h2></center>
                <div>
                    <form  >
                        {/* <form action="" onSubmit={submitForm} > */}
                        <div>
                            <table>
                                <tr>
                                    <td><label htmlFor="dishname">Dish Name</label></td>
                                    <td>:-</td>
                                    <td><input type="text" name="dishname" id="dishname" value={dishname} onChange={(e) => setDishName(e.target.value)} required /></td>
                                </tr>
                                <br />

                                <tr>
                                    <td><label htmlFor="description">Description</label></td>
                                    <td>:-</td>
                                    <td><input type="text" name="description" id="description" value={description} onChange={(e) => setDescription(e.target.value)} required /></td>
                                </tr>
                                <br />

                                <tr>
                                    <td><label htmlFor="price">Price</label></td>
                                    <td>:-</td>
                                    <td><input type="text" name="price" id="price" value={price} onChange={(e) => setPrice(e.target.value)} required /></td>
                                </tr>

                                <br />

                                <tr>
                                    <td><label htmlFor="category">Category Type</label></td>
                                    <td>:-</td>
                                    <td><select name="category" id="category" value={category} onChange={(e) => setCategory(e.target.value)} required>
                                        <option value="Chinese">Chinese</option>
                                        <option value="South-Indian">South-Indian</option>
                                        <option value="North-Indian">North-Indian</option>
                                        <option value="Chaat">Chaat</option>
                                        <option value="Desserts">Desserts</option>
                                        <option value="Indian Meals">Indian Meals</option>
                                        <option value="Others">Others</option>
                                    </select></td>
                                </tr>
                                <br />
                                <tr>
                                    <td><label htmlFor="dishImage">Dish Image</label></td>
                                    <td>:-</td>
                                    <td><input type="file"  accept="image" name="dishImage" id="dishImage" onChange={e => handleFileRead(e)} required /></td>
                                </tr>

                            </table>
                        </div>
                        <br />
                        <div>
                            <table>
                                <tr>
                                    <td></td>
                                    <td><button type="button" name="register" onClick={addDish} >Add Dish</button></td>
                                </tr>


                            </table>
                        </div>

                    </form>

                </div>
            </center>

        </>
    )
}


export default AddDishComponent;