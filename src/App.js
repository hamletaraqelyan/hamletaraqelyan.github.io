import {lazy} from 'react';
import './styles/App.scss';
// import ThemeProvider from "./context/ThemeProvider";
// import NightModeSwitcher from "./components/nightModeSwitcher/nightModeSwitcher";
// const Particles = lazy(() => import("./components/particles/particles"));
const Banner = lazy(() => import("./components/banner/banner"));
const CardsWrapper = lazy(() => import("./components/cardsWrapper/cardsWrapper"));

const App = () => {
    return (
        <div className="App">
            {/*<Particles/>*/}
            {/*<NightModeSwitcher/>*/}
            <Banner/>
            <CardsWrapper/>
        </div>
    );
}

export default App;
