import { NavLink } from "react-router-dom";
import "./Header.css";
import { useContext } from "react";
import { UserContext } from "./UserContext";

export const Header = () => {
  const{name,loggedIn}=useContext(UserContext)

  return (
    <nav className="navbar">
      <h2 className="logo">🍽️ BiteRush</h2>

      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/order">Orders</NavLink>
        <NavLink to="/cart">Cart</NavLink>
        
        {loggedIn?(
          <NavLink to="/profile">{name}</NavLink>

        ):(
          <NavLink to="/signin">SIGNIN</NavLink>

        )}

      </div>
    </nav>
  );
};