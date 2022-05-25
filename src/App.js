import {lazy} from 'react';
import './styles/App.scss';
// const Particles = lazy(() => import("./components/particles/particles"));
const Banner = lazy(() => import("./components/banner/banner"));
const CardsWrapper = lazy(() => import("./components/cardsWrapper/cardsWrapper"));

const App = () => {

    return (
        <div className="App">
            {/*<Particles/>*/}
            <Banner/>
            <CardsWrapper/>
        </div>
    );
}

export default App;
