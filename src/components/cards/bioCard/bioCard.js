import '../card.scss'
import './bioCard.scss';
import AnimatedNumbers from "../../animatedNumbers/AnimatedNumbers";

const BioCard = () => {
    return (
        <div className="bioCard card">
            <AnimatedNumbers text={'01'} image={'/media/forest.jpeg'}/>
            <div className="info">
                <p className="infoLabel textCyan textUppercase">About me</p>
                <h2 className='infoTitle textUppercase fontPlayfair'>My biography</h2>
                <div className='horizontalLine'/>
                <p className="infoText">
                    Hey! My name is Hamlet. I was born in Armenia and have been living here
                    for {new Date().getFullYear() - new Date('10-27-1995').getFullYear()} years. I studied at the
                    National University of Architecture and Construction of Armenia as an Engineer and graduated in 2017
                    with - a Bachelor's degree and in 2019 with - Master’s degree.
                </p>
                <p className="infoText">
                    Furthermore, now I’m a front-end developer with
                    over {new Date().getFullYear() - new Date('08-01-2019').getFullYear()} years of commercial
                    experience. I'm experienced in building and maintaining responsive and Cross-Browser, client-side &
                    server-side applications. I'm eager to take on new challenges and meet new people.
                </p>
            </div>
        </div>
    );
}
export default BioCard;
