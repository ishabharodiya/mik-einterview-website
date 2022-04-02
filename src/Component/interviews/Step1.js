import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import PersonIcon from "@material-ui/icons/Person";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import EmailIcon from "@material-ui/icons/Email";
import Button from "@material-ui/core/Button";
import Navbar2 from "../Companyprofile/Navbar2";
import Footer from "../Home/Footer";
import CloseIcon from "@material-ui/icons/Close";
import "./interviews.css";
import { Input, Grid } from "@material-ui/core";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../interviews/chip.css";

const Step1 = ({ handleDataChange }) => {
  const [candidate, setCandidate] = useState({
    first_name: "",
    last_name: "",
    email: "",
    // id : ''
  });
  const [candidateList, setCandidateList] = useState([]);
  const itemEvent = (e) => {
    setCandidate({ ...candidate, [e.target.name]: e.target.value });
  };

  const addListname = (e) => {
    setCandidateList([...candidateList, candidate]);
    setCandidate({
      first_name: "",
      last_name: "",
      email: "",
      // id : ''
    });
    handleDataChange("candidate", [...candidateList, candidate]);
    // setname("");
    console.log("candidate", candidate);
  };

  const deletename = (id) => {
    // console.log("deleted");
    setCandidateList((oldname) => {
      return oldname.filter((arrEle, index) => {
        return index !== id;
      });
    });
  };
  // console.log(candidateList);
  return (
    <>
      <Navbar2 />
      {/* <div className="c1div">
        <h1 className="header">Create Interview</h1> */}
      <div className="step1">
        <form>
          {/* {formValues.map((element,index)=>( */}

          <h1>
            <PeopleAltIcon
              className="icons"
              style={{
                marginBottom: "-10px",
                marginLeft: "30px",
                color: "rgb(25,25,65)",
                size: "20px",
              }}
            />
            Candidates
          </h1>
          <br />
          <div className="inputfield">
            <PersonIcon
              style={{
                marginBottom: "-10px",
                marginLeft: "30px",
                color: "rgb(25,25,65)",
              }}
            />
            <Input
              as={TextField}
              name="first_name"
              id="first_name"
              style={{ width: "160px" }}
              // onInput={inputChangeFunction}
              //  value={FirstInputValue}
              onChange={itemEvent}
              // onInput={inputChangeFunction}
              id="standard-basic"
              placeholder="First Name"
              value={candidate.first_name}
            />
            <PersonIcon
              style={{
                marginBottom: "-10px",
                marginLeft: "30px",
                color: "rgb(25,25,65)",
              }}
            />
            <Input
              as={TextField}
              name="last_name"
              id="last_name"
              style={{ width: "160px" }}
              // onInput={inputChangeFunction}
              // value={SecondInputValue}
              onChange={itemEvent}
              value={candidate.last_name}
              id="standard-basic"
              placeholder="Last Name"
              // onInput={inputChangeFunction}
              // value={element.last_name || ""} onChange={e=> handleChange(index,e)}
            />

            <EmailIcon
              style={{
                marginBottom: "-10px",
                marginLeft: "30px",
                color: "rgb(25,25,65)",
              }}
            />

            <Input
              onChange={itemEvent}
              as={TextField}
              name="email"
              id="email"
              style={{ width: "160px" }}
              id="standard-basic"
              placeholder="Email-Id"
              value={candidate.email}
            />

            {/* <PersonIcon
                style={{
                  marginBottom: "-10px",
                  marginLeft: "30px",
                  color: "rgb(25,25,65)",
                }}
              />
              <Input
                onChange={itemEvent}
                as={TextField}
                name="id"
                id="id"
                style={{ width: "160px" }}
                id="standard-basic"
                placeholder="Id"
                value={candidate.id}
              /> */}
            {/* ))}; */}
            <br />

            <div className="Add">
              <Button
                style={{ marginLeft: "30px", marginTop: "20px" }}
                variant="contained"
                // onClick={AddRecords}
                color="primary"
                // onClick={addFormFields}
                onClick={addListname}
              >
                ADD
              </Button>
              {/* <br />
                <br /> */}
            </div>
            {/* <div></div> */}
          </div>
        </form>
        <div>
          <br />
          {candidateList.map((item, id) => (
            <Grid container spacing={3} key={id}>
              <Grid item xs={6}>
                {/* <Chip */}
                {/* id="chip"> */}
                <p>
                  <PersonIcon
                    style={{
                      marginBottom: "-10px",
                      marginLeft: "30px",
                      color: "rgb(25,25,65)",
                    }}
                  />{" "}
                  {`${item.first_name} ${item.last_name}`}
                </p>
                {/* <p>{item.last_name}</p> */}
              </Grid>
              <Grid item xs={2}>
                <h3>
                  <div className="Add_closeicon">
                    <CloseIcon
                      style={{ color: "black" }}
                      onClick={() => {
                        deletename(id);
                        toast.success("delete successfully!");
                      }}
                    />
                  </div>
                </h3>
              </Grid>
            </Grid>
          ))}
          {/* </Chip> */}
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Step1;
