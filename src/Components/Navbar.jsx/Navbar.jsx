import React from 'react'
import logo  from '../../assets/logo.png' // Adjust the path as necessary
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function Navbar() {
  return (
 <nav className="navbar navbar-expand-lg bg-white shadow opacity-75 fixed-top"> 
  <div className="container">
    <a className="navbar-brand" href="#">
      <img src= {logo} alt='Al-aref logo ' height="60rem" width="60rem" />
    </a>

       {/* Toggle (for mobile)  */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
      <span className="navbar-toggler-icon"></span>
    </button>

    {/* Links  */}
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto fw-bold">
            <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
            <li className="nav-item"><a className="nav-link" href="#services">Services</a></li>
            <li className="nav-item"><a className="nav-link" href="#departments">Departments</a></li>
            <li className="nav-item"><a className="nav-link" href="#whyus">Why Us</a></li>
            <li className="nav-item"><a className="nav-link" href="#testimonials">Testimonials</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
      </ul>
        {/* /* Language  * /  */}
      <div className="ms-3">
        <button className="btn btn-outline-success btn-sm">EN</button>
        <button className="btn btn-outline-secondary btn-sm">AR</button>
      </div>
    </div>
  </div>
</nav>


  )
}
