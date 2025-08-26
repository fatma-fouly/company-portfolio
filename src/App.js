import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home.jsx/Home';
import About from './Components/About/About';
import Services from './Components/Services.jsx/Services';
import Departments from './Components/departments/Departments';
import WhyUs from './Components/why us/WhyUs';
import Testomonial from './Components/testomnial/Testomonial';
import ContactUs from './Components/ContactUs/ContactUs';
import Footer from './Components/ContactUs/footer/Footer';



function App() {
  return (
    <div className="App">
     
      <Navbar  />
      <Home />
      <About />
      <Services />
      <Departments />
      <WhyUs />
      <Testomonial />
      <ContactUs />
      <Footer  />
    </div>
  );
}

export default App;
