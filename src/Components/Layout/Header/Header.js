import React from "react";
import './Header.scss';
import Menu from "./Menu/Menu";
import News from "./News/News";
import Logo from "./Logo/Logo";
import Blog from './Blog/Blog';
import CTA from './CTA/CTA';

const Header = () => {
    return (
        <>
            <header>
                <Menu />
                <News />
                <Logo />
                <Blog />
                <CTA />
            </header>
        </>
    );
}
 
export default Header;