import React from "react";
import "./Header.css";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import newlogo from "../../Component/image/newlogo.PNG";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div class="navbar">
        <div className="navbar-logo">
          <img
            src={newlogo}
            alt="MyPic"
            width="120px"
            className="navbar-logo"
          />
        </div>

        <div class="dropdown">
          <button class="dropbtn">
            Team
            <ArrowDropDownIcon
              style={{ fontSize: "35px", margin: "-10px 0px" }}
            />
          </button>
          <div class="dropdown-content">
            <NavLink to="/team" className="a">
              About Us
            </NavLink>
            <NavLink smooth={true} to="/contact" className="a">
              Contact Us
            </NavLink>
          </div>
        </div>
        <div class="dropdown">
          <button class="dropbtn">
            Accounts
            <ArrowDropDownIcon
              style={{ fontSize: "35px", margin: "-10px 0px" }}
            />
          </button>
          <div class="dropdown-content">
            <NavLink to="/register" className="a">
              Create Account
            </NavLink>
            <NavLink to="/login" className="a">
              Login
            </NavLink>
          </div>
        </div>
        <NavLink to="/" className="a">
          Home
        </NavLink>
      </div>
    </>
  );
}

export default Navbar;
