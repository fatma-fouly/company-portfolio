import ContactUs from './ContactUs'
import React from "react";


export default function Contactpage() {

  const services = [
    {
      title: "Company Formation",
      desc: "We provide company formation services for various types of businesses, including sole proprietorships and limited liability companies. Our legal experts offer comprehensive consultations on the appropriate company structure and assist you with preparing the required documents and registering with the relevant government authorities.",
    },
    {
      title: "Trade License Renewal",
      desc: "We simplify the process of renewing your trade license to ensure the continuity of your business activities. According to legal requirements, our team manages the renewal process smoothly, helping you avoid any delays or penalties.",
    },
    {
      title: "Cancellation License",
      desc: "If you decide to close your business, we offer trade license cancellation services that guide you through the necessary steps and legal procedures. Our goal is to make the process hassle-free while ensuring full compliance with regulations.",
    },
    {
      title: "Bank Account Opening",
      desc: "Assistance with opening local and international bank accounts through trusted partnerships, giving you the best options for financial operations.",
    },
    {
      title: "Corporate Sponsorship",
      desc: "We provide corporate sponsorship services to help you obtain a reliable local sponsor in compliance with UAE laws. Our services ensure a smooth and secure business setup, enabling you to complete your commercial transactions with ease.",
    },
    {
      title: "Partner Addition",
      desc: "Whether you wish to add a new partner or withdraw an existing one, we manage the entire process legally and efficiently. Our legal specialists ensure all procedures are carried out smoothly while protecting your business interests.",
    },
    {
      title: "Government Transactions",
      desc: "We handle the completion of government transactions and related procedures on your behalf. Our experts ensure timely processing of official paperwork, saving you effort and time while keeping you updated on every step.",
    },
    {
      title: "Tourist Visa Services",
      desc: "We assist travelers in obtaining tourist visas with ease and efficiency. Our team provides full support throughout the application process, ensuring all documents are prepared correctly and submitted on time. Whether you're planning a short vacation or a long stay, we help you secure the right visa smoothly and stress-free.",
    },
    {
      title: "Family Sponsorship Services ",
      desc: "We handle the completion of government transactions and related procedures on your behalf. Our experts ensure           We support individuals who wish to bring their family members to join them abroad. Our service guides you through the sponsorship process, helping with the required documentation, application submission, and compliance with immigration regulations to ensure a smooth and successful family reunion.",
    },
    {
      title: "Family Sponsorship Services ",
      desc: "We handle the completion of government transactions and related procedures on your behalf. Our experts ensure           We support individuals who wish to bring their family members to join them abroad. Our service guides you through the sponsorship process, helping with the required documentation, application submission, and compliance with immigration regulations to ensure a smooth and successful family reunion.",
    },
    {
      title: "Family Sponsorship Services ",
      desc: "We handle the completion of government transactions and related procedures on your behalf. Our experts ensure           We support individuals who wish to bring their family members to join them abroad. Our service guides you through the sponsorship process, helping with the required documentation, application submission, and compliance with immigration regulations to ensure a smooth and successful family reunion.",
    },
    {
      title: "Family Sponsorship Services ",
      desc: "We handle the completion of government transactions and related procedures on your behalf. Our experts ensure           We support individuals who wish to bring their family members to join them abroad. Our service guides you through the sponsorship process, helping with the required documentation, application submission, and compliance with immigration regulations to ensure a smooth and successful family reunion.",
    },

  ];

  return (
    <div className='my-4 py-5'>
      <ContactUs   />

      <section className="py-4">
      <div className="container">
        <h3 className="text-center fw-bold mb-5 h2 text-success ">Know more about our services </h3>
        <div className="row gy-4">
          {services.map((s, i) => (
            <div key={i} className="col-md-6">
              <div className="border rounded-4 shadow-sm overflow-hidden h-100">
                <div className="p-3">
                  <h4 className="text-success fw-bold">{s.title}</h4>
                  <p className="text-end h6">{s.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    </div>
  )
}
