import React, { useRef, useEffect } from "react";

const useClick = onClick => {
  const element = useRef(); // this reference connects to all
  useEffect(() => {
    // componentDidMount
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
    // componentWillUnmount
    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    };
  }, []);
  return element;
};

export default function UseClick() {
  const checkConsole = () => console.log("hello, it's from useClick");
  const title = useClick(checkConsole);

  return (
    <div>
      <h1>4. useClick</h1>
      <p ref={title}>Click here and check the console</p>
    </div>
  );
}
