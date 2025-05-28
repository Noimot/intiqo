import AboutUs from "./component/AboutUs";
import Ceo from "./component/Ceo.js";
import ContactUs from "./component/ContactUs";
import { CoreCompetences } from "./component/CoreCompetences";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Hero from "./component/Hero";
import IndustriesServed from "./component/IndustriesServed.js";
import OurService from "./component/OurService";
import Partners from "./component/Partner";

function App() {
  return (
    <section className="flex flex-col scroll-smooth">
        <Header />
      <div>
        <Hero />
        <AboutUs />
        <OurService />
        <CoreCompetences />
        <IndustriesServed />
        <Ceo />
        <Partners />
        <ContactUs />
        <Footer />
      </div>
    </section>
  );
}

export default App;
