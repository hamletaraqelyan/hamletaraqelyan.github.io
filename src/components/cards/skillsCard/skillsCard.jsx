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
          <div>
            <p className="infoLabel textCyan textUppercase">Frontend</p>
            <ul>
              <li>React</li>
              <li>Next.js</li>
              <li>TypeScript</li>
              <li>JavaScript</li>
              <li>jQuery</li>
              <li>HTML5</li>
            </ul>
          </div>
          <div>
            <p className="infoLabel textCyan textUppercase">STATE MANAGEMENT</p>
            <ul>
              <li>Redux</li>
              <li>React Context</li>
            </ul>
          </div>
          <div>
            <p className="infoLabel textCyan textUppercase">
              Styling & Design Systems
            </p>
            <ul>
              <li>SCSS</li>
              <li>CSS</li>
              <li>Less</li>
              <li>Ant Design</li>
              <li>Bootstrap</li>
              <li>GSAP</li>
            </ul>
          </div>
          <div>
            <p className="infoLabel textCyan textUppercase">Tools & Workflow</p>
            <ul>
              <li>Git</li>
              <li>Jira</li>
              <li>Trello</li>
              <li>Figma</li>
              <li>Adobe XD</li>
              <li>Azure DevOps</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsCard;
