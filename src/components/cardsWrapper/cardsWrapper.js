import {lazy} from "react";
import './cardsWrapper.scss';
const BioCard = lazy(() => import("../cards/bioCard/bioCard"));
const PortfolioCard = lazy(() => import("../cards/portfolioCard/portfolioCard"));
const SkillsCard = lazy(() => import("../cards/skillsCard/skillsCard"));
const ContactCard = lazy(() => import("../cards/contactCard/contactCard"));

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
