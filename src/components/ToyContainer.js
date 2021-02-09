import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, deleteToy, updateToy}) {
  const toyList = toys.map((toy) => {
    return <ToyCard key={toy.id} toy={toy} deleteToy={deleteToy} updateToy={updateToy}
    />
  })
  return (
    <div id="toy-collection">{toyList}</div>
  );
}

export default ToyContainer;
