import "./Homepage.scss";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import HeroBanner from "../../components/heroBanner/HeroBanner";
import PropertyList from "../../components/propertyList/PropertyList";
import FeatureHotel from "../../components/featureHotel/FeatureHotel";
import Subcribe from "../../components/subcribe/Subcribe";
import Footer from "../../components/footer/Footer";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <Header />

      <section className="home_container">
        <h1 className="homepage_title"> Pick your favorite places </h1>

        <HeroBanner />
        <h1 className="homepage_title">Brower by property type</h1>
        <PropertyList />
        <h1 className="homepage_title">Homes gests love</h1>
        <FeatureHotel />
        <Subcribe />
      </section>

      <Footer />
    </>
  );
};

export default Homepage;
