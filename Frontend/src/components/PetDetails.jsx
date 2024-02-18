import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../css/Details.css";


const PetDetails = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [pet, setPet] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { id } = useParams();
  const navigate=useNavigate();

  useEffect(() => {
    getPetData();
    let user=localStorage.getItem("user");
    user=JSON.parse(user)
    console.log(user)
    if (user){
      setName(user.Name);
      setEmail(user.Email);
    }
  },[]);
  const postAdoptRequest=async(e)=>{
    e.preventDefault();
    let result=await fetch(`http://localhost:3000/adopt/${id}`,{
      method:'post',
      body:JSON.stringify({name,email,phone,address,id}),
      headers:{
        'Content-Type':'application/json',
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
      }
    })
    result=await result.json();
    setIsModalOpen(false);
    if(result){
      alert("Your request for adoption has been sent. Our team will contact you through your email.");
      navigate('/adopt');
    }

  }
  const getPetData = async () => {
    let data = await fetch(`http://localhost:3000/adopt/${id}`, {
      method: "get",
      headers: {
        authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    });
    if (data.status === 401) {
      navigate("/login");
      return;
    }
    const { pet } = await data.json();
    console.log(pet);
    setPet(pet);
  };
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="pet-details-container">
      <img className="pet-image" src={pet.image} alt="pet-image" />
      <p className="pet-title my-title">{pet.breed}</p>
      <p className="pet-info">Age: {pet.age}</p>
      <p className="pet-info">Category: {pet.petType}</p>
      <p className="pet-info">{pet.address}</p>

      <div className="pet-section">
        <h1 className="pet-subtitle my-subtitle">Pet Owner Info</h1>
        <p className="pet-info">{pet.petOwner}</p>
      </div>

      <div className="pet-section">
        <h2 className="pet-subtitle my-subtitle">Pet Description</h2>
        <p className="pet-info">{pet.petDescription}</p>
      </div>

      <div className="pet-section">
        <div className="flex">
          <button className="adopt-btn my-btn" onClick={openModal}>
            Adopt
          </button>
        </div>
      </div>
      {isModalOpen && (
        <div className="modal-overlay">
          <form className="adoption-form">
            <button
              className="close-btn btn btn-sm btn-circle btn-ghost"
              onClick={closeModal}
            >
              ×
            </button>
            <div className="form-top-div">
              <label className="font-bold">Your name</label>
              <input
                disabled
                className="request-input-field"
                placeholder="Your name"
                name="name"
                type="text"
                value={name}
              />
            </div>
            <div>
              <label className="font-bold">Your email</label>
              <input 
              disabled
                className="request-input-field"
                placeholder="Your email"
                name="email"
                type="email"
                value={email}
              />
            </div>
            <div>
              <label className="font-bold">Your phone number</label>
              <input
                className="request-input-field"
                name="number"
                placeholder="Your phone number"
                type="number"
                value={phone}
                onChange={(e)=>setPhone(e.target.value)}
              />
            </div>
            <div>
              <label className="font-bold">Your address</label>
              <textarea
                className="textarea"
                name="address"
                placeholder="Your address"
                type="text"
                value={address}
                onChange={(e)=>setAddress(e.target.value)}
              />
            </div>
            <button className="adoption-request-btn" onClick={postAdoptRequest}>Adoption Request</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default PetDetails;
