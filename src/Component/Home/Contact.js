import React from "react";
import img1 from "../../Component/image/i3.jpg";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import "./contact.css";
import AOS from "aos";
import "aos/dist/aos.css";


const Contact = () => {
  AOS.init({
    offset: 200,
    duration: 1000,
    once: true,
  });
  
  const field = {
    margin: "2px",

    marginTop: "20px",
    width: 600,
    color: "black",
  };
  return (
    <body className="contact-main" id="contact">
      <div className="contact-container">
        <div className="contact-formbox">
          <form>
            <h4 className="contact-title" data-aos="zoom-in">
              CONTACT US
            </h4>
            <h3 className="contact-text" data-aos="zoom-in">
              As A New StartUp , We Want To know Your Comments..
            </h3>

            <TextField
              style={field}
              id="standard-basic"
              label="FirstName"
              name="firstname"
              variant="standard"
              name="firstname"
              //  value={inputvalue.firstname}
              // onChange={inputfieldfunction}
            />
            <TextField
              style={field}
              id="standard-basic"
              label="LastName"
              name="lastname"
              variant="standard"
              name="lastname"
              //      value={inputvalue.lastname}
              //    onChange={inputfieldfunction}
            />

            <TextField
              style={field}
              id="standard-basic"
              label="Subject"
              variant="standard"
              name="subject"
              //   value={inputvalue.subject}
              //   onChange={inputfieldfunction}
            />
            <TextField
              style={field}
              id="standard-basic"
              label="Email"
              variant="standard"
              name="email"
              //   value={inputvalue.email}
              //   onChange={inputfieldfunction}
            />
            <TextField
              style={field}
              id="standard-basic"
              label="Comment.. "
              multiline
              rowsMax={5}
              name="comment"
              //   value={inputvalue.comment}
              //   onChange={inputfieldfunction}
            />
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Button id="contact-butn" variant="contained">
              submit
            </Button>
            <br />
          </form>
        </div>
        <div className="contact-img">
          <img style={{ height: "450px" }} src={img1} />
        </div>
      </div>
    </body>
  );
};
export default Contact;
