import '../card.scss'
import './bioCard.scss';
import AnimatedNumbers from "../../animatedNumbers/AnimatedNumbers";
import {calculateAge} from "../../../helpers/helpers";

const BioCard = () => {
    return (
        <div className="bioCard card">
            <AnimatedNumbers text={'01'} image={'/media/forest.webp'}/>
            <div className="info">
                <p className="infoLabel textCyan textUppercase">About me</p>
                <h2 className='infoTitle textUppercase fontPlayfair'>My biography</h2>
                <div className='horizontalLine mobileCenter'/>
                <p className="infoText">
                    Greetings! My name is Hamlet, and I'm thrilled to share my bio with you. I was born and
                    raised in Armenia, where I've spent the past {calculateAge('10/27/1995')} years of my life. I
                    studied at the National University of Architecture and Construction of Armenia, earning a Bachelor's
                    degree in Engineering in 2017 and a Master's degree in 2019.
                </p>
                <p className="infoText">
                    As a software engineer with
                    over {new Date().getFullYear() - new Date('08/01/2019').getFullYear()} years of experience, I am
                    passionate about staying up-to-date with the latest trends and technologies in software development.
                    My skills and expertise in this field enable me to develop and maintain responsive, Cross-Browser,
                    client-side & server-side applications.
                </p>
                <p className='infoText'>
                    I'm dedicated to providing top-notch software engineering services to help you achieve your goals
                    and enhance your online presence. Please don't hesitate to contact me to learn more about my skills
                    and how I can assist you in your software development projects.
                </p>
                <p className="infoText">
                    <a href="/files/CV_Hamlet_Arakelyan.pdf" target="_blank" rel='nofollow noreferrer noopener'
                       className='cta'>
                        Download CV
                        <span className='arrowIcon'/>
                    </a>
                </p>
            </div>
        </div>
    );
}
export default BioCard;
