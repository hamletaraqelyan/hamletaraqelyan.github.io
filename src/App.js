import './styles/App.scss';
import Banner from "./components/banner/banner";
import CardsWrapper from "./components/cardsWrapper/cardsWrapper";

const App = () => {
  return (
    <div className="App">
          <Banner/>
          <CardsWrapper/>
    </div>
  );
}

export default App;
