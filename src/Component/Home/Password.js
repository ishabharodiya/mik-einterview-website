import React, { useState } from "react";
import Button from "@material-ui/core/Button";
//import img from "../Image/img.PNG";
import reg from "../../Component/image/reg.png";
import "./login.css";
import girlicon2 from "../../Component/image/girlicon2.jpg";
import { Link } from "react-router-dom";
import api from "../helper/api";

const Password = () => {
  async function makePostRequest() {
    console.log("call", passdata);
    let res = api.post("http://localhost:2002/forgot", passdata);
    console.log(res.regdata);
  }
  const [passdata, setPassdata] = useState({ email: "" });
  const InputHandle = (e) => {
    setPassdata({ ...passdata, [e.target.name]: e.target.value });
  };
  /* const signinbutton=(e)=>{
    e.preventDefault(regdata)
    console.log(regdata);
  } */
  const onSubmit = (e) => {
    e.preventDefault();
    makePostRequest();
  };
  return (
    <div className="m_div">
      {/* <img  src={img} alt="MyPic" width="1200px" justify-content="left"></img> */}
      {<img src={reg} alt="MyPic" width="900px" justify-content="right"></img>}
      {/* <img className='login-image' src={img2} alt="Mypic"/> */}
      <div className="c-div">
        <div className="img1">
          {<img src={girlicon2} alt="MyPic" width="150px"></img>}
        </div>
        <form onChange={InputHandle}>
          <label className="lb">
            Email id:
            <br />
            <input type="email" />
          </label>
          <br />
          <br />
          <br />
          <br />
          <br />
          <Button
            type="button"
            variant="contained"
            color="success"
            className="btn"
            onClick={onSubmit}
          >
            <Link to="/resetpassword">Forgot Password</Link>
          </Button>
        </form>
      </div>
    </div>
  );
};
export default Password;
