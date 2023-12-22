import React from "react";
import './Amenities.scss';
import Huts from '../../../Assets/Images/Tahiti_2.webp';

const Amenities = () => {
    return (
        <>
            <div className="featured" id="Amenities">
                <a href="/TahitianAmenities"><img src={Huts} alt="" /></a>
            </div>
        </>
    );
}
 
export default Amenities;