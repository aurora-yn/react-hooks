import React, { useState, useEffect } from "react";

const useTitle = initialTitle => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    let htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };
  useEffect(updateTitle, [title]);  
  return setTitle;
};

export default function UseTitle() {
  const titleUploader = useTitle("Hook Loading...");
  setTimeout(() => titleUploader("Home"), 5000);

  return (
    <div>
      <h1>3. useTitle</h1>
      <p>control the title on browser</p>
    </div>
  );
}
