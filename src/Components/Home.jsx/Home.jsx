import React from "react"
import './Home.css'; // Assuming you have a CSS file for styling
const Home = () => {
  return (
    <section className="hero-section d-flex align-items-center" id="home">
      <div className="container text-center text-white">
        <h1 className="display-4 fw-bold">Al-Aref Business Services</h1>
        <p className="lead font-bold">
          Your trusted partner for company formation and business setup in UAE
        </p>
        <button  className="btn btn2 btn-success btn-lg mt-3">
           <a href="#contact"> Contatct Us   </a>
        </button>
      </div>
    </section>
  );
};

export default Home;
