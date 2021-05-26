import React from 'react';
import Navigation from "../components/Navigation";
import Projects from '../components/Projects';
import Lang from '../components/Lang';
import Profile1 from '../components/Profile1';
// import Footer from '../components/Footer';


const Home = () => {
    

return(
    <div className="home">
        {/* <Lang/> */}
        <Navigation/>
        <Profile1/>
        <Projects/>
        {/* <Footer /> */}
    </div>
)

}

export default Home;