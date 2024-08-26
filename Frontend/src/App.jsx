import "./css/App.css";
import "./css/UserForm.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Footer from "./components/Footer";
import GiveawayForm from "./components/GiveawayForm";
import Adopt from "./components/Adopt";
import PetDetails from "./components/PetDetails";
import Donate from "./components/Donate";

function App() {

  return (
    <div className="full-container">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/adopt" element={<Adopt />} />
          <Route path="/adopt/:id" element={<PetDetails />} />
          <Route path="/giveaway" element={<GiveawayForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/donate" element={<Donate />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
