import React from 'react'
import './contactus.css'
import Swal  from 'sweetalert2';  

export default function ContactUs() {
   const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      Swal.fire({
      title: "Submitted!",
      text: "We recieved your data!",
      icon: "success",
      confirmButtonText: "OK",
       customClass: {
       title: 'swal2-title'
         }
});
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className='contact-us my-4' id='contact'>
      <h2>Contact Us</h2>
     <section className='contact-section  pt-3 mt-4' id='contact'>
      <div className="container">
        <div className="row justify-content-center py-3 ">
          <div className="col-md-5 my-5">
            <h3 className='h2  text-white my-2'>Contact Us @t : </h3>
            <p className='text-white fw-bold my-4'><i className="fa-solid fa-phone"></i> : +97 2358740687</p>
            <p className='text-white fw-bold'><i className="fa-solid fa-envelope-circle-check"></i> : info@al-arif.net </p>
          </div>
          <div className="col-md-5">
            <div className="contact-card shadow p-4 rounded">
              <h3 className="form-header text-center mb-3 text-muted">Be in touch</h3>
              <form onSubmit={onSubmit}>
                <div className="mb-3 text-end ">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input required type="text" className="form-control" id="name" required />
                </div>
                <div className="mb-3 text-end">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input required type="email" className="form-control" id="email" required />
                </div>
                <div className="mb-3 text-end">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea className="form-control" id="message" rows="4" ></textarea>
                </div>
                <button type="submit" className="btn btn-success w-100">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}
