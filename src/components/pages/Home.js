import React from 'react';
import { Fragment } from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import Footer from '../Footer';

function Home () {
    return(
        <Fragment>
            <HeroSection />
            <Cards />
            <Footer />
        </Fragment>
    )
}

export default Home;