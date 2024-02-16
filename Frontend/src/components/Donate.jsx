import React from "react";
import "../css/Donate.css";

const Donate = () => {
  const handleDonate = async () => {
    const result = await fetch("http://localhost:3000/donation", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    });
    const { donationUrl } = await result.json();
    window.location.href = donationUrl;
  };
  return (
    <>
      <section className="home-sec" id="home">
        <div className="container">
          <div className="home-content">
            <div className="home-info">
              <h2>Alone we can do little, together we can do so much</h2>
              <h3>
                <span>Pet Palace</span> a place for you to find a new family
                member
              </h3>
              <p>
                Make a difference today: donate to petPalace and help us in
                taking care of these pets.
              </p>
              <div className="buttons">
                <a className="btn1" onClick={handleDonate}>
                  Donate now
                </a>
              </div>
            </div>
            <div className="img-sec">
              <img src="/images/img-1.png" alt="home-image" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Donate;
