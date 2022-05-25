import './cardsWrapper.scss';
import BioCard from "../cards/bioCard/bioCard";
import PortfolioCard from "../cards/portfolioCard/portfolioCard";
import SkillsCard from "../cards/skillsCard/skillsCard";
import ContactCard from "../cards/contactCard/contactCard";

const CardsWrapper = () => {
    return (
        <div className="cardsWrapper">
            <BioCard />
            <SkillsCard />
            <PortfolioCard />
            <ContactCard />
        </div>
    );
}

export default CardsWrapper;
