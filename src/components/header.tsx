import React from 'react'
import { NavLink } from "react-router-dom";
import "../styles/Header.css";



const Header = () => {
  
    return (
        <>
          <nav className="topnav">
            <div className="nav-menu">
              <div>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/tournament">Tournaments</NavLink>
                <NavLink to="/game">Games</NavLink>
                <NavLink to="/match">Match</NavLink>
                <NavLink to="/team">Team</NavLink>
              </div>
            </div>
          </nav>
        </>
      );
}

export default Header