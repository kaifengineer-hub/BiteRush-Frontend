import { useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";
import "./Cart.css";
import axios from "axios";
import { Header } from "./Header";

export const Cart = () => {
  const { api,cart,setCart,product} = useContext(UserContext);
  const[finalcart,setFinalcart]=useState([]);
  const [showOrder, setShowOrder] = useState(false);
const [form, setForm] = useState({
  name: "",
  phone: "",
  address: "",
  payment: "COD"
});
const placeOrder = async () => {
  try{
const res=await axios.post(`${api}/orders`,{
  finalCart:finalcart,form
},{withCredentials:true})
if(res.status===201){
  
  await axios.delete(`${api}/cart`,{withCredentials:true})

 
 console.log(res)
  
}
 await getdata()

 setShowOrder(false)

}catch(err){
  console.log(err)
}
  
};
  const removee=async(productId)=>{
   const response=await axios.put(`${api}/cart/remove`,{productId},
      {withCredentials:true})
      if(response.status==200){
       await getdata()

      }
      console.log("something went wrong")
      
      

  }
  const increement = async (productId) => {
    try {
        const response = await axios.put(
            `${api}/cart/increement`,
            {
              productId
            },
            {withCredentials:true}
        );
        await getdata()
       

       console.log(response.data)

    } catch (err) {
        console.log("ERROR:", err);
        console.log("SERVER:", err.response?.data);
    }
};
    const decreement = async(productId)=>{
    await axios.put(`${api}/cart/decreement`,{

     
      productId
    },{withCredentials:true})
    await getdata()


  }
 const getdata = async () => {
    try {
        const cartRes = await axios.get(`${api}/cart`,{withCredentials:true}
            
        )

        setCart(cartRes.data.items)


    } catch (err) {
       if(err.response?.status===404){
        setCart([]);
       }
    }
}
useEffect(() => {
  getdata();
}, []);
 useEffect(() => {
  const result = cart
    .map((cartItem) => {
      const productt = product.find(
        (p) => p._id.toString() === cartItem.productId.toString()
      );
      return { ...productt, quantity: cartItem.quantity };
    })
    .filter(Boolean);

  setFinalcart(result);
  console.log(finalcart)
}, [cart, product]);
 

    
   



  

  if (finalcart.length === 0) {
    return (
      <>
      <Header/>
    <div className="empty-cart-container">
  <h2 className="empty-cart">🛒 Your Cart is Empty</h2>
</div>
      </>
    );
  }

  return (
    <>
    <Header/>

   
   <div className="cart-page">
  <div className="cart-wrapper">
    <div className="cart-header">
      <h1 className="cart-title">🛒 My Cart</h1>
      <p className="cart-subtitle">{finalcart.length} items in your cart</p>
    </div>

    <div className="cart-list">
      {finalcart.map((item) => (
        <div className="cart-item" key={item._id}>
          <div className="cart-item-image">
            <img src={item.img} alt={item.name} />
          </div>

          <div className="cart-item-info">
            <h2 className="item-name">{item.name}</h2>

            <p className="item-price">₹{item.price}</p>

            <div className="quantity-box">
              <button
                className="qty-btn"
                onClick={() => decreement(item._id)}
              >
                −
              </button>

              <span className="qty-value">{item.quantity}</span>

              <button
                className="qty-btn"
                onClick={() => increement(item._id)}
              >
                +
              </button>
            </div>

            <h3 className="item-total">
              Total: ₹{item.price * item.quantity}
            </h3>

            <button
              className="remove-btn"
              onClick={() => removee(item._id)}
            >
              Remove Item
            </button>
          </div>
        </div>
      ))}
    </div>

    <div className="checkout-section">
      <button className="checkout-btn" onClick={() => setShowOrder(true)}>
        Proceed to Checkout
      </button>
    </div>
  </div>

  {showOrder && (
    <div className="checkout-modal">
      <div className="checkout-card">
        <h2 className="checkout-title">Delivery Details</h2>

        <input
          className="checkout-input"
          placeholder="Full Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          className="checkout-input"
          placeholder="Phone Number"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />

        <textarea
          className="checkout-textarea"
          placeholder="Delivery Address"
          value={form.address}
          onChange={(e) => setForm({ ...form, address: e.target.value })}
        />

        <select
          className="checkout-select"
          value={form.payment}
          onChange={(e) => setForm({ ...form, payment: e.target.value })}
        >
          <option value="COD">Cash on Delivery</option>
          <option value="ONLINE">Online Payment</option>
        </select>

        <div className="checkout-actions">
          <button
            className="cancel-btn"
            onClick={() => setShowOrder(false)}
          >
            Cancel
          </button>

          <button className="place-btn" onClick={placeOrder}>
            Place Order
          </button>
        </div>
      </div>
    </div>
  )}
</div>
     </>
  );
};