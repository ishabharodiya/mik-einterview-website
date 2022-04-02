import React, {useState} from "react";
import QuestionCard from "../Companyprofile/QuestionCard";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";
import { Grid } from '@material-ui/core'
const Step4 = ({testQuestion,setTestQuestion}) => {
  
console.log("testQuestion",testQuestion);
  
  return (
    <>
      <div className="step4">
        <h1>
          <ContactSupportIcon
            className="icons"
            style={{
              marginBottom: "-10px",
              marginLeft: "30px",
              color: "rgb(25,25,65)",
              size: "20px",
            }}
          />
          Interview Questions
        </h1>
      
        <QuestionCard
                          questions={testQuestion}
                          setquestions={setTestQuestion}
            
                        />
        {/* <QuestionCard addquestion={addquestion} /> */}

        <br></br>
        
      </div>
    </>
  );
};

export default Step4;
 