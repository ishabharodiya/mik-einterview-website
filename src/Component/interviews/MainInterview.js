import React from "react";
import Button from "@material-ui/core/Button";

import img from "../../Component/image/hye.jpg";

import { useNavigate } from "react-router-dom";
function MainInterview() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/Createinterview");
  };
  return (
    <div style={{ marginBottom: "150px" }}>
      <div className="interview-img">{<img src={img} alt="MyPic"></img>}</div>
      <h1 className="interview-title">Online Interview,</h1>
      <h1 className="interview-title2">Improve Hiring Method</h1>

      <h4 className="interview-text">
        Any manager or Admin of the Company can create <br></br> the interview
        for candidate. make sure to give <br></br>candidates necessary
        information, like the name <br></br>of the interviewer and estimated
        interview duration.
      </h4>
      <Button variant="contained" id="interview-btn" onClick={handleClick}>
        Create Interview
      </Button>
    </div>
  );
}
export default MainInterview;
