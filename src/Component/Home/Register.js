import React, { useState } from "react";
//import img from "../Image/img.PNG";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import reg from "../../Component/image/reg.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import api from "../../Component/helper/api";
import girlicon2 from "../../Component/image/girlicon2.jpg";
import PersonIcon from "@material-ui/icons/Person";
import EmailIcon from "@material-ui/icons/Email";
// import AlertBox from "../alert/AlertBox";
import "./register.css";
// import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Reg = () => {
  
  const navigate = useNavigate();
  async function makePostRequest() {
    console.log("call", regdata);
    let res = await api.post("/register", regdata);
    console.log(regdata);
    console.log(res.regdata);
    if (res.data.success === true) {
      console.log(res.data.data)
      navigate("/Login");
    } else {
      // console.log(data);
      toast.info(res.data.message)
  }

  }
  const [regdata, setRegdata] = useState({
    email: "",
    firstname: "",
    lastname: "",
    companyemail: "",
  });
  const InputHandle = (e) => {
    setRegdata({ ...regdata, [e.target.name]: e.target.value });
  };
  /* const signinbutton=(e)=>{
    e.preventDefault(regdata)
    console.log(regdata);
  } */
  const onSubmit = (e) => {
    e.preventDefault();
    makePostRequest();
  };
  // const initialValues={emailid:'',firstname:'',lastname:''};
  // const [formvalues,setFormvalues]=useState=(initialValues)
  // const handleChange =(e)=>{
  //  console.log(e.target);
  // }
  return (
    <div className="madiv">
      {/* <img src={img}  alt="MyPic" width="900px"></img> */}
      {/* <img  src={img2} className="img2" alt="MyPic" width="100px"></img> */}
      {<img src={reg} alt="MyPic" width="900px"></img>}
    {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
      <div className="cadiv">
        <div className="img1">
          {<img src={girlicon2} alt="MyPic" width="150px"  className="i1"></img>}
        </div>
        <br />
        <form onChange={InputHandle}>
          <EmailIcon
            style={{
              marginBottom: "-10px",
              marginLeft: "30px",
              color: "rgb(25,25,65)",
            }}
          />
          <input type="email" name="email" placeholder="Email-id" />
          <br />
          <br />
          <br />
          <PersonIcon
            style={{
              marginBottom: "-10px",
              marginLeft: "30px",
              color: "rgb(25,25,65)",
            }}
          />
          <input type="text" name="firstname" placeholder="First Name"  />

          <br />
          <br />
          <br />
          <PersonIcon
            style={{
              marginBottom: "-10px",
              marginLeft: "30px",
              color: "rgb(25,25,65)",
            }}
          />
          <input type="text" name="lastname" placeholder="Last Name" 
          />

          <br />
          <br />
          <br />
          <EmailIcon
            style={{
              marginBottom: "-10px",
              marginLeft: "30px",
              color: "rgb(25,25,65)",
            }}
          />
          <input
            type="email"
            name="companyemail"
            placeholder="Company Emailid"
          />
          <br />
          <br />
          <br />
          {/* <br/>
          <br/> */}
          {/* <Button type="button"  color="default">
          <Link to="/Loggin">Sign up</Link>
        </Button> */}
        <Button
            type="button"
            variant="contained"
            color="success"
            onClick={onSubmit}
          >
            Sign up
          </Button>
          <br />
          <br />
          <h3>
            <Link to="/Login">Back to Sign in</Link>
          </h3>
          {/* <input type="text" className="in"><Link to="/Login">Back to sign in</Link></input> */}
          <Dialog />
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Reg;

