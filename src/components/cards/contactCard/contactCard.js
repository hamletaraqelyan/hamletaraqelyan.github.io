import React from 'react';
import AnimatedNumbers from "../../animatedNumbers/AnimatedNumbers";
import "./contactCard.scss";
import {ReactComponent as PhoneIcon} from "../../../media/icons/phone.svg";
import {ReactComponent as MailIcon} from "../../../media/icons/mail.svg";
import {ReactComponent as TelegramIcon} from "../../../media/icons/telegram.svg";
import {ReactComponent as LinkedinIcon} from "../../../media/icons/linkedin.svg";
import {ReactComponent as FacebookIcon} from "../../../media/icons/facebook.svg";
import {ReactComponent as InstagramIcon} from "../../../media/icons/instagram.svg";

const ContactCard = () => {
    return (
        <div className="portfolioCard contactCard card">
            <div className="portfolioCardHeader">
                <AnimatedNumbers text={'04'} image={'/media/forest_5.jpeg'}/>
                <div className="info textRight">
                    <p className="infoLabel textCyan textUppercase">GET IN TOUCH</p>
                    <h2 className='infoTitle textUppercase fontPlayfair'>CONTACT ME</h2>
                    <div className='horizontalLine right'/>
                </div>
            </div>
            <div className="portfolioCardBody">
                <div className="info">
                    <div className="infoText">
                        <p className="infoLabel textCyan textUppercase">Contact information</p>
                        <ul className='contactList'>
                            <li>
                                <PhoneIcon/>
                                <a href="tel:+37477667767" rel='noopener noreferrer'>(+374) 77-66-77-67</a>
                            </li>
                            <li>
                                <MailIcon/>
                                <a href="mailto:hamlet.araqelyan1995@gmail.com" rel='noopener noreferrer' target='_blank'>hamlet.araqelyan1995@gmail.com</a>
                            </li>
                            <li>
                                <TelegramIcon/>
                                <a href="https://t.me/Hamlet_Araqelyan" rel='noopener noreferrer' target='_blank'>@Hamlet_Araqelyan</a>
                            </li>
                        </ul>
                    </div>
                    <div className="infoText">
                        <p className="infoLabel textCyan textUppercase">Socials</p>
                        <ul className='contactList'>
                            <li>
                                <LinkedinIcon/>
                                <a href="https://www.linkedin.com/in/hamlet-araqelyan-a600b81a4/" rel='noopener noreferrer'>Linkedin</a>
                            </li>
                            <li>
                                <FacebookIcon/>
                                <a href="https://www.facebook.com/1995Hamlet" rel='noopener noreferrer'>Facebook</a>
                            </li>
                            <li>
                                <InstagramIcon/>
                                <a href="https://www.instagram.com/hamletaraqelyan/" rel='noopener noreferrer'>Instagram</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactCard;
