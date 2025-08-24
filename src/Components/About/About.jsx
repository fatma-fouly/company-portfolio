import React from 'react'
import './About.css'
export default function About () {
  return (
    <div className='pb-4'>
         <section id="about" className="py-5 bg-white">
      <div className="container">
        <h2 className="text-center mb-4">About Us</h2>
        <div className="row pt-3 justify-content-center gap-5"> 
          {/* Vision */}
          <div className="col-md-5 about-card py-3 rounded rounded-3 border border-2 border-success shadow">
            <h3> Our Vision</h3>
            <p>
              We strive to be the first partner for entrepreneurs in the UAE
              and the Gulf region, providing innovative solutions that simplify
              government processes and enhance growth opportunities.  
            </p>
          </div>
          {/* Mission */}
          <div className="col-md-5 about-card py-3 rounded rounded-3 border border-2 border-success shadow">
            <h3>Our Mission</h3>
            <p>
              Our mission at Al-Aref Business Services is to simplify complex
              government procedures through specialized consulting and
              effective technical solutions, helping entrepreneurs focus on
              growing their businesses.
            </p>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}
