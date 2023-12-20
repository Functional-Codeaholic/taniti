import React from "react";
import './RSS.scss';
import RSSImg from '../../../../Assets/Images/rss.webp';

const RSS = () => {
    return (
        <>
            <div className="rss">
                <a href="/RSSRegister"><img src={RSSImg} alt="Register your email and/or phone number to recieve notifications and updates with promotions, special events, and news" /></a>
            </div>
        </>
    );
}
 
export default RSS;