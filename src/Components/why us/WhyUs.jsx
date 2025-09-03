import React from 'react';
import './whyus.css';
import whyusvideo from '../../assets/why-us.mp4'; // Assuming you have an image for the Why Us section
import { useTranslation } from 'react-i18next';
export default function WhyUs() {
  const { t } = useTranslation("whyus");

  return (
    <div id='whyus' className='why-us pt-4 mb-5'>
      <h2 >{t("heading")}</h2>
      <div className="container" >
       <div className="row">
        <div className="col-md-6 mb-5 mt-5">
           <video className="w-100 rounded shadow" autoPlay loop muted  > <source src={whyusvideo} type="video/mp4" /> Your browser does not support the video tag. </video>
        </div>
        <div className= {`col-md-6 text-start  my-4 `}>
            <h6>{t("points.innovative.title")}</h6>
            <p>{t("points.innovative.desc")}</p>
            <h6>{t("points.accuracy.title")}</h6>
            <p>{t("points.accuracy.desc")}</p>
            <h6>{t("points.partnership.title")}</h6>
            <p>{t("points.partnership.desc")}</p>
            <h6>{t("points.laws.title")}</h6>
            <p>{t("points.laws.desc")}</p>
            <h6>{t("points.experience.title")}</h6>
            <p>{t("points.experience.desc")} </p>
        </div>
       </div>
      </div>
    </div>
  )
}
