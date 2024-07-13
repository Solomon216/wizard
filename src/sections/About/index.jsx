import React from "react";
import {Col,Row, Image} from "react-bootstrap";
import SectionContainer from "../../components/SectionContainer";
import SectionHead from "../../components/SectionHead";
import {RowReversedStyled} from "./About.styled";
import aboutImage from "../../assets/about.jpg";

const About = () => {
  return (
    <>
      <SectionContainer id={"about"} secName={"about-sec"}>
        <SectionHead
          head={"about"}
          text={
            ""
          }
        />
        <RowReversedStyled className="my-4">
        <Row className="justify-content-center align-items-center">
          <Col lg={6} className="mb-3 text-center">
            <h4 className="fst-italic">
              Wizardlenz XR Studio (OPC) Private Limited is a pioneering technology company specializing in 
              immersive and futuristic technologies such as Virtual Reality (VR), Augmented Reality (AR), 
              Mixed Reality (MR), the Metaverse, and Artificial Intelligence (AI). Our mission is to bridge the 
              gap between these cutting-edge technologies and their practical applications in education, 
              industry, and everyday life. We offer comprehensive training programs for students and 
              professionals, providing placement opportunities for our graduates. Additionally, we develop 
              innovative software products, create custom solutions for industrial clients, and promote 
              social awareness about the transformative potential of these technologies.
            </h4>
          </Col>
          <Col lg={6} className="mb-3 text-center">
            <Image
              src={aboutImage}
              alt="about-img"
              width="60%"
              height="auto"
            />
          </Col>
        </Row>
        </RowReversedStyled>
      </SectionContainer>
    </>
  );
};

export default About;
