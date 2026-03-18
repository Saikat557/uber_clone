import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
const userLogout = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      axios
        .delete(`${import.meta.env.VITE_BASE_URL}/users/logout`, {
          headers: { authorization: `Bearer ${token}` },
        })
        .then((res) => {
         localStorage.removeItem("token")
         navigate("/login")
        })
        .catch((err) => {
          console.log(err.response);
        });
    }
  },[]);

  return <div>user logout</div>;
};

export default userLogout;
