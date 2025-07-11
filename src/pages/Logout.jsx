import React, { useContext, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Logout() {
  const { isAuth, setIsAuth } = useContext(AuthContext); // assuming you're using context
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, [isAuth, navigate]);

  const handleLogout = async () => {
    try {
      await axios.get("http://localhost:3001/logout", {
        withCredentials: true,
      });
      setIsAuth(false);
    } catch (err) {
      console.error("Logout error:", err);
    }
  };

  return (
    <div className="flex justify-evenly m-10">
      <h1 className="text-red-500 font-bold">
        {" "}
        Are you sure you want to log out?
      </h1>
      <button onClick={handleLogout}>Log Out</button>
    </div>
  );
}

export default Logout;
