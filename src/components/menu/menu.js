import React from 'react';
import "./menu.scss";

const Menu = ({showMenu, setShowMenu}) => {
    return (
        <div className={`menu ${showMenu ? 'showMenu' : ''}`}>
            <div className="closeLayer" onClick={() => setShowMenu(false)}/>
            <nav className='menuList'>
                <h1 className='menuTitle'>
                    <span>Check my GitHub deployed repos <span className='textLime'>.</span></span>
                    <a className='netlifyLink' href="https://app.netlify.com/" target="_blank"
                       rel='noreferrer noopener'>Netlify <span className='icon'/></a>
                </h1>
                <ul>
                    <li>
                        <a href="https://rates-exchange.netlify.app" target="_blank"
                           rel='noreferrer noopener'>Exchange</a>
                    </li>
                    <li>
                        <a href="https://spotlight-text.netlify.app" target="_blank"
                           rel='noreferrer noopener'>Spotlight</a>
                    </li>
                    <li>
                        <a href="https://handmade-alarm.netlify.app" target="_blank" rel='noreferrer noopener'>Alarm</a>
                    </li>
                    <li>
                        <a href="https://to-do-planning.netlify.app" target="_blank" rel='noreferrer noopener'>ToDo</a>
                    </li>
                </ul>
                <div className='socialBlock'>
                    <a href="https://www.facebook.com/1995Hamlet" target="_blank" rel='noopener noreferrer'>
                        Facebook<span className='textLime'>.</span>
                    </a>
                    <a href="https://github.com/hamletaraqelyan" target="_blank" rel='noopener noreferrer'>
                        GitHub<span className='textLime'>.</span>
                    </a>
                    <a href="https://www.linkedin.com/in/hamlet-arakelyan-a600b81a4" target="_blank"
                       rel='noopener noreferrer'>
                        Linkedin<span className='textLime'>.</span>
                    </a>
                    <a href="https://t.me/Hamlet_Araqelyan" target="_blank"
                       rel='noopener noreferrer'>
                        Telegram<span className='textLime'>.</span>
                    </a>
                </div>
            </nav>
        </div>
    );
};

export default Menu;
