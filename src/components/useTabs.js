import React, { useState } from "react";

const content = [
  {
    tab: "Section 1",
    content: "This is the content of the Section 1"
  },
  {
    tab: "Section 2",
    content: "This is the content of the Section 2"
  },
  {
    tab: "Section 3",
    content: "This is the content of the Section 3"
  },
  {
    tab: "Section 4",
    content: "This is the content of the Section 4"
  },
  {
    tab: "Section 5",
    content: "This is the content of the Section 5"
  }
];

const useTabs = (initialTab, allTabs) => {
  // if (!allTabs || !Array.isArray(allTabs)) return;
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex
  };
};

export default function UseTabs() {
  const { currentItem, changeItem } = useTabs(0, content);
  return (
    <div>
      <h1>2. useTabs</h1>
      {content.map((section, index) => (
        <button onClick={() => changeItem(index)}>{section.tab}</button>
      ))}
      <h4>{currentItem.content}</h4>
    </div>
  );
}
