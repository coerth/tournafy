import React from 'react'
import { NavLink } from "react-router-dom";
import "../styles/Header.css";
import LogIn from './user/LogIn';
import { IS_LOGGED_IN  } from '../../graphql/query';
import { useQuery } from '@apollo/client';
import Logout from './user/LogOut';


const Header = () => {
  const { data: { isLoggedIn } } = useQuery(IS_LOGGED_IN);
  
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
                <NavLink to="/admin">Admin</NavLink>
                {isLoggedIn ? <Logout /> : <LogIn />}
              </div>
            </div>
          </nav>
        </>
      );
}

export default Header