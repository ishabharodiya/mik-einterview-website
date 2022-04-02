import React, { useEffect, useState } from "react";
import CompanyProfileField from "./CompanyProfileField";
import Department from "../Companyprofile/Department";
import JobTitle from "../Companyprofile/JobTitle";
import Manager from "../Companyprofile/Manager";
import "./company.css";

const CompanyProfileForm = (props) => {
  const [showProfile, setShowProfie] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    const type = user.type;
    if (type === "admin") {
      setShowProfie(true);
    }
  }, []);

  return (
    <>
      <br></br>
      <br></br>
      <div className="CompanyProfileForm_card0">
        <div className="CompanyProfileForm_formheader">
          <h4 className="CompanyProfileForm_company-info-title">
            Comapany Information
          </h4>
        </div>
        {/* <CompanyProfileField /> */}
        {showProfile && <CompanyProfileField />}
        <Department />
        <Manager />
        <JobTitle />
      </div>
    </>
  );
};
export default CompanyProfileForm;
