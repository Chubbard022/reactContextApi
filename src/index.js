import React from "react";
import ReactDOM from "react-dom";
import Favorite from "./Favorite";
import DogChooser from "./DogChooser";
import FavoriteDogProvider from "./FavoriteDogProvider";

import "./styles.css";

function App() {
  /*
    const field = "fieldval";
    {
      field
    }
    {
      field: field
    }
    {
      field: "fieldname"
    }
  */

  return (
    <div className="App">
      <FavoriteDogProvider>
        <h1>my favorite dog</h1>
        <Favorite />
        <DogChooser />
      </FavoriteDogProvider>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
