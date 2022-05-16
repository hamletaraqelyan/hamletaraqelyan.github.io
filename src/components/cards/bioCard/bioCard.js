import '../card.scss'
import './bioCard.scss';
import {useEffect, useRef} from "react";
import AnimatedNumbers from "../../animatedNumbers/AnimatedNumbers";

const BioCard = () => {
    return (
        <div className="bioCard card">
            <AnimatedNumbers text={'01'} image={'/media/forest.jpeg'}/>
            <div className="info">
                <p className="infoLabel textCyan textUppercase">About me</p>
                <h2 className='infoTitle textUppercase fontPlayfair'>My biography</h2>
                <div className='horizontalLine'/>
                <p className="infoText">Hey! My name is Richard and I’m NY based writer. I write about people, their
                    characters, lives and their complicated destinies. I find my inspiration in diving into people’s
                    eyes, souls, during our communication with each other. My books are full of breathtaking plots and
                    strong characters.</p>
                <p className="infoText">I was born in New York and have been living here for 30 years. I studied
                    Literature in St. George College and since my graduation I dedicated my life to writing. I managed
                    to release my first book when I was 24. From that time I have written 6 books more and continue
                    working on other projects.</p>
            </div>
        </div>
    );
}
export default BioCard;
