import React, { useState, useEffect } from "react";

const useScroll = () => {
  const [state, setState] = useState({ x:0, y:0 });
  const onScroll = () => {
    setState({x: window.scrollX, y: window.scrollY})
  }

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return state;
};

export default function UseScroll() {
  const {y} = useScroll();
  return (
    <div>
      <h1>10. useScroll</h1>
      <p style={{ position: "fixed", top: 0, color: y > 100 ? "red": "blue"}}>
        useScroll: This colour is changed depending on y value
      </p>
    </div>
  );
}
