import React, { useState } from "react";
// import "./interviews.css";
import TextField from "@material-ui/core/TextField";
import Table from "@material-ui/core/Table";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Navbar2 from "../Companyprofile/Navbar2";
// import InterviewShareGrid from "../interviews/InterviewShareGrid";
// import Footer from '../Component/Home/Footer';
import Footer from "../Home/Footer";
import "../interviews/interviews.css";
function AdminView() {
  const [name, setname] = useState();
  const inputchangefunction = (event) => {
    setname(event.target.value);
    console.log(name);
  };
  return (
    <div>
      <Navbar2 />
      <div className="detail-data">
        <div className="detail-header1">
          <h5>ALL CANDIDATES</h5>
          <div className="detail-input">
            <h6>Search</h6>
            <TextField
            background-color="white"
              type="text"
              style={{ margin: "20px" }}
              id="outlined-basic"
              variant="outlined"
              placeholder="Search By Name"
              name="name"
              onChange={inputchangefunction}
            />
          </div>
        </div>
      <div className="detail-header2">
          <TableContainer>
            <Table aria-label="customized table">
              <TableHead id="headercss">
                <TableHead id="headercss">Name</TableHead>
                <TableHead id="headercss">JobTitle</TableHead>
                <TableHead id="headercss">Status</TableHead>
                <TableHead id="headercss">Date</TableHead>
                <TableHead id="headercss">score</TableHead>
                <TableHead id="headercss">Action</TableHead>
              </TableHead>
              <TableRow>
                <div className="interview_card1"></div>
              </TableRow>
            </Table>
          </TableContainer>
        </div>
      </div>
      <br /> <br />
      <br />
      <br /> <br />
      <br />
      <br /> <br />
      <br />
      <br /> <br />
      <br />
      <br /> <br />
      <br />
      <br /> <br />
      <br />
      <br /> <br />
      <br />
      <br /> <br />
      <br />
      {/* <InterviewShareGrid /> */}
      <Footer />
    </div>
  );
}
export default AdminView;
