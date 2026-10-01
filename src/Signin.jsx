import axios from "axios";
import { useContext, useRef, useState } from "react";
import { UserContext } from "./UserContext";
import "./Signin.css"
import { useNavigate } from "react-router-dom";
import { Header } from "./Header";

const Signin = () => {
    const invalidRef = useRef(null);
    const navigate=useNavigate()

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const {api, setLoggedIn,setName } = useContext(UserContext);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post(
  `${api}/signin`,
  { username, password },
  { withCredentials: true }
);

            if (res.status === 200) {
                setLoggedIn(true);
               setName(username)
                navigate("/")
                
            }
        } catch (err) {
            if (err.response?.status === 401) {
                invalidRef.current.textContent =
                    "Invalid username or password";
            } else {
                invalidRef.current.textContent =
                    "Something went wrong. Please try again.";
            }
        }
    };

    return (
        <>
        <Header/>
            <div className="form-container">
                <div className="form">
                    <h1>FOOD HUB</h1>

                    <h2 className="invalid-field" ref={invalidRef}></h2>

                    <form onSubmit={handleSubmit}>
                        <div className="input-group">
                            <label htmlFor="username">Username</label>
                            <input
                                type="text"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="Enter username"
                                required
                            />
                        </div>

                        <div className="input-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter password"
                                required
                            />
                        </div>

                        <button type="submit">Sign In</button>
                        <button onClick={()=>navigate("/signup")} >
                            Create Account
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Signin;