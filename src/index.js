import React from "react";
import ReactDOM from "react-dom";
import NameTag from "./NameTag.js";
import troysfriends from "./data.js";

import "./styles.css";

const renderNameTag = (name) => <NameTag key={name.id} name={name.friend} />;

const App = () => {
  const nameTagElements = troysfriends.map(renderNameTag);

  return (
    <div className="App">
      <h1>Name Tag Generator</h1>
      {nameTagElements}
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
