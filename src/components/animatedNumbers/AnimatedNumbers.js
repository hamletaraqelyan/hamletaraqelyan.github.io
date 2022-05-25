import React, {memo, useMemo, useRef} from 'react';

const AnimatedNumbers = ({text, image}) => {
    // const numberRef = useRef(null);
    // useEffect(() => {
    //     if (numberRef) {
    //         const element = numberRef.current;
    //         numberRef.current.addEventListener('mousemove', function (e) {
    //             const elw = element.offsetWidth;
    //             const elh = element.offsetHeight;
    //             const x = e.pageX;
    //             const y = e.pageY;
    //
    //             // const elTop = actionText.offset().top + elh / 2;
    //             // const elLeft = actionText.offset().left + elw / 2;
    //             //
    //             const moveX = -(elw - x) / 12;
    //             const moveY = -(elh - y) / 12;
    //
    //             element.style.backgroundPosition = `${moveX}% ${moveY}%`;
    //         })
    //     }
    // }, [])

    return useMemo(() => (
        <div className='number' style={{backgroundImage: `url(${image})`}}
            // ref={numberRef}
        >
            <p>{text}</p>
        </div>
    ), [])
};

export default AnimatedNumbers;
