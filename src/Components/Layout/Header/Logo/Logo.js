import React from "react";
import './Logo.scss';
import LogoImg from '../../../../Assets/Images/logo.webp';
import {Link} from "react-router-dom";

const Logo = () => {
    return (
        <>
            <div className="logo">
                <Link to="/"><img src={LogoImg} alt="" /></Link>
            </div>
        </>
    );
}
 
export default Logo;