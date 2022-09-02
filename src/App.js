import React, { useState, useEffect } from "react";
import { Tabs } from "./tabs";
import "./App.css";

const options = [
  { value: 1, label: "Tabs 1" },
  { value: 2, label: "Tabs 2" },
  { value: 3, label: "Tabs 3" },
  { value: 4, label: "Tabs 4" },
  { value: 5, label: "Tabs 5" }
];

const App = () => {
  const [currentTab, setCurrentTab] = useState({ value: 1, label: "Tabs 1" });
  const [indicatoPosition, setIndicatoPosition] = useState(0);

  const onChangeHandler = (value) => {
    setCurrentTab(value);
  };

  useEffect(() => {
    const index = currentTab.value;
    const tabs = document.querySelector(`.tabs`);
    const tab = document.querySelector(`.tabs__item${index}`);

    const leftTabsPosition = Math.round(tabs.getBoundingClientRect().left);
    const leftTabPosition = Math.round(tab.getBoundingClientRect().left);
    const diff = leftTabPosition - leftTabsPosition;

    setIndicatoPosition(diff);
  }, [currentTab.value]);

  return (
    <div className="container">
      <Tabs
        options={options}
        value={{ value: 1, label: "Tabs 1" }}
        onChange={onChangeHandler}
        renderTab={renderTab}
        currentTab={currentTab}
      />
      <div className="slider">
        <div
          className="indicator"
          style={{ left: `${indicatoPosition}px` }}
        ></div>
      </div>
      <div className="tabs__content">{currentTab.label}</div>
    </div>
  );
};

const renderTab = (tab) => {
  return <button className={"tabs__button"}>{tab}</button>;
};

export default App;
