import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Header } from "./Header";
import "./Order.css";
import { UserContext } from "./UserContext";

const Order = () => {
  const {api}=useContext(UserContext)
  const [orders, setOrders] = useState([]);

  const getData = async () => {
    try {
      const res = await axios.get(`${api}/orders`, {
        withCredentials: true,
      });

      setOrders(res.data.orders);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Header />

      <div className="orders">
        <h1>My Orders</h1>

        {orders.map((order) => (
          <div className="order-card" key={order._id}>
            <h3>Payment: {order.payment}</h3>
            <p>{order.address}</p>

            {order.items.map((item) => (
              <div className="order-item" key={item.productId._id}>
                <img
                  src={item.productId.img}
                  alt={item.productId.name}
                  width="90"
                />

                <div>
                  <h4>{item.productId.name}</h4>
                  <p>Price: ₹{item.productId.price}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p>
                    Total: ₹{item.productId.price * item.quantity}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default Order;