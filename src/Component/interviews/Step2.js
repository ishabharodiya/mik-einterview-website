import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import PersonIcon from "@material-ui/icons/Person";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import "./interviews.css";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import CloseIcon from "@material-ui/icons/Close";

import api from "../helper/api";
const Step2 = (
user) => {
  
  // }
  const [isDisabled, setIsDisabled] = useState(true);
  const [departmentList, setdepartmentList] = useState([]);
  const [jobList, setjobList] = useState([]);
  const [managerList,setmanagerList] = useState([]);
  // const [questions, setquestions] = useState([]);
  let curruntUser= JSON.parse(localStorage.getItem("user"))
  
  const [manager,setManager] = useState({
    firstname: curruntUser.admin.firstname,
    lastname : curruntUser.admin.lastname,
    email : curruntUser.admin.email,
    // firstname : '',
    // lastname : '',
    // email : '',
    department : '',
    jobtitle : ''
  })
  // const [admin,setAdmin] = useState([curruntUser])
  const [managernameList,setManagernameList] = useState([])
  
  const getname = () => {
     console.log(managerList);
     
    managerList.push({email:curruntUser.admin.email,firstname:curruntUser.admin.firstname,lastname:curruntUser.admin.lastname})
    console.log(curruntUser.admin.email);
    console.log(curruntUser.admin.firstname);
    console.log(curruntUser.admin.lastname);
    managerList.find((item,admin) => {
      if (item.email === manager.email) {
        console.log(item.firstname)
        console.log(item.lastname)
        console.log(item.email)
        setManager((olditem) => {
          return {
            ...olditem,
           firstname: item.firstname,
            lastname: item.lastname,
          }
        })
      }
    })
    
  }
  const SelectDepartment = () => {
    let items = [];
    departmentList.map((item, index) => {
      items.push(<option value={item.name}>{item.name}</option>);
    });
    return items;
  };
  const SelectJob = () => {
    let jobs = [];
    jobList.map((items, index) => {
      console.log(jobList)
      jobs.push(<option value={items.title}>{items.title}</option>);
    });
    return jobs;
  };
  const addListname = (e) => {
    setManagernameList([...managernameList,manager])
    setIsDisabled(!isDisabled)
  }
  const inputchange = (e) => {
    setManager({...manager,[e.target.name]:e.target.value});
    };
  
  const getmanager = async () => {  
    let response = await api.get("/get-manager");
    console.log(response.data.data);
    if (response.data.data) {
      setmanagerList(response.data.data);
    }
  };
  const getdepartment = async () => {
    let response = await api.get("/get-department");
    console.log(response.data.result);
    if (response.data.result) {
      setdepartmentList(response.data.result);
    }
  };
  
  const getjob = async () => {
    // console.log(jobValues);
    let response = await api.get("/get-job-detail");
    console.log(response.data.result);
    if (response.data.result) {
      setjobList(response.data.result);
    }
  };
  
  useEffect(() => {
    getjob();
    getmanager();
    getname();
    getdepartment();
    // makePostRequest();
    // deletedepartment()
  }, [manager.email]);
  const getemails = () => {
    let useremail=user.email;
    // let curruntUser= JSON.parse(localStorage.getItem("user"))
    const email = curruntUser.admin.email;
    console.log(curruntUser.admin.email);
    // console.log(user.admin.firstname);
    // }
    let items = [];
    items.push(
      <option value={useremail}>{useremail} {email}</option>
      // <option value={adminemail}>{adminemail}</option>

      // <option value={adminemail}>{adminemail}</option>
      // saveData()

    );
    managerList.map((item) => {
      if(item.registration_status==="REGISTERED" && item.isDeleted===false)
     { items.push(
        <option value={item.email}>{item.email}</option>
      );}

    })

    return items;

  }
    const deletename = (id) => {
      console.log("deleted");
      setManagernameList((oldname) => {
        return oldname.filter((arrEle, index) => {
          return index !== id;
        });
      });
    };

  return (
    <>
      <div className="step2">
        <h1>
          <PersonAddIcon
            className="icons"
            style={{
              marginBottom: "-1px",
              marginLeft: "30px",
              color: "rgb(25,25,65)",
            }}
          />
          Organization info
        </h1>
        <br />
        <h4>MANAGER</h4>
        <div className="step2-mt-3">
          <Grid container spacing={3}>
            <Grid item xs={4} sm={4} xl={4} md={4} className="d-flex">
              <PersonIcon className="step2-material-person-icon" />
              <TextField
                variant="filled"
                id="outlined-basic"
                placeholder="FirstName"
                name="firstname"
                value={manager.firstname}
                disabled={isDisabled}
                // disabled={true}
                // const firstname={curruntUser.admin.firstname}
                // value={admin()}
                onChange={inputchange}/>
                {/* {admin()} */}
            </Grid>
            <Grid item xs={4} sm={4} xl={4} md={4} className="d-flex">
              <PersonIcon className="step2-material-person-icon" />
              <TextField
                variant="filled"
                id="outlined-basic"
                placeholder="LastName"
                name="lastname"
                value={manager.lastname}
                disabled={isDisabled}
                // disabled={true}
                onChange={inputchange}
         />
            </Grid>
            <Grid item xs={4} sm={4} xl={4} md={4} className="d-flex">
              <FormControl style={{ width: "200px", marginTop: "5px" }}>
                <NativeSelect
                  as={NativeSelect}
                  style={{ marginLeft: "10px", width: "200px" }}
                  name="email"
                  // value={departmentList}
                  // value={departmentValues.name || ''}
                  // onChange= {handleSelectChange}
                  value={manager.email}
                  disabled={isDisabled}
                  
                // onChange={handleInput}
                onChange={inputchange}
                  id="email">
                                    {getemails()}
                                    {/* {saveData()} */}

                </NativeSelect>
              </FormControl>
            </Grid>
          </Grid>
        </div>
        <br></br>
        <h4>Department</h4>
        <Grid container spacing={2}>
          <Grid item xs={4} sm={4} xl={4} md={4} className="d-flex">
            <FormControl style={{ width: "200px", marginTop: "10px" }}>
            <NativeSelect
                          as={NativeSelect}
                          style={{ marginLeft: "10px", width: "200px" }}
                          name="name"
                          // value={departmentList}
                          // value={departmentValues.name || ''}
                          // onChange= {handleSelectChange}
                onChange={inputchange}
                disabled={isDisabled}
                
                          id="department"
                        >
                          <option>--Select Department--</option>
                          {SelectDepartment()}
                        </NativeSelect>
            </FormControl>
          </Grid>
          <Grid item xs={4} sm={4} xl={4} md={4} className="d-flex">
            <FormControl style={{ width: "200px", marginTop: "10px" }}>
            <NativeSelect
                          as={NativeSelect}
                          style={{ marginLeft: "10px", width: "200px" }}
                          name="name"
                          // value={departmentList}
                          // value={departmentValues.name || ''}
                          // onChange= {handleSelectChange}
                onChange={inputchange}
                disabled={isDisabled}
                
                          id="department"
                        >
                          <option>--Select Job-Title--</option>
                          {SelectJob()}
                        </NativeSelect>
            </FormControl>
          </Grid>
        </Grid>
        <div className="step2-Add">
          <Button
            style={{ marginLeft: "30px", marginTop: "20px" }}
            variant="contained"
            color="primary"
            onClick={addListname}
            // disabled={isDisabled}
            
            // onClick={addquestions}
          >
            ADD
          </Button>
          
          
        </div>
        <div>
            {managernameList.map((item, id) => (
            <Grid container spacing={3} key={id}>
              <Grid item xs={6}>
                <p>{`${item.firstname} ${item.lastname}`}</p>
                 {/* <p>{item.lastname}</p>  */}
              </Grid>
              
              <Grid item xs={2}>
                <h3>
                <div className="Add_closeicon">
               <CloseIcon style={{ color: "black" }}  onClick={() => {
                      deletename(id); 
                      // toast.success("delete successfully!");
                    }} />
            </div>
                </h3>
              </Grid>
              </Grid>
              ))}
          </div> 
          
      </div>
       
         {/* </div> */}
    </>
  );
};
export default Step2;
