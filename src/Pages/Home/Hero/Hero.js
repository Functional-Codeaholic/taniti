import React from 'react';
import './Hero.scss';
import Poster from '../../../Assets/Images/Tahiti_4.webp';
import Promo from '../../../Assets/Videos/Samoa_0.mp4'
import PromoOgv from '../../../Assets/Videos/Samoa_0.ogv'

const Hero = () => {
    return (
        <>
            <div className="hero" id="Hero" poster={Poster}>
                <video autoPlay loop muted>
                    <source src={Promo} type="video/mp4" />
                    <source src={PromoOgv} type="video/ogv" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </>
    );
}
 
export default Hero;