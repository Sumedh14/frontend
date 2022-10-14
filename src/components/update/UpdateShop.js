import React, { useState, useEffect } from "react";
import { useHistory , NavLink } from "react-router-dom";
// import Shopes from "../../Services/Shopes";
//import './register.css';
import Dishes from "../../Services/UpdateDish";
import Shopes from "../../Services/UpdateShop";

const UpdateShop = () => {
    const [shopes, setShopes] = useState([]);
    const [ shopName, setShopName] = useState("");
 
    const [shopType, setShopType] = useState("");
    const [shopOwnerName,  setShopOwnerName] = useState("");
    const [ shopAddress, setShopAddress] = useState("");
    const [ password, setPassword] = useState("");
    const [ isActive, setIsActive] = useState("");
    
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [image, setImage] = useState("");
    const history = useHistory();
    const [errors, setError] = useState({});
    const [allEntry, setAllEntry] = useState([]);
    const [shopId, setShopId] = useState("");


    useEffect(() => {

        Shopes.getShop().then((response) => {
            setShopes(response.data)
            console.log("shop data" ,shopes)
            console.log("*********************");
            console.log(JSON.stringify(response.data));
            setShopId(response.data.shopId);
            console.log("shop id " ,shopId)
            setShopName(response.data.shopName);
            setShopType(response.data.shopType);
            setShopOwnerName(response.data.shopOwnerName);
            setShopAddress(response.data.shopAddress);
            setPhone(response.data.phone);
            setPassword(response.data.password);
            setEmail(response.data.email);
            setIsActive(response.data.isActive);
            setImage(response.data.image);
            // private String shopType;
	
            // private String shopAddress;
            
            // private String shopOwnerName;
            
            // private String phone;
            
            // private String email;
            
            // private String password;
            
            // private String isActive;
            
        });
    }, [])


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
        setImage(base64);
    }


    // const submitForm = (e) => {
    //     e.preventDefault();


    //     const newEntry = {
    //         dishName: dishname, description: description, price: price, dishImage: dishImage, shop: { shopId: shopId1 }, dishCategory: { dishCategoryId: category }
    //     };
    //     setAllEntry([...allEntry, newEntry]);
    //     console.log(allEntry);
    // }
   
    // const onUpdateShop = () => {
    //   //  localStorage.setItem("Shopkeper-info", JSON.stringify());
    //     // email
    //     history?.push({ pathname: '/editDish' });
    // }

    const onLogout = () => {
        if (localStorage) {
            localStorage.clear();
        }

    }

    async function onUpdateShop() {
      //  let shopId1 = localStorage.getItem("shop-info");
        let item = { shopId: shopId, shopName: shopName,shopType:shopType,shopAddress:shopAddress ,shopOwnerName: shopOwnerName,phone:phone, email: email,password:password,isActive:isActive,image:image };
        console.log(item);
        if (shopName != "" && shopType != "" && shopType != "" && phone != "" && email) {
            // console.warn(dishId, dishname, description, price, dishImage, category);
            let item = {  shopId: shopId, shopName: shopName,shopType:shopType, shopOwnerName: shopOwnerName, phone: phone, phone:phone, email: email,password:password,isActive:isActive,image:image  };
            console.log(item);
            let result = await fetch("http://localhost:8181/shopes/" + shopId,  {
                method: 'put',
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(item)
            });
            result = await result.json();
            alert("Shop Update sucessfully");
            history?.push({ pathname: '/editDish' });
        }
        else {
            alert("Please Fill All Fields Properly");
        }

    }



    return (
        <>
    
                 <button className="custom-nav-link"><NavLink to="/editDish" >back</NavLink></button>
              <button className="custom-nav-link"><NavLink to="/" onClick={onLogout}>Logout</NavLink></button>
            <center>
                <center><h2 style={{ color: "cornflowerblue" }}>Update Shop</h2></center>
                <div>
                    <form  >
                        {/* <form action="" onSubmit={submitForm} > */}
                        <div>
                            <table>
                            <br />
                                <tr>
                                    <td><label htmlFor="shopName">Shop Name</label></td>
                                    <td>:-</td>
                                    <td><input type="text" name="shopName" id="shopName" value={shopName} onChange={(e) => setShopName(e.target.value)} required /></td>
                                </tr>

                                
                                <br />

                                <tr>
                                    <td><label htmlFor="shopType">shopType</label></td>
                                    <td>:-</td>
                                    <td><input type="text" name="shopType" id="shopType" value={shopType} onChange={(e) => setShopType(e.target.value)} required /></td>
                                </tr>
                                <br />

                                <tr>
                                    <td><label htmlFor="shopOwnerName">shop Owner Name</label></td>
                                    <td>:-</td>
                                    <td><input type="shopOwnerName" name="shopOwnerName" id="shopOwnerName" value={shopOwnerName} onChange={(e) => setShopOwnerName(e.target.value)} required /></td>
                                </tr>

                                <br />
                               

                                <tr>
                                    <td><label htmlFor="phone">Phone</label></td>
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
                                    <td><input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required /></td>
                                </tr>

                                
                                <br />
                                <tr>
                                    <td><label htmlFor="isActive">Is Active</label></td>
                                    <td>:-</td>
                                    <td><input type="text" name="isActive" id="isActive" value={isActive} onChange={(e) => setIsActive(e.target.value)} required /></td>
                                </tr>

                                
                                <br />
                                
                                <tr>
                                    <td><label htmlFor="image"> Image</label></td>
                                    <td>:-</td>
                                    <td><input type="file" name="image" id="image" onChange={e => handleFileRead(e)} required />
                                    <img src={image} width="200px"
                                    />
                                    </td>
                                </tr>

                            </table>
                        </div>
                        <br />
                        <div>
                            <table>
                                <tr>
                                    <td></td>
                                    <td><button type="button" name="register" onClick={onUpdateShop} >Update Shop</button></td>
                                </tr>


                            </table>
                        </div>

                    </form>

                </div>
            </center>

        </>
    )
}


export default UpdateShop;