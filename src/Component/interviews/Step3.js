import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import PersonIcon from "@material-ui/icons/Person";
import EmailIcon from "@material-ui/icons/Email";
import Button from "@material-ui/core/Button";
import PeopleIcon from "@material-ui/icons/People";
import {Grid,Input } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Step1AddField from "./Step1AddField";

const Step3 = () => {
  // const [questionInput, setquestionInput] = useState("");
  // question:''
  const [nameInput, setnameInput] = useState("");
  const [name, setname] = useState({
    firstname : '',
    lastname : '',
    email : ''
  });
  const [participanteList,setparticipanteList] = useState([])
  const itemEvent = (e) => {
    setname({...name,[e.target.name]:e.target.value});
  };

 
  const addListname = () => {
    // const newList= questionInput.concat({question});
    // setquestionInput(newList);
    setparticipanteList([...participanteList,name]);
    toast.success("add successfully!");
    // setquestionInput("");
  };
  console.log(participanteList);

  console.log(name);
  const deletename = (id) => {
    console.log("deleted");
    toast.success("delete successfully!");
    setparticipanteList((oldname) => {
      return oldname.filter((arrEle, index) => {
        return index !== id;
      });
    });
  };
  
  return (
            <>
              <div className="step1">
                <form>
                    <h2> <PeopleIcon className="icons"
                      style={{
                        marginBottom: "-10px",
                        marginLeft: "30px",
                        color: "rgb(25,25,65)",
                        size:"20px"
                        
                      }}
                    />Panel Participant</h2>
                    <br/>
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
                      name="firstname"
                      id="firstname"
                      style={{ width: "160px" }}
                      // onInput={inputChangeFunction}
                      onChange={itemEvent}
                      //  value={FirstInputValue}
                      id="standard-basic"
                      placeholder="First Name"
                      value={nameInput.firstname}
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
                      name="lastname"
                      id="lastname"
                      style={{ width: "160px" }}
                      // onInput={inputChangeFunction}
                      value={nameInput.lastname}
                      onChange={itemEvent}

                      id="standard-basic"
                      placeholder="Last Name"
                    />
                    <EmailIcon
                      style={{
                        marginBottom: "-10px",
                        marginLeft: "30px",
                        color: "rgb(25,25,65)",
                      }}
                    />
                    <Input
                      as={TextField}
                      name="email"
                      id="email"
                      style={{ width: "160px" }}
                      id="standard-basic"
                      placeholder="Email-Id"
                      // onChange={itemEvent}

                    />
                    
                    <div className="Add">
                      <Button
                      style={{marginLeft:"30px",marginTop:"20px"}}
                        // type="button"
                        // onClick={() => {
                        //   setopenalert(true);
                        // }}
                        variant="contained"
                        // onClick={AddRecords}
                  onClick={addListname}
                        
                        color="primary"
                      >
                        ADD
                      </Button><br/><br/>
                     
                    </div>
                    <div>
                    
                    </div>
                  </div>
                </form>
                <div>
                {participanteList.map((item, id) => (
            <Grid container spacing={3} key={id}>
              <Grid item xs={6}>
                <p>{`${item.firstname} ${item.lastname}`}</p>
                {/* <p>{item.lastname}</p> */}
              </Grid>
              <Grid item xs={2}>
                <h3>
                <div className="Add_closeicon">
              <CloseIcon style={{ color: "black" }}  onClick={() => {
                      deletename(id);
                    }} />
            </div>
                </h3>
              </Grid>
              </Grid>
              ))}
          </div>
         
          <ToastContainer />
              </div>
            </>
    );
};

export default Step3;
