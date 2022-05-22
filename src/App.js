import './styles/App.scss';
import Banner from "./components/banner/banner";
import CardsWrapper from "./components/cardsWrapper/cardsWrapper";
import Particles from "./components/particles/particles";

const App = () => {

    return (
        <div className="App">
            <Particles/>
            <Banner/>
            <CardsWrapper/>
        </div>
    );
}

export default App;
