import React from "react";
import './Amenities.scss';
import Huts from '../../../Assets/Images/Tahiti_2.webp';

const Amenities = () => {
    return (
        <>
            <div className="featured" id="Amenities">
                <a href="/TahitianAmenities"><img src={Huts} alt="" /></a>
                <caption>Featured Destination: Fale Matatahi Bungalows - Book now for 10% off instant savings!</caption>
            </div>
        </>
    );
}
 
export default Amenities;