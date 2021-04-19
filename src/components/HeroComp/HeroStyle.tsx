import styled from "styled-components";
import myImage from "../../assets/img/hero-bg.jpg"

export const Hero = styled.section.attrs({
    className:'d-flex flex-column align-items-center justify-content-center'
})`
    width: 100%;
    height: 75vh;
    background: url(${myImage}) top center;
    background-size: cover;
    padding: 0 15px;
  
  
   h1 {
    margin: 0 0 10px 0;
    font-size: 48px;
    font-weight: 700;
    line-height: 56px;
    color: #fff;
  }
  
  h2 {
    color: #eee;
    margin-bottom: 10px;
    font-size: 24px;
    font-weight: 300;
    font-family: "Poppins", sans-serif;
  }
  
  .btn-get-started {
    font-size: 64px;
    transition: 0.5s;
    color: #fff;
    height: 60px;
  }
  
  #hero .btn-get-started:hover {
    padding-top: 10px;
    color: #d43076;
  }
  
  @media (min-width: 1024px) {
    #hero {
      background-attachment: fixed;
    }
  }
  
  @media (max-width: 768px) {
    #hero h1 {
      font-size: 28px;
      line-height: 36px;
    }
    #hero h2 {
      font-size: 18px;
      line-height: 24px;
      margin-bottom: 30px;
    }
  }
`