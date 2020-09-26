import React from "react";
import styled from "styled-components";



const Projectss = styled.section`
  padding: 16px;
  width: 100%;
  h3 {
    font-weight: 800;
    font-family: "Khula", sans-serif;
  }
  @media (max-width: 768px){
    padding:25px;
  }
  .ProjectGrid {
    width: 100%;
    margin-top: 2em;
    
    grid-gap: 10px 20px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    @media (max-width: 1024px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 768px) {
      grid-template-columns: repeat(1, 1fr);
      padding-left: 18px;
    }
    a {
      color: white;
    }
    a:hover {
      text-decoration: none;
      transform: scale(1.05);
    }
    div {
      width: 380px;
      height: 380px;
      padding: 35px;
      border: 2px solid #cc66ff;
      border-radius: 10px;
      background: #000000;
      h4{
        font-weight: 400;
         font-family: "Khula", sans-serif;
         font-size: 35px;
      }
      h6{
        font-weight: 300;
         font-family: "Khula", sans-serif;
         font-size: 15px;
      }
      p {
        margin-top: 10px;
        font-size: 20px;
        line-height: 29px;
        font-weight: 300;
         font-family: "Khula", sans-serif;
      }
      h5 {
        background: #fb4a59;
        outline: none;
        border: none;
        width: 50px;
        margin-top: 150px;
        padding-left: 5px;
        font-weight: bold;
        letter-spacing: 0.07rem;
        color: #fff !important;
        display: flex;
        cursor: pointer;
        align-items: center;
        @media (max-width: 768px){
          margin-top: 50px;
        }
        
      }
      @media (max-width: 768px) {
        padding:20px;
        margin-bottom: 40px;
        height:280px;
        width: 280px;
      }
    }
  }
`;

const Projects = () => {
  return (
    <>
    <Projectss id="projects">
      <h3>Check out some of my work</h3>
      <div className="ProjectGrid">
        <a href="https://compassionate-hoover-695d8c.netlify.app/" target="_blank" rel="noopener noreferrer">
          <div>
            <h4>Booking App</h4>
            <h6>Javascript + React + Express + Nodejs + Postgres</h6>
            <p>Online Booking for Meetings</p>
            <h5>GO</h5>
          </div>
        </a>
        <a href="https://budgetappp.netlify.app/" target="_blank" rel="noopener noreferrer">
          <div>
            <h4>Budget Calculator</h4>
            <h6>HTML + CSS + Javascript</h6>
            <p> Income vs expense</p>
            <h5>GO</h5>
          </div>
        </a>
        <a href="https://postit-react.netlify.app/" target="_blank" rel="noopener noreferrer">
          <div>
            <h4>PostIt</h4>
            <h6>Javascript + React</h6>
            <p>A Chatting Board </p>
            <h5>GO</h5>
          </div>
        </a>
        <a href="https://dicedd.netlify.app/" target="_blank" rel="noopener noreferrer">
          <div>
            <h4>Pig Game</h4>
            <h6>HTML + CSS + Javascript</h6>
            <p>You vs Com, 2 dice who wins?</p>
            <h5>GO</h5>
          </div>
        </a>
        <a href="https://photowalled.netlify.app/" target="_blank" rel="noopener noreferrer">
          <div>
            <h4>Photowall</h4>
            <h6>HTML + CSS + Javascript + React + Firebase</h6>
            <p>An Online Album</p>
            <h5>GO</h5>
          </div>
        </a>
      </div>
    </Projectss>
    </>
  );
};

export default Projects;
