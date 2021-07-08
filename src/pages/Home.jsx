import React from 'react';
import Navigation from "../components/Navigation";
import Projects from '../components/Projects';
// import Lang from '../components/Lang';
import Presentation from '../components/Presentation';
// import Footer from '../components/Footer';


const Home = () => {
    

return(
    <div className="home">
        {/* <Lang/> */}
        <Presentation/>
        <Navigation/>
        <Projects/>
        {/* <Footer /> */}
    </div>
)

}

export default Home;