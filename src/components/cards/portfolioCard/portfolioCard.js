import React, {useRef} from 'react';
import "./portfolioCard.scss"
import AnimatedNumbers from "../../animatedNumbers/AnimatedNumbers";
import {Autoplay, Navigation} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { ReactComponent as ArrowIcon }from "../../../media/icons/arrow.svg";

const PortfolioCard = () => {
    const workData = [
        {
            url: "https://maeutica.com/",
            title: "mæutica",
            subtitle: "Branding agency",
            image: "/media/works/logos/maeutica.png"
        },
        {
            url: "https://musicroom.info/",
            subtitle: "GREAT CONCERTS TO BE MEASURED",
            title: "musicroom",
            image: "/media/works/logos/musicroom.svg"
        },
        {
            url: "https://inclassica.com/",
            subtitle: "International music festival",
            title: "inclassica",
            image: "/media/works/logos/inclassica.svg"
        },
        {
            url: "https://armsymphony.am/",
            title: "Armenian state symphony orchestra",
            subtitle: "LIVING IN MUSIC",
            image: "/media/works/logos/armsymphony.png"
        },
        {
            url: "https://khachaturian-competition.com/",
            title: "KHACHATURIAN",
            subtitle: "INTERNATIONAL COMPETITION",
            image: "/media/works/logos/khachaturian.png"
        },
        {
            url: "https://cnbdubai.com/",
            title: "CNB",
            subtitle: "House of beauty",
            image: "/media/works/logos/cnb.png"
        },
        {
            url: "https://dmitryishkhanov.com/",
            title: "ishkhanov",
            subtitle: "Concert pianist",
            image: "/media/works/logos/ishkhanov.svg"
        },
        {
            url: "https://dmitryishkhanov.com/",
            title: "LaGalleria",
            subtitle: "Luxury Boutiques",
            image: "/media/works/logos/lagalleria_1.svg"
        },
        {
            url: "https://dmitryishkhanov.com/",
            title: "Congress Hotel yerevan",
            subtitle: "Best Western International",
            image: "/media/works/logos/congress.svg"
        },
        {
            url: "https://sergeysmbatyan.com/",
            title: "Sergey Smbatyan",
            subtitle: "Conductor",
            image: "/media/works/logos/smbatyan.png"
        },
    ];
    const swiperRef = useRef(null);


    return (
        <div className="portfolioCard card">
            <div className="portfolioCardHeader">
                <AnimatedNumbers text={'02'} image={'/media/forest_2.jpeg'}/>
                <div className="info textRight">
                    <p className="infoLabel textCyan textUppercase">Latest works</p>
                    <h2 className='infoTitle textUppercase fontPlayfair'>Portfolio</h2>
                    <div className='horizontalLine right'/>
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
                    loopedSlides={workData.length}
                    allowTouchMove={true}
                    observer
                    onSwiper={(swiper) => console.log('swiper built')}
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
                    {workData?.map((work, i) =>
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
    )
        ;
};

export default PortfolioCard;
