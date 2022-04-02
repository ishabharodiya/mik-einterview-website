import React, { useState } from "react";
import "./navbar2.css";
import DehazeIcon from "@material-ui/icons/Dehaze";
import newlogo from "../../Component/image/newlogo.PNG"
import { NavLink } from "react-router-dom";
// import axios from "axios";

function Navbar2() {
  const user = JSON.parse(localStorage.getItem('user'));
  const type = user.type;
const [name, setName] = useState();
  return (
    <div>
      <header>
        <div className="out-nav-logo">
          {/* <div className="out-nav-logo"></div> */}
          <img
            src={newlogo}
            alt="MyPic"
            width="120px"
            className="navbar-logo"
          />
        </div>
        <nav className="first">
          <ul>
            {/* <li><a href="#" className="a">INTERVIEWS</a></li> */}

            <li>
              <NavLink to="/interviews" className="a">
                INTERVIEWS
              </NavLink>
            </li>

            <li className="sub-menu">
              <NavLink to="/login" className="a">
                LOGOUT
              </NavLink>
            </li>
            <li>
              <a href="#" className="activename"> 
              {type==='admin'?`${user.admin.firstname} ${user.admin.lastname}` : `${user.manager.firstname} ${user.manager.lastname}`}
              </a>
            </li>
          </ul>
        </nav>
        <nav className="second">
          <ul>
            <li>
              <NavLink to="/adminview" className="a">
                ADMIN VIEW
              </NavLink>
            </li>

            <li>
              <NavLink to="/companyprofilepage" className="a">
                COMPANY PROFILE
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="icon">
          <DehazeIcon />
        </div>
      </header>
    </div>
  );
}

export default Navbar2;
