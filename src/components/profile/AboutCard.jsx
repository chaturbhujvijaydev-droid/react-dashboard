import {
  FaCode,
  FaLaptopCode,
  FaReact,
  FaLightbulb,
} from "react-icons/fa";

const AboutCard = () => {
  return (
    <div className="profile-card">

      <div className="profile-card-header">
        <h4>About Me</h4>
        <span>Professional Summary</span>
      </div>

      <p className="about-text">
        Passionate Frontend Developer with 8+ years of experience
        building enterprise-grade web applications using React,
        JavaScript, HTML, CSS, Bootstrap, Redux and REST APIs.
        I enjoy designing scalable UI architectures, writing
        reusable components, improving application performance
        and delivering clean user experiences.
      </p>

      <div className="about-highlights">

        <div className="highlight-item">
          <FaReact />
          <span>React Expert</span>
        </div>

        <div className="highlight-item">
          <FaLaptopCode />
          <span>Enterprise Applications</span>
        </div>

        <div className="highlight-item">
          <FaCode />
          <span>Clean Code</span>
        </div>

        <div className="highlight-item">
          <FaLightbulb />
          <span>Problem Solver</span>
        </div>

      </div>

    </div>
  );
};

export default AboutCard;