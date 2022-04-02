import React from "react";
import { Routes, Route } from "react-router-dom";
import Register from "./Register";
import Team from "./Team";
import Account from "./Account";
import Home from "./Home";
import Login from "./Login";
import Password from "./Password";
import Contact from "./Contact";
import About from "./About";
// import CompanyProfilePage from "../Component/Companyprofile/CompanyProfilePage";
import CompanyProfilePage from "../Companyprofile/CompanyProfilePage";
import Resetpassword from "./Resetpassword";
// import Interviews from "../Interviews"
import Interviews from "../../Component/interviews/Interviews";
import Createinterview from "../../Component/interviews/Createinterview";
import AdminView from "../../Component/Companyprofile/AdminView";
import Advantage from "../../Component/Home/Advantage"
// import StartInterviewTips from "../videoupload/StartInterviewTips";
// import PractiseInterviewTips from "../videoupload/PractiseInterviewTips";
// import Start from "../videoupload/Start";
// import StartTest from "../videoupload/StartTest"
// import Startinterview from "../videoupload/Startinterview";
// import SingleShareGrid from "../interviews/SingleShareGrid";
// import InterviewShareGrid from "../interviews/InterviewShareGrid";
// import GoodBye from "../videoupload/GoodBye";
// import FinishInterview from "../videoupload/FinishInterview";
// import RatingBox from "../videoupload/RatingBox";

const Routeshome = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account" element={<Account />} />
        <Route path="/Advantage" element={<Advantage />} />
        <Route path="/team" element={<Team />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/password" element={<Password />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/companyprofilepage" element={<CompanyProfilePage />} />
        <Route path="/resetpassword" element={<Resetpassword />} />
         <Route path='/Interviews' element={< Interviews />}/> 
         <Route path='/createinterview' element={< Createinterview />}/> 
         <Route path='/Adminview' element={< AdminView />}/> 
         {/* <Route path='/StartInterviewTips' element={< StartInterviewTips />}/> 
         <Route path='/Startinterview' element={< Startinterview />}/> 
         <Route path='/PractiseInterviewTips' element={< PractiseInterviewTips />}/> 
         <Route path='/Start' element={< Start />}/> 
         <Route path='/Start/:tokenid/:id' element={< StartTest />}/>  */}
         {/* <Route path='/SingleShareGrid' element={< SingleShareGrid />}/> 
         <Route path='/InterviewShareGrid' element={< InterviewShareGrid />}/> 
         <Route path='/GoodBye' element={< GoodBye />}/> 
         <Route path='/FinishInterview' element={< FinishInterview />}/> 
         <Route path='/RatingBox' element={<RatingBox />}/>  */}



         
         
         
         


      </Routes>
    </div>
  );
};

export default Routeshome;
