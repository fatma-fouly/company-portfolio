import  './Services.css' ;
import formation from '../../assets/company formation.jpg';
import trade from '../../assets/lisence.jpg';
import bankimg from '../../assets/credit-card.jpg';
import cancellation from '../../assets/cancellation.jpg';
import corporate from '../../assets/corporation.jpg';
import Partner from '../../assets/bussiness adding.jpg';
import government from '../../assets/driving.jpg';
import service2 from '../../assets/holding-trave.jpg'
import service3 from '../../assets/service 3.jpeg'
import family from '../../assets/family.png'


export default function Services() {

// 
  return (
  <div className='services-container' >
   <h2 className='services-heading my-5'>
  Our Services
  </h2> 
  <div className="container" id="services">
  <div className="row gap-5 align-items-stretch justify-content-center my-3 pb-5">
    
    {/* Company Formation */}
    <div className="col-md-3 border border-1 shadow-sm my-2 h-100">
      <div className="service-card d-flex flex-column justify-content-between h-100 text-end">
        <div>
          <img src={formation} alt="Service" height={200} className="w-100 d-block" />
          <h3 className="my-2 text-center text-success">Company Formation</h3>
          <p className="px-3 text-end text-truncate-3">
            We provide company formation services for various types of businesses,
            including sole proprietorships and limited liability companies...
          </p>
     
        </div>
        <div className="p-3">
       <a href="/contact-only" target='_blank'>
        <button  className="btn btn-success rounded w-100"> Read more ..  </button>  </a>
        </div>
      </div>
    </div>

    {/* Trade License Renewal */}
    <div className="col-md-3 border border-1 shadow-sm my-2 h-100">
      <div className="service-card d-flex flex-column justify-content-between h-100 text-end">
        <div>
          <img src={trade} alt="Service" height={200} className="w-100 d-block" />
          <h4 className="my-2 text-success text-center">Trade License Renewal</h4>
          <p className="px-3 text-end text-truncate-3">
            We simplify the process of renewing your trade license to ensure continuity
            of your business activities. Our team manages the renewal process smoothly...
          </p>
        </div>
        <div className="p-3">
             <a href="/contact-only" target='_blank'>
        <button  className="btn btn-success rounded w-100"> Read more ..  </button>  </a>
        </div>
      </div>
    </div>

    {/* Cancellation License */}
    <div className="col-md-3 border border-1 shadow-sm my-2 h-100">
      <div className="service-card d-flex flex-column justify-content-between h-100 text-end">
        <div>
          <img src={cancellation} alt="Service" height={200} className="w-100 d-block" />
          <h4 className="my-2 text-success text-center ">Cancellation License</h4>
          <p className="px-3 text-end text-truncate-3">
            If you decide to close your business, we offer trade license cancellation
            services that guide you through the necessary steps and procedures...
          </p>
        </div>
        <div className="p-3">
              <a href="/contact-only" target='_blank'>
        <button  className="btn btn-success rounded w-100"> Read more ..  </button>  </a>
        </div>
      </div>
    </div>

    {/* Bank Account Opening */}
    <div className="col-md-3 border border-1 shadow-sm my-2 h-100">
      <div className="service-card d-flex flex-column justify-content-between h-100 text-end">
        <div>
          <img src={bankimg} alt="Service" height={200} className="w-100 d-block" />
          <h4 className="my-2 text-success text-center">Bank Account Opening</h4>
          <p className="px-3 text-end text-truncate-3">
            Assistance with opening local and international bank accounts through
            trusted partnerships, giving you the best options for operations...
          </p>
        </div>
        <div className="p-3">
     <a href="/contact-only" target='_blank'>
        <button  className="btn btn-success rounded w-100"> Read more ..  </button>  </a>        </div>
      </div>
    </div>

    {/* Corporate Sponsorship */}
    <div className="col-md-3 border border-1 shadow-sm my-2 h-100">
      <div className="service-card d-flex flex-column justify-content-between h-100 text-end">
        <div>
          <img src={corporate} alt="Service" height={200} className="w-100 d-block" />
          <h4 className="my-2 text-success text-center">Corporate Sponsorship</h4>
          <p className="px-3 text-end text-truncate-3">
            We provide corporate sponsorship services to help you obtain a reliable
            local sponsor in compliance with UAE laws...
          </p>
        </div>
        <div className="p-3">
     <a href="/contact-only" target='_blank'>
        <button  className="btn btn-success rounded w-100"> Read more ..  </button>  </a>        </div>
      </div>
    </div>

    {/* Partner Addition */}
    <div className="col-md-3 border border-1 shadow-sm my-2 h-100">
      <div className="service-card d-flex flex-column justify-content-between h-100 text-end">
        <div>
          <img src={Partner} alt="Service" height={200} className="w-100 d-block" />
          <h4 className="my-2 text-success text-center">Partner Addition</h4>
          <p className="px-3 text-end text-truncate-3">
            Whether you wish to add a new partner or withdraw an existing one, we manage
            the entire process legally and efficiently...
          </p>
        </div>
        <div className="p-3">
     <a href="/contact-only" target='_blank'>
        <button  className="btn btn-success rounded w-100"> Read more ..  </button>  </a>        </div>
      </div>
    </div>

    {/* Government Transactions */}
    <div className="col-md-3 border border-1 shadow-sm my-2 h-100">
      <div className="service-card d-flex flex-column justify-content-between h-100 text-end">
        <div>
          <img src={service3} alt="Service" height={200} className="w-100 d-block" />
          <h4 className="my-2 text-success text-center">Government Transactions</h4>
          <p className="px-3 text-end text-truncate-3">
            We handle the completion of government transactions and procedures on your
            behalf, ensuring timely processing of paperwork...
          </p>
        </div>
        <div className="p-3">
     <a href="/contact-only" target='_blank'>
        <button  className="btn btn-success rounded w-100"> Read more ..  </button>  </a>        </div>
      </div>
    </div>
   {/* Tourism paper  */}
    <div className="col-md-3 border border-1 shadow-sm my-2 h-100">
      <div className="service-card d-flex flex-column justify-content-between h-100 text-end">
        <div>
          <img src={service2} alt="Service" height={200} className="w-100 d-block" />
          <h4 className="my-2 text-success text-center">Tourist Visa Services</h4>
          <p className="px-3 text-end text-truncate-3">
          We assist travelers in obtaining tourist visas with ease and efficiency. Our team provides full support throughout the application process, ensuring all documents are prepared correctly and submitted on time. Whether you're planning a short vacation or a long stay, we help you secure the right visa smoothly and stress-free...
          </p>
        </div>
        <div className="p-3">
     <a href="/contact-only" target='_blank'>
        <button  className="btn btn-success rounded w-100"> Read more ..  </button>  </a>        </div>
      </div>
    </div>
   {/* Family Sponsorship Services  */}
    <div className="col-md-3 border border-1 shadow-sm my-2 h-100">
      <div className="service-card d-flex flex-column justify-content-between h-100 text-end">
        <div>
          <img src={family} alt="Service" height={200} className="w-100 d-block" />
          <h4 className="my-2 text-success text-center">Family Sponsorship</h4>
          <p className="px-3 text-end text-truncate-3">
          We support individuals who wish to bring their family members to join them abroad. Our service guides you through the sponsorship process, helping with the required documentation, application submission, and compliance with immigration regulations to ensure a smooth and successful family reunion....
          </p>
        </div>
        <div className="p-3">
     <a href="/contact-only" target='_blank'>
        <button  className="btn btn-success rounded w-100"> Read more ..  </button>  </a>        </div>
      </div>
    </div>

  </div>
</div>

    </div>
  )
}
