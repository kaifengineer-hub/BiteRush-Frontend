import axios from "axios"
import "./Profile.css"
import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from "./UserContext"

const Profile=()=>{
    const navigate=useNavigate()
    const {setName,api,setLoggedIn}=useContext(UserContext)
    const [data,setData]=useState(null)
 const handleLogout = async () => {
  const res = await axios.post(
    `${api}/logout`,
    {},
    { withCredentials: true }
  );

  if (res.status === 200) {
    setLoggedIn(false);
    setName("");
    navigate("/signin");
  } else {
    alert("Something went wrong");
  }
};
    const getData=async()=>{
       const response = await axios.get(`${api}/profile`, {
  withCredentials: true
});
const data=response.data
        setData(data)
    }
    useEffect(()=>{
        getData()
        
    },[])
    useEffect(()=>{
        console.log(data)

    },[data])

return (
  <div className="profile">
    <div className="profile-card">
      <div className="avatar">
        {data?.user?.username?.charAt(0).toUpperCase()}
      </div>

      <h1>{data?.user?.username}</h1>
      <p className="phone">+91 {data?.user?.number}</p>

      <button className="logout-btn" onClick={handleLogout}>
        Logout
      </button>
    </div>
  </div>
);
}
export default Profile;