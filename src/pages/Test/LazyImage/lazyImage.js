import React from "react";
import { useInView } from "react-intersection-observer";

function LazyImage({ src }) {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
  });
  return (
    <img alt="" width={400} height={400} ref={ref} src={inView ? src : null} />
  );
}

export default LazyImage;
