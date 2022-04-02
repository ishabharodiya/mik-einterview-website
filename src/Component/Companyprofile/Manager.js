import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import { Input } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import CloseIcon from "@material-ui/icons/Close";
import Grid from "@material-ui/core/Grid";
import "./company.css";
import QuestionsCard from "./QuestionCard";
import api from "../helper/api";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { getQueriesForElement } from "@testing-library/react";
const Manager = () => {
  const [open, setOpen] = useState(false);
  // const user=JSON.parse(localStorage.getItem('user'));
  // const token=user.token;
  const [managerValues, setmanagerValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    // questions:"",
  });
  const user = JSON.parse(localStorage.getItem("user"));
  const type = user.type;
  const [questions, setquestions] = useState([]);
  const [managerList, setmanagerList] = useState([]);
  const savemanager = async () => {
    console.log(managerValues);
    const payload = {
      ...managerValues,
      questions,
    };
    let res = await api.post("/save-manager", payload);
    // console.log(ddata);
    console.log(res);
  };

  console.log(managerValues);

  // const deletequestion = async (manager_token,id)=> {
  //   let response =  api.get(`/remove-department-question/${manager_token}/${id}`);
  //      console.log(response.data.data);
  //     //  if (response.data.data) {
  //     //    setmanagerList(response.data.data);
  //     //  }
  //    }

  const getmanager = async () => {
    console.log(managerValues);

    let response = await api.get("/get-manager");
    console.log(response.data.data);
    if (response.data.data) {
      setmanagerList(response.data.data);
    }
  };
  const getque = async (manager_token) => {
    // const payload = {
    //   // ...managerValues,
    //   questions,
    // };
    let resq = await api.get(`/view-manager-question/${manager_token}`);
    if (resq?.data?.data) {
      setquestions(resq.data.data);
    }
    console.log(resq);
  };
  // setquestions(...resq.data.questions)

  console.log("getque", questions);

  const addquestions = async (question) => {
    const payload = {
      // ...managerValues,
      question: { questions },
    };

    let response = api.post(
      `manager/save-question/${managerValues.manager_token}`,
      question
    );
    console.log(response.data.data);

    //  if (response.data.manager_token) {
    //  setquestions(response.data.data);
  };
  async function deletemanager(manager_token) {
    let response = api.post(`/delete-manager/${manager_token}/true`);
    console.log(response.data.token);
  }
  useEffect(() => {
    getmanager();
    getque();

    // deletequestion();
  }, []);

  //  const InputHandle = (e) => {
  //   setmanagerValues({ ...managerValues, [e.target.name]: e.target.value });
  // };

  console.log(managerValues.questions);
  const onSubmit = (e, values, item) => {
    e.preventDefault();
    savemanager();
    setOpen(false);
    getmanager(managerList);
    setmanagerValues("");
    setquestions([]);
    // getque();

    toast.success("add successfully!");
  };
  // const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  let handleChange = (e) => {
    setmanagerValues({
      ...managerValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleupdate = (item) => {
    console.log(item.manager_token);
    setOpen(true);
    setmanagerValues(item);
    getque(item.manager_token);
    console.log(managerList.questions);
    // getmanager();
    // console.log(managerValues)
    // getmanager();
  };
  return (
    <div>
      <div className="Manager_card1">
        <h5 className="Manager_title-font">Manager</h5>

        <table className="company-table">
          <tr className="company-tr">
            <th className="company-th">Name</th>
            <th className="company-th">Email</th>
            <th className="company-th">Status</th>
            <th className="company-th">Date</th>
            <th className="company-th">Deleted</th>
            {type === "admin" && (
              <th className="company-th" id="Action_css">
                Actions
              </th>
            )}
          </tr>

          {managerList.map((item, index) => {
            var date = new Date(item.created_at);
            if (item.isDeleted === false) {
              return (
                <>
                  <tr className="company-tr" style={{ fontSize: "15px" }}>
                    <td className="company-td">
                      {item.firstname} {item.lastname}
                    </td>
                    <td className="company-td">{item.email}</td>
                    <td className="company-td">{item.registration_status}</td>
                    <td className="company-td">
                      {date.toLocaleDateString() +
                        " " +
                        date.toLocaleTimeString()}
                    </td>
                    <td className="company-td">
                      {item.isDeleted ? "Deleted" : "not deleted"}
                    </td>
                    {type === "admin" && (
                      <td className="company-td" id="Action_css">
                        <button
                          id="edit_btn"
                          onClick={() => {
                            handleupdate(item);
                            getmanager(item.manager_token);
                            // getque();
                          }}
                        >
                          <EditIcon />
                        </button>
                        <button
                          id="delete_btn"
                          onClick={(e) => {
                            deletemanager(item.manager_token);
                            // e.preventDefault();
                            // deletequestion(item.id)
                            getmanager();
                            toast.success("delete successfully!");
                          }}
                        >
                          <DeleteIcon />
                        </button>
                      </td>
                    )}
                  </tr>
                </>
              );
            }
          })}
        </table>
        { type === "admin" && (<Button
          style={{ marginRight: "500px", width: "180px", marginTop: "30px" }}
          variant="contained"
          color="primary"
          onClick={handleClickOpen}
        >
          Add Manager
        </Button>)}

        <Dialog
          // onChange={handleChange}
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
          fullWidth={true}
          maxWidth="md"
        >
          <div className="AddManager_primaryHeader">
            <h2>Add Manager </h2>
            <div className="AddManager_closeicon">
              <CloseIcon style={{ color: "white" }} onClick={handleClose} />
            </div>
          </div>
          <DialogTitle id="form-dialog-title"></DialogTitle>
          <DialogContent>
            <DialogContentText>
              <>
                <form>
                  {/* {managerValues.map((element, index) => ( */}
                  <Grid container spacing={3}>
                    <Grid container spacing={3} style={{ marginLeft: "10px" }}>
                      <Grid item xs>
                        <h3>First Name</h3>
                      </Grid>
                      <Grid item xs>
                        <h3>Last Name</h3>
                      </Grid>
                      <Grid item xs>
                        <h3>Email</h3>
                      </Grid>
                    </Grid>
                    <Grid container spacing={3} style={{ marginLeft: "10px" }}>
                      <Grid item xs>
                        <Input
                          as={TextField}
                          name="firstname"
                          placeholder="Enter FirstName"
                          id="firstname"
                          variant="standard"
                          value={managerValues.firstname || ""}
                          onChange={handleChange}
                          // inputProps={{
                          //   readOnly: true,
                          // }}
                        />
                      </Grid>
                      <Grid item xs>
                        <Input
                          as={TextField}
                          name="lastname"
                          placeholder="Enter LastName"
                          id="lastname"
                          variant="standard"
                          // value={element.lastname || ""}
                          // onChange={(e) => handleChange(index, e)}
                          value={managerValues.lastname || ""}
                          onChange={handleChange}
                        />
                      </Grid>
                      <Grid item xs>
                        <Input
                          as={TextField}
                          name="email"
                          placeholder="Enter Email"
                          id="email"
                          variant="standard"
                          // value={element.email || ""}
                          // onChange={(e) => handleChange(index, e)}
                          value={managerValues.email || ""}
                          onChange={handleChange}
                        />
                      </Grid>
                    </Grid>

                    <Grid item xs={6}>
                      <h3>Default Question For Department</h3>
                      <QuestionsCard
                        questions={questions}
                        setquestions={setquestions}
                        addquestions={addquestions}
                        managerValues={managerValues}
                      />
                    </Grid>
                  </Grid>

                  <Button
                    id="dialog-cancel-btn"
                    variant="contained"
                    color="secondary"
                    onClick={handleClose}
                  >
                    Cancel
                  </Button>
                  <Button
                    // type="submit"
                    id="dialog-save-btn"
                    variant="contained"
                    color="primary"
                    // onClick={addFormFields}
                    onClick={onSubmit}
                  >
                    Save
                  </Button>

                  {/* <DisplayQuestions/> */}
                  <br />
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

export default Manager;
