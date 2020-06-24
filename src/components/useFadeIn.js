import React, { useRef, useEffect } from "react";

const useFadeIn = (duration = 1, delay = 0) => {
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      const { current } = element;
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`
      current.style.opacity = 1;
    }
  }, []);
  return { ref: element, style: {opacity: 0} };
};

export default function UseFadeIn() {
  const fadeIn = useFadeIn(5)
  const fadeInDelay = useFadeIn(10, 5)
  return (
    <div>
      <h1>8. useFadeIn</h1>
      <p {...fadeIn}>The element of useFadeIn 5s</p>
      <p {...fadeInDelay}>The element of useFadeIn 10s and delay 5s</p>
    </div>
  );
}
