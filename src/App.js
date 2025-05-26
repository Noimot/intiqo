import AboutUs from "./component/AboutUs";
import ContactUs from "./component/ContactUs";
import { CoreCompetences } from "./component/CoreCompetences";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Hero from "./component/Hero";
import OurService from "./component/OurService";
// import OurTeam from "./component/OurTeam";
import Partners from "./component/Partner";
// import RecentWorks from "./component/RecentWorks";

function App() {
  return (
    <section className="flex flex-col scroll-smooth">
        <Header />
      <div>
        <Hero />
        <AboutUs />
        <OurService />
        <CoreCompetences />
        {/* <RecentWorks />
        <OurTeam /> */}
        <Partners />
        <ContactUs />
        <Footer />
      </div>
    </section>
  );
}

export default App;
