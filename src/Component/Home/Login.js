// import React, { useState} from "react";
// import "./login.css";
// import Button from "@material-ui/core/Button";
// //import img from "../Image/img.PNG";
// import img2 from "../../Component/image/img2.png";
// import image4 from "../../Component/image/ishi.png.crdownload";
// import girlicon2 from "../../Component/image/girlicon2.jpg";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
// import PersonIcon from "@material-ui/icons/Person";
// import LockIcon from "@material-ui/icons/Lock";
// import api from "../helper/api";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const Login = () => {
//   const navigate = useNavigate();
//   // const [success,setsuccess]=useState(true);
//   const [data, setdata] = useState({
//     email: "",
//     password: "",
//   });

//   async function makePostRequest() {
//     console.log(data);

//     let res = await api.post("/login", data);
//     console.log(res.data);
//     if (res.data.success === true) {
//       localStorage.setItem("token", res.data.token);
//       localStorage.setItem("user", JSON.stringify(res.data.data));
//       console.log(res.data.data);
//       navigate("/Companyprofilepage");
//     } else {
//       console.log(data);
//       toast.warn(res.data.message);
//     }
//   }

//   const InputHandle = (e) => {
//     setdata({ ...data, [e.target.name]: e.target.value });
//   };
//   const onSubmit = (e) => {
//     e.preventDefault();
//     makePostRequest();
//   };

//   return (
//     <div className="m_div">
//       <br />
//       <br />
//       {<img src={img2} alt="MyPic" width="650px" justify-content="right"></img>}
//       {/* <img className='login-image' src={img2} alt="Mypic"/> */}
//       <div className="c_div">
//         <div className="img1">
//           {<img src={girlicon2} alt="MyPic" width="100px"></img>}
//         </div>
//         <h1 className="hadding">Welcome...</h1> <br /> <br />
//         <form onChange={InputHandle}>
//           <PersonIcon
//             style={{
//               marginBottom: "-10px",
//               marginLeft: "30px",
//               color: "rgb(25,25,65)",
//             }}
//           />
//           <input
//             type="text"
//             name="email"
//             placeholder="User Name"
//             id="email"
//             // onClick={userHandle}
//           />
//           <br />
//           <br />
//           <br />
//           <LockIcon
//             style={{
//               marginBottom: "-10px",
//               marginLeft: "30px",
//               color: "rgb(25,25,65)",
//             }}
//           />
//           <input
//             type="Password"
//             name="password"
//             placeholder="Password"
//             // onClick={passHandle}
//           />
//           <br />
//           <br />
//           <h2 className="ps">
//             <Link to="/password">Forget Password..?</Link>
//           </h2>
//           <br />
//           <br />
//           <Button
//             type="button"
//             variant="contained"
//             color="success"
//             onClick={onSubmit}
//           >
//             Log in
//           </Button>
//           <br />
//           <br />
//           <div className="logo">
//             {<img src={image4} alt="MyPic" width="80px"></img>}
//             <h3>
//               <Link to="/register">Create Account</Link>
//             </h3>
//           </div>
//         </form>
//       </div>
//       <ToastContainer />
//     </div>
//   );
// };

// export default Login;

import React, { useState, useEffect } from "react";
import "./login.css";
import Button from "@material-ui/core/Button";
//import img from "../Image/img.PNG";
import reg from "../../Component/image/reg.png";
import image4 from "../../Component/image/ishi.png.crdownload";
import girlicon2 from "../../Component/image/girlicon2.jpg";
import fill from "../../Component/image/fill.PNG";

import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import PersonIcon from "@material-ui/icons/Person";
import LockIcon from "@material-ui/icons/Lock";
import api from "../helper/api";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const navigate = useNavigate();
  // const [success,setsuccess]=useState(true);
  const [data, setdata] = useState({
    email: "",
    password: "",
  });

  async function makePostRequest() {
    console.log(data);

    let res = await api.post("/login", data);
    console.log(res.data);
    if (res.data.success === true) {
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.data));
      console.log(res.data.data);
      navigate("/Companyprofilepage");
    } else {
      console.log(data);
      toast.warn(res.data.message);
    }
  }

  const InputHandle = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    makePostRequest();
    navigate("/Companyprofilepage");
    window.location.reload();
  };

  return (
    <div className="m_div">
      <br />
      <br />
      {/* <img className='login-image' src={fill} alt="Mypic" height="100%"/> */}
      {/* {<img src={reg} alt="MyPic" width="900px" justify-content="right"></img>} */}
      <div className="img1" id="img">
        {
          <img
            src={reg}
            alt="MyPic"
            width="900px"
            justify-content="right"
          ></img>
        }
      </div>

      <div className="c_div">
        <div className="img1">
          {<img src={girlicon2} alt="MyPic" width="150px"></img>}
        </div>
        <h1 className="hadding">Welcome...</h1> <br /> <br />
        <form onChange={InputHandle}>
          <PersonIcon
            style={{
              marginBottom: "-10px",
              marginLeft: "30px",
              color: "rgb(25,25,65)",
            }}
          />
          <input
            type="text"
            name="email"
            placeholder="User Name"
            id="email"
            // onClick={userHandle}
          />
          <br />
          <br />
          <br />
          <LockIcon
            style={{
              marginBottom: "-10px",
              marginLeft: "30px",
              color: "rgb(25,25,65)",
            }}
          />
          <input
            type="Password"
            name="password"
            placeholder="Password"
            // onClick={passHandle}
          />
          <br />
          <br />
          <h2 className="ps">
            <Link to="/password">Forget Password..?</Link>
          </h2>
          <br />

          <Button
            type="submit"
            variant="contained"
            color="success"
            onClick={onSubmit}
          >
            Log in
          </Button>
          <br />
          <br />
          <div className="logo">
            {<img src={image4} alt="MyPic" width="80px"></img>}
            <h4>
              <Link to="/register">Create Account</Link>
            </h4>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
