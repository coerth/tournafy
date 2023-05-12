import React from "react";
import { useNavigate } from "react-router-dom";
import { isLoggedInVar, loggedInPlayerVar } from "../../client/cache";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("auth:token");
    localStorage.removeItem("player");
    isLoggedInVar(false);
    loggedInPlayerVar(null);
    navigate("/");
  };

  return( 
  <div className="login-container"> 
    <button onClick={handleLogout}>Log Out</button>
  </div>
  )
};

export default Logout;