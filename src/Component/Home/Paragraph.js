import React from "react";
import './paragraph.css'
import Grid from "@material-ui/core/Grid";
import admin from "../image/admin.png";

function Paragraph ()  {
    
    return (
        <>
        <div className="home-start" >
            <Grid container spacing={0}>
            &nbsp;&nbsp;&nbsp;&nbsp;
                    {/* <Grid item xs > */}
                    {<img src={admin} alt="MyPic" width="700px"  justify-content="right"></img>}
                        {/* <img className='home_image' src={home5} alt="Mypic"/> */}
                    {/* </Grid> */}
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <div className="home-pragraph">
                        <div className="home-text">
                    <Grid item xs>
                    <p>
                         There is no replacement for a face-to-face interview, that’s why phone interviews are so ineffective. But when you can’t meet face-to-face,
                        the best thing you can do is to have a video-recorded interview,
                        and that’s what we do. We give you the best interview tool so you can make the right decision on the most qualified candidate for your job.
                        <br></br>
                       </p>
                       <p >
                        Interviews can be fun until they are not. Candidates may look good on a resume until you meet them.
                        Sometimes we know within the first minute whether the candidate is a good fit for the team. And when it is not,
                        we feel compelled to 
                        </p>
                    </Grid>
                    <Grid item xs> 
                    <p>
                        carry on with the interview knowing full well the candidate does not have a chance. Most of us are polite and continue with
                         it until the end. However, our politeness just cost us one hour; and we have five more candidates to interview.<br></br><br></br>
                         Mik has many features that help you recover that time, but most importantly, it will allow you to get back to your job
                          with the peace of mind that comes from knowing you have given everyone a fair chance.<br></br><br></br>
                        So – Go Ahead-Mik!
                        </p>
                        <br /><br />
                    </Grid>
                    </div>
                    </div>
                </Grid>
                </div>
        </>
    )
}

export default Paragraph;