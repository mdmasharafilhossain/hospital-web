import AboutUs from "../AboutUs/AboutUs";
import Footer from "../Footer/Footer";
import Services from "../Services/Services";

import Banner from "./Banner";


const Home = () => {
    return (
        <div className="">
            
          <Banner></Banner>
          <AboutUs></AboutUs>
          <Services></Services>
          <Footer></Footer>
        </div>
    );
};

export default Home;