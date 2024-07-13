import React from "react";
import SectionContainer from "../../components/SectionContainer";
import SectionHead from "../../components/SectionHead";
import ServicesBlock from "./ServicesBlock";

const Services = () => {
  return (
    <SectionContainer id={"services"} secName={"services-sec"}>
      <SectionHead
        head={"services"}
        text={
          ""
        }
      />
      <ServicesBlock />
    </SectionContainer>
  );
};

export default Services;
