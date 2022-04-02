import React, { useState } from "react";
import Step1 from "../interviews/Step1";
import Step2 from "../interviews/Step2";
import Step3 from "../interviews/Step3";
import Step4 from "../interviews/Step4";
import Footer from "../Home/Footer";
import Button from "@material-ui/core/Button";
import api from "../helper/api";
import { useNavigate } from "react-router-dom";
const Step = () => {
  const navigate = useNavigate();
  const [testQuestion, setTestQuestion] = useState([]);
  const [interviewData, setInterviewData] = useState({
    candidate: [],
    managers: [],
    panel: [],
    question_bank: {
      department: "",
      test: [],
    },
  });

  const handleDataChange = (name, data) => {
    setInterviewData({ ...interviewData, [name]: data });
  };

  const createInterviewData = async () => {
    navigate("/adminview");
    setInterviewData((interview) => ({
      ...interview,
      question_bank: {
        department: interview.managers[0].department,
        test: testQuestion,
      },
    }));
    console.log('department',interviewData.managers[0].department)
    console.log( "test", testQuestion)
    console.log("interviewData",interviewData)
  //   let response = await api.post(`/manager-added-interview`, interviewData);
  //   // if (response.data.result) {
  //   //   setdepartmentList(response.data.result);
  //   // }

  //   console.log(response)
  };

  console.log("interviewData", interviewData);
  return (
    <div>
      <div className="c1div">
        <h1 className="header">Create Interview</h1>
        <Step1 handleDataChange={handleDataChange} />
        <Step2
          setTestQuestion={setTestQuestion}
          handleDataChange={handleDataChange}
        />
        <Step3 handleDataChange={handleDataChange} />
        <Step4 testQuestion={testQuestion} setTestQuestion={setTestQuestion} />
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
            onClick={createInterviewData}
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
            // onClick={resetHandle}
          >
            Reset
          </Button>
        </div>
      </div>
      <br />
      <br />

      <Footer />
    </div>
  );
};

export default Step;
