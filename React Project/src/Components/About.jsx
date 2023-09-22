import React from "react";
import aboutImage from "../image/360_F_506326245_2GtSGEjKLDtpHS0FSkEBs4gV34DmTtS5.jpg";
import "../Styles/aboutPage.css";

export default function About() {
  return (
    <>
      <div className="SignUp">
        <h1>About US</h1>
        <p style={{ textAlign: "center", fontSize: "20px" }}>
          A website management system web application that allows business users
          to post content. The published content will be available in different
          parts of the site.
        </p>
        <div className="about-container">
          <img className="about-image" src={aboutImage} alt="About Image" />
        </div>
      </div>
    </>
  );
}
