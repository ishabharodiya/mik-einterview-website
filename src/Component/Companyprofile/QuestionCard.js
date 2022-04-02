import React, { useState, useEffect } from "react";
import { Input, Button, Grid } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
// import CloseIcon from "@material-ui/icons/Close";
import api from "../helper/api";

const QuestionCard = ({
  questions,
  setquestions,
  addquestions,
  managerValues,
}) => {
  const [questionInput, setquestionInput] = useState('');

  // const [questions, setquestion] = useState([]);
  const itemEvent = (e) => {
    setquestionInput(e.target.value);
  };
  const addListquestion = (e) => {
  
    setquestions((questions) => {
      return [...questions, { question: questionInput }];
    });
console.log( questions[0]);
    if (addquestions && managerValues.manager_token) {
      addquestions({ question: questionInput });
      // console.log("name");
    }
    // addquestions("");
    setquestionInput("");
    // savequestion(managerValues.manager_token);
  };
  // const savequestion = async (manager_token) => {
  //   const payload = {
  //     // ...managerValues,
  //     question={questions},
  //   };

  //   let response = api.post(
  //     `manager/save-question/${managerValues.manager_token}`,
  //     payload
  //   );
  //   console.log(response.data.questions);

  //   //  if (response.data.manager_token) {
  //   //  setquestions(response.data.data);
  // };
  console.log(questions);
  const deletequestion = (id) => {
    console.log("deleted");
    setquestions((oldquestion) => {
      return oldquestion.filter((arrEle, index) => {
        return index !== id;
      });
    });
  };

  // const payload = {
  //   // ...managerValues,
  //   questions,
  // };

  // var id=questions[id].id;
  // console.log(id);

  const deletemanagerquestion = async (manager_token,id)=> {
  let response =  api.get(`/remove-department-question/${manager_token}/${id}`);
     console.log(response.data.data);
    //  if (response.data.data) {
    //    setmanagerList(response.data.data);
    //  }
  }
  useEffect(() => {
    // getmanager();
    // savequestion();
    // deletequestion();
  }, []);
  return (
    <Grid item xs={12}>
      <div className="questions_card1">
        <form>
          {/* <ol> */}
          {questions.map((arr, id) => (
            <Grid container spacing={3} key={id}>
              <Grid item xs={6}>
                <p>{arr.question}</p>
              </Grid>
              {/* <Grid item xs={2}> */}
              <h1>
                <DeleteIcon
                  aria-label="delete"
                  variant="contained"
                  id="delete_question"
                  onClick={() => {
                    deletequestion(id);
                    deletemanagerquestion()
                  }}
                />
                {/* </IconButton> */}
                {/* <div className="AddDepartment_closeicon">
              <CloseIcon style={{ color: "black" }}  onClick={() => {
                      deletequestion(id);
                    }} />
            </div> */}
              </h1>
            </Grid>
            // </Grid>
          ))}
          <Input
            style={{ marginLeft: "10px", width: "600px" }}
            placeholder="new question"
            value={questionInput}
            onChange={itemEvent}
            name="question"
          />
          <br />
          <br />
          <Button
            variant="contained"
            color="primary"
            // onClick={addListquestion}
            onClick={(e) => {
              addListquestion();
            }}
          >
            Save
          </Button>
        </form>
      </div>
    </Grid>
  );
};

export default QuestionCard;
