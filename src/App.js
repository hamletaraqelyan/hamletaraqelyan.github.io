import {lazy, useState} from 'react';
import './styles/App.scss';
// import ThemeProvider from "./context/ThemeProvider";
// import NightModeSwitcher from "./components/nightModeSwitcher/nightModeSwitcher";
// const Particles = lazy(() => import("./components/particles/particles"));
const Header = lazy(() => import("./components/header/header"));
const Menu = lazy(() => import("./components/menu/menu"));
const Banner = lazy(() => import("./components/banner/banner"));
const CardsWrapper = lazy(() => import("./components/cardsWrapper/cardsWrapper"));

const App = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <div className="App">
            {/*<Particles/>*/}
            {/*<NightModeSwitcher/>*/}
            {/*<iframe src="https://handmade-alarm.netlify.app/"></iframe>*/}
            <Header showMenu={showMenu} setShowMenu={setShowMenu}/>
            <Menu showMenu={showMenu} setShowMenu={setShowMenu}/>
            <main>
                <Banner/>
                <CardsWrapper/>
            </main>
        </div>
    );
}

export default App;
