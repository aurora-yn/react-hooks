import React, { useRef, useEffect } from "react";

const useHover = onHover => {
  // if (typeof onHover !== "function") {
  //   return;
  // }
  const element = useRef();
  useEffect(() => {
    // componentDidMount
    if (element.current) {
      element.current.addEventListener("mouseenter", onHover);
    }
    // componentWillUnmount
    return () => {
      if (element.current) {
        element.current.removeEventListener("mouseenter", onHover);
      }
    };
  }, []);
  return element;
};

export default function UseHover() {
  const checkConsole = () => console.log("hello, it's from useHover");
  const title = useHover(checkConsole);

  return (
    <div>
      <h1>4-2. useHover</h1>
      <p ref={title}>Mouseover here and check the console</p>
    </div>
  );
}