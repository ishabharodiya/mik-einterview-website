import React from "react";
import CompanyProfileForm from "./CompanyProfileForm";
import Footer from "../Home/Footer";
import Navbar2 from "../Companyprofile/Navbar2";

// import CompanyProfileField from './CompanyProfileField'
const CompanyProfilePage = () => {
  return (
    <div>
      <Navbar2 />
      <CompanyProfileForm />
      {/* <CompanyProfileField /> */}
      <Footer />
    </div>
  );
};

export default CompanyProfilePage;
