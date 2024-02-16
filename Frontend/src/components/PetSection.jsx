import React from "react";
import PetCard from "./PetCard";

const PetSection = ({ title, pets }) => {
  return (
    pets && pets.length > 0 && (
      <div className="pet-section">
        <h3 className="section-title">{title}</h3>
        <div className="pet-cards-container">
          {pets.map((pet, index) => (
            <PetCard
              key={pet._id}
              id={pet._id}
              image={pet.base64}
              breed={pet.breed}
              age={pet.age}
            />
          ))}
        </div>
      </div>
    )
  );
};

export default PetSection;
