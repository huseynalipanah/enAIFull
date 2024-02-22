import React, { useContext } from "react";
import enai from "../../assets/logo2.png";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { NavLink } from "react-router-dom";
import "./Navbar.scss";
import { DarkModeContext } from "../../Context/DarkModeContext";
const Navbar = () => {
const {dark, setDark} = useContext(DarkModeContext)

  return (
    <div className="nav">
      <div className="navbar">
        <div className="nav-logo">
          <NavLink to="/">
            <img src={enai} alt="" />
          </NavLink>
        </div>
        <div className="nav-menu">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/news">News</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
        <div className="nav-right">
          <div className="theme" onClick={() => setDark(!dark)}>
            {!dark ?
            <LightModeIcon className="sun" onClick={() => setDark(true)}/>
            :
            <DarkModeIcon onClick={() => setDark(false)}/>
            }
          </div>
          <button>Log In</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
