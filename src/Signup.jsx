import axios from "axios";
import { useState,useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "./Header";
import { UserContext } from "./UserContext";
const Signup=()=>{
    const {api}=useContext(UserContext)
    const navigate=useNavigate()
    const[username,setUsername]=useState("")
    const[password,setPassword]=useState("")
    const[password1,setPassword1]=useState("")
    const[number,setNumber]=useState("")
    
    const firstRef=useRef(null)
    const handleSubmit=async()=>{
        if(username.trim()=="" || number.trim()==""||password.trim()=="")return
        if(password!==password1){
            return alert("password not matched")
        }
        if(username.trim().length<=3){
            return alert("username must contain 4 char")
        }
        if(password.length<7){
            return alert("password must contai 8 character")
        }
        if(number.length<9){
           return alert("Phone number must contain exactly 10 digits")
        }
    try {
    const res = await axios.post(`${api}/signup`, {
        username,
        password,
        number
    });

    if (res.status === 201) {
        setUsername("");
        setPassword("");
        setPassword1("");
        setNumber("");

        navigate("/signin");
    }
} catch (err) {
    if (err.response?.status === 409) {
        alert("Username already exists");
    } else {
        alert("Internal server error");
    }
}
    }
    return(
        <>
        <Header/>
            <div className="form-container">
                <div className="form">
                <h1>FOOD HUB</h1>

<form onSubmit={(e) => {
    e.preventDefault();
    handleSubmit();
}}>
  
  <div className="input-group">
    <label htmlFor="username">Username</label>
    <input
      type="text"
      id="username"
      value={username}
      name="username"
      placeholder="Enter username"
      onChange={(e)=>setUsername(e.target.value)}
    />
  </div>

  <div className="input-group">
    <label htmlFor="password">Password</label>
    <input
    value={password}
    onChange={(e)=>setPassword(e.target.value)}
      type="password"
      id="password"
      name="password"
      placeholder="Enter password"
    />
  </div>

  <div className="input-group">
    <label htmlFor="confirmPassword">Re-enter Password</label>
    <input
    value={password1}
    onChange={(e)=>setPassword1(e.target.value)}
      type="password"
      id="confirmPassword"
      name="confirmPassword"
      placeholder="Re-enter password"
    />
  </div>

  <div className="input-group">
    <label htmlFor="number">Phone Number</label>
    <input
      type="tel"
      id="number"
      name="number"
      value={number}
      onChange={(e)=>setNumber(e.target.value)}
      placeholder="Enter phone number"
    />
  </div>

    <button type="submit">Create Account</button>
</form>


</div>
            </div>
        </>
    )
}
export default Signup