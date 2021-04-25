import React from 'react';
import { Fragment } from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from '../Cards';

function Home () {
    return(
        <Fragment>
            <HeroSection />
            <Cards />
        </Fragment>
    )
}

export default Home;