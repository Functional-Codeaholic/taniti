import React from "react";
import './Footer.scss';
import SiteMap from './SiteMap/SiteMap';
import Social from './Social/Social';
import RSS from './RSS/RSS';
import Credits from './Credits/Credits'
import AppLinks from './AppLinks/AppLinks'

const Footer = () => {
    return (
        <>
            <footer>
                <div className="footer">
                    <SiteMap />
                    <Social />
                    <AppLinks />
                    <RSS />
                </div>
                <Credits />
            </footer>
        </>
    );
}
 
export default Footer;