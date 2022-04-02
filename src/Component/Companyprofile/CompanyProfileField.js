import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
// import axios from "axios";
import api from "../helper/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CompanyProfileField = () => {
  const field1 = { margin: "30px", marginTop: "50px" };
  const field = { margin: "30px", marginTop: "-40px", width: 195 };
  async function makePostRequest() {
    console.log(cmdata);
    let res = await api.post("/update-company", cmdata);
    console.log(res.cmdata);
    //   if(res.data.success===true){
    //       // localStorage.setItem("token",res.cmdata.token);
    //       localStorage.setItem("token", JSON.stringify(res.cmdata.token));
    //    }
    //  else{
    //    console.log(cmdata)
    //  }
  }

  const [cmdata, setCmdata] = useState({
    firstname: "",
    lastname: "",
    company_name: "",
    companyemail: "",
    state: "",
    address: "",
    address2: "",
    city: "",
    zip: "",
  });
  async function getdata() {
    console.log(cmdata);
    let res = await api.get("/get-company-info", cmdata);
    console.log(res.cmdata);
    setCmdata(res.data.data[0].admin);
  }
  const InputHandle = (e) => {
    setCmdata({ ...cmdata, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    makePostRequest();
    // makeGetRequest();
    toast.success("update successfully!");
  };
  useEffect(() => {
    getdata();
  }, []);

  return (
    <>
      <form onChange={InputHandle}>
        <TextField
          style={field1}
          id="standard-basic"
          label="FirstName"
          name="firstname"
          variant="standard"
        />
        <TextField
          style={field1}
          id="standard-basic"
          label="LastName"
          name="lastname"
          variant="standard"
        />

        <br></br>
        <br></br>
        <TextField
          style={field}
          id="standard-basic"
          label="CompanyName"
          name="company_name"
          variant="standard"
        />
        <TextField
          style={field}
          id="standard-basic"
          label="Comapany EmailId"
          variant="standard"
          name="companyemail"
        />
        <FormControl style={field}>
          <InputLabel htmlFor="demo-customized-select-native">
            --Select State--
          </InputLabel>
          <NativeSelect id="demo-customized-select-native" name="state">
            <option value="gujarat">gujarat</option>
            <option value="mumbai">mumbai</option>
            <option value="rajstthan">rajasthan</option>
          </NativeSelect>
        </FormControl>
        <br></br>
        <br></br>

        <TextField
          style={field}
          id="standard-basic"
          label="Comapany Address"
          variant="standard"
          name="address"
        />
        <TextField
          style={field}
          id="standard-basic"
          label="Comapany Address2"
          variant="standard"
          name="address2"
        />
        <TextField
          style={field}
          id="standard-basic"
          label="Comapany City"
          variant="standard"
          name="city"
        />
        <TextField
          style={field}
          id="standard-basic"
          label="Comapany Zip"
          variant="standard"
          name="zip"
        />

        <Button
          style={{ marginLeft: "500px", marginTop: "30px" }}
          variant="contained"
          color="primary"
          onClick={onSubmit}
          // onClick={handleClick}
        >
          Update Company
        </Button>
        <br />
        <ToastContainer />
      </form>
    </>
  );
};

export default CompanyProfileField;
