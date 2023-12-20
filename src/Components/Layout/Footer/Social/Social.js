import React from "react";
import './Social.scss';
import SocialIcons from '../../../../Assets/Images/social.webp';

const Social = () => {
    return (
        <>
            <div className="social">
                <a href="/SocialLink"><img src={SocialIcons} alt="" /></a>
            </div>
        </>
    );
}
 
export default Social;