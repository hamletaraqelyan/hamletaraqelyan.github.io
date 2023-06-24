import React from "react";
import LazyImage from "./LazyImage/lazyImage";

function Test() {
  const images = [
    "https://via.placeholder.com/200",
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/400",
    "https://via.placeholder.com/500",
    "https://via.placeholder.com/600",
    "https://via.placeholder.com/700",
    "https://via.placeholder.com/800",
    "https://via.placeholder.com/900",
    "https://via.placeholder.com/1000",
    "https://via.placeholder.com/1200",
    "https://via.placeholder.com/1400",
    "https://via.placeholder.com/1600",
    "https://via.placeholder.com/1800",
    "https://via.placeholder.com/2000",
  ];
  return (
    <div className="testPage">
      <h5>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        Hello Patrizio, it's great to meet you. My name is Hamlet Arakelyan, and
        I'm excited to have the opportunity to speak with you today about the
        Front-end developer role and learn more about the company.
        <br />
        <br />
        I'm a Front End Software Engineer. Im from Armenia and currently live in
        Armenia.
        <br />
        <br />
        I graduated from the National University of Architecture and
        Construction of Armenia in 2019 with a Master's degree.
        <br />
        <br />
        Currently, I'm working on EPAM Anywhere as a Senior Software engineer.
        In my current role, I specialize in JavaScript, TypeScript, React.js and
        other front end technologies, and I'm always looking to learn and grow
        in my field.
        <br />
        <br />
        Before joining EPAM Anywhere, I worked for over three years at Codics
        Producers Company as a Front End web developer.
        <br />
        <br />
        Outside of work, I enjoy playing football on PlayStation and going for
        night biking. These activities help me clear my mind and recharge my
        creativity.
      </h5>

      {images.map((img) => (
        <></>
        // <LazyImage src={img} />
        // <img width={400} src={img} alt={img} />
      ))}
    </div>
  );
}

export default Test;
