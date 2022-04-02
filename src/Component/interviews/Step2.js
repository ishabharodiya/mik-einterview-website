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
import Chip from "@material-ui/core/Chip"

import api from "../helper/api";
const Step2 = ({setTestQuestion,handleDataChange}) => {
  const [departmentList, setdepartmentList] = useState([]);
  const [jobList, setjobList] = useState([]);
  const [managerList,setmanagerList] = useState([]);
  const [questions, setquestions] = useState([]);
  const [disabled,setDisable] = useState(false)
  let curruntUser= JSON.parse(localStorage.getItem("user"))
  const [managerValues,setManagerValues] = useState('')
  const [manager,setManager] = useState({
    first_name: curruntUser.admin.firstname,
    last_name : curruntUser.admin.lastname,
    email : curruntUser.admin.email,
    department : '',
    jobTitle : ''
  })
  const [managernameList,setManagernameList] = useState([])
  // console.log(manager);
  const getname = () => {
    //  console.log(managerList);
    managerList.push({
        email:curruntUser.admin.email,
        first_name:curruntUser.admin.firstname,
        last_name:curruntUser.admin.lastname
      })
    managerList.find((item) => {
      if (item.email === manager.email) {
        // console.log(curruntUser.admin.firstname);
        // console.log(item.firstname)
        // console.log(item.lastname)
        // console.log(item.email)
        setManager((olditem) => {
          return {
            ...olditem,
           first_name: item.firstname,
            last_name: item.lastname
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
      // console.log(jobList)
      jobs.push(<option value={items.title}>{items.title}</option>);
    });
    return jobs;
  };
  
  const addListname = (response) => {
    setManagernameList([...managernameList,manager])
    // setTestQuestion(addquestions())
    addquestions();
    handleDataChange("managers",[manager])
    // let que = []
    // que()
    // setTestQuestion("what is react ?")
    setDisable(true)
  }
  // console.log(manager);
  // const que  = () => {
  //  let quet = []
  //  quet.push("what is react ?")
  // }
  // console.log(quet);
  const inputchange = (e) => {
    setManager({...manager,[e.target.name]:e.target.value});
    };

  const getmanager = async () => {  
    let response = await api.get("/get-manager");
    // console.log(response.data.data);
    if (response.data.data) {
      setmanagerList(response.data.data);
    }
  };
  const getdepartment = async () => {
    let response = await api.get("/get-department");
    // console.log(response.data.result);
    if (response.data.result) {
      setdepartmentList(response.data.result);
    }
  };
  
  const getjob = async () => {
    let response = await api.get("/get-job-detail");
    // console.log(response.data.result);
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
    // let curruntUser= JSON.parse(localStorage.getItem("user"))
    const email = curruntUser.admin.email;
    // console.log(curruntUser.admin.email);
    // console.log(user.admin.firstname);
    // }
    let items = [];
    items.push (
      <option value={email}>{email} </option>
    );
    managerList.map((item) => {
      if(item.registration_status==="REGISTERED" && item.isDeleted===false)
     { items.push(
        <option value={item.email}>{item.email}</option>
      )}

    })

    return items;

  }
  const addquestions = () => {
    // getdepartment();
    let que=[]
    departmentList.map((item) => {
      if(item.name === manager.department) {
         que.push(...item.questions)
        //  setTestQuestion(que)
        // console.log(item.questions);
      }
    })
    jobList.map((item) => {
      if(item.title === manager.jobTitle) {
         que.push(...item.questions)
        //  setTestQuestion([que])
        // console.log(item.questions);
      }
    })
    managerList.map((item) => {
      if(item.email === manager.email) {
        que.push(...item.firstname)
      }
    })
    const addquestion = async (question) => {
      const payload = {
        // ...managerValues,
        question: { questions },
      };
  
      let response = api.post(
        `manager/save-question/${managerValues.manager_token}`,
        payload
      );
      // console.log(response.data.data);
      que.push(response.data.question)
      //  if (response.data.manager_token) {
      //  setquestions(response.data.data);
      console.log(response.data.question);
    };
    console.log(que);
    console.log("manager",manager);
     setTestQuestion(que)
  }
    const deletename = (id) => {
      // console.log("deleted");
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
                name="first_name"
                value={manager.first_name}
                // const firstname={curruntUser.admin.firstname}
                // value={admin()}
                disabled={true}
                onChange={inputchange}/>
                {/* {admin()} */}
            </Grid>
            <Grid item xs={4} sm={4} xl={4} md={4} className="d-flex">
              <PersonIcon className="step2-material-person-icon" />
              <TextField
                variant="filled"
                id="outlined-basic"
                placeholder="LastName"
                name="last_name"
                value={manager.last_name}
                onChange={inputchange}
                disabled={true}
                
                

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
                          name="department"
                          // value={departmentList}
                          // value={departmentValues.name || ''}
                          // onChange= {handleSelectChange}
                onChange={inputchange}
                          
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
                          name="jobTitle"
                          // value={departmentList}
                          // value={departmentValues.name || ''}
                          // onChange= {handleSelectChange}
                          onChange={inputchange}
                          
                          id="title"
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

            // onClick={addquestions}
          >
            ADD
          </Button>
          
          
        </div>
        <div>
            {managernameList.map((item, id) => (
            <Grid container spacing={3} key={id}>
              <Grid item xs={6}>
                <p>
                  {`${item.first_name} ${item.last_name}`}
                  </p>
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
