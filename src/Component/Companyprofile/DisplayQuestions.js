import React from "react";
import Grid from "@material-ui/core/Grid";
import DeleteIcon from "@material-ui/icons/Delete";

function DisplayQuestions(props) {
  return (
    <div>
      {props.question.map((arr, id) => {
        return (
          <>
            <Grid container spacing={3} key={id}>
              <Grid item xs={6}>
                <p>{arr.question}</p>
              </Grid>
              {/* <Grid item xs={4}>
              <h3>
                  {arr.minutes}:{arr.seconds}
                </h3>
              </Grid> */}
              <Grid item xs={2}>
                <h3>
                  <DeleteIcon
                    aria-label="delete"
                    variant="contained"
                    id="delete_question"
                    onClick={() => {
                      props.deletequestion(id);
                    }}
                  />
                   
                </h3>
              </Grid>
            </Grid>
          </>
        );
      })}
    </div>
  );
}

export default DisplayQuestions;
