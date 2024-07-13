import styled from "styled-components";

export const HomeSectionStyled = styled.section`
  @media (max-width: 767px) {
    text-align: center;
    .home-container{
      h1{
      font-size:30px;
      font-weight: 300;
      }
    }
  }
  color: #fff;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 2;
  }
  .home-container {
    z-index: 3;
    h1 {
      font-size: 60px;
      font-weight: 700;
      font:bold;
      text-align:center;
    }
    h2 {
      color: #eee;
      font-family: "Raleway", sans-serif;
      font-size: 25px;
      margin-bottom: 30px;
    }
  }
`;
