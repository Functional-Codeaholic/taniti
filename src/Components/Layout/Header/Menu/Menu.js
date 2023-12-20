import React, {useState} from "react";
import './Menu.scss';
import { NavHashLink } from 'react-router-hash-link';
import Hamburger from "../../../../Assets/Images/svg/hamburger";

const Menu = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <>
            <nav>
                <div className="hamburger" onClick={toggleMenu}>
                    {<Hamburger />}
                </div>
                <style jsx>{`
                    nav ul {
                        display: ${menuOpen ? 'inline' : 'none'};
                    }
                `}</style>
                <ul>
                    <li><NavHashLink exact="true" smooth activeclassname="active" className="linkHero" to="/">Home</NavHashLink></li>
                    <li><NavHashLink exact="true" smooth activeclassname="active" to="#Amenities">Amenities</NavHashLink></li>
                    <li><NavHashLink exact="true" smooth activeclassname="active" to="#Beaches">Beaches</NavHashLink></li>
                    <li><NavHashLink exact="true" smooth activeclassname="active" to="#Culture">Culture</NavHashLink></li>
                    <li><NavHashLink exact="true" smooth activeclassname="active" to="#Explore">Explore</NavHashLink></li>
                    <li><NavHashLink exact="true" smooth activeclassname="active" to="#Food">Food</NavHashLink></li>
                    <li><NavHashLink exact="true" smooth activeclassname="active" to="#Weather">Weather</NavHashLink></li>
                </ul>
            </nav>
        </>
    );
}
 
export default Menu;