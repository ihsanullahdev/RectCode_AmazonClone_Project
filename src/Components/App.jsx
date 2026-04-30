import Navbar from "./Navbar";
import Subnavbar from "./subNavbar";
import Hero from "./heroCards";
import BestSeller from "./bestsellerBar";
import Recommendation from "./recommendationsBar";
import Footer from "./Footer1";
import Footer2 from "./Footer2";
import FooterBottom from "./footerBottom1";
import FooterLinks from "./lastfooterBottom";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Subnavbar />
      <Hero />
      <BestSeller />
      <Recommendation />
      <Footer />
      <Footer2 />
      <FooterBottom />
      <FooterLinks />
    </>
  );
}

export default App;
