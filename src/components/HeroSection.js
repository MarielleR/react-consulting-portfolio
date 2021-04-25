import React, { Fragment } from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';


function HeroSection () {
    return(
        <Fragment>
            <div className="hero-container">
                {/* <video src='/src/videos/video-1.mp4' autoPlay loop muted></video> */}
                <h1>LOOKING FOR YOUR NEXT ADVENTURE?</h1>
                <div className="hero-btns">
                    <Button className="btns" buttonStyle='btn--outline' buttonSize='btn--large'>GET STARTED</Button>
                    <Button className="btns" buttonStyle='btn--primary' buttonSize='btn--large'>WATCH VIDEO <i className="far fa-play-circle"></i></Button>
                </div>
            </div>
        </Fragment>
    )
}

export default HeroSection;