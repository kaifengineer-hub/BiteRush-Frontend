import "./App.css";
import { Routes,Route } from "react-router-dom";
import { Card } from "./Card";

import { UserContext } from "./UserContext";
import { useState,useEffect } from "react";
import axios from "axios";
import  Order  from "./Order";
import { About } from "./About";
import { Cart } from "./Cart";
import Signup from "./Signup";
import Signin from "./Signin";
import Profile from "./Profile";

export const App = () => {
  const api ="https://biterush-backend-epju.onrender.com"
  const[cart,setCart]=useState([])
  
  const [loggedIn,setLoggedIn]=useState(false)
  const [userid,setUserid]=useState(null)
  const [product,setProduct]=useState([]);
  const [name,setName]=useState("")
  useEffect(() => {
  const checkLogin = async () => {
    try {
      const res = await axios.get(`${api}/profile`, {
        withCredentials: true,
      });

      setLoggedIn(true);
      setName(res.data.user.username);
      setUserid(res.data.user.userid)
    } catch {
      setLoggedIn(false);
      setName("");
      setUserid("")
      
    }
  };

  checkLogin();
}, []);
  return (
    <div className="app">
    <UserContext.Provider value={{api,cart,setCart,userid,setUserid,loggedIn,setLoggedIn,product,setProduct,setName,name}}>
     

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Card/>} />
          <Route path="/order" element={<Order/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/signin" element={<Signin/>}/>
          <Route path="/profile" element={<Profile/>}/>
           
        </Routes>
      </main>
      </UserContext.Provider>
    </div>
  );
};