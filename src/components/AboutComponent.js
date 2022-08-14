import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faLinux,
  faHtml5,
  faCss3,
  faJs,
  faSass,
  faBootstrap,
  faNodeJs,
  faPython,
  faRProject,
  faJava
  
} from "@fortawesome/free-brands-svg-icons";

function About(props) {
  return (
    <div className="container">
      <div className="hero-section" id="top">
        <div className="hero-content-container">
          <h1>Hey there, I’m Noman Patel</h1>
          <h2>Full stack developer from Philadelphia, Pennsylvania</h2>
        </div>
      </div>
      <hr />

      <div className="info-section" id="about">
        <div className="about-section">
          <h2>About Me</h2>
          <p>
          For the the last four years, I have been pursuing computer science. 
          Because of my inquisitive nature, I never strictly followed to one language or field and explored everything, 
          however I currently stick to Web Development.
          Until now, I've been working as a freelancer for individuals ranging from small business owners to college sophomores. 
          I'm currently looking for a professional opportunity utilize my expertise.



          
          </p>
        </div>
        <hr />

        <div className="skills-section" id="skills">
          <h2>Skills</h2>
          <div className="skill">
            <a href="https://www.linux.org/" className="linux">
              <FontAwesomeIcon icon={faLinux} size="2x" />
            </a>

            <a href="https://reactjs.org/" className="react">
              <FontAwesomeIcon icon={faReact} size="2x" />
            </a>

            <a href="https://reactjs.org/" className="html">
              <FontAwesomeIcon icon={faHtml5} size="2x" />
            </a>

            <a
              href="https://www.w3.org/Style/CSS/Overview.en.html"
              className="css"
            >
              <FontAwesomeIcon icon={faCss3} size="2x" />
            </a>

            <a href="https://www.javascript.com/" className="js">
              <FontAwesomeIcon icon={faJs} size="2x" />
            </a>

            <a href="https://sass-lang.com/" className="sass">
              <FontAwesomeIcon icon={faSass} size="2x" />
            </a>

            <a href="https://getbootstrap.com/" className="bootstrap">
              <FontAwesomeIcon icon={faBootstrap} size="2x" />
            </a>

            <a href="https://nodejs.org/en/" className="nodejs">
              <FontAwesomeIcon icon={faNodeJs} size="2x" />
            </a>

            <a href="https://www.r-project.org/" className="R">
            <FontAwesomeIcon icon={faRProject} size="2x" />
            </a>

            <a href="https://www.python.org/" className="python">
            <FontAwesomeIcon icon={faPython} size="2x" />
            </a>
            
            <a href="https://www.java.com/en/" className="Java">
            <FontAwesomeIcon icon={faJava} size="2x" />
            </a>

           

            
          </div>
        </div>
        
        <hr />

      </div>
    </div>
  );
}

export default About;
