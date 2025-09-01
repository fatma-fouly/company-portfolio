
import ContactUs from './ContactUs'
import { useParams } from "react-router-dom";
import formation from '../../assets/company formation.jpg';
import trade from '../../assets/lisence.jpg';
import bankimg from '../../assets/credit-card.jpg';
import cancellation from '../../assets/cancellation.jpg';
import corporate from '../../assets/corporation.jpg';
import partner from '../../assets/bussiness advisor.jpg';
import service2 from '../../assets/holding-trave.jpg'
import service3 from '../../assets/service 3.jpeg'
import family from '../../assets/family.png'
import tax  from '../../assets/tax-return-filing.jpg' ;
import certificate from '../../assets/certificates.jpg' ;
import notary from  '../../assets/middle-eastern.jpg' ;

export default function Contactpage() {
  const { id } = useParams(); // هنا بناخد الـ id من اللينك

   const services = [
    {
      id : '1' ,
      title: "Company Formation",
      img : formation ,
      desc: "We provide company formation services for various types of businesses, including sole proprietorships and limited liability companies. Our legal experts offer comprehensive consultations on the appropriate company structure and assist you with preparing the required documents and registering with the relevant government authorities.",
    },
    {
      id :'2' ,
      title: "Trade License Renewal",
      img : trade ,
      desc: "We simplify the process of renewing your trade license to ensure the continuity of your business activities. According to legal requirements, our team manages the renewal process smoothly, helping you avoid any delays or penalties.",
    },
    {
      id :'3',
      title: "Cancellation License",
      img : cancellation ,
      desc: "If you decide to close your business, we offer trade license cancellation services that guide you through the necessary steps and legal procedures. Our goal is to make the process hassle-free while ensuring full compliance with regulations.",
    },
    {
      id :'4' ,
      title: "Bank Account Opening",
      img : bankimg ,
      desc: "Assistance with opening local and international bank accounts through trusted partnerships, giving you the best options for financial operations.",
    },
    {
      id: '5' ,
      title: "Corporate Sponsorship",
      img : corporate,
      desc: "We provide corporate sponsorship services to help you obtain a reliable local sponsor in compliance with UAE laws. Our services ensure a smooth and secure business setup, enabling you to complete your commercial transactions with ease.",
    },
    {
      id :'6',
      title: "Partner Addition",
      img : partner ,
      desc: "Whether you wish to add a new partner or withdraw an existing one, we manage the entire process legally and efficiently. Our legal specialists ensure all procedures are carried out smoothly while protecting your business interests.",
    },
    {
      id :'7' ,
      title: "Government Transactions",
      img : service3 ,
      desc: "We handle the completion of government transactions and related procedures on your behalf. Our experts ensure timely processing of official paperwork, saving you effort and time while keeping you updated on every step.",
    },
    {
      id : '8' ,
      title: "Tourist Visa Services",
      img : service2 ,
      desc: "We assist travelers in obtaining tourist visas with ease and efficiency. Our team provides full support throughout the application process, ensuring all documents are prepared correctly and submitted on time. Whether you're planning a short vacation or a long stay, we help you secure the right visa smoothly and stress-free.",
    },
    {
      id :'9' ,
      title: "Family Sponsorship Services ",
      img : family ,
      desc: "We handle the completion of government transactions and related procedures on your behalf. Our experts ensure           We support individuals who wish to bring their family members to join them abroad. Our service guides you through the sponsorship process, helping with the required documentation, application submission, and compliance with immigration regulations to ensure a smooth and successful family reunion.",
    },
    {
      id :'10',
      title: " Tax Registration ",
      img : tax ,
      desc: "We assist businesses in registering with the Federal Tax Authority to obtain a Tax Registration Number (TRN). Our service ensures compliance with UAE tax regulations and provides full support throughout the application process.",
    },
    {
      id :'11',
      title: " Certificate Attestation ",
      img : certificate ,
      desc: " We provide professional certificate attestation services for academic, personal, and commercial documents. This process authenticates your certificates, making them legally recognized within the UAE and abroad.",
    },
    {
      id :'12',
      title: " Notary Public Services ",
      img : notary ,
      desc: " We offer notary public services for the legalization of official documents, contracts, and declarations. Our support ensures that all documents are notarized in accordance with UAE law, granting them full legal validity.",
    },

  ];

  const service = services.find((s) => s.id === id);

  if (!service) {
    return <h2 className="text-center text-danger">Service not found</h2>;
  }

  return (

    <div>
    <div className="row mx-auto container">
      <section className="col-lg-5 d-flex flex-column pt-5 mt-5 justify-content-center align-items-center">
        <h3 className="text-end fw-bold  mb-3 h2 text-success">
          <i className="fa-solid fa-server"></i> {service.title}
        </h3>
        <div className="border rounded-4 shadow-sm overflow-hidden ">
          <div className="p-3">
            <img className='w-100 mb-3 mx-auto' height={250} src={service.img} alt=" Services "  />
            
            <p className="text-end h6 bg-white">{service.desc}</p>
          </div>
        </div>
      </section>

      <div className="mt-5 pt-5 col-lg-7">
        <ContactUs />
      </div>
    </div>
     </div>
  );
}


