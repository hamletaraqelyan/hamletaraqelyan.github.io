import React, { lazy, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import ThemeProvider from "./context/ThemeProvider";
// import NightModeSwitcher from "./components/nightModeSwitcher/nightModeSwitcher";
// const Particles = lazy(() => import("./components/particles/particles"));
import Header from "./components/header/header";
import Menu from "./components/menu/menu";
import "./styles/App.scss";
const Home = lazy(() => import("pages/Home/Home"));
const Test = lazy(() => import("pages/Test/Test"));

const App = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        <Header showMenu={showMenu} setShowMenu={setShowMenu} />
        <Menu showMenu={showMenu} setShowMenu={setShowMenu} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/test" element={<Test />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
};

export default App;
