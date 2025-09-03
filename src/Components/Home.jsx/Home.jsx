import { AwesomeButton } from 'react-awesome-button';
import './Home.css';
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation("home"); // نستخدم namespace "home"
  return (
    <section className="hero-section d-flex align-items-center" id="home">
      <div className="container text-center text-white">
        <h1 className="display-4 fw-bold">{t("title")}</h1>
        <p className="lead fw-bold my-3">
          {t("subtitle")}
        </p>
       
       
           <a href="#contact"> <AwesomeButton 
            size="large"
            type='custom'
            className='awesome'
            style={{
              background: "linear-gradient(45deg, #01a569, #c3fbcf)",     
              color: "white",          
              borderRadius: "30px",    
              boxShadow: "none" ,
           }}>  
           {t("contact")}</AwesomeButton> </a>
      </div>
    </section>
  );
};

export default Home;
