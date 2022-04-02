import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Freebutton from "./Freebutton";
import Paragraph from "./Paragraph";
import Company from "./Company";
import Account from "./Account";
import Team from "./Team";
import Advantage from "./Advantage";
import Response from "./Response";
const Home = () => {
  return (
    <div className="home-start">
      <Header />
      <Routes>
        <Route exact path="/account" element={<Account />} />
        <Route exact path="/team" element={<Team />} />
      </Routes>
      <Freebutton />
      <Paragraph />
      <Company />
      <Advantage />
      <Response />
      <Footer />
    </div>
  );
};

export default Home;
