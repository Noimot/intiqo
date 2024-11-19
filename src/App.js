import AboutUs from "./component/AboutUs";
import Header from "./component/Header";
import Hero from "./component/Hero";
import OurService from "./component/OurService";
import RecentWorks from "./component/RecentWorks";

function App() {
  return (
    <section className="flex flex-col">
        <Header />
      <div>
        <Hero />
        <AboutUs />
        <OurService />
        <RecentWorks />
      </div>
    </section>
  );
}

export default App;
