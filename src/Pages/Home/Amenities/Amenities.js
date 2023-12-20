import React from "react";
import './Amenities.scss';
import Huts from '../../../Assets/Images/Tahiti_2.webp';

const Amenities = () => {
    return (
        <>
            <div className="featured" id="Amenities">
                <img src={Huts} alt="" />
            </div>
        </>
    );
}
 
export default Amenities;