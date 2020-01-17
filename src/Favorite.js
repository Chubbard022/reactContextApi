import React, { useContext } from "react";

import { favoriteDogContext } from "./contexts/favoriteDogContext";

const Favorite = () => {
  const { favorite } = useContext(favoriteDogContext);
  console.log("bk: Favorite.js: Favorite: favorite: ", favorite);
  return <h3>{favorite}</h3>;
};

export default Favorite;
