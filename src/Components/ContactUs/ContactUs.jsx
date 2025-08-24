import React from 'react'
import './contactus.css'

export default function ContactUs() {
  return (
    <div className='contact-us my-4' id='contact'>
      <h2>Contact Us</h2>
      <div className="container col-md-6">
        <form className='my-4 p-4 shadow rounded  text-end'  style={{backgroundColor: '#ffffffff'}} >
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" required />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" required />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea className="form-control" id="message" rows="4" required></textarea>
          </div>
          <button type="submit" className="btn btn-success">Submit</button> 
        </form>
      </div>
    </div>
  )
}
