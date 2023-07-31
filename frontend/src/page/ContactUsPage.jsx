import React from "react";

import Contact from "../components/Contact";
// import { Link } from "react-router-dom";

const ContactUsPage = () => {
  return (
    <div>
      <div className="contact_page">
        <div className="header_slider contact_bg_3 overlay flex items-center justify-center h-[300px] md:h-[500px]">
          <h3 className="text-3xl md:text-[70px] leading-normal md:leading-[84px] text-white">
            Get in Touch With Us 
          </h3>
        </div>
        <Contact/>
      </div>
    </div>
  );
};

export default ContactUsPage;
