import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import { Input } from "@material-ui/core";
import QuestionCard from "./QuestionCard";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import CloseIcon from "@material-ui/icons/Close";
import Grid from "@material-ui/core/Grid";
import "./company.css";
import api from "../helper/api";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Department = () => {
  const [open, setOpen] = useState(false);
  const [departmentValues, setDepartmentValues] = useState({
    name: "",
    // costCenter: "",
  });
  const [questions, setquestions] = useState([]);
  const [departmentList, setdepartmentList] = useState([]);
  const savedepartment = async () => {
    console.log(departmentValues);
    console.log(questions)
    const payload = {
      ...departmentValues,
      questions,
    };
    if (departmentValues.departmentId) {
      let res = await api.post(`/update-department/${departmentValues.departmentId}`,payload);
      console.log(res);
    } else {
      let res = await api.post("/save-department", payload);
      console.log(res);
    }
    console.log(departmentValues.departmentId);
    // departmentValues=""
  };
  const getdepartment = async () => {
    console.log(departmentValues);

    let response = await api.get("/get-department");
    console.log(response.data.result);
    if (response.data.result) {
      setdepartmentList(response.data.result);
    }
  };
  async function deletedepartment(departmentId) {
    let response = api.post(`/delete-department/${departmentId}`);
    console.log(response.data.id);
  }

  useEffect(() => {
    getdepartment();
  },[]);

  const onSubmit = (e) => {
    e.preventDefault();
    savedepartment();
    setOpen(false);
    getdepartment();
    setDepartmentValues("");
    toast.success("add successfully!");
    setquestions([])

  };
  console.log(questions)
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  let handleChange = (e) => {
    setDepartmentValues({
      ...departmentValues,
      [e.target.name]: e.target.value,
    });
  };
  const handleupdate = (item) => {
    console.log(item);
    setOpen(true);
    setDepartmentValues(item);
    setquestions(item.questions)
    getdepartment();
  };
  

  return (
    <div>
      <div className="Department_card1">
        <h5 className="Department_title-font">Department</h5>
        <table className="company-table">
          <tr className="company-tr">
            <th className="company-th">Name</th>
            {/* <th className="company-th">Cost center</th> */}
            <th className="company-th" id="Action_css">
              Action
            </th>
          </tr>
          {departmentList.map((item, index) => {
            return (
              <tr className="company-tr" key={index}>
                <td className="company-td"> {item.name}</td>
                {/* <td className="company-td"> {item.cost_center}</td> */}
                <td className="company-td" id="Action_css">
                  <button
                    id="edit_btn"
                    onClick={(e) => {
                      handleupdate(item);
                      
                      // e.preventDefault()
                    }}
                  >
                    <EditIcon />
                  </button>
                  <button
                    id="delete_btn"
                    onClick={(e) => {
                      deletedepartment(item.departmentId);
                      // e.preventDefault();
                      getdepartment();
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
            style={{ marginRight: "500px", width: "180px", marginTop: "30px" }}
            variant="contained"
            color="primary"
            onClick={handleClickOpen}
          >
            Add Department
          </Button>
        </table>

        <Dialog
          // onChange={handleChange}
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
          fullWidth={true}
          maxWidth="md"
        >
          <div className="AddDepartment_primaryHeader">
            <h3>Add Department </h3>
            <div className="AddDepartment_closeicon">
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
                      <h3>Department</h3>
                    </Grid>
                    <Grid item xs={6}>
                      <Input
                        as={TextField}
                        name="name"
                        className="dialog_input"
                        placeholder="Department"
                        id="name"
                        variant="standard"
                        value={departmentValues.name}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <h3>Default Question For Department</h3>
                    </Grid>
                  </Grid>

                  {/* <QuestionCard /> */}
                  <QuestionCard
                    questions={questions}
                    setquestions={setquestions}
                  />
                    

                  <Button
                    id="dialog-cancel-btn"
                    variant="contained"
                    color="secondary"
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

export default Department;
