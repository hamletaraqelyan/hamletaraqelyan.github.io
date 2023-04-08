import React from "react";
import "./skillsCard.scss";
import AnimatedNumbers from "../../animatedNumbers/AnimatedNumbers";

const SkillsCard = () => {
  return (
    <div className="card skillsCard">
      <AnimatedNumbers text={"02"} image={"/media/forest_3.webp"} />
      <div className="info textRight">
        <p className="infoLabel textCyan textUppercase">
          Technologies I've worked with
        </p>
        <h2 className="infoTitle textUppercase fontPlayfair">Skills</h2>
        <div className="horizontalLine right mobileCenter" />
        <div className="infoText skillsList">
          <ul>
            <li>JavaScript</li>
            <li>React.js</li>
            <li>Redux</li>
            <li>SCSS</li>
            <li>HTML</li>
            <li>Jira</li>
            <li>TypeScript</li>
            <li>JQuery</li>
            <li>GSAP</li>
            <li>CSS</li>
            <li>Git</li>
            <li>Scrum</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SkillsCard;
