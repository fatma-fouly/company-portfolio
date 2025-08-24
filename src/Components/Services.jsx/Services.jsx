import  './Services.css' ;
import formation from '../../assets/company formation.jpg';
import trade from '../../assets/international trade.jpg';
import bankimg from '../../assets/credit-card.jpg';
import cancellation from '../../assets/cancellation.jpg';
import corporate from '../../assets/corporation.jpg';
import Partner from '../../assets/bussiness adding.jpg';
import government from '../../assets/20602.jpg';
// import driving from '../../assets/driving.jpg';
// import busineesAdvisory from '../../assets/bussiness advisor.jpg';
// import medical from '../../assets/medical.jpg';

export default function Services() {
  return (
    <div className='services-container' >
  <h2 className='services-heading my-5'>
  Our Services
  </h2> 
   <div className="container " id='services'>
    <div className="row gap-5  justify-content-center my-3 pb-5">
      <div className="col-md-3 border border-1 shadow-sm my-2 service-card ">
        <div className="service-card p-0 m-0">
         <img src={formation} alt="Residence & Work Visa"  className='w-100 d-block'/>
          <h3 className='my-2 text-success'>Company Formation</h3>
          <p>We provide company formation services for various types of businesses, including sole proprietorships and limited liability companies. Our legal experts offer comprehensive consultations on the appropriate company structure and assist you with preparing the required documents and registering with the relevant government authorities.</p>
        </div>
        </div>
      <div className="col-md-3 border border-1 shadow-sm my-2 service-card ">
        <div className="service-card p-0 m-0">
         <img src={trade} alt="Residence & Work Visa"  className='w-100 d-block'/>
          <h3 className='my-2 text-success'>Trade License Renewal</h3>
          <p>We simplify the process of renewing your trade license to ensure the continuity of your business activities. According to legal requirements, our team manages the renewal process smoothly, helping you avoid any delays or penalties.</p>
        </div>
        </div>
      <div className="col-md-3 border border-1 shadow-sm my-2 service-card ">
        <div className="service-card p-0 m-0">
         <img src={cancellation} alt="Residence & Work Visa"  className='w-100 d-block'/>
          <h3 className='my-2 text-success'>Trade License Cancellation</h3>
          <p>If you decide to close your business, we offer trade license cancellation services that guide you through the necessary steps and legal procedures. Our goal is to make the process hassle-free while ensuring full compliance with regulations.</p>        </div>
        </div>
      <div className="col-md-3 border border-1 shadow-sm my-2 service-card ">
        <div className="service-card p-0 m-0">
         <img src={bankimg} alt="Residence & Work Visa"  className='w-100 d-block'/>
          <h3 className='my-2 text-success'>Bank Account Opening</h3>
          <p>Assistance with opening local and international bank accounts through trusted partnerships, giving you the best options for financial operations.</p>
        </div>
        </div>
      <div className="col-md-3 border border-1 shadow-sm my-2 service-card ">
        <div className="service-card p-0 m-0">
         <img src={corporate} alt="Residence & Work Visa"  className='w-100 d-block'/>
          <h3 className='my-2 text-success'>Corporate Sponsorship</h3>
          <p>We provide corporate sponsorship services to help you obtain a reliable local sponsor in compliance with UAE laws. Our services ensure a smooth and secure business setup, enabling you to complete your commercial transactions with ease.</p>
        </div>
        </div>
      <div className="col-md-3 border border-1 shadow-sm my-2 service-card ">
        <div className="service-card p-0 m-0">
         <img src={Partner} alt="Residence & Work Visa"  className='w-100 d-block'/>
          <h3 className='my-2 text-success'>Partner Addition & Withdrawal</h3>
          <p>Whether you wish to add a new partner or withdraw an existing one, we manage the entire process legally and efficiently. Our legal specialists ensure all procedures are carried out smoothly while protecting your business interests.</p>
        </div>
        </div>
      <div className="col-md-3 border border-1 shadow-sm my-2 service-card ">
        <div className="service-card p-0 m-0">
         <img src={government} alt="Residence & Work Visa"  className='w-100 d-block'/>
          <h3 className='my-2 text-success'>Government Transactions & Client Follow-up</h3>
          <p>We handle the completion of government transactions and related procedures on your behalf. Our experts ensure timely processing of official paperwork, saving you effort and time while keeping you updated on every step.</p>
        </div>
        </div>
     
 
      </div>
    </div>  
    </div>
  )
}
