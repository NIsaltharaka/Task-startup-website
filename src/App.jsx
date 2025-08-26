import Navbar from "./components/navbar/nav";
import HeroSection from "./components/hero/hero";
import Footer from "./components/footer/footer";
import AboutSection from "./components/sections/about";
import ServicesSection from "./components/sections/services";
import PortfolioSection from "./components/sections/potfolio";
import ContactForm from "./components/sections/contact";

function App() {

  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <AboutSection/>
      <ServicesSection/>
      <PortfolioSection/>
      <ContactForm/>
      <Footer/>
    </div>
  )
}

export default App
