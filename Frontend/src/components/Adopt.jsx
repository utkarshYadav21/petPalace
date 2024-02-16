import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/adopt.css";
import PetSection from "./PetSection";

const Adopt = () => {
  const [dogs, setDogs] = useState([]);
  const [cats, setCats] = useState([]);
  const [rabbits, setRabbits] = useState([]);
  const [birds, setBirds] = useState([]);
  const [hamsters, setHamsters] = useState([]);
  const [mouses, setMouses] = useState([]);

  useEffect(() => {
    getAllPets();
  }, []);
  const assignPets = (Dogs, Cats, Birds, Rabbits, Mouses, Hamsters) => {
    setDogs(Dogs);
    setBirds(Birds);
    setCats(Cats);
    setHamsters(Hamsters);
    setMouses(Mouses);
    setRabbits(Rabbits);
  };
  const searchPets = async (e) => {
    const searchKey = e.target.value.trim(); 
    if (searchKey === "") getAllPets()
    let pets = await fetch(`http://localhost:3000/search/${searchKey}`, {
      method: "get",
    });
    pets = await pets.json();
    let { Dogs, Cats, Birds, Rabbits, Mouses, Hamsters } = pets;
    assignPets(Dogs, Cats, Birds, Rabbits, Mouses, Hamsters);
  };

  const getAllPets = async () => {
    let pets = await fetch("http://localhost:3000/adopt");
    pets = await pets.json();
    let { Dogs, Cats, Birds, Rabbits, Mouses, Hamsters } = pets;
    assignPets(Dogs, Cats, Birds, Rabbits, Mouses, Hamsters);
  };
  return (
    <div>
      <div className="intro-container">
        <p className="intro">
          Every Pet Deserves a Loving Home. <br />
          <span>Adopt</span> a Pet Today
        </p>
        <p className="intro-des">
          Browse our available pets and learn more about the adoption process.
          Together, we can rescue, rehabilitate, and rehome pets in need. Thank
          you for supporting our mission to bring joy to families through pet
          adoption.
        </p>
      </div>
      <div className="searching">
        <h4 style={{ width: "98%", textAlign: "center", marginTop: "30px" }}>
          What are you looking for
        </h4>
        <div className="search-div">
          <input
            type="text"
            placeholder="Search..."
            onChange={searchPets}
            className="search-field"
          />
        </div>
      </div>
      <PetSection title="Dogs" pets={dogs} />
      <PetSection title="Cats" pets={cats} />
      <PetSection title="Rabbits" pets={rabbits} />
      <PetSection title="Birds" pets={birds} />
      <PetSection title="Mouses" pets={mouses} />
      <PetSection title="Hamsters" pets={hamsters} />
    </div>
  );
};

export default Adopt;
