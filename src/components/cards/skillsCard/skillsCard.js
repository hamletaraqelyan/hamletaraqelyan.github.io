import React from 'react';
import './skillsCard.scss'
import AnimatedNumbers from "../../animatedNumbers/AnimatedNumbers";

const SkillsCard = () => {
    return (
        <div className='card skillsCard'>
            <AnimatedNumbers text={'02'} image={'/media/forest_3.jpeg'}/>
            <div className="info textRight">
                <p className="infoLabel textCyan textUppercase">Technologies I've worked with</p>
                <h2 className='infoTitle textUppercase fontPlayfair'>Skills</h2>
                <div className='horizontalLine right'/>
                <div className="infoText skillsList">
                    <ul>
                        <li>React.js</li>
                        <li>Next.js</li>
                        <li>Gatsby.js</li>
                        <li>Redux</li>
                        <li>GSAP</li>
                        <li>JQuery</li>
                        <li>JavaScript</li>
                        <li>SASS</li>
                        <li>CSS</li>
                        <li>HTML</li>
                        <li>Git</li>
                        <li>Adobe Photoshop</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SkillsCard;
