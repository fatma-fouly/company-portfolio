import React from 'react'
import './contactus.css'
import Swal  from 'sweetalert2';  
import { useTranslation } from 'react-i18next';

export default function ContactUs() {
  const { t, i18n } = useTranslation("contact");
   const [result , setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "2dbaf302-bad0-4e68-9b06-2a04b74e5b8c");

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
     setResult("");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className='contact-us my-4' id='contact'>
      {/* <h2>Contact Us</h2> */}
     <section className='contact-section  pt-3 mt-4' id='contact'>
      <div className="container">
        <div className="row justify-content-center py-3 ">
          <div className="col-md-5 my-5">
            <h3 className='h2  text-white my-2'>{t("contact.heading")} </h3>
            <p className='text-white fw-bold my-4'><i className="fa-solid fa-phone"></i> : +97 2358740687</p>
            <p className='text-white fw-bold'><i className="fa-solid fa-envelope-circle-check"></i> : info@al-arif.net </p>
            <p className='text-white fw-bold'><i className="fa-brands fa-facebook"></i> : facebook@al-arif.net </p>
          </div>
          <div className="col-md-5">
            <div className="contact-card shadow p-4 rounded">
              <h3 className="form-header text-center mb-3 text-muted">{t("contact.formTitle")}</h3>
              <form onSubmit={onSubmit}>
                <div className="mb-3 text-start">
                  <label htmlFor="name"  className="form-label">{t("contact.name")}</label>
                  <input required name='name' type="text" className="form-control" id="name"  />
                </div>
                <div className="mb-3 text-start"> 
                  <label htmlFor="email" className="form-label">{t("contact.emailLabel")}</label>
                  <input required type="email" name='email' className="form-control" id="email"  />
                </div>
                <div className="mb-3  text-start">
                  <label htmlFor="message" className="form-label">{t("contact.message")}</label>
                  <textarea name='message' className="form-control" id="message" rows="4" ></textarea>
                </div>
                <button type="submit" className="btn btn-success w-100"> {result === "Sending...." ? "Sending..." : t("contact.submit")}</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}
