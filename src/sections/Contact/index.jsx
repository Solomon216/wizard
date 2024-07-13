import React from "react";
import SectionContainer from "../../components/SectionContainer";
import SectionHead from "../../components/SectionHead";
import ContactInfoBlock from "./ContactInfoBlock";
import { BsInstagram, BsLinkedin } from "react-icons/bs";

const Contact = () => {
  return (
    <SectionContainer id={"contact"} secName={"contact-sec"}>
      <SectionHead
        head={"contact"}
        text={
          ""
        }
      />
      <ContactInfoBlock />
      <div>
      <div className="d-flex justify-content-center">
        <a href="https://www.instagram.com/wizardlenz.xr_studio/" className="me-3">
          <BsInstagram size={50} color={"#ff0000"} />
        </a>
        <a href="https://www.linkedin.com/company/wizardlenz-xr-studio/">
          <BsLinkedin size={50} color={"#ff0000"} />
        </a>
      </div>
      </div>
    </SectionContainer>
  );
};

export default Contact;
