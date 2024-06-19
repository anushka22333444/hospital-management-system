import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "./Detail.css"
const Hero = ({ title, imageUrl }) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h1>{title}</h1>
          <p>
          Hello! My name is Ayush Jha, and I am a dedicated and passionate Full-Stack Developer. With a robust foundation in both front-end and back-end technologies, I thrive on creating seamless, user-centric applications that are both functional and visually appealing.
        </p>
        <p>
          I am currently pursuing my degree in CSE CORE from VIT BHOPAL, where I honed my skills in computer science and engineering. During my academic journey, I engaged in various projects and internships that enriched my understanding of real-world application development.
        </p>
         
      <div className="links">
        <div className="link-item">
          <a href='https://github.com/Ayushjha32526'>
            <GitHubIcon className="icon" />
          </a>
          <div>Github Link</div>
        </div>
        
        <div className="link-item">
          <a href='https://www.linkedin.com/in/ayush-jha-391544251/'>
            <LinkedInIcon className="icon" />
          </a>
          <div>LinkedIn Link</div>
        </div>
      </div>
    
        </div>
        
        <div className="banner">
          <img src={imageUrl} alt="hero" className="animated-image" />
          <span>
            <img src="/Vector.png" alt="vector" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Hero;
