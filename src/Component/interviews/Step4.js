import React, {useState} from "react";
import Button from "@material-ui/core/Button";
import QuestionCard from "../Companyprofile/QuestionCard";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";

const Step4 = (props) => {
  const [questions, setquestions] = useState([]);

  const addquestion = (que) => {
    props.addinterviewque(que);
  };
  return (
    <>
      <div className="step4">
        <h1>
          <ContactSupportIcon
            className="icons"
            style={{
              marginBottom: "15px",
              marginLeft: "30px",
              color: "rgb(25,25,65)",
              size: "20px",
            }}
          />
          Interview Questions
        </h1>
        <QuestionCard
                          questions={questions}
                          setquestions={setquestions}
                        />
        {/* <QuestionCard addquestion={addquestion} /> */}

        <br></br>
        {/* <div>
          <Button
            style={{
              color: "rgb(25,25,65)",
              backgroundColor: "white",
              fontWeight: "bold",
              height: "40px",
              width: "75px",
              marginLeft: "700px",
            }}
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
          >
            Reset
          </Button>
        </div> */}
      </div>
    </>
  );
};

export default Step4;
