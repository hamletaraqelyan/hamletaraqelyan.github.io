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
            <li>Redux</li>
            <li>CSS</li>
            <li>HTML</li>
            <li>Git</li>
            <li>Trello</li>

            <li>TypeScript</li>
            <li>Next.js</li>
            <li>JQuery</li>
            <li>SEO</li>
            <li>Jira</li>
            <li>Figma</li>

            <li>React.js</li>
            <li>SCSS</li>
            <li>Bootstrap</li>
            <li>GSAP</li>
            <li>Scrum</li>
            <li>Adobe XD</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SkillsCard;
