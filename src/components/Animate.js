import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import useIntersect from "./custom/hooks/useIntersect";

export default function Animate() {
  const [toggle, setToggle] = useState(false);
  const styles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "15px",
    backgroundColor: "palevioletred",
    maxWidth: "70%",
    minHeight: "300px",
    margin: "auto"
  };
  const props = useSpring({ opacity: toggle ? 1 : 0 });
  const [ref, entry] = useIntersect({
    threshold: [0.5],
    rootMargin: "80px 0px 0px 0px"
  });
  const handleEntry = value => setToggle(value);
  useEffect(() => {
    if (entry.intersectionRatio >= 0.5) {
      handleEntry(true);
    } else if (entry.intersectionRatio < 0.5) {
      handleEntry(false);
    }
  }, [entry]);

  return (
    <>
      <h3>Using IntersectionObserver to animate</h3>
      <animated.div ref={ref} style={{ ...styles, ...props }}>
        I will fade each time we intersect
      </animated.div>
      <hr />
    </>
  );
}
