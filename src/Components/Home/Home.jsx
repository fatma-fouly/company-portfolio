import { AwesomeButton } from "react-awesome-button";
import "./Home.css";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import heroImg from "../../assets/desert-road-with-duba.webp";

const Home = () => {
  const { t } = useTranslation("home");

  const [ready, setReady] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = heroImg;
    img.onload = () => setReady(true);

    // fail-safe timeout (لو النت بطيء جدًا)
    const timer = setTimeout(() => setReady(true), 6000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* 🔹 Loading Overlay */}
{!ready && (
  <div className="fixed inset-0 flex flex-col items-center justify-center bg-white/90 z-50">
    {/* Spinner */}
    <div className="animate-spin w-12 h-12 border-4 border-gray-300 border-t-green-600 rounded-full"></div>
      <p className="mt-6 text-gray-700 text-lg font-medium">Loading...</p>
  </div>
)}

      {/* 🔹 Hero Section */}
      <section className="hero-section d-flex align-items-center" id="home">
        <div className="container text-center text-white">
          <h1 className="display-4 fw-bold">{t("title")}</h1>
          <p className="lead fw-bold my-3">{t("subtitle")}</p>

          <a href="#contact">
            <AwesomeButton
              size="large"
              type="custom"
              className="awesome"
              style={{
                background: "linear-gradient(45deg, #01a569, #c3fbcf)",
                color: "white",
                borderRadius: "30px",
                boxShadow: "none",
              }}
            >
              {t("contact")}
            </AwesomeButton>
          </a>
        </div>
      </section>
    </>
  );
};

export default Home;
