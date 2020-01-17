import React, { useState } from "react";
import { favoriteDogContext } from "./contexts/favoriteDogContext";

const FavoriteDogProvider = props => {
  const [favorite, setFavorite] = useState("husky");

  const setFavoriteDog = breed => {
    console.log("bk: FavoriteDogProvider: setFavoriteDog: breed: ", breed);
    setFavorite(prevState => {
      return breed;
    });
  };

  return (
    <favoriteDogContext.Provider
      value={{ favorite, setFavorite: setFavoriteDog }}
    >
      {props.children}
    </favoriteDogContext.Provider>
  );
};

export default FavoriteDogProvider;
