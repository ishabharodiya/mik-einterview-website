import React, { useState } from "react";
import "./login.css";
import Button from "@material-ui/core/Button";
//import img from "../Image/img.PNG";
import reg from "../../Component/image/reg.png";
import girlicon2 from "../../Component/image/girlicon2.jpg";
import { useNavigate, useLocation } from "react-router-dom";
import api from "../helper/api";

const Resetpassword = () => {
  const [pass, setpass] = useState({
    password: "",
  });
  const location = useLocation();
  const navigate = useNavigate();
  var id = new URLSearchParams(location.search).get("id");
  // const [openalert, setopenalert] = useState(false);
  async function verifyemail() {
    let res = api(`/verifyemail?id=${id}`);
    
    console.log(res.data);
  }
  verifyemail();
  async function resetpassword() {
    // let data = { password: '' }
    let res = api.post(`/reset/${id}`, pass);
    console.log(res.data);
    // console.log(data);
  }
  const HandleInput = (e) => {
    setpass({ [e.target.name]: e.target.value });
  };
  const onSubmit = () => {
    resetpassword();
    //  e.resetForm();
    navigate("/Login");
  };
  return (
    <div className="m_div">
      <br />
      <br />
      {/* <img  src={img} alt="MyPic" width="1200px" justify-content="left"></img> */}
      {<img src={reg} alt="MyPic" width="900px" justify-content="right"></img>}
      {/* <img className='login-image' src={img2} alt="Mypic"/> */}
      <div className="cpdiv">
        <div className="img1">
          {<img src={girlicon2} alt="MyPic" width="150px"></img>}
        </div>
        {/* <div className='i'>
      <PersonIcon className="per"/>
    </div> */}
        <form>
          <label className="lb">
            Password:
            <br />
            <input type="password" name="password" onChange={HandleInput} />
          </label>
          <br />
          <br />
          <label className="lb">
            Confirm Password:
            <br />
            <input type="Password" />
          </label>
          <br />
          <br />
          <Button
            type="button"
            variant="contained"
            color="success"
            onClick={onSubmit}
          >
            Reset password
          </Button>
          <br />
          <br />
          {/* <div className='logo'>
    {<img src={image4}  alt="MyPic" width="80px" ></img>}
    <h3><Link to="/register">Create Account</Link></h3> */}
          {/* <Button type="button" class="btn btn-success">Sign in</Button> */}
        </form>
      </div>
    </div>
  );
};
export default Resetpassword;
