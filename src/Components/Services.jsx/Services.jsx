import './Services.css';
import { useTranslation } from "react-i18next";
import formation from "../../assets/company formation.webp";
import trade from "../../assets/lisence.webp";
import bankimg from "../../assets/credit-card.webp";
import cancellation from "../../assets/cancellation.webp";
import corporate from "../../assets/corporation.webp";
import partner from "../../assets/bussiness advisor.webp";
import service2 from "../../assets/holding-trave.webp";
import service3 from "../../assets/service 3.webp";
import family from "../../assets/family.png";
import tax from "../../assets/tax-return-filing.webp";
import certificate from "../../assets/certificates.webp";
import notary from "../../assets/middle-eastern.webp"
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";


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
                  <LazyLoadImage
  src={images[service.id]}
  alt={service.title}
  height={200}
  width="100%"
  loading="lazy"
  decoding="async"
  // effect="blur"
  placeholder={
    <div
      style={{
        width: "100%",
        height: "200px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#f9f9f9",
      }}
    >
      {/* Bootstrap spinner */}
      <div className="spinner-border text-success" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  }
/>

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
