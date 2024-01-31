import React from "react";
import './Explore.scss';
import Volcano from '../../../Assets/Images/MyGuide_0.webp';

const Explore = () => {
    return (
        <>
            <div className="featured" id="Explore">
                <a href="/ExploreTaniti"><img src={Volcano} alt="" /></a>
            </div>
        </>
    );
}
 
export default Explore;