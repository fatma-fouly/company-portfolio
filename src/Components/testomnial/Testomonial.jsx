import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Sletter from '../../assets/s letter.jpeg'; 
import Mletter from '../../assets/m letter.jpeg';
import './testimonial.css'; 
import { useTranslation } from 'react-i18next';


export default function Testomonial() {

  const { t, i18n } = useTranslation("testomonial");

    const settings = {
        dots: true,
        color: 'green',
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    const currentLanguage = i18n.language;
  return (
    <div  id='testimonials' className='px-3'>
   <h2>{t("heading")}</h2>

      <div className='row '>
        <Slider {...settings} className='slider col-md-7 col-sm-11 my-5 mx-auto shadow-lg  text-white pb-4 rounded-3' >
        <div >     
            <div className={`pt-5 rounded d-flex align-items-start 
              ${currentLanguage === "ar" ? "flex-row-reverse" : ""}` }>
            <img src={Mletter} alt="client feedback 1" className='border rounded me-2 bg-success' width={70} height={70} />
            <p>{t("1.feedback")}</p>
            </div> 
            <h6 className='text-white'>{t("1.name")}, {t("1.role")}</h6>
        </div>
        <div >     
            <div className={`pt-5  rounded  d-flex align-items-start  
              ${currentLanguage === "ar" ? "flex-row-reverse" : "" }` } >
            <img src={Sletter} alt="client feedback 2" className='border rounded me-2 bg-success' width={70} height={70} />
            <p>{t("2.feedback")}</p>
            </div> 
            <h6 className='text-white'> {t("2.name")}, {t("2.role")}</h6>
        </div>
    
      </Slider>
      </div>
    </div>
  )
}
