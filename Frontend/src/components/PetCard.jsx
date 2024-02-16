import React from "react";
import "../css/petCard.css";
import { Link } from "react-router-dom";

const PetCard = ({ image, breed, age ,id}) => {
  const getDetails=()=>{
    console.log(id)
  }
  return (
    <div className="pet-card">
      <img className="pet-image" src={image} />
      <p style={{ marginTop: "2px" }}>
        <span style={{ fontWeight: "1000" }}>Breed: </span>
        {breed}
      </p>
      <p style={{ marginTop: "2px" }}>
        <span style={{ fontWeight: "1000" }}>Age: </span>
        {age} Years
      </p>
      <Link to={`/adopt/${id}`}><button className="pet-details-btn" onClick={getDetails}>Details</button></Link>
    </div>
  );
};

export default PetCard;
