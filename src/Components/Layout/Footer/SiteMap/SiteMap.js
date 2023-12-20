import React from "react";
import './SiteMap.scss';
import {NavHashLink} from "react-router-hash-link";

const SiteMap = () => {
    return (
        <>
            <div className="sitemap">
                <ul>
                    <li><NavHashLink exact="true" smooth activeclassname="active" to="#Amenities">Taniti Lodging & Transportation</NavHashLink></li>
                    <li><NavHashLink exact="true" smooth activeclassname="active" to="#Beaches">Taniti White Sand Beaches, Surfing, and Volcanic Rock Beaches</NavHashLink></li>
                    <li><NavHashLink exact="true" smooth activeclassname="active" to="#Culture">Taniti South Pacific Island Culture</NavHashLink></li>
                    <li><NavHashLink exact="true" smooth activeclassname="active" to="#Explore">Explore Breathtaking Tropical Taniti</NavHashLink></li>
                    <li><NavHashLink exact="true" smooth activeclassname="active" to="#Food">Experience Taniti Local Cuisine</NavHashLink></li>
                    <li><NavHashLink exact="true" smooth activeclassname="active" to="#Weather">How's the Weather in Taniti?</NavHashLink></li>
                    <li><a href="/Upcoming">Taniti News & Upcoming Events</a></li>
                    <li><a href="/TravelBlog">Taniti Travels Blog & Vlog</a></li>
                    <li><a href="/Book">Book Your Taniti Tropical Vacation Now</a></li>
                </ul>
            </div>
        </>
    );
}
 
export default SiteMap;