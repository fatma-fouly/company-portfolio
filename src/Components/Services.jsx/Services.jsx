
import './Services.css';
import { useTranslation } from "react-i18next";
import formation from '../../assets/company formation.jpg';
import trade from '../../assets/lisence.jpg';
import bankimg from '../../assets/credit-card.jpg';
import cancellation from '../../assets/cancellation.jpg';
import corporate from '../../assets/corporation.jpg';
import partner from '../../assets/bussiness advisor.jpg';
import service2 from '../../assets/holding-trave.jpg';
import service3 from '../../assets/service 3.jpeg';
import family from '../../assets/family.png';
import tax from '../../assets/tax-return-filing.jpg';
import certificate from '../../assets/certificates.jpg';
import notary from '../../assets/middle-eastern.jpg';
import i18n from '../../i18n';

const images = {
  1: formation,
  2: trade,
  3: cancellation,
  4: bankimg,
  5: corporate,
  6: partner,
  7: service3,
  8: service2,
  9: family,
  10: tax,
  11: certificate,
  12: notary
};

export default function Services() {
  const { t } = useTranslation("services");
  const services = t("items", { returnObjects: true });
  // const currentLanguage = i18n.language || window.localStorage.i18nextLng || "en";

  return (
    <div className='services-container'>
      <h2 className='services-heading my-5'>{t("title")}</h2>
      <div className="container" id="services">
        <div className="row gap-5 px-2 align-items-stretch justify-content-center my-3 pb-5">
          {services.map(service => (
            <div key={service.id} className="col-md-3 border border-1 shadow-sm my-2 h-100">
              <div className="service-card d-flex flex-column justify-content-between h-100 text-start">
                <div>
                  <img src={images[service.id]} alt={service.title} height={200} className="w-100 d-block" loading='lazy'/>
                  <h4 className="my-2 text-success text-center">{service.title}</h4>
                  <p className= {`px-3 text-truncate-3`}  >{service.description}</p>
                </div>
                <div className="p-3">
                  <a href={`/services/${service.id}`} target="_blank" rel="noopener noreferrer">
                    <button className="btn btn-success rounded w-100">{t("readMore", "Read more ..")}</button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
