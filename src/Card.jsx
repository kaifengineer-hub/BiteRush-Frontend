
import "./Card.css";
import { UserContext } from "./UserContext";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Header } from "./Header";

export const Card = () => {

  
  const {api,loggedIn,userid,setProduct,product}=useContext(UserContext)
  const carting=async(productId)=>{
    
    if(!loggedIn)return;
    await axios.post(`${api}/cart`,{
      
      productId
    },{withCredentials:true})

  }
  const getData=async()=>{
    const productResoponse=await axios.get(`${api}/products`)
    const productData=productResoponse.data
    setProduct(productData)
  

     
  }
  useEffect(()=>{
    getData()
  },[])
 

 
  
  


  
  return (
    <>
<Header/>
   
    
    <div className="card-container">
      {product.map((item) => (
        <div className="food-card" key={item._id}>
          <img src={item.img} alt={item.name} />

          <h2>{item.name}</h2>

          <h3>₹{item.price}</h3>

          <h4> {item.rating}</h4>

          
          <button onClick={()=>carting(item._id)}>ADD TO CART</button>
        </div>
      ))}
    </div>
     </>
  );
};
