import React, { useEffect } from "react";

const useBeforeLeave = beforeLeave => {
  // if (typeof beforeLeave !== "function") return;

  const handle = e => {
     // check window's top with clientY
    const { clientY } = e
    if (clientY <= 0) beforeLeave();
  }
  useEffect(() => {
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle)
  }, []);
};

export default function UseBeforeLeave() {
  const doNotLeave = () => console.log("please don't leave");
  useBeforeLeave(doNotLeave)
  return (
    <div>
      <h1>7. useBeforeLeave</h1>
      <p>Might be useful to promote any items before a user leaves</p>
    </div>
  );
}
