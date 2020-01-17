import React, { useContext } from "react";

import { favoriteDogContext } from "./contexts/favoriteDogContext";

const DogChooser = () => {
  const { setFavorite } = useContext(favoriteDogContext);
  console.log("bk: DogChooser: setFavorite: ", setFavorite);
  return (
    <>
      <button onClick={() => setFavorite("husky")}>husky</button>
      <button onClick={() => setFavorite("chihuahua")}>chihuahua</button>
    </>
  );
};

export default DogChooser;
