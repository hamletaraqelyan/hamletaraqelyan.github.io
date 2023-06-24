import React from 'react';
import "./header.scss"

const Header = ({setShowMenu, showMenu}) => {

    const handleShowMenu = () => {
        setShowMenu((prev) => !prev);
    }

    return (
        <header>
            <div className="burger-wrapper" onClick={handleShowMenu}>
                <div className={`burger ${showMenu ? 'active' : ''}`} id="burger">
                    <span className="burger-itm burger-itm-top"/>
                    <span className="burger-itm burger-itm-bottom"/>
                </div>
            </div>
        </header>
    );
};

export default Header;
