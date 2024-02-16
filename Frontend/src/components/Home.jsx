import React from "react";
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <>
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
      <div className="adopt-div">
        <div>
          <h3 className="adopt-head">Welcome to Pet Palace</h3>
          <p className="adopt-content">
            Glad that you care for animals. We make sure you will not repent
            your decision of adopting a pet. Embrace joy and companionship by
            adopting a pet today. Provide a loving home and make a lasting
            impact on a furry friend's life.
          </p>
          <button className="adopt-btn" ><Link to="/adopt">Adopt</Link></button>
        </div>
        <img
          className="adopt-img"
          src="https://www.creativefabrica.com/wp-content/uploads/2021/10/18/Veterinary-Logo-Pet-Shop-Graphics-18937465-1-1-580x348.jpg"
        />
      </div>
      <div className="giveaway-div">
        <div>
          <h3 className="giveaway-head">
            If you can't take care of your pet, we will!
          </h3>
          <p className="giveaway-content">
            Whether you're unable to care for your pet or you simply want to
            help an animal find a loving home, your decision can make a world of
            difference. Join us in creating happier tails!
          </p>
          <button className="giveaway-btn"><Link to="/giveaway">Giveaway</Link></button>
        </div>
      </div>
      <div className="outro">
        <img
          className="outro-img"
          src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/07/19/14/dog-walking.jpg"
        />
        <div>
          <h3 className="outro-head">Pets bring mental wellness</h3>
          <p className="outro-content">
            Owning a pet offers more than companionship; it's linked to improved
            mental well-being by reducing stress. Daily routines of caring for a
            pet also encourage increased physical activity, promoting better
            overall health.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
