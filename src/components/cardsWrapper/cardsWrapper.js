import './cardsWrapper.scss';
import BioCard from "../cards/bioCard/bioCard";
import PortfolioCard from "../cards/portfolioCard/portfolioCard";

const CardsWrapper = () => {
    return (
        <div className="cardsWrapper">
            <BioCard />
            <PortfolioCard />
            <BioCard />
        </div>
    );
}

export default CardsWrapper;
