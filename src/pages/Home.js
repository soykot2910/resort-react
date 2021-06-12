import React from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import FeaturedRooms from "../components/FeaturedRooms";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Srevices from "../components/Services";

const Home = () => {
  return (
    <React.Fragment>
      <Hero>
        <Banner title="luxrious rooms" subtitle="delux rooms starting at $299">
          <Link to="rooms" className="btn-primary">
            our rooms
          </Link>
        </Banner>
      </Hero>
      <Srevices />
      <FeaturedRooms />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
