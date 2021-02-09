import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/toys")
    .then(res => res.json())
    .then(toysArray => setToys(toysArray))
  })

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function addToy(newToy) {
    const updatedArr = [...toys, newToy]
    setToys(updatedArr)
  }

  function deleteToy(deleteToy){
    const updatedToys = toys.filter((toy) => toy.id !== deleteToy.id

    )
    setToys(updatedToys)

  }


  function updateToy(t) {
    const updatedToys = toys.map((toy) => toy.id === t.id? t : toy)
    setToys(updatedToys)
  }
  return (
    <>
      <Header />
      {showForm ? <ToyForm addToy={addToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer deleteToy={deleteToy} updateToy={updateToy} toys={toys}/>
    </>
  );
}

export default App;
