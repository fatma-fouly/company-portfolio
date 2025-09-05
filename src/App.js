

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Services from './Components/Services.jsx/Services';
import Departments from './Components/departments/Departments';
import WhyUs from './Components/why us/WhyUs';
import Testomonial from './Components/testomnial/Testomonial';
import ContactUs from './Components/ContactUs/ContactUs';
import Footer from './Components/footer/Footer';
import Contactpage from "./Components/ContactUs/Contactpage";
import {   Route , Routes } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from 'react-i18next';
function App() {
  const { i18n } = useTranslation();

    useEffect(() => {
    document.body.dir = i18n.language === "ar" ? "rtl" : "ltr";
    document.body.className = i18n.language;

    // تحميل ملف البوتستراب المناسب للغة
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      i18n.language === "ar"
        ? "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.rtl.min.css"
        : "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css";
     document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
    } , [i18n.language]);
  

  return (
    <div className="App">
   
        <Navbar />  
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <About />
                <Services />
                <Departments />
                <WhyUs />
                <Testomonial />
                <ContactUs />
              </>
            }
          />
          <Route path="/services/:id" element={<Contactpage />} />
        </Routes>

        <Footer />
   
    </div>
  );
}

export default App;
