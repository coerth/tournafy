import React from "react";
import { useNavigate } from "react-router-dom";
import { hasAccessVar, isLoggedInVar, loggedInPlayerVar } from "../../client/cache";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("auth:token");
    localStorage.removeItem("player");
    localStorage.removeItem("adminAccess")
    isLoggedInVar(false);
    loggedInPlayerVar(null);
    hasAccessVar(false);
    navigate("/");
  };

  return( 
  <div className="login-container"> 
    <button onClick={handleLogout}>Log Out</button>
  </div>
  )
};

export default Logout;