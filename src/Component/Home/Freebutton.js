import React from "react";
import Button from "@material-ui/core/Button";
import home from "../../Component/image/home.jpg";
import { useNavigate } from "react-router-dom";

import "./Freebutton.css";
const Freebutton = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="home-title">
        <br/>
        <img className="home-image" src={home} alt="Mypic" />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <h2>WE</h2>
        <h2>PRE-SCREEN</h2>
        <h2>INTERVIEWS</h2>
        
        <h4 style={{ fontStyle: "-moz-initial", fontSize: "25px" }}>
          So You don't have to worry about it
        </h4>
      </div>
      <br />
      <div className="home-border"></div>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      {/* <Button variant="contained" color='secondary' type='button'><Link to='/Reg'>TRY IT FREE</Link></Button><br /><br /><br /><br /><br /> */}
      <Button
        type="button"
        color="primary"
        variant="contained"
        width="70px"
        onClick={() => {
          navigate("/register");
        }}
      >
        TRY IT
      </Button>
      <br />
      <br />
      <br />
      <br />
      <br />
      {/* <h3><Link to="/Reg">Free To Try</Link></h3> */}
    </div>
  );
};

export default Freebutton;
