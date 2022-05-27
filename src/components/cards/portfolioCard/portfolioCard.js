import React, {useEffect, useRef, useState} from 'react';
import "./portfolioCard.scss"
import AnimatedNumbers from "../../animatedNumbers/AnimatedNumbers";
import {Autoplay, Navigation} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import portfolioData from "../../../data/portfolio.json"

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { ReactComponent as ArrowIcon }from "../../../media/icons/arrow.svg";

const PortfolioCard = () => {
    const swiperRef = useRef(null);

    return (
        <div className="portfolioCard card">
            <div className="portfolioCardHeader">
                <AnimatedNumbers text={'03'} image={'/media/forest_2.webp'}/>
                <div className="info">
                    <p className="infoLabel textCyan textUppercase">Latest works</p>
                    <h2 className='infoTitle textUppercase fontPlayfair'>Portfolio</h2>
                    <div className='horizontalLine mobileCenter'/>
                </div>
            </div>
            <div className="portfolioCardBody">
                <Swiper
                    ref={swiperRef}
                    modules={[Navigation, Autoplay]}
                    autoplay={{disableOnInteraction: false, delay: 1000}}
                    speed={1500}
                    // navigation
                    loop
                    loopedSlides={portfolioData.length/2}
                    allowTouchMove={true}
                    observer
                    // onSwiper={(swiper) => console.log('swiper built')}
                    spaceBetween='5%'
                    slidesPerView='1.5'
                    centeredSlides={true}
                    breakpoints={{
                        // when window width is >= 768px
                        768: {
                            spaceBetween: '5%',
                            slidesPerView: '3.7',
                            centeredSlides: true,
                            allowTouchMove: false
                        },
                    }}
                >
                    {portfolioData?.map((work, i) =>
                        <SwiperSlide key={i}>
                            <a href={work.url} target='_blank' rel='noreferrer noopener' className='workItem' key={i}>
                                <div className='workItemImage'>
                                    <div className='workItemImageItem' style={{backgroundImage: `url(${work.image})`}}/>
                                </div>
                                <p className='workItemSubtitle infoLabel textUppercase textCyan'>{work.subtitle}</p>
                                <p className='fontPlayfair workItemTitle textUppercase'>{work.title}</p>
                            </a>
                        </SwiperSlide>
                    )}
                </Swiper>
                <div className='swiperBtn prev'
                     onClick={() => swiperRef.current.swiper.slidePrev()}>
                    <ArrowIcon/>
                </div>
                <div className='swiperBtn'
                     onClick={() => swiperRef.current.swiper.slideNext()}>
                    <ArrowIcon/>
                </div>
            </div>
        </div>
    );
};

export default PortfolioCard;
