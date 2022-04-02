import React, { useState,useEffect } from "react";
import Button from "@material-ui/core/Button";
import QuestionCard from "./QuestionCard";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Input } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import Grid from "@material-ui/core/Grid";
import "./company.css";
import { NativeSelect } from "@material-ui/core";
import api from "../helper/api";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from '@material-ui/icons/Edit';
// import AddDepartment from "./addbuttons/AddDepartment";
// import EditDepartment from './editbuttons/EditDepartment'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const JobTitle = () => {
  const [questions, setquestions] = useState([]);
  const [open, setOpen] = useState(false);
  const [departmentValues, setDepartmentValues] = useState([]);
  const [jobValues, setjobValues] = useState({
    title: "",
    department: "",
  });
  // const [departmentValues, setdepartmenValues] =useState({
  //   department: "",
  // })
  // const [questions, setnewque] = useState([]);
  const [jobList, setjobList] = useState([]);
  const savejob = async () => {
    console.log(jobValues);
    const payload = {
      ...jobValues,
      questions,
    };
    if (jobValues.job_detail_id) {
      let res = await api.post(`/update-job-detail/${jobValues.job_detail_id}`,payload);
      console.log(res);
    } else { 
    let res = await api.post("/save-job-detail", payload);
    // console.log(ddata);
    console.log(res);
    }
  };
  const getjob = async () => {
    console.log(jobValues);

    let response = await api.get("/get-job-detail");
    console.log(response.data.result);
    if (response.data.result) {
      setjobList(response.data.result);
      
    }
  
  };
  const getdepartment = async () => {

    let response = await api.get("/get-department");
    console.log(response.data.result);
    if (response.data.result) {
      setDepartmentValues(response.data.result);
    }
  }; 
    async function deletejob(job_detail_id) {
      let response = api.post(`/delete-job-detail/${job_detail_id}`);
      // console.log(response.data.id);
    }
    
    useEffect(() => {
      getjob();
      getdepartment();
      // deletedepartment()
    },[]);
    const onSubmit = (e) => {
      console.log("data")
      e.preventDefault();
      savejob();
      getjob(jobList);
      setOpen(false);
      setjobValues("");
      toast.success("add successfully!");
      setquestions([]);
    };
  
    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
      // setnewque([])
    };
    let handleChange = (e) => {
      setjobValues({
        ...jobValues,
        [e.target.name]: e.target.value,
      });
    };
    const SelectItem = () => {
      let items = [];
    departmentValues.map((item, index) => {
        items.push(<option value={item.name}>{item.name}</option>)
        // getdepartment();
      })
      return items;
    };
    const handleupdate = (item) => {
      console.log(item)
      setOpen(true);
      setjobValues(item);
      setquestions(item.questions)
    // getjobtitle();
      }
      // const handleSelectChange=(e)=>{
      //   setdepartmentList(e.target.value)
      // }
      // const handleSelectChange = ((event) => {
      //          event.persist();
      //          setdepartmentList(event.target.value)
      // });
    return (
      <div>
        <div className="JobTitle_card1">
          <h5 className="JobTitle_title-font">Job Title</h5>
          <table className="company-table">
            <tr className="company-tr">
              <th className="company-th">Name</th>
              <th className="company-th">Department</th>
              <th className="company-th" id="Action_css">
                Action
              </th>
            </tr>
            {jobList.map((item, index) => {
              return (
                <tr className="company-tr" key={index}>
                  <td className="company-td"> {item.title}</td>
                  <td className="company-td"> {item.department}</td>
                  <td className="company-td" id="Action_css">
                    {/* <EditDelete id={index} questions={questions} departmentValues={departmentValues} setDepartmentValues={setDepartmentValues}/> */}
                    <button 
                       id='edit_btn'
                       onClick={() => {
                        handleupdate(item)
                       }}>
                      <EditIcon />
                  </button>
                    <button
                      id="delete_btn"
                      onClick={() => {
                        deletejob(item.job_detail_id);
                        // e.preventDefault();
                        toast.success("delete successfully!");
                      }}
                    >
                      <DeleteIcon />
                    </button>
                  </td>
                </tr>
              );
            })}
            <Button
              style={{
                marginRight: "500px",
                width: "180px",
                marginTop: "30px",
              }}
              variant="contained"
              color="primary"
              onClick={handleClickOpen}
            >
              Add Job
            </Button>
          </table>

          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="form-dialog-title"
            fullWidth={true}
            maxWidth="md"
          >
            <div className="AddJob_primaryHeader">
              <h3>Add Job </h3>
              <div className="AddJob_closeicon">
                <CloseIcon style={{ color: "white" }} onClick={handleClose} />
              </div>
            </div>
            <DialogTitle id="form-dialog-title"></DialogTitle>
            <DialogContent>
              <DialogContentText>
                <>
                  <form>
                    <Grid container spacing={3}>
                      <Grid item xs={6}>
                        <h3>Job Title</h3>
                      </Grid>
                      <Grid item xs={6}>
                        <h3>Job Title</h3>
                      </Grid>
                      <Grid item xs={6}>
                        <Input
                          as={TextField}
                          name="title"
                          className="dialog_input"
                          placeholder="Job Title"
                          id="name"
                          value={jobValues.title || ''}
                          variant="standard"
                          onChange={handleChange}
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <NativeSelect
                          as={NativeSelect}
                          style={{ marginLeft: "10px", width: "350px" }}
                          name="department"
                          onChange={handleChange}
                          id="department"
                        >
                          <option>--Select Department--</option>
                          {SelectItem()}
                        </NativeSelect>
                      </Grid>
                      <Grid item xs={6}>
                        <h3>Default Question For Department</h3>
                        <QuestionCard
                          questions={questions}
                          setquestions={setquestions}
                        />
                        
                      </Grid>
                    </Grid>
                    {/* <DisplayQuestions/> */}
                    <Button
                      type="cancel"
                      id="dialog-cancel-btn"
                      variant="contained"
                      color="secondary"
                      onclick={handleClose}
                    >
                      Cancel
                    </Button>
                    <Button
                      // type="submit"
                      id="dialog-save-btn"
                      variant="contained"
                      color="primary"
                      onClick={onSubmit}
                    >
                      Save
                    </Button>
                  </form>
                </>
              </DialogContentText>
            </DialogContent>
          </Dialog>
        </div>
        <ToastContainer />
      </div>
    );
  };


export default JobTitle;
