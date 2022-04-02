import React,{useState} from "react";
import TextField from "@material-ui/core/TextField";
import PersonIcon from "@material-ui/icons/Person";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import EmailIcon from "@material-ui/icons/Email";
import Button from "@material-ui/core/Button";
import Step2 from "../interviews/Step2";
import Step3 from "../interviews/Step3";
import Step4 from "../interviews/Step4";
// import Navbar2 from '../Companyprofile/Navbar2'
import Navbar2 from "../Companyprofile/Navbar2"
import Footer from "../Home/Footer";
// import DeleteIcon from "@material-ui/icons/Delete";
import CloseIcon from "@material-ui/icons/Close";
import "./interviews.css";
import { useNavigate } from "react-router-dom";
import { Input, Grid } from "@material-ui/core";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Step1 = () => {
  const [nameInput, setnameInput] = useState("");

  // question:''
  const navigate = useNavigate();

  const [name, setname] = useState({
    firstname : '',
    lastname : '',
    email : '',
    id : ''
  });
  const [candidateList,setCandidateList] = useState([])
  const itemEvent = (e) => {
    setname({...name,[e.target.name]:e.target.value});
  };
  const addListname = (e) => {
    // const newList= {nameInput}.concat({nameInput2});
    // setname(newList);
    // setname([{firstname:name},{lastname:name}])
    setCandidateList([...candidateList,name])
    toast.success("add successfully!");
    // setname("");
  }
  console.log(name);
  const deletename = (id) => {
    console.log("deleted");
    toast.success("delete successfully!");
    setCandidateList((oldname) => {
      return oldname.filter((arrEle, index) => {
        return index !== id;
      });
    });
  };
  console.log(candidateList);
 const  onSubmit=()=>{
    navigate("/StartInterviewTips")
  }
  const onClick=()=>{
    navigate("/SingleShareGrid")
  }
  return (
    <>
      <Navbar2 />
      <div className="c1div">
        <h1 className="header">Create Interview</h1>
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
                name="firstname"
                id="firstname"
                style={{ width: "160px" }}
                // onInput={inputChangeFunction}
                //  value={FirstInputValue}
               onChange={itemEvent}
              // onInput={inputChangeFunction}
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
                // value={SecondInputValue}
               onChange={itemEvent}
               value={nameInput.lastname}
                
                id="standard-basic"
                placeholder="Last Name"
                // onInput={inputChangeFunction}
                // value={element.lastname || ""} onChange={e=> handleChange(index,e)}
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
                name="id"
                id="id"
                style={{ width: "160px" }}
                id="standard-basic"
                placeholder="Id"
              />
              {/* ))}; */}
              <br />
              
              <div className="Add">
                <Button
                  style={{ marginLeft: "30px", marginTop: "20px" }}
                  // type="submit"
                  // onClick={() => {
                  //   setopenalert(true);
                  // }}
                  variant="contained"
                  // onClick={AddRecords}
                  color="primary"
                  // onClick={addFormFields}
                  onClick={addListname}

>
                  ADD
                </Button>
            

                <br />
                <br />
              </div>
              

              <div></div>
            </div>
          </form>
          <div>
            
          {candidateList.map((item, id) => (
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
         
        
        </div>
        <Step2 />
        <Step3 />
        <Step4 />
        <div>
          <Button
            style={{
              color: "rgb(25,25,65)",
              backgroundColor: "white",
              fontWeight: "bold",
              height: "40px",
              width: "75px",
              marginLeft: "700px",
            }}
            onClick={onSubmit}
          >
            Submit
          </Button>
          <Button
            style={{
              color: "white",
              backgroundColor: "rgb(25,25,65)",
              fontWeight: "bold",
              height: "40px",
              width: "75px",
              marginLeft: "20px",
            }}
            onClick={onClick}
          >
            Reset
          </Button>
        </div>
        <ToastContainer />
      </div>
      <br />
      <br />
      
      <Footer />
    </>
  );
};

export default Step1;