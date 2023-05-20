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
      <LazyImage src={""} />
      {images.map((img) => (
        <></>
        // <LazyImage src={img} />
        // <img width={400} src={img} alt={img} />
      ))}
    </div>
  );
}

export default Test;
