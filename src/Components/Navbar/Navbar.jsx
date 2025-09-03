
import logo  from '../../assets/logo.png' // Adjust the path as necessary
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useTranslation } from "react-i18next";


export default function Navbar() {
    const { t, i18n } = useTranslation("navbar"); // نستخدم namespace "common"

  // to change language 
   const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    console.log("Language changed to:", lng); 
    document.body.dir = lng === "ar" ? "rtl" : "ltr"; // تغيير الاتجاه
  };
  return (
 <nav className="navbar navbar-expand-lg bg-white shadow opacity-75 fixed-top"> 
  <div className="container">
    <a className="navbar-brand" href="#">
      <img src= {logo} alt='Al-aref logo ' height="72" width="130"  />
    </a>

       {/* Toggle (for mobile)  */}
    <button className="navbar-toggler"  data-bs-toggle="collapse" data-bs-target="#navbarNav" type="button" >
      <span className="navbar-toggler-icon"></span>
    </button>

    {/* Links  */}
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav mx-auto  fw-bold">
            <li className="nav-item"><a className="nav-link" href="#home">{t("navbar.home")}</a></li>
            <li className="nav-item"><a className="nav-link" href="#about">{t("navbar.about")}</a></li>
            <li className="nav-item"><a className="nav-link" href="#services">{t("navbar.services")}</a></li>
            <li className="nav-item"><a className="nav-link" href="#departments">{t("navbar.departments")}</a></li>
            <li className="nav-item"><a className="nav-link" href="#whyus">{t("navbar.whyus")}</a></li>
            <li className="nav-item"><a className="nav-link" href="#testimonials">{t("navbar.testimonials")}</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact">{t("navbar.contact")}</a></li>
      </ul>
        {/* /* Language  * /  */}
      <div className="ms-3">
        <button   
         onClick={() => {changeLanguage("en");
            console.log("Clicked EN")}  }
        className="btn btn-outline-success btn-sm">{t("navbar.EN")}</button>
        <button className="btn btn-outline-secondary btn-sm"
        onClick={() => {changeLanguage("ar");
            console.log("Clicked EN")}}
        >{t("navbar.AR")}</button>
      </div>
    </div>
  </div>
</nav>


  )
}
