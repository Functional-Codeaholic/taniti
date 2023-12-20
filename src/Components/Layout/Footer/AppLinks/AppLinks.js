import React from "react";
import './AppLinks.scss';
import App from '../../../../Assets/Images/App_Download/apple.webp';
import Play from '../../../../Assets/Images/App_Download/google.webp';

const AppLinks = () => {
    return (
        <>
            <div className="appLinks">
                <a href="/AppleApp"><img src={App} alt="" /></a>
                <a href="/GoogleApp"><img src={Play} alt="" /></a>
            </div>
        </>
    );
}
 
export default AppLinks;