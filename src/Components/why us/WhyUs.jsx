import React from 'react';
import './whyus.css';
import whyusvideo from '../../assets/why-us.mp4'; // Assuming you have an image for the Why Us section

export default function WhyUs() {
  return (
    <div id='whyus' className='why-us pt-4 mb-5'>
      <h2 >Why Us..  ?</h2>
      <div className="container" >
       <div className="row">
        <div className="col-md-6 mb-5 mt-5">
           <video className="w-100 rounded shadow" autoPlay loop muted  > <source src={whyusvideo} type="video/mp4" /> Your browser does not support the video tag. </video>
        </div>
        <div className="col-md-6 text-end my-4">
            <h6>Innovative Solutions:</h6>
            <p>We provide tailored solutions that match your unique needs, using the latest tools and technologies.</p>
            <h6>Accuracy and Efficiency:</h6>
            <p>Our extensive experience in dealing with government procedures and bureaucracy ensures you save both time and money.</p>
            <h6>Long-Term Strategic Partnership:</h6>
            <p>We see you as a strategic partner and support your growth in a highly competitive market.</p>
            <h6>Expertise in Local Laws and Regulations:</h6>
            <p>We specialize in local laws and government regulations, offering highly efficient legal services.</p>
            <h6>Extensive Experience and Strong Network</h6>
            <p>With years of experience in the local market, we have built a strong network of relationships with government authorities and the private sector.</p>
        </div>
       </div>
      </div>
    </div>
  )
}
