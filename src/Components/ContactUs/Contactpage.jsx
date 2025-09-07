
import { useParams } from "react-router-dom";
import ContactUs from "./ContactUs";
import { useTranslation } from "react-i18next";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import formation from "../../assets/company formation.webp";
import trade from "../../assets/lisence.webp";
import bankimg from "../../assets/credit-card.webp";
import cancellation from "../../assets/cancellation.webp";
import corporate from "../../assets/corporation.webp";
import partner from "../../assets/bussiness advisor.webp";
import service2 from "../../assets/holding-trave.webp";
import service3 from "../../assets/service 3.webp";
import family from "../../assets/family.webp";
import tax from "../../assets/tax-return-filing.webp";
import certificate from "../../assets/certificates.webp";
import notary from "../../assets/middle-eastern.webp";

export default function Contactpage() {
  const { id } = useParams();
  const { t } = useTranslation("services");

  // ربط الصور بالـ id
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
    12: notary,
  };

  const serviceId = parseInt(id, 10);
  const services = t("items", { returnObjects: true }); // Array جاي من JSON الترجمة
  const service = services.find((s) => s.id === serviceId);

  if (!service) {
    return <h2 className="text-center text-danger">Service not found</h2>;
  }

  return (
    <div className="row mx-auto container">
      <section className="col-lg-5 d-flex flex-column pt-5 mt-5 justify-content-center align-items-center">
        <h3 className="text-end fw-bold mb-3 h2 text-success">
          <i className="fa-solid fa-server"></i> {service.title}
        </h3>
        <div className="border rounded-4 shadow-sm overflow-hidden">
          <div className="p-3">
            <LazyLoadImage
              className="w-100 mb-3 mx-auto"
              height={250}
              src={images[serviceId]}
              alt={service.title}
              // effect="blur"
              placeholder={
                <div
                  style={{
                    width: "100%",
                    height: "250px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#f9f9f9",
                  }}
                >
                  <div
                    className="spinner-border text-success"
                    role="status"
                    style={{ animationDuration: "1.5s" }} // لو عايزة تخلي الدوران أبطأ
                  >
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              }
            />
            <p className="text-start h6 bg-white">{service.description}</p>
          </div>
        </div>
      </section>

      <div className="mt-5 pt-5 col-lg-7">
        <ContactUs />
      </div>
    </div>
  );
}
