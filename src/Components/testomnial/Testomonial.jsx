import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Sletter from '../../assets/s letter.jpeg'; 
import Mletter from '../../assets/m letter.jpeg';
import './testimonial.css'; // Assuming you have a CSS file for styling

export default function Testomonial() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };
  return (
    <div  id='testimonials' >
      <h2> Client Testomnials </h2>
      <Slider {...settings} className='slider my-5 container shadow-lg  text-white pb-4 rounded-3' >
        <div >     
            <div className='pt-5 px-5 rounded  d-flex align-items-start' >
            <img src={Mletter} alt="client image" className='border rounded me-2 bg-success' width={70} height={70} />
            <p> “Choosing <strong>Al-Aref Business Services</strong> was the best decision for our company. 
              Their services helped us significantly reduce the time spent on government procedures and bureaucracy.”</p>
            </div> 
            <h6 className='text-white'> — Mahmoud Yehia, Founder of Al-Mostaqbal Technology</h6>
        </div>
        <div >     
            <div className='pt-5 px-5 rounded  d-flex align-items-start' >
            <img src={Sletter} alt="client image" className='border rounded me-2 bg-success' width={70} height={70} />
            <p> “The accuracy and efficiency of Al-Aref’s team are unmatched. We found quick and simplified solutions for all our legal and employment services.”</p>
            </div> 
            <h6 className='text-white'> — Sara El-Gamal, General Manager of Amwaj Real Estate Development</h6>
        </div>
    
      </Slider>
    </div>
  )
}
