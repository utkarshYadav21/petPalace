import React, { useState } from "react";
import "../css/Giveaway.css"


const GiveawayForm = () => {
  const [image,setImage]=useState("")
  const [formData, setFormData] = useState({
    type: "",
    breed: "",
    owner: "",
    age: "",
    description: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const convertToBase64 = (e) => {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      setImage(reader.result)
    };
    reader.onerror = (err) => {
      console.log(err);
    };
  };

  const addPet = async () => {
    const pet = await fetch("http://localhost:3000/giveaway", {
      method: "POST",
      body: JSON.stringify({formData:formData,image:image}),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    });
    const result = await pet.json();
    console.log(result);
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <form className="giveaway-form">
        <h2>Giveaway</h2>
        {Object.entries(formData).map(([key, value]) => (
          <div key={key}>
            <label htmlFor={key} className="giveaway-label">{key.charAt(0).toUpperCase() + key.slice(1)}</label>
            {key === "description" ? (
              <textarea name={key} value={value} onChange={handleChange} required />
            ) : (
              <input type="text" name={key} value={value} onChange={handleChange} required className="giveaway-input"/>
            )}
          </div>
        ))}
        <label htmlFor="Image" className="giveaway-label">Image</label>
        <input accept="image/*" type="file" name="image" onChange={convertToBase64} className="giveaway-input"/>
        <button type="button" onClick={addPet}>
          Give
        </button>
      </form>
    </div>
  );
};

export default GiveawayForm;
