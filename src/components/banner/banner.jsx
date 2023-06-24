import './banner.scss';
import {useMemo} from "react";

const Banner = () => {
    return useMemo(() => (
        <div className="banner">
            <div className='bannerImage'/>
            <div className='bannerInfo'>
                <div className='backgroundText'>
                    <h4>Arakelyan</h4>
                    <h1>Hamlet</h1>
                </div>
                <p>
                    Front-End | Software engineer
                </p>
            </div>
        </div>
    ), []);
}

export default Banner;
