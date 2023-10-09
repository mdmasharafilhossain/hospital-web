import AboutUs from "../AboutUs/AboutUs";
import Doctors from "../Doctors/Doctors";
import Footer from "../Footer/Footer";
import Services from "../Services/Services";

import Banner from "./Banner";


const Home = () => {
    return (
        <div className="">
            
          <Banner></Banner>
          <AboutUs></AboutUs>
          <Services></Services>
          <Doctors></Doctors>
          <Footer></Footer>
        </div>
    );
};

export default Home;